import '../Components/Main.css';

export default function Reviews() {
  const reviews = [
    {
      name: 'Megan W.',
      location: 'Wellington, Tawa',
      rating: '★★★★★',
      text: 'Very patient and clear. We were helped step by step and felt much more comfortable using our phone and video calls.',
    },
    {
      name: 'David R.',
      location: 'Lower Hutt, Upper Hutt',
      rating: '★★★★★',
      text: 'Helpful and reassuring. Senior Tech made a stressful tech problem feel simple and manageable in our own home.',
    },
    {
      name: 'Sarah M.',
      location: 'Porirua',
      rating: '★★★★★',
      text: 'Great support for setting up a new phone and helping our family stay connected through video calls.',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Trusted by families across Wellington, Tawa, Upper Hutt, Lower Hutt, and Porirua</h2>
        <div className="services">
          {reviews.map((review) => (
            <div key={review.name} className="card">
              <h3>{review.rating}</h3>
              <p style={{ fontWeight: 700, marginTop: '8px' }}>{review.name}</p>
              <p style={{ color: '#64748b', marginBottom: '10px' }}>{review.location}</p>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
