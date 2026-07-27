import "./Main.css";

export default function Header() {
  const navLinkStyle = {
    color: "#1f2937",
    textDecoration: "none",
    fontWeight: 500,
  };

  return (
    <header
      className="site-header"
      style={{
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        padding: "1rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#1f2937" }}>
            Senior Tech Support
          </h2>
        </div>

        <nav style={{ display: "flex", gap: "1rem" }}>
          <a href="#about" style={navLinkStyle}>
            About
          </a>
          <a href="#services" style={navLinkStyle}>
            Services
          </a>
          <a href="#contact" style={navLinkStyle}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}