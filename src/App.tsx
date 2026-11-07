import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Awards from './components/Awards';
import YearInNumbers from './components/YearInNumbers';
import { ScrollProgress, Marquee, useScrollReveal } from './components/Motion';
import { events2026 } from './data/report';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import JoinUsButton from './components/JoinUsButton';

function App() {
  useScrollReveal();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee items={events2026.map((e) => e.title)} />
      <About />
      <YearInNumbers />
      <Awards />
      <Events />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
      <JoinUsButton />
    </div>
  );
}

export default App;
