import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      let currentSection = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom > 0) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-30 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800' 
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a 
                href="#hero" 
                className="text-xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Tobin Zolkowski - Back to top"
              >
                Tobin Zolkowski
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white ${
                    activeSection === link.href.substring(1) 
                      ? 'text-gray-900 dark:text-white' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                  aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center space-x-4 pl-6 border-l border-gray-200 dark:border-gray-800">
                <a 
                  href="https://github.com/tzolkowski96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="Contact"
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-black z-50 transform transition-transform duration-300 ease-in-out md:hidden border-l border-gray-200 dark:border-gray-800 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
              <button 
                className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          
          <nav className="flex-1 p-6">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block py-2 text-base font-medium transition-colors ${
                    activeSection === link.href.substring(1) 
                      ? 'text-gray-900 dark:text-white' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
          
          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/tzolkowski96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={20} aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={closeMenu}
                aria-label="Contact"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;