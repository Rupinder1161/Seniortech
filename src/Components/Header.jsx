import { useState } from 'react';
import './Main.css';

export default function Header({ route }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homePrefix = route === 'home' ? '' : '/';

  const handleNavigation = (event, href) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const [path, hash] = href.split('#');
    const targetPath = path || '/';
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

    if (targetPath !== currentPath) {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      return;
    }

    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
          <a href="/" onClick={(event) => handleNavigation(event, '/')} style={{ ...navLinkStyle, color: route === 'home' ? '#17804f' : '#1f2937' }}>
            Home
          </a>
          <a href={`${homePrefix}#services`} onClick={(event) => handleNavigation(event, `${homePrefix}#services`)} style={navLinkStyle}>
            Services
          </a>
          <a href={`${homePrefix}#how-it-works`} onClick={(event) => handleNavigation(event, `${homePrefix}#how-it-works`)} style={navLinkStyle}>
            How It Works
          </a>
          <a href="/about" onClick={(event) => handleNavigation(event, '/about')} style={{ ...navLinkStyle, color: route === 'about' ? '#17804f' : '#1f2937' }}>About</a>
          <a href={`${homePrefix}#reviews`} onClick={(event) => handleNavigation(event, `${homePrefix}#reviews`)} style={navLinkStyle}>Reviews</a>
          <a href="/contact" onClick={(event) => handleNavigation(event, '/contact')} style={{ ...navLinkStyle, color: route === 'contact' ? '#17804f' : '#1f2937' }}>Contact</a>
        </nav>
        {/* <a className="header-phone" href="tel:+64224576040" aria-label="Call SeniorTech on 022 457 6040">☎ <span>022 457 6040</span></a> */}
      </div>
    </header>
  );
}