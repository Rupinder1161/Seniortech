import { useState } from 'react';
import '../Components/Main.css';

export default function ContactUs() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    bestTime: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedValues = Object.values(formState).map((value) => String(value).trim());
    const isEmpty = trimmedValues.every((value) => value.length === 0);

    if (isEmpty) {
      setStatusMessage('Please fill in at least one field before submitting.');
      return;
    }

    setStatusMessage('Thanks! We will be in touch soon.');
  };

  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-card">
          <h2>Contact Senior Tech</h2>
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
            <input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} />

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