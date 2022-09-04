import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

function App() {
  return (
    <>
      <LanguageSwitcher />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
