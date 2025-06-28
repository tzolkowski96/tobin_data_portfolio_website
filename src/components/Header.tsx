import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a 
              href="#hero" 
              className="text-lg font-normal text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Tobin Zolkowski
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-light text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200 dark:border-gray-800">
                <a 
                  href="https://github.com/tzolkowski96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  <Github size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  <Mail size={16} />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 md:hidden" onClick={closeMenu} />
          
          <div className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-black z-50 md:hidden border-l border-gray-200 dark:border-gray-800">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-normal text-gray-900 dark:text-white">Menu</span>
                  <button 
                    className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    onClick={closeMenu}
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              
              <nav className="flex-1 p-4">
                <div className="space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </nav>
              
              <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://github.com/tzolkowski96" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="#contact" 
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                    onClick={closeMenu}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;