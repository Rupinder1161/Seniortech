import '../Components/Main.css';

export default function About() {
  const highlights = [
    'Patient one-on-one support for older adults',
    'Step-by-step help with phones, tablets, and computers',
    'Home visits and practical guidance in plain language',
    'Support with scams, passwords, video calls, and online tasks',
  ];

  const processSteps = [
    'You call us and tell us what is going wrong',
    'We help you understand the issue and arrange a home visit if needed',
    'We work through the problem patiently until it is resolved',
    'You leave with confidence and a clearer understanding of your device',
  ];

  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-card">
          <h2>About Senior Tech Support</h2>
          <p>
            Senior Tech Support Wellington helps seniors feel confident using
            technology in their everyday lives. We offer calm, friendly support
            tailored to each person’s pace and comfort level.
          </p>
          <p>
            We are proudly local to the Wellington region and have been working
            in IT for over 10 years, helping people with practical, reliable
            technology support that is easy to understand.
          </p>
          <p>
            Whether you need help setting up a new device, fixing a printer,
            joining a video call, or learning how to stay safe online, we are
            here to make it simple and stress-free.
          </p>

          <div className="services">
            {highlights.map((item) => (
              <div key={item} className="card">
                <h3>{item}</h3>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: '30px', color: '#1e3a8a' }}>How it works</h3>
          <div className="services">
            {processSteps.map((item) => (
              <div key={item} className="card">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
