import { useRef } from 'react';
import Boot from './components/Boot';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

import useBootSequence from './hooks/useBootSequence';
import useScrollReveal from './hooks/useScrollReveal';
import useStatCountUp from './hooks/useStatCountUp';
import useScrollSpy from './hooks/useScrollSpy';
import useBackgroundParallax from './hooks/useBackgroundParallax';

export default function App() {
  const { lines, pct, done } = useBootSequence();
  const glowRef = useRef(null);

  useScrollReveal();
  useStatCountUp();
  useScrollSpy();
  useBackgroundParallax(glowRef);

  return (
    <>
      <div className="bg-grid" aria-hidden="true"></div>
      <div className="bg-glow" ref={glowRef} aria-hidden="true"></div>

      <Boot lines={lines} pct={pct} done={done} />

      <div id="app" className={done ? 'show' : ''}>
        <Header />
        <div className="page-wrap">
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
