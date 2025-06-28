import React from 'react';
import { Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-white dark:bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeIn">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden">
              <img 
                src="/profile-image.jpg" 
                alt="Tobin Zolkowski, Data Professional" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/128x128?text=TZ";
                }}
                loading="eager" 
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Tobin Zolkowski
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-light">
              Data Professional
            </p>
            
            <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              Continuously learning and growing as a data professional, turning complex data into actionable insights.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <a 
              href="#projects" 
              className="btn-primary"
              aria-label="View my projects"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="btn-secondary"
              aria-label="Contact me"
            >
              Contact Me
            </a>
            <button 
              className="btn-secondary flex items-center"
              onClick={() => alert("Resume is available upon request via the contact form.")}
              aria-label="Resume information"
            >
              <Download size={18} className="mr-2" aria-hidden="true" />
              Resume
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={scrollToNext}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Scroll to next section"
            >
              <ArrowDown size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;