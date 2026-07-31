import { useState } from 'react';
import '../Components/Main.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bestTime: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent('New contact request from website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nBest time to call: ${formData.bestTime}`
    );

    window.open(`mailto:seniortechwellington@gmail.com?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };

  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-card">
          <h2>Contact Senior Tech</h2>
          <p>
            Need help with a phone, tablet, computer, or everyday tech support? Leave your details and we will contact you at a convenient time.
          </p>

          {submitted ? (
            <div className="contact-success">
              <h3>Thanks {formData.name || 'there'}!</h3>
              <p>We will be in touch soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="bestTime">Best Time to Call</label>
              <input
                id="bestTime"
                name="bestTime"
                type="text"
                value={formData.bestTime}
                onChange={handleChange}
                placeholder="Morning / Afternoon / Evening"
                required
              />

              <button type="submit" className="btn secondary">
                Request a Call
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
