import { useState } from 'react';
import '../Components/Main.css';

export default function SeniorTechSupport() {
  const [statusMessage, setStatusMessage] = useState('');

  const services = [
    'Phone Help for Seniors',
    'Computer Help for Older Adults',
    'Data Transfer for Phone',
    'Tech Support for Everyday Use',
    'Wi‑Fi Setup',
    'Printer Setup',
    'Email Assistance',
    'Online Safety & Scam Awareness',
  ];

  const phoneNumber = '+64224576040';
  const bookingEmail = 'seniortechwellington@gmail.com';

  const handleCallNow = () => {
    window.open(`tel:${phoneNumber}`, '_self');
    setStatusMessage('Calling Senior Tech now...');
  };

  const handleBookVisit = () => {
    const subject = encodeURIComponent('Book a Visit Request');
    const body = encodeURIComponent(
      'Hi Senior Tech,\n\nI would like to book a visit. Please let me know your availability.'
    );
    window.open(`mailto:${bookingEmail}?subject=${subject}&body=${body}`, '_self');
    setStatusMessage('Opening your email to book a visit.');
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="container">
          <h1>Simple IT Support for Seniors at Home</h1>
          <p>
            Friendly, practical help with phones, tablets, computers, Wi‑Fi, printers, and data transfer for phone.
          </p>
          <p>
            Senior Tech helps families stay connected with children and loved ones through video calls and phone calls, while keeping personal data secure and easy to manage.
          </p>

          <div className="buttons">
            <button className="btn primary" onClick={handleCallNow}>
              Call Now
            </button>
            <button className="btn secondary" onClick={handleBookVisit}>
              Book a Visit
            </button>
          </div>

          {statusMessage ? <p className="status-message">{statusMessage}</p> : null}
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h2>Reliable support for everyday technology</h2>
          <p>
            Senior Tech provides calm, practical support for phones, tablets, computers, and online safety. We help with setup, troubleshooting, data transfer for phone, and practical guidance that feels easy to follow.
          </p>
          <p>
            We visit homes, explain things clearly, and help with everyday tasks such as video calls, email, Wi‑Fi, printers, scam awareness, and keeping personal information secure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Services</h2>

          <div className="services">
            {services.map((service) => (
              <div key={service} className="card">
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>How We Help</h2>

          <div className="price-card">
            <ul>
              <li>✅ Friendly home visits with step-by-step guidance</li>
              <li>✅ Help setting up phones, tablets, and computers</li>
              <li>✅ Support with Wi‑Fi, printers, email, and video calls</li>
              <li>✅ Practical advice for staying safe online</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Contact</h2>

          <p>Jayden</p>
          <p>📞 022 457 6040</p>
          <p>✉ seniortechwellington@gmail.com</p>

          <button className="btn secondary">Request a Callback</button>
        </div>
      </section>

      <footer className="footer">© 2026 Senior Tech</footer>
    </div>
  );
}