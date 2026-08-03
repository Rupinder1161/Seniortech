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

test('opens the phone number when Call Now is clicked', () => {
  const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

  render(<SeniorTechSupport />);
  fireEvent.click(screen.getByRole('button', { name: /call now/i }));

  expect(openSpy).toHaveBeenCalledWith('tel:+64224576040', '_self');
});

test('opens a booking email when Book a Visit is clicked', () => {
  const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

  render(<SeniorTechSupport />);
  fireEvent.click(screen.getByRole('button', { name: /book a visit/i }));

  expect(openSpy).toHaveBeenCalledWith(
    expect.stringContaining('mailto:seniortechwellington@gmail.com'),
    '_self'
  );
});

test('toggles the mobile navigation menu', () => {
  render(<Header route="home" />);

  const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
  const nav = screen.getByRole('navigation', { name: /primary/i });

  expect(nav.className).toContain('is-open');

  fireEvent.click(toggleButton);
  expect(nav.className).not.toContain('is-open');

  fireEvent.click(toggleButton);
  expect(nav.className).toContain('is-open');
});

test('renders a link to the static contact form page', () => {
  render(<ContactUs />);

  expect(screen.getByRole('link', { name: /open contact form/i })).toBeTruthy();
});

test('renders a link to the static contact form page', () => {
  render(<ContactUs />);

  const link = screen.getByRole('link', { name: /open contact form/i });

  expect(link).toBeTruthy();
  expect(link.getAttribute('href')).toBe('/contact.html');
});

test('handles a contact form POST successfully', async () => {
  const response = await handler({
    httpMethod: 'POST',
    body: 'name=Jane&phone=0211111111&bestTime=Afternoon',
  });

  expect(response.statusCode).toBe(200);
  expect(JSON.parse(response.body).ok).toBe(true);
});
