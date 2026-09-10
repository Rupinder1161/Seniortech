import { useEffect } from 'react';
import '../Components/Main.css';

const relatedLinks = [
  { href: '/phone-help-for-seniors', label: 'Phone Help for Seniors' },
  { href: '/computer-help-for-seniors', label: 'Computer Help for Seniors' },
  { href: '/wifi-help-wellington', label: 'Wi-Fi Help Wellington' },
  { href: '/scam-protection-for-seniors', label: 'Scam Protection for Seniors' },
  { href: '/video-call-help', label: 'Video Call Help' },
];

export default function ServicePage({ title, intro, sections, slug, cta, serviceType, highlights, checklist, image, localImage }) {
  useEffect(() => {
    const existing = document.getElementById('service-schema');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = 'service-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      serviceType,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Senior Tech Wellington',
        url: 'https://seniortech.com',
        telephone: '+64 22 457 6040',
        areaServed: 'Wellington',
      },
      url: `https://seniortech.com/${slug}`,
      description: intro,
    });

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.remove();
    };
  }, [title, intro, slug, serviceType]);

  return (
    <div className="service-page">
      <header
        className="service-hero"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.78), rgba(37, 99, 235, 0.74)), url(${image})` }}
      >
        <div className="container service-hero-inner">
          <p className="eyebrow">Senior Tech Wellington</p>
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
          <div className="buttons">
            <a href="/contact" className="btn primary">
              {cta}
            </a>
            <a href="tel:+64224576040" className="btn secondary">
              Call 022 457 6040
            </a>
          </div>
        </div>
      </header>

      <section className="section service-highlights">
        <div className="container">
          <div className="services service-grid">
            {highlights.map((item) => (
              <div key={item} className="card service-card">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-layout">
          <div className="about-card service-content-card">
            {localImage ? (
              <div className="service-local-spotlight">
                <img src={localImage} alt={`${title} local area`} />
              </div>
            ) : null}
            {sections.map((section) => (
              <div key={section.heading} className="service-copy-block">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>

          <aside className="price-card service-checklist-card">
            <h2>What you can expect</h2>
            <ul>
              {checklist.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-card service-related-card">
            <h2>Related services</h2>
            <ul className="service-related-list">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
