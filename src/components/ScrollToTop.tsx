import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-blue-600 dark:bg-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} className="sm:w-6 sm:h-6" />
    </button>
  );
};

export default ScrollToTop;