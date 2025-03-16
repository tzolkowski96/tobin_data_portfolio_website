import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Database, Code } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust based on header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 text-blue-600 dark:text-blue-400">
              <Database size={20} className="inline-block mr-1" />
              <Code size={20} className="inline-block" />
            </div>
            <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
              <span className="cursor-pointer" onClick={() => scrollToSection('hero')}>Tobin Zolkowski</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[60px] transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 text-left"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 text-left"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;