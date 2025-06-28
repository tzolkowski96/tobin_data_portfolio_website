import React from 'react';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="section-light section-padding border-t-2 border-gray-200 dark:border-gray-800">
      <div className="container-medium">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* About */}
          <div>
            <h3 className="heading-3 text-gray-900 dark:text-white mb-4">Tobin Zolkowski</h3>
            <p className="body-regular mb-6 max-w-sm">
              Data professional focused on transforming complex data into actionable insights 
              through continuous learning and practical application.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/tzolkowski96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#contact" 
                className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="heading-3 text-gray-900 dark:text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="body-regular text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="body-regular text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="body-regular text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="body-regular text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="body-regular text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* External Links */}
          <div>
            <h4 className="heading-3 text-gray-900 dark:text-white mb-4">External</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://medium.com/@grateful_aqua_goat_147" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="body-regular text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center group"
                >
                  Medium 
                  <ExternalLink size={14} className="ml-2 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </li>
              <li>
                <a 
                  href="https://tobinzolkowski.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="body-regular text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center group"
                >
                  Substack 
                  <ExternalLink size={14} className="ml-2 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t-2 border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="body-small text-gray-500 dark:text-gray-500 mb-4 md:mb-0">
            © {currentYear} Tobin Zolkowski. All rights reserved.
          </p>
          <p className="caption text-gray-500 dark:text-gray-500">
            Built with React, TypeScript, Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;