import React from 'react';
import { Github, Linkedin, ExternalLink, HeartPulse, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center mr-3">
                <span className="text-white font-bold">TZ</span>
              </div>
              <h3 className="text-xl font-bold">Tobin Zolkowski</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Data professional focused on transforming complex data into actionable insights.
              Continuously learning and developing new skills in data science and analytics.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/tzolkowski96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="GitHub profile"
              >
                <Github size={20} aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="Contact"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200 border-b border-gray-800 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200 border-b border-gray-800 pb-2">External Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://medium.com/@grateful_aqua_goat_147/from-drag-and-drop-to-code-my-tableau-to-lookml-journey-fde0165ada94" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  aria-label="Tableau to LookML Journey article"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Tableau to LookML Journey 
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="https://medium.com/@grateful_aqua_goat_147" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  aria-label="Medium blog"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Medium 
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="https://tobinzolkowski.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  aria-label="Substack newsletter"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Substack 
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="https://tzolkowski96.github.io/portfolio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  aria-label="Portfolio website"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Portfolio 
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-200">Site Info</h4>
              <p className="text-gray-400 text-sm">
                <span className="text-blue-400">Built with:</span> React, TypeScript, Tailwind CSS
              </p>
              <p className="text-gray-400 text-sm mt-1">
                <span className="text-blue-400">Last Updated:</span> April 2025
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Tobin Zolkowski. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToTop}
              className="text-gray-500 hover:text-gray-400 transition-colors p-2 hover:bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-1 focus:ring-offset-gray-900"
              aria-label="Back to top"
            >
              <ArrowUp size={20} aria-hidden="true" />
            </button>
            <button 
              onClick={() => window.print()}
              className="text-gray-500 hover:text-gray-400 transition-colors"
              aria-label="Print this page"
            >
              Print this page
            </button>
            <span className="text-gray-700">|</span>
            <a 
              href="#accessibility" 
              className="text-gray-500 hover:text-gray-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                alert("This website is designed with accessibility in mind, featuring semantic HTML, proper ARIA attributes, keyboard navigation, color contrast compliance, and screen reader compatibility.");
              }}
              aria-label="Accessibility information"
            >
              Accessibility
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-600 text-xs flex items-center justify-center">
          <HeartPulse size={14} className="text-blue-500 mr-1" aria-hidden="true" />
          <span>Made with passion for data and continuous learning</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;