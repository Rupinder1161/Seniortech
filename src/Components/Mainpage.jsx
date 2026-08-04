import { useState } from 'react';
import '../Components/Main.css';
import Reviews from './Reviews';

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

  const handleCallNow = () => {
    window.open(`tel:${phoneNumber}`, '_self');
    setStatusMessage('Calling Senior Tech now...');
  };

  const handleBookVisit = () => {
    setStatusMessage('Taking you to our contact page.');
    window.location.assign('/contact');
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="container">
          <h1>Simple Tech Support for Seniors</h1>
          <p>
            Friendly technology help that keeps you connected.
          </p>
          <p>
            Technology should make life easier — not stressful. At Senior Tech, we provide friendly, practical support for older adults who want to feel confident using their phones, tablets, computers, and online services.
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
          <h2>Helping families stay connected ❤️</h2>
          <p>
            Technology is more than devices — it is about people. We help seniors stay connected with their children, grandchildren, friends, and community through video calls, phone support, messaging apps, email, and photo transfers.
          </p>
          <p>
            Whether it is a quick call to check in, a video chat with grandchildren, or sending a treasured photo, we make everyday communication feel easier and more comfortable.
          </p>
          <p>
            Because staying connected with the people you love should always be simple.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Reliable support for everyday technology</h2>
          <p>
            Senior Tech provides calm, practical support for smartphones and tablets, computers and laptops, Wi‑Fi setup and connection issues, printer setup and troubleshooting, email support, data transfer when changing phones, online safety, and cloud backup guidance.
          </p>
          <p>
            We visit homes, explain things clearly, and help with everyday tasks such as video calls, email, Wi‑Fi, printers, scam awareness, and keeping personal information secure.
          </p>
          <p>
            If a device is slow, a connection is missing, or a new phone feels confusing, we can help turn that frustration into something manageable and clear.
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

      <section className="section">
        <div className="container">
          <h2>Our approach</h2>
          <p>
            We believe technology support should be patient, friendly, personal, and safe. We take the time to understand your needs, explain things clearly, and help protect your privacy and personal information.
          </p>
          <p>
            We never rush, and we never use confusing jargon. Our goal is to make each visit calm, useful, and reassuring so you leave with more confidence than when you started.
          </p>
          <p>
            We don’t just fix technology problems — we help you feel confident using technology.
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

      <Reviews />

      <section className="contact">
        <div className="container">
          <h2>Book a friendly home visit today</h2>

          <p>📞 Call: 022 457 6040</p>
          <p>✉ Email: seniortechwellington@gmail.com</p>
          <p>Senior Tech — making technology simple, safe, and stress-free for seniors.</p>

          <a href="/contact" className="btn secondary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Request a Callback
          </a>
        </div>
      </section>

      <footer className="footer">© 2026 Senior Tech</footer>
    </div>
  );
}