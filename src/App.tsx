import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp, Moon, Sun } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const initialDarkMode = savedDarkMode !== null ? savedDarkMode : prefersDarkMode;
    
    setDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      let currentSection = 'hero';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="font-sans">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Showcase />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed right-6 bottom-20 p-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full shadow-lg transition-colors hover:scale-110 z-20"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? 
          <Sun size={20} aria-hidden="true" /> : 
          <Moon size={20} aria-hidden="true" />
        }
      </button>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full shadow-lg transition-all duration-300 z-20 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </div>
  );
}

export default App;