import '../Components/Main.css';

export default function Reviews() {
  const reviews = [
   {
      name: 'Sharyn P.',
      location: 'Porirua',
      rating: '★★★★★',
      text: 'Fantastic experience with SeniorTech. I had a phone with a broken screen and needed my data transferred safely. They guided me step-by-step and came to my home to complete the work. Very helpful, trustworthy, and efficient—highly recommend!',
    },
    {
      name: 'David R.',
      location: 'Lower Hutt, Upper Hutt',
      rating: '★★★★★',
      text: 'They helped us when our phone had a virus issue. Jayden came to our home, fixed it, and the phone is working well again. He was friendly, patient, and explained what he was doing. Highly recommend',
    },
    {
      name: 'Sarah M.',
      location: 'Porirua',
      rating: '★★★★★',
      text: 'Great support for setting up a new phone and helping our family stay connected through video calls.',
    }
    
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
