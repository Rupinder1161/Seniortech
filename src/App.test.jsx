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

test('shows a success message after the contact form is submitted', async () => {
  render(<ContactUs />);

  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane' } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '0211111111' } });
  fireEvent.change(screen.getByLabelText(/best time to call/i), { target: { value: 'Afternoon' } });
  fireEvent.click(screen.getByRole('button', { name: /request a call/i }));

  expect(await screen.findByText(/thanks jane/i)).toBeTruthy();
});

test('shows a fallback email guidance when the request fails', async () => {
  vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('failed')));

  render(<ContactUs />);

  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane' } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '0211111111' } });
  fireEvent.change(screen.getByLabelText(/best time to call/i), { target: { value: 'Afternoon' } });
  fireEvent.click(screen.getByRole('button', { name: /request a call/i }));

  expect(await screen.findByRole('link', { name: /email us directly/i })).toBeTruthy();
});
