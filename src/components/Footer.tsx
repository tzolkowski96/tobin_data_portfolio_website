import React from 'react';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-normal mb-3">Tobin Zolkowski</h3>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Data professional focused on transforming complex data into actionable insights.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/tzolkowski96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-normal mb-3 text-sm">Navigation</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-normal mb-3 text-sm">External</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a 
                  href="https://medium.com/@grateful_aqua_goat_147" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  Medium <ExternalLink size={10} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://tobinzolkowski.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  Substack <ExternalLink size={10} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-2 md:mb-0">
            © {currentYear} Tobin Zolkowski
          </p>
          <p className="text-gray-500 text-xs">
            Built with React, TypeScript, Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;