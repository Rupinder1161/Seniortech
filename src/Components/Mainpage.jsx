
import '../Components/Main.css'

export default function SeniorTechSupport() {
  const services = [
    "Phone & Tablet Help",
    "Computer Support",
    "Wi‑Fi Setup",
    "Printer Setup",
    "Email Assistance",
    "Online Safety & Scam Awareness",
  ];

  return (
    <div className="app">
      <header className="hero">
        <div className="container">
          <h1>Senior Tech Support Wellington</h1>
          <p>
            Friendly and patient technology support for seniors throughout
            Wellington.
          </p>

          <div className="buttons">
            <button className="btn primary">Call Now</button>
            <button className="btn secondary">Book a Visit</button>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h2>About Us</h2>
          <p>
            We help seniors feel comfortable using smartphones, computers,
            printers, Wi‑Fi and online services from the comfort of their home.
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
          <h2>Pricing</h2>

          <div className="price-card">
            <ul>
              <li>✅ Home Visit – $80/hour</li>
              <li>✅ Device Setup – $120</li>
              <li>✅ Wi‑Fi & Printer Setup – $100</li>
              <li>✅ Monthly Support Plan – $40/month</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Contact</h2>

          <p>Gurpreet Singh</p>
          <p>📞 021 XXX XXXX</p>
          <p>✉ info@seniortechsupport.nz</p>

          <button className="btn secondary">
            Request a Callback
          </button>
        </div>
      </section>

      <footer className="footer">
        © 2026 Senior Tech Support Wellington
      </footer>
    </div>


  );
}