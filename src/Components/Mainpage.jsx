import { useState } from 'react';
import '../Components/Main.css';
import Reviews from './Reviews';

export default function SeniorTechSupport() {
  const [statusMessage, setStatusMessage] = useState('');

  const services = [
    'Phone Help for Seniors',
    'Computer Help for Older Adults',
    'Data Transfer',
    'Wi‑Fi Setup',
    'Printer Setup',
    'Email Assistance',
    'Video Calls',
    'Online Safety & Scam Awareness',
  ];

  const phoneNumber = '+64224576040';

  const handleCallNow = () => {
    window.open(`tel:${phoneNumber}`, '_self');
    setStatusMessage('Calling SeniorTech now...');
  };

  const handleBookVisit = () => {
    setStatusMessage('Taking you to our contact page...');
    window.location.assign('/contact');
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="container hero-content">
          <h1>Simple Tech Support for Seniors</h1>
          <p className="hero-tagline">Friendly technology help that keeps you connected.</p>

          <p>
            Technology should make life easier — not stressful. SeniorTech provides friendly, practical support for older adults who want to feel confident using their phones, tablets, computers, and online services.
          </p>

          <p>
            We help families stay connected through video calls, phone calls, and photo sharing while keeping personal data secure and easy to manage.
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
          <h2>Helping families stay connected ❤️</h2>
          <p>
            Technology is more than devices — it is about people. We help seniors stay connected with their children, grandchildren, friends, and community through video calls, phone support, messaging apps, email, and photo transfers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Reliable support for everyday technology</h2>
          <p>
            SeniorTech provides calm, practical support for smartphones, tablets, computers, laptops, Wi‑Fi, printers, email, data transfer, online safety, and cloud backup guidance.
          </p>

          <p>
            We visit homes, explain things clearly, and help turn frustrating tech problems into something simple and manageable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our approach</h2>
          <p>
            We believe technology support should be patient, friendly, personal, and safe. We take the time to understand your needs, explain things clearly, and help protect your privacy and personal information.
          </p>
        </div>
      </section>

      <section className="section feature-section">
  <div className="container">
    <h2>Reliable support for everyday technology</h2>
    <p className="feature-lead">
      SeniorTech provides calm, practical support for the devices and services people use every day.
    </p>

    <div className="feature-grid">
      <div className="feature-card">
        <h3>Smartphones & Tablets</h3>
        <p>Help with setup, updates, calls, photos, apps, and everyday use.</p>
      </div>

      <div className="feature-card">
        <h3>Wi‑Fi & Printers</h3>
        <p>Connection problems, printer setup, and troubleshooting made simple.</p>
      </div>

      <div className="feature-card">
        <h3>Email & Video Calls</h3>
        <p>Support with messages, email accounts, Zoom, FaceTime, and WhatsApp.</p>
      </div>

      <div className="feature-card">
        <h3>Safety & Data</h3>
        <p>Scam awareness, privacy help, and transferring data to a new phone.</p>
      </div>
    </div>

    <p className="feature-footer">
      We visit homes, explain things clearly, and turn frustrating tech issues into something manageable.
    </p>
  </div>
</section>

      {/* <section className="section">
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
      </section> */}

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

      <Reviews />

      <section className="contact">
        <div className="container">
          <h2>Book a friendly home visit today</h2>
          <p>📞 Call: 022 457 6040</p>
          <p>✉ Email: seniortechwellington@gmail.com</p>
          <p>Serving Wellington, Tawa, Porirua, Lower Hutt, and Upper Hutt.</p>
          <p>SeniorTech — making technology simple, safe, and stress-free for seniors.</p>

          <a
            href="/contact"
            className="btn secondary"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            Request a Callback
          </a>
        </div>
      </section>

      <footer className="footer">© 2026 SeniorTech</footer>
    </div>
  );
}