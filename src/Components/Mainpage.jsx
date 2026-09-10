import { useState } from 'react';
import '../Components/Main.css';
import Reviews from './Reviews';

export default function SeniorTechSupport() {
  const [statusMessage, setStatusMessage] = useState('');
  const [expandedService, setExpandedService] = useState(null);

  const phoneNumber = '+64224576040';

  const services = [
    ['📱', 'Phone & Tablet Help', 'Set up, troubleshoot and learn how to use your phone or tablet.'],
    ['💻', 'Computer Help', 'Help with Windows computers, updates, software and everyday problems.'],
    ['📶', 'Wi-Fi & Internet', 'Slow internet, connection problems or trouble getting devices online.'],
    ['🖨️', 'Printer Help', 'Connect your printer, fix common problems and get printing working again.'],
    ['🔄', 'New Device Setup', 'Set up your new phone, tablet, computer or other technology.'],
    ['📸', 'Transfer Photos & Contacts', 'Move your photos, contacts and important information to your new device.'],
    ['📧', 'Email & Video Calls', 'Get help with email, Zoom, Teams, FaceTime and staying connected.'],
    ['🛡️', 'Scam & Security Help', 'Learn how to recognise suspicious messages, calls, emails and websites.'],
    ['🔐', 'Personal Data & Privacy', 'Understand passwords, privacy settings and how to protect your personal information.'],
  ];

  const trustPoints = [
    'Friendly and patient',
    'Plain-English explanations',
    'Home visits',
    'Local Wellington service',
    'Privacy-conscious',
    'Scam and security awareness',
  ];

  const steps = [
    ['1', 'Contact us', 'Call or send an enquiry.'],
    ['2', 'We visit', 'We come to your home at an agreed time.'],
    ['3', 'We sort it out', 'We explain the problem and help get your technology working.'],
  ];

  const faqs = [
    ['Do you come to my home?', 'Yes. SeniorTech provides friendly technology support in the comfort of your home.'],
    ['Which areas do you service?', 'We help people in Tawa, Porirua, Wellington, Lower Hutt, and Upper Hutt.'],
    ['Can you help set up a new phone?', 'Yes. We can help with setup, updates, apps, contacts, photos, and the settings you need.'],
    ['Can you transfer photos and contacts?', 'Yes. We can help move important photos and contacts safely to a new device.'],
    ['Can you help with Wi-Fi problems?', 'Yes. We can check your connection, connect devices, and explain what is happening.'],
    ['Can you help if I think I have been scammed?', 'Yes. We can help you understand what happened and talk through sensible next steps.'],
    ['Can a family member arrange support?', 'Absolutely. A family member can contact us to arrange a visit for someone they care about.'],
  ];

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
          {/* <p className="hero-kicker">SeniorTech | Local Wellington home visits</p> */}
          <h1>Simple Tech Support for Seniors in Wellington</h1>
          <p className="hero-tagline">Friendly, patient technology help at home across Wellington.</p>
          <p>Having trouble with your phone, computer, Wi-Fi, or printer? SeniorTech comes to you and explains everything in plain English.</p>

          <div className="buttons hero-actions">
            <button className="btn primary" onClick={handleCallNow} aria-label="Call SeniorTech now">
              <span aria-hidden="true">☎</span> Call SeniorTech
            </button>
            <button className="btn secondary" onClick={handleBookVisit} aria-label="Book a SeniorTech home visit">
              Book a Home Visit
            </button>
          </div>

          {statusMessage ? <p className="status-message">{statusMessage}</p> : null}
        </div>
      </header>

      <section className="trust-message section" aria-labelledby="trust-heading">
        <div className="container">
          <p className="eyebrow">A calmer way to get help</p>
          <h2 id="trust-heading">Technology help without the stress.</h2>
          <p>We take the time to understand the problem, explain what is happening, and help you feel confident using your technology again.</p>
        </div>
      </section>

      <section className="section connection-section" aria-labelledby="connection-heading">
        <div className="container">
          <p className="eyebrow">Technology is about people</p>
          <h2 id="connection-heading">Helping families stay connected ❤️</h2>
          <p>Technology is more than devices — it is about people. We help seniors stay connected with their children, grandchildren, friends, and community through video calls, phone support, messaging apps, email, and photo transfers.</p>
        </div>
      </section>

      <section className="section services-section" id="services" aria-labelledby="services-heading">
        <div className="container">
          <p className="eyebrow">SeniorTech services</p>
          <h2 id="services-heading">What Can We Help You With?</h2>
          <p className="section-intro">From everyday technology problems to setting up a new device, we’re here to make technology easier.</p>
          <div className="feature-grid service-card-grid">
            {services.map(([icon, title, description], index) => (
              <article className={`feature-card service-card ${index === 0 ? 'service-card-featured' : ''} ${expandedService === title ? 'is-expanded' : ''}`} key={title}>
                {index === 0 ? <span className="service-badge">Most Popular</span> : null}
                <button
                  type="button"
                  className="service-card-trigger"
                  aria-expanded={expandedService === title}
                  aria-controls={`service-description-${index}`}
                  onClick={() => setExpandedService(expandedService === title ? null : title)}
                >
                  <span className="service-icon" aria-hidden="true">{icon}</span>
                  <span className="service-card-title">{title}</span>
                  <span className="service-arrow" aria-hidden="true">→</span>
                </button>
                <p id={`service-description-${index}`}>{description}</p>
                <a className="service-help-link" href="/contact">Get Help With This <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
          <div className="services-micro-cta">
            <strong>Not sure which service you need?</strong>
            <p>That’s completely okay. Tell us what’s happening and we’ll help you work it out.</p>
            <a className="btn primary" href="/contact">Talk to SeniorTech <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="home-visits section" aria-labelledby="home-visits-heading">
        <div className="container">
          <div className="home-visits-copy">
            <p className="eyebrow">Support where you are</p>
            <h2 id="home-visits-heading">We Come To You</h2>
            <p>No need to unplug everything and carry it to a shop. SeniorTech provides friendly technology support in the comfort of your home.</p>
            <p className="service-areas">Tawa <span aria-hidden="true">•</span> Porirua <span aria-hidden="true">•</span> Wellington <span aria-hidden="true">•</span> Lower Hutt <span aria-hidden="true">•</span> Upper Hutt</p>
            {/* <a href="/contact" className="text-link">Arrange a home visit <span aria-hidden="true">→</span></a> */}
          </div>
          <div className="home-visits-note" aria-label="What to expect from a home visit">
            <strong>What to expect</strong>
            <p>Clear explanations, practical help, and no pressure to understand technical words.</p>
          </div>
        </div>
      </section>

      <section className="family-section section" aria-labelledby="family-heading">
        <div className="container family-section-inner">
          <div>
            <p className="eyebrow">For families too</p>
            <h2 id="family-heading">Helping Mum or Dad with technology?</h2>
            <p>Sometimes family members live nearby but do not have the time to solve every technology problem. SeniorTech can provide patient, friendly help at home and explain what was done.</p>
          </div>
          <a href="/contact" className="btn secondary">Arrange Help for a Family Member</a>
        </div>
      </section>

      <section className="section why-section" aria-labelledby="why-heading">
        <div className="container">
          <p className="eyebrow">Why SeniorTech</p>
          <h2 id="why-heading">Helpful, local, and easy to talk to</h2>
          <div className="trust-grid">
            {trustPoints.map((point) => <div className="trust-point" key={point}><span aria-hidden="true">✓</span>{point}</div>)}
          </div>
        </div>
      </section>

      <section className="section steps-section" id="how-it-works" aria-labelledby="steps-heading">
        <div className="container">
          <p className="eyebrow">A simple process</p>
          <h2 id="steps-heading">How it works</h2>
          <div className="steps-grid">
            {steps.map(([number, title, description]) => (
              <article className="step-card" key={number}>
                <span className="step-number" aria-hidden="true">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="reviews"><Reviews /></div>

      <section className="section faq-section" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <p className="eyebrow">Questions welcome</p>
          <h2 id="faq-heading">Frequently asked questions</h2>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details className="faq-item" key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <div className="container">
          <p className="eyebrow">Let’s make it simpler</p>
          <h2 id="contact-heading">Need a little help with technology?</h2>
          <p>Not sure exactly what you need? That’s okay. Give us a call and we’ll talk it through.</p>
          <div className="contact-details">
            <a href="tel:+64224576040">☎ 022 457 6040</a>
            <a href="mailto:seniortechwellington@gmail.com">✉ seniortechwellington@gmail.com</a>
          </div>
          <div className="buttons">
            <button className="btn primary" onClick={handleCallNow}>Call SeniorTech</button>
            <a href="/contact" className="btn secondary">Book a Home Visit</a>
          </div>
        </div>
      </section>

      <footer className="footer">© 2026 SeniorTech</footer>
    </div>
  );
}