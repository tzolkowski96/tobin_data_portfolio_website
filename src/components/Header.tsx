import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Home, User, Briefcase, FolderKanban, BarChart3, MessageSquare, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
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
    
    // Handle body scroll lock when mobile menu is open
    if (isOpen && isMobile) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen, isMobile]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const navLinks = [
    { name: 'Home', href: '#hero', icon: <Home size={18} className="mr-2" aria-hidden="true" /> },
    { name: 'About', href: '#about', icon: <User size={18} className="mr-2" aria-hidden="true" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={18} className="mr-2" aria-hidden="true" /> },
    { name: 'Projects', href: '#projects', icon: <FolderKanban size={18} className="mr-2" aria-hidden="true" /> },
    { name: 'Skills', href: '#skills', icon: <BarChart3 size={18} className="mr-2" aria-hidden="true" /> },
    { name: 'Contact', href: '#contact', icon: <MessageSquare size={18} className="mr-2" aria-hidden="true" /> },
  ];

  // Find current section name
  const getCurrentSectionName = () => {
    const currentLink = navLinks.find(link => link.href.substring(1) === activeSection);
    return currentLink ? currentLink.name : '';
  };

  return (
    <>
      <header 
        className={`fixed w-full z-30 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-3' 
            : 'bg-transparent py-4 md:py-5'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#hero" 
              className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center"
              aria-label="Tobin Zolkowski - Back to top"
            >
              <div className="mr-2 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-700 text-white flex items-center justify-center">
                <span className="text-sm font-bold">TZ</span>
              </div>
              <span className={`transition-all duration-300 ${scrolled || !isMobile ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                Tobin Zolkowski
              </span>
            </a>
            
            {/* Mobile current section indicator */}
            {scrolled && activeSection !== 'hero' && (
              <div className="md:hidden flex items-center ml-2">
                <ChevronRight size={16} className="text-gray-500 dark:text-gray-400" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                  {getCurrentSectionName()}
                </span>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
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

          {/* Mobile Menu Button with Section Indicator */}
          <button 
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors relative z-50"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            {!isOpen && activeSection !== 'hero' && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 h-2.5 w-2.5 bg-blue-600 rounded-full"></span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Completely separated from header for better z-index control */}
      <div 
        className={`fixed inset-0 bg-black/50 dark:bg-black/70 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
        onClick={closeMenu}
      />
      
      <div 
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 w-4/5 max-w-xs bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto border-l border-gray-200 dark:border-gray-700 shadow-xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <a 
                href="#hero" 
                className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center"
                onClick={closeMenu}
                aria-label="Tobin Zolkowski - Back to top"
              >
                <div className="mr-2 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-700 text-white flex items-center justify-center">
                  <span className="text-sm font-bold">TZ</span>
                </div>
                <span>Tobin Zolkowski</span>
              </a>
              <button 
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="flex flex-col space-y-3 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg flex items-center text-lg ${
                    activeSection === link.href.substring(1) 
                      ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/40 mobile-nav-active' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 mobile-nav-link'
                  }`}
                  onClick={closeMenu}
                  aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="p-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
            <div className="flex justify-center space-x-6 mb-4">
              <a 
                href="https://github.com/tzolkowski96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-800/30 rounded-full transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={24} aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-800/30 rounded-full transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={24} aria-hidden="true" />
              </a>
              <a 
                href="#contact" 
                className="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-800/30 rounded-full transition-colors"
                onClick={closeMenu}
                aria-label="Contact"
              >
                <Mail size={24} aria-hidden="true" />
              </a>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
              Tap an option above to navigate
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;