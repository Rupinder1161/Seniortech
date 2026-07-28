import { useEffect, useState } from 'react';
import SeniorTechSupport from '../src/Components/Mainpage';
import Header from '../src/Components/Header';
import About from '../src/Components/About';
import ContactUs from '../src/Components/ContactUs';

function App() {
  const [route, setRoute] = useState(
    window.location.hash === '#/about'
      ? 'about'
      : window.location.hash === '#/contact'
        ? 'contact'
        : 'home'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(
        window.location.hash === '#/about'
          ? 'about'
          : window.location.hash === '#/contact'
            ? 'contact'
            : 'home'
      );
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="App">
      <Header route={route} />
      {route === 'about' ? <About /> : route === 'contact' ? <ContactUs /> : <SeniorTechSupport />}
    </div>
  );
}

export default App;
