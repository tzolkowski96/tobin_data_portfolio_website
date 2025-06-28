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
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12 animate-fadeIn">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full border border-gray-200 dark:border-gray-800 overflow-hidden">
              <img 
                src="/profile-image.jpg" 
                alt="Tobin Zolkowski" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/96x96?text=TZ";
                }}
                loading="eager" 
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Tobin Zolkowski
            </h1>
            
            <p className="text-lg text-gray-500 dark:text-gray-500 mb-8">
              Data Professional
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-12">
              Continuously learning and growing, turning complex data into actionable insights.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <a href="#projects" className="btn-primary">Projects</a>
            <a href="#contact" className="btn-secondary">Contact</a>
            <button 
              className="btn-secondary flex items-center"
              onClick={() => alert("Resume available upon request via contact form.")}
            >
              <Download size={16} className="mr-2" />
              Resume
            </button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={scrollToNext}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Scroll to next section"
            >
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;