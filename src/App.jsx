import { useEffect, useState } from 'react';
import SeniorTechSupport from '../src/Components/Mainpage';
import Header from '../src/Components/Header';
import About from '../src/Components/About';
import ContactUs from '../src/Components/ContactUs';
import ServicePage from '../src/Components/ServicePage';

const locationPages = {
  'tawa-wellington': {
    title: 'Tawa Tech Support for Seniors | Home Visits in Wellington',
    intro: 'Friendly, patient tech help for older adults in Tawa, Wellington. We visit local homes to set up phones, tablets, laptops, Wi‑Fi, and family video calls in a way that feels simple, calm, and easy to understand.',
    slug: 'tawa-wellington',
    serviceType: 'Senior tech support in Tawa, Wellington',
    cta: 'Book a Tawa home visit',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
    localImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Phone and tablet setup', 'Laptop and computer help', 'Wi‑Fi and printer support', 'Family photo transfer and video calls'],
    checklist: ['Friendly home visits across Tawa', 'Support for iPhone, Android, tablets, and laptops', 'Email, messaging, and video call help', 'Clear guidance without jargon or pressure'],
    sections: [
      { heading: 'Technology support that fits Tawa life', body: 'Whether you live near the local shops, in a quiet street, or closer to the wider Wellington commuter routes, we help seniors in Tawa feel confident using the devices they rely on every day. We come to your home and work at your pace with practical, no-pressure support that fits real family life.' },
      { heading: 'Helpful support for everyday tasks', body: 'From setting up a new phone and transferring contacts to fixing Wi‑Fi issues, printer problems, and email setup, we make everyday technology easier to manage without the stress. We also help with apps, passwords, backups, and keeping devices working reliably for the long term.' },
      { heading: 'Stay connected with family and friends', body: 'We help with video calls, photo sharing, messaging apps, and online safety so you can stay in touch with grandchildren, family members, and friends across Wellington, Porirua, and beyond. For many local families, that means less frustration and more time enjoying calls, photos, and simple everyday connection.' },
    ],
  },
  'lower-hutt': {
    title: 'Lower Hutt Tech Support for Seniors',
    intro: 'Senior-friendly technology support in Lower Hutt. We help with phones, computers, Wi‑Fi, scam awareness, and everyday digital tasks at home.',
    slug: 'lower-hutt',
    serviceType: 'Senior tech support in Lower Hutt',
    cta: 'Book a Lower Hutt visit',
    image: 'https://images.unsplash.com/featured/?lower-hutt',
    highlights: ['Phone and tablet setup', 'Computer help for older adults', 'Wi‑Fi and printer support', 'Safe online habits'],
    checklist: ['Home-based support in Lower Hutt', 'Help with everyday tech tasks', 'Friendly guidance for seniors and families', 'Support with security and scam avoidance'],
    sections: [
      { heading: 'Helping Lower Hutt families stay connected', body: 'Technology should support daily life instead of causing stress. We help seniors use their devices with confidence, whether it is a phone, tablet, laptop, or Wi‑Fi connection.' },
      { heading: 'Simple, patient support', body: 'We explain each step in plain language and take time to make sure you feel comfortable before moving on to the next task.' },
      { heading: 'Built around safety and confidence', body: 'We help with scam protection, email setup, quiet troubleshooting, and safe online habits so you can feel more secure using technology every day.' },
    ],
  },
  'upper-hutt': {
    title: 'Upper Hutt Tech Support for Seniors',
    intro: 'Friendly tech support for seniors in Upper Hutt. We help with phones, laptops, Wi‑Fi, and video calls so family communication feels simple and stress-free.',
    slug: 'upper-hutt',
    serviceType: 'Senior tech support in Upper Hutt',
    cta: 'Book an Upper Hutt visit',
    image: 'https://images.unsplash.com/featured/?upper-hutt',
    highlights: ['Phone help for seniors', 'Computer support and upgrades', 'Wi‑Fi issue troubleshooting', 'Video call assistance'],
    checklist: ['Support in the comfort of home', 'Clear explanation and patience', 'Help with data transfer and app setup', 'Guidance for online safety'],
    sections: [
      { heading: 'Support at home in Upper Hutt', body: 'Whether you need help with a new smartphone, a computer that is running slowly, or a printer that will not connect, we provide practical support in your home.' },
      { heading: 'Staying connected with family', body: 'We help set up video calls, messaging, photos, and digital sharing so it is easier to stay in touch with grandchildren, friends, and family.' },
      { heading: 'Technology made manageable', body: 'We break tasks into simple steps and focus on what matters most to you so the process feels calm and understandable.' },
    ],
  },
  'paraparaumu': {
    title: 'Paraparaumu Tech Support for Seniors',
    intro: 'Helping seniors in Paraparaumu with patient, practical tech support for phones, tablets, computers, and Wi‑Fi. We visit homes and make technology feel easier to use.',
    slug: 'paraparaumu',
    serviceType: 'Senior tech support in Paraparaumu',
    cta: 'Book a Paraparaumu home visit',
    image: 'https://images.unsplash.com/featured/?paraparaumu,beach',
    highlights: ['Smartphone support', 'Computer and laptop help', 'Family photo transfer', 'Wi‑Fi and printer setup'],
    checklist: ['Home visits across Paraparaumu', 'Friendly support without pressure', 'Email, calls, and video call assistance', 'Simple online safety guidance'],
    sections: [
      { heading: 'Reliable help for everyday technology', body: 'We help with everyday digital tasks that can become frustrating, including device setup, contact management, app installation, and everyday troubleshooting.' },
      { heading: 'Support that is patient and practical', body: 'Our approach is calm and simple, so you can ask questions without feeling rushed or overwhelmed.' },
      { heading: 'Keep life connected and secure', body: 'We make it easier to stay connected with loved ones while helping you understand how to protect important information and avoid common online scams.' },
    ],
  },
};

function App() {
  const getRouteFromPath = () => {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    const cleanPath = path === '/' ? '/' : path.replace(/^\//, '');

    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    if (cleanPath && cleanPath in locationPages) return cleanPath;
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

    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: pageLocation,
      route: route,
    });
  }, [route]);

  useEffect(() => {
    const titles = {
      home: 'SeniorTech | Simple Tech Support for Seniors in Wellington',
      about: 'About Senior Tech Wellington | Tech Help for Elderly and Seniors',
      contact: 'Contact Senior Tech Wellington | Support for Seniors in Wellington',
      'tawa-wellington': 'Tawa Wellington Tech Support for Seniors | Senior Tech',
      'lower-hutt': 'Lower Hutt Tech Support for Seniors | Senior Tech',
      'upper-hutt': 'Upper Hutt Tech Support for Seniors | Senior Tech',
      'paraparaumu': 'Paraparaumu Tech Support for Seniors | Senior Tech',
      'phone-help': 'Phone Help for Seniors in Wellington | Senior Tech',
      'computer-help': 'Computer Help for Seniors in Wellington | Senior Tech',
      'wifi-help': 'Wi-Fi Help Wellington | Senior Tech for Seniors',
      'scam-protection': 'Scam Protection for Seniors in Wellington | Senior Tech',
      'video-call-help': 'Video Call Help for Seniors in Wellington | Senior Tech',
    };

    const descriptions = {
      home: 'SeniorTech provides friendly tech support for seniors in Wellington with local home visits for phones, computers, Wi-Fi, printers, and everyday technology.',
      about: 'Learn how Senior Tech Wellington helps seniors with patient tech support, phone setup, computer help, and online safety.',
      contact: 'Contact Senior Tech Wellington for friendly support with phones, computers, Wi-Fi, printers, and tech help for elderly in Wellington.',
      'tawa-wellington': 'Friendly phone, computer, and Wi‑Fi support for seniors in Tawa, Wellington. We provide calm home visits and practical guidance for everyday technology.',
      'lower-hutt': 'Patient tech support for seniors in Lower Hutt, with help for phones, laptops, Wi‑Fi, scam awareness, and staying connected with family.',
      'upper-hutt': 'Helpful tech support for seniors in Upper Hutt, including phone setup, computer help, video calls, and digital confidence at home.',
      'paraparaumu': 'Practical tech support for seniors in Paraparaumu, including device setup, family photo transfer, Wi‑Fi help, and safer online habits.',
      'phone-help': 'Friendly phone help for seniors in Wellington, including setup, apps, calls, photos, contacts, and everyday device confidence.',
      'computer-help': 'Patient computer help for seniors in Wellington, covering laptops, email, browsing, photos, files, and simple setup support.',
      'wifi-help': 'Easy Wi‑Fi help in Wellington for seniors, including setup, password problems, streaming, and getting connected at home.',
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
    if (route in locationPages) return <ServicePage {...locationPages[route]} />;
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
