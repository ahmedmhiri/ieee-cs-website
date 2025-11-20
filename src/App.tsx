import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Awards from './components/Awards';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import JoinUsButton from './components/JoinUsButton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Awards />
      <Events />
      <Team />
      <Contact />
      <Footer />
      <JoinUsButton />
    </div>
  );
}

export default App;
