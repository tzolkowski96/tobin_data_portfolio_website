import React from 'react';
import { Github, Linkedin, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white py-12 relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-10 text-gray-50 dark:text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">Tobin Zolkowski</h3>
            <p className="text-gray-400">Data Professional & Integration Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/tzolkowski96" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://medium.com/@grateful_aqua_goat_147" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="20" height="20" fill="currentColor">
                <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"/>
              </svg>
            </a>
            <a 
              href="https://tobinzolkowski.substack.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Substack"
            >
              <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 448 511.471" width="20" height="20" fill="currentColor">
                <path d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white/90">About Me</h4>
            <p className="text-gray-400 leading-relaxed">
              Data and IT professional with experience across healthcare, telecoms, and higher education. Currently designing and implementing ETL architectures for genetic and biomedical data.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Featured Projects</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors block">
                  Employee Churn Prediction
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors block">
                  World Life Expectancy Analysis
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors block">
                  Traffic Accident Analytics
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors block">
                  Web Data Insights Explorer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Madison, Wisconsin</li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Send me a message
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/tobin-zolkowski-844873200/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {currentYear} Tobin Zolkowski. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToTop}
              className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ChevronUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;