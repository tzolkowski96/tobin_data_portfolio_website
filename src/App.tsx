import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp, Moon, Sun } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Function to apply dark mode
  const applyDarkMode = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Handle scroll progress and section tracking
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 500);
    
    // Update scroll progress indicator
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    
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
    
    // Check for section visibility for animations
    sectionRefs.current.forEach(section => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = (
          rect.top <= window.innerHeight * 0.75 &&
          rect.bottom >= window.innerHeight * 0.25
        );
        
        if (isVisible) {
          section.classList.add('visible');
        }
      }
    });
  };

  useEffect(() => {
    // Collect all section elements for animation
    sectionRefs.current = Array.from(document.querySelectorAll('section'));
    sectionRefs.current.forEach(section => {
      if (section) section.classList.add('section-transition');
    });
    
    // Check user preference for dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const initialDarkMode = savedDarkMode !== null ? savedDarkMode : prefersDarkMode;
    
    // Set state and apply class
    setDarkMode(initialDarkMode);
    applyDarkMode(initialDarkMode);

    // Update document title and meta description
    document.title = "Tobin Zolkowski | Data Professional";
    
    // Add meta description for SEO if not present
    if (!document.querySelector('meta[name="description"]')) {
      const metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = 'Portfolio of Tobin Zolkowski, a data professional specializing in SQL, Python, machine learning, and data visualization.';
      document.head.appendChild(metaDesc);
    }
    
    // Add preloader animation
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
      <div class="loader-dots">
        <div class="loader-dot"></div>
        <div class="loader-dot"></div>
        <div class="loader-dot"></div>
      </div>
    `;
    document.body.appendChild(preloader);
    
    // Add scroll progress indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);
    
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 500);
      
      // Add initial animation to first visible sections
      handleScroll();
    }, 800);
    
    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href') as string;
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without page reload
          window.history.pushState(null, '', targetId);
        }
      });
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            if (image.dataset.src) {
              image.src = image.dataset.src;
              image.classList.remove('loading');
              image.classList.add('loaded');
              imageObserver.unobserve(image);
            }
          }
        });
      });
      
      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      lazyImages.forEach(img => {
        const image = img as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
        }
      });
    }
    
    // Keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC key closes any open modals or dialogs
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('[role="dialog"][aria-modal="true"]');
        if (activeModal) {
          const closeBtn = activeModal.querySelector('[aria-label="Close"]');
          if (closeBtn) {
            (closeBtn as HTMLElement).click();
          }
        }
      }
      
      // Alt+Arrow navigation for sections
      if (e.altKey) {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          scrollToTop();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextSection = document.querySelector('section:not(.in-view) + section');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      smoothScrollLinks.forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
      
      // Clean up any elements we created
      if (document.querySelector('.preloader')) {
        document.querySelector('.preloader')?.remove();
      }
      if (document.querySelector('.scroll-indicator')) {
        document.querySelector('.scroll-indicator')?.remove();
      }
    };
  }, []);

  // Update scroll indicator width
  useEffect(() => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      (scrollIndicator as HTMLElement).style.width = `${scrollProgress}%`;
    }
  }, [scrollProgress]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    
    // Update state
    setDarkMode(newDarkMode);
    
    // Save preference
    localStorage.setItem('darkMode', String(newDarkMode));
    
    // Apply directly to the document
    applyDarkMode(newDarkMode);
    
    // Announce to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'screen-reader-text';
    announcement.textContent = newDarkMode ? 'Dark mode enabled' : 'Light mode enabled';
    document.body.appendChild(announcement);
    
    setTimeout(() => announcement.remove(), 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-primary">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Loading Portfolio...</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Preparing a data-driven experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects activeSection={activeSection} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Dark mode toggle with improved accessibility */}
      <button
        onClick={toggleDarkMode}
        className="fixed right-6 bottom-24 p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 z-20 hover:scale-110"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        style={{ 
          backgroundColor: darkMode ? '#e5e7eb' : '#1f2937'
        }}
      >
        {darkMode ? 
          <Sun size={24} style={{ color: '#1f2937' }} aria-hidden="true" /> : 
          <Moon size={24} style={{ color: '#ffffff' }} aria-hidden="true" />
        }
      </button>
      
      {/* Scroll to top button with improved animation */}
      <button 
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 z-20 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp size={24} aria-hidden="true" />
      </button>
      
      {/* Section Navigation Dots - only shows on larger screens */}
      <div className="section-navigator">
        <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>
          <span className="tooltip">Home</span>
        </a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
          <span className="tooltip">About</span>
        </a>
        <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>
          <span className="tooltip">Experience</span>
        </a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
          <span className="tooltip">Projects</span>
        </a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
          <span className="tooltip">Skills</span>
        </a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
          <span className="tooltip">Contact</span>
        </a>
      </div>
      
      {/* Keyboard navigation instructions (only shown for keyboard users) */}
      <div className="keyboard-nav-info sr-only focus-within:not-sr-only fixed bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg z-20 border border-gray-200 dark:border-gray-700 text-sm">
        <p tabIndex={0}>
          <span className="font-semibold">Keyboard shortcuts:</span>
          <br />
          <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + ↑</kbd> Go to top
          <br />
          <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + ↓</kbd> Next section
          <br />
          <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Esc</kbd> Close popups
        </p>
      </div>
    </div>
  );
}

export default App;