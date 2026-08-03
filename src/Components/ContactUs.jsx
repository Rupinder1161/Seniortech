import '../Components/Main.css';

export default function ContactUs() {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-card">
          <h2>Contact Senior Tech</h2>
          <p>
            Need help with a phone, tablet, computer, or everyday tech support? Leave your details and we will contact you at a convenient time.
          </p>

          <a href="/contact.html" className="btn secondary">
            Open contact form
          </a>
        </div>
      </div>
    </section>
  );
}