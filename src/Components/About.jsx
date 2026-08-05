import '../Components/Main.css';

export default function About() {
  const services = [
    'Help with phones, tablets, and computers',
    'Video calls, email, and messaging apps',
    'Printer setup and common troubleshooting',
    'Photo, file, and data transfer',
    'Passwords, scams, and security issues',
  ];

  const processSteps = [
    'Get in touch and tell us what you need help with',
    'We talk through the problem in plain language',
    'If needed, we visit you at home',
    'We work through it patiently until it is sorted',
  ];

  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-card">
          <h2>About SeniorTech</h2>

          <p>
            SeniorTech helps older adults feel more confident with technology.
            We provide friendly, patient support in plain language, so tech
            problems feel less stressful and easier to manage.
          </p>

          <p>
            Based in Wellington, we offer over 10 years of IT experience and
            practical help with the everyday things that matter most.
          </p>

          <h3 className="section-title">What we help with</h3>
<div className="service-list">
  {services.map((item) => (
    <div key={item} className="service-item">
      <span className="service-dot" />
      <p>{item}</p>
    </div>
  ))}
</div>

          <h3 className="section-title">How it works</h3>
          <div className="steps">
            {processSteps.map((item, index) => (
              <div
                key={item}
                className="card step-card animate-step"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="step-number">{index + 1}</div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
    
  );
}