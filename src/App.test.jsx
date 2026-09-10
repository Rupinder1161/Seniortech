import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';
import SeniorTechSupport from './Components/Mainpage';
import Header from './Components/Header';
import ContactUs from './Components/ContactUs';
import { handler } from '../netlify/functions/contact';

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

test('opens the phone number when Call SeniorTech is clicked', () => {
  const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

  render(<SeniorTechSupport />);
  fireEvent.click(screen.getByRole('button', { name: /call seniortech now/i }));

  expect(openSpy).toHaveBeenCalledWith('tel:+64224576040', '_self');
});

test('navigates to the contact page when Book a Home Visit is clicked', () => {
  const originalLocation = window.location;

  delete window.location;
  window.location = { ...originalLocation, assign: vi.fn() };

  render(<SeniorTechSupport />);
  fireEvent.click(screen.getByRole('button', { name: /book a seniortech home visit/i }));

  expect(window.location.assign).toHaveBeenCalledWith('/contact');

  window.location = originalLocation;
});

test('toggles the mobile navigation menu', () => {
  render(<Header route="home" />);

  const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
  const nav = screen.getByRole('navigation', { name: /primary/i });

  fireEvent.click(toggleButton);
  expect(nav.className).toContain('is-open');

  fireEvent.click(toggleButton);
  expect(nav.className).not.toContain('is-open');
});

test('expands a service card and reveals its help action', () => {
  render(<SeniorTechSupport />);

  const serviceCard = screen.getByRole('button', { name: /phone & tablet help/i });
  expect(serviceCard.getAttribute('aria-expanded')).toBe('false');

  fireEvent.click(serviceCard);

  expect(serviceCard.getAttribute('aria-expanded')).toBe('true');
  expect(serviceCard.closest('.service-card').querySelector('.service-help-link').getAttribute('href')).toBe('/contact');
});

test('renders the contact form fields', () => {
  render(<ContactUs />);

  expect(screen.getByLabelText(/name/i)).toBeTruthy();
  expect(screen.getByLabelText(/phone number/i)).toBeTruthy();
  expect(screen.getByLabelText(/what do you need help with/i)).toBeTruthy();
  expect(screen.getByLabelText(/best time to call/i)).toBeTruthy();
  expect(screen.getByLabelText(/consent/i)).toBeTruthy();
  expect(screen.getByRole('button', { name: /request a call/i })).toBeTruthy();
});

test('requires contact consent before submitting the form', () => {
  render(<ContactUs />);

  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane' } });
  fireEvent.click(screen.getByRole('button', { name: /request a call/i }));

  expect(screen.getByText(/please agree to be contacted/i)).toBeTruthy();
});

test('rejects suspicious submissions with a honeypot field', async () => {
  const response = await handler({
    httpMethod: 'POST',
    body: 'name=Jane&phone=0211111111&bestTime=Afternoon&bot-field=spam',
  });

  expect(response.statusCode).toBe(400);
  expect(JSON.parse(response.body).ok).toBe(false);
  expect(JSON.parse(response.body).error).toContain('bot');
});

test('handles a contact form POST successfully', async () => {
  const response = await handler({
    httpMethod: 'POST',
    body: 'name=Jane&phone=0211111111&bestTime=Afternoon',
  });

  expect(response.statusCode).toBe(200);
  expect(JSON.parse(response.body).ok).toBe(true);
});
