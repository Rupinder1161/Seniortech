import { useState } from 'react';
import './Main.css';

export default function Header({ route }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homePrefix = route === 'home' ? '' : '/';

  const navLinkStyle = {
    color: "#1f2937",
    textDecoration: "none",
    fontWeight: 500,
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand-link">
          <span className="brand-title">
            SeniorTech
          </span>
          <span className="brand-subtitle">Helping families stay connected</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <a href="/" style={{ ...navLinkStyle, color: route === 'home' ? '#17804f' : '#1f2937' }}>
            Home
          </a>
          <a href={`${homePrefix}#services`} style={navLinkStyle}>
            Services
          </a>
          <a href={`${homePrefix}#how-it-works`} style={navLinkStyle}>
            How It Works
          </a>
          <a href="/about" style={{ ...navLinkStyle, color: route === 'about' ? '#17804f' : '#1f2937' }}>About</a>
          <a href={`${homePrefix}#reviews`} style={navLinkStyle}>Reviews</a>
          <a href="/contact" style={{ ...navLinkStyle, color: route === 'contact' ? '#17804f' : '#1f2937' }}>Contact</a>
        </nav>
        {/* <a className="header-phone" href="tel:+64224576040" aria-label="Call SeniorTech on 022 457 6040">☎ <span>022 457 6040</span></a> */}
      </div>
    </header>
  );
}