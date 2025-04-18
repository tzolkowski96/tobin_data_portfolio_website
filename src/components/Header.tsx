import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Home, User, Briefcase, FolderKanban, BarChart3, MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Update header background on scroll
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      let currentSection = 'hero';
      
      // Find the current visible section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section "active" when it's in the top third of the viewport
          if (rect.top <= window.innerHeight / 3 && rect.bottom > 0) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
      
      // Update URL without page reload if not already on that section
      if (window.location.hash !== `#${currentSection}` && currentSection !== 'hero') {
        window.history.replaceState(null, '', `#${currentSection}`);
      } else if (currentSection === 'hero' && window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };
  
  const navLinks = [
    { name: 'Home', href: '#hero', icon: <Home size={18} className="mr-2" aria-hidden="true" /> },
    { name: 'About', href: '#about', icon: <User size={18} className="mr-2" aria-hidden="true" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={18} className="mr-2" aria-hidden="true" /> },
    { name: 'Projects', href: '#projects', icon: <FolderKanban size={18} className="mr-2" aria-hidden="true" /> },
    { name: 'Skills', href: '#skills', icon: <BarChart3 size={18} className="mr-2" aria-hidden="true" /> },
    { name: 'Contact', href: '#contact', icon: <MessageSquare size={18} className="mr-2" aria-hidden="true" /> },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-4 md:py-5'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center"
          aria-label="Tobin Zolkowski - Back to top"
        >
          <div className="mr-2 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-700 text-white flex items-center justify-center">
            <span className="text-sm font-bold">TZ</span>
          </div>
          <span className={`transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
            Tobin Zolkowski
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                activeSection === link.href.substring(1) 
                  ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30' 
                  : ''
              }`}
              aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-2 pl-4 border-l border-gray-200 dark:border-gray-700">
            <a 
              href="https://github.com/tzolkowski96" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="container mx-auto px-4 py-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <a 
              href="#hero" 
              className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              onClick={closeMenu}
            >
              Tobin Zolkowski
            </a>
            <button 
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          
          <nav className="flex-1 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-lg flex items-center text-lg ${
                  activeSection === link.href.substring(1) 
                    ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={closeMenu}
                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/tzolkowski96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={24} aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={24} aria-hidden="true" />
              </a>
              <a 
                href="#contact" 
                className="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors"
                onClick={closeMenu}
                aria-label="Contact"
              >
                <Mail size={24} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;