import React, { useState, useEffect } from 'react';
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "../src/components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Footer from "./components/footer/Footer";

const App = () => {

  const [showFooter, setShowFooter]=useState(false);
  useEffect(()=>{
    const handleScroll = () => {
      const contactSection = document.getElementById('Contact');
      if (!contactSection) return;

      const contactSectionTop = contactSection.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > contactSectionTop) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section> 
      {showFooter && <Footer/>} 
    </div>
  );
};

export default App;
