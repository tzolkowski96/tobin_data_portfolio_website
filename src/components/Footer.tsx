import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="max-w-2xl mx-auto px-6 py-12 mt-20">
      <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
          © {currentYear} Tobin Zolkowski. Built with React and TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;