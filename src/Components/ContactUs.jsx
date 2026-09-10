import { useState } from 'react';
import '../Components/Main.css';

export default function ContactUs() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    bestTime: '',
    additionalInfo: '',
    permission: false,
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, phone, email, service, bestTime, additionalInfo, permission } = formState;
    const trimmedValues = [name, phone, email, service, bestTime, additionalInfo].map((value) => String(value).trim());
    const isEmpty = trimmedValues.every((value) => value.length === 0);

    if (isEmpty) {
      setStatusMessage('Please fill in at least one field before submitting.');
      return;
    }

    if (!permission) {
      setStatusMessage('Please agree to be contacted by checking the consent box.');
      return;
    }

    event.currentTarget.submit();
  };

  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-card">
          <p className="eyebrow">We are happy to talk it through</p>
          <h1>Book a Home Visit</h1>
          <p>
            Need help with a phone, tablet, computer, or everyday tech support? Leave your details and we will contact you at a convenient time.
          </p>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            action="/contact.html"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="bot-field"
              tabIndex="-1"
              autoComplete="off"
              style={{ display: 'none' }}
              aria-hidden="true"
            />

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={formState.name} onChange={handleChange} />

            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" value={formState.phone} onChange={handleChange} />

            <label htmlFor="email">Email (optional)</label>
            <input id="email" name="email" type="email" autoComplete="email" value={formState.email} onChange={handleChange} />

            <label htmlFor="service">What do you need help with?</label>
            <select id="service" name="service" value={formState.service} onChange={handleChange}>
              <option value="">Please choose one</option>
              <option>Phone / Tablet</option>
              <option>Computer</option>
              <option>Wi-Fi</option>
              <option>Printer</option>
              <option>New Device</option>
              <option>Data Transfer</option>
              <option>Email / Video Calls</option>
              <option>Security / Scam Concern</option>
              <option>Other</option>
            </select>

            <label htmlFor="bestTime">Best Time to Call</label>
            <select
              id="bestTime"
              name="bestTime"
              value={formState.bestTime}
              onChange={handleChange}
            >
              <option value="">Select a time</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>

            <label htmlFor="additionalInfo">Additional information (optional)</label>
            <textarea id="additionalInfo" name="additionalInfo" rows="4" value={formState.additionalInfo} onChange={handleChange} placeholder="Tell us a little about what is happening" />

            <label className="checkbox-label" htmlFor="contactPermission">
              <input
                id="contactPermission"
                name="permission"
                type="checkbox"
                checked={formState.permission}
                onChange={handleChange}
              />
              I consent to SeniorTech contacting me about this enquiry.
            </label>

            <button type="submit" className="btn secondary">
              Request a Call
            </button>

            {statusMessage ? <p className="contact-success">{statusMessage}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}