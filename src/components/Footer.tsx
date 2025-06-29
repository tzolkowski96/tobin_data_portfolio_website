import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      {/* Contact Form Section */}
      <div id="contact" className="mb-20">
        <h2 className="text-xl font-semibold mb-8">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in collaborating or have a data challenge? I'd love to hear from you. 
              Send me a message and I'll respond within 24 hours.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">Available via contact form</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <a 
                  href="https://github.com/tzolkowski96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  <Github size={18} className="mr-2" /> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  <Linkedin size={18} className="mr-2" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 text-center sm:text-left">
            © {currentYear} Tobin Zolkowski. Built with React and TypeScript.
          </p>
          
          <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            <a 
              href="https://medium.com/@grateful_aqua_goat_147" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Medium Blog
            </a>
            <a 
              href="https://tobinzolkowski.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Newsletter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;