import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';
import SeniorTechSupport from './Components/Mainpage';
import Header from './Components/Header';
import ContactUs from './Components/ContactUs';

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

test('renders the contact form fields', () => {
  render(<ContactUs />);

  expect(screen.getByLabelText(/name/i)).toBeTruthy();
  expect(screen.getByLabelText(/phone number/i)).toBeTruthy();
  expect(screen.getByLabelText(/best time to call/i)).toBeTruthy();
  expect(screen.getByRole('button', { name: /request a call/i })).toBeTruthy();
});

test('renders a Netlify contact form that posts submissions', () => {
  render(<ContactUs />);

  const form = document.querySelector('form.contact-form');

  expect(form).toBeTruthy();
  expect(form.getAttribute('method')).toBe('POST');
  expect(form.getAttribute('action')).toBe('/.netlify/functions/contact');
  expect(form.getAttribute('data-netlify')).toBe('true');
  expect(form.getAttribute('name')).toBe('contact');
  expect(form.querySelector('input[name="form-name"]').getAttribute('value')).toBe('contact');
});
