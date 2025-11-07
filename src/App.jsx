import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const contactRef = useRef(null);

  const handleHireClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-inter">
      <Navbar />
      <main>
        <Hero onHireClick={handleHireClick} />
        <About />
        <Projects />
        <Skills />
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <footer className="border-t border-neutral-200/60 dark:border-neutral-800 py-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} Collins Boit. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
