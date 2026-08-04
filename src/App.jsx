import { useEffect, useState } from 'react';
import SeniorTechSupport from '../src/Components/Mainpage';
import Header from '../src/Components/Header';
import About from '../src/Components/About';
import ContactUs from '../src/Components/ContactUs';

function App() {
  const getRouteFromPath = () => {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';

    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const [route, setRoute] = useState(getRouteFromPath);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(getRouteFromPath());
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
  if (!window.gtag) return;

  const pageLocation = window.location.href;
  const pageTitle = document.title;

  window.gtag("event", "page_view", {
    page_title: pageTitle,
    page_location: pageLocation,
    // optional: custom route label
    route: route,
  });
}, [route]);
  useEffect(() => {
    const titles = {
      home: 'Senior Tech Wellington | Tech Help for Elderly, Phone & Computer Support',
      about: 'About Senior Tech Wellington | Tech Help for Elderly and Seniors',
      contact: 'Contact Senior Tech Wellington | Support for Seniors in Wellington',
      'phone-help': 'Phone Help for Seniors in Wellington | Senior Tech',
      'computer-help': 'Computer Help for Seniors in Wellington | Senior Tech',
      'wifi-help': 'Wi-Fi Help Wellington | Senior Tech for Seniors',
      'scam-protection': 'Scam Protection for Seniors in Wellington | Senior Tech',
      'video-call-help': 'Video Call Help for Seniors in Wellington | Senior Tech',
    };

    const descriptions = {
      home: 'Senior Tech Wellington offers patient tech help for elderly, phone help for elderly, computer help for seniors Wellington, and data transfer for phone support.',
      about: 'Learn how Senior Tech Wellington helps seniors with patient tech support, phone setup, computer help, and online safety.',
      contact: 'Contact Senior Tech Wellington for friendly support with phones, computers, Wi-Fi, printers, and tech help for elderly in Wellington.',
      'phone-help': 'Friendly phone help for seniors in Wellington, including setup, apps, calls, photos, contacts, and everyday device confidence.',
      'computer-help': 'Patient computer help for seniors in Wellington, covering laptops, email, browsing, photos, files, and simple setup support.',
      'wifi-help': 'Easy Wi-Fi help in Wellington for seniors, including setup, password problems, streaming, and getting connected at home.',
      'scam-protection': 'Practical scam protection for seniors in Wellington, including spotting suspicious messages, secure passwords, and safer online habits.',
      'video-call-help': 'Friendly video call help for seniors in Wellington with Zoom, FaceTime, WhatsApp, and family calls that feel easy and stress-free.',
    };

    document.title = titles[route] || titles.home;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[route] || descriptions.home);
    }
  }, [route]);

  const renderRoute = () => {
    if (route === 'about') return <About />;
    if (route === 'contact') return <ContactUs />;
    return <SeniorTechSupport />;
  };

  return (
    <div className="App">
      <Header route={route} />
      <main id="main-content">
        {renderRoute()}
      </main>
    </div>
  );
}

export default App;
