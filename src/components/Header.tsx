import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="max-w-3xl mx-auto container-responsive py-6 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-transparent">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <a href="#" className="hover:opacity-80 transition-all duration-200">
            Tobin Zolkowski
          </a>
        </h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-small text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 relative group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
          ))}
          
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 backdrop-blur-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 text-center py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;