import React, { useState } from 'react';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="max-w-2xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Tobin Zolkowski</h1>
        
        <nav className="flex items-center space-x-8">
          <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            Contact
          </a>
          
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;