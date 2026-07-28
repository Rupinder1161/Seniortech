import { useState } from 'react';
import './Main.css';

export default function Header({ route }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const navLinkStyle = {
    color: "#1f2937",
    textDecoration: "none",
    fontWeight: 500,
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#/" className="brand-link">
          <span className="brand-title">Senior Tech</span>
          <span className="brand-subtitle">Reliable home IT support</span>
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
          <a href="#/" style={{ ...navLinkStyle, color: route === 'home' ? '#2563eb' : '#1f2937' }}>
            Home
          </a>
          <a href="#/about" style={{ ...navLinkStyle, color: route === 'about' ? '#2563eb' : '#1f2937' }}>
            About
          </a>
          <a href="#/contact" style={{ ...navLinkStyle, color: route === 'contact' ? '#2563eb' : '#1f2937' }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}