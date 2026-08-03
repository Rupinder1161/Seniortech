import { useState } from 'react';
import '../Components/Main.css';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

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
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={() => setSubmitted(true)}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" required />

            <label htmlFor="bestTime">Best Time to Call</label>
            <input
              id="bestTime"
              name="bestTime"
              type="text"
              placeholder="Morning / Afternoon / Evening"
              required
            />

            <button type="submit" className="btn secondary">
              Request a Call
            </button>

            {submitted && (
              <p className="contact-success">
                Thanks! Your request has been received and we will be in touch soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}