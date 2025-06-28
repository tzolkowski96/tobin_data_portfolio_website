import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-light section-padding min-h-screen flex items-center">
      <div className="container-medium">
        <div className="text-center">
          
          {/* Profile Image */}
          <div className="animate-fadeIn">
            <div className="profile-large overflow-hidden">
              <img 
                src="/profile-image.jpg" 
                alt="Tobin Zolkowski" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/256x256?text=TZ";
                }}
                loading="eager" 
              />
            </div>
          </div>
          
          {/* Large Typography */}
          <div className="animate-slideUp" style={{animationDelay: '0.2s'}}>
            <h1 className="display-1 text-gray-900 dark:text-white mb-4">
              Tobin Zolkowski
            </h1>
            
            <p className="heading-2 text-gray-600 dark:text-gray-400 mb-8">
              Data Professional
            </p>
            
            <p className="body-large max-w-3xl mx-auto mb-12">
              Continuously learning and growing as a data professional, turning complex data into actionable insights through analysis, visualization, and machine learning.
            </p>
          </div>
          
          {/* Large Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideUp" style={{animationDelay: '0.4s'}}>
            <a href="#projects" className="btn-large">View Projects</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={scrollToNext}
              className="p-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Scroll to next section"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;