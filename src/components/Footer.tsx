import React from 'react';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Tobin Zolkowski</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Data professional focused on transforming complex data into actionable insights.
              Continuously learning and developing new skills in data science and analytics.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/tzolkowski96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={20} aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Contact"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">External Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://medium.com/@grateful_aqua_goat_147" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  Medium <ExternalLink size={12} className="ml-1" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="https://tobinzolkowski.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  Substack <ExternalLink size={12} className="ml-1" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="https://tzolkowski96.github.io/portfolio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  Portfolio <ExternalLink size={12} className="ml-1" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Tobin Zolkowski. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Built with React, TypeScript, Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;