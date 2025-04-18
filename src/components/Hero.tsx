import React, { useEffect, useRef } from 'react';
import { Database, LineChart, Brain, Workflow, Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  
  // Add subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileRef.current) return;
      
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate percentage movement from center
      const moveX = (clientX - windowWidth / 2) / 50;
      const moveY = (clientY - windowHeight / 2) / 50;
      
      // Apply subtle transform to profile image
      profileRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    // Only apply on larger screens
    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 dark:text-white pt-28 md:pt-16">
      <div aria-hidden="true" className="absolute top-0 right-0 -mt-16 opacity-10 dark:opacity-5">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-16 header-content">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 relative z-10 mt-4 md:mt-0">
            <div className="relative animate-fadeIn">
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-blue-400/20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-indigo-400/20 animate-pulse delay-300"></div>
              
              {/* Badge positioned to match the screenshot */}
              <div className="mb-4 md:mb-6">
                <span className="inline-flex items-center px-3 py-1.5 bg-blue-100/90 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-xs md:text-sm shadow-sm">
                  <Sparkles size={16} className="mr-1.5" aria-hidden="true" />
                  <span className="font-medium">Portfolio 2025</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4 leading-tight relative z-10">
                Tobin Zolkowski
                <span className="block text-blue-600 dark:text-blue-400 mt-2">Data Professional</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl animate-slideInRight">
                "Continuously learning and growing as a data professional, turning complex data into actionable insights."
              </p>
              
              <div className="flex flex-wrap gap-4 animate-slideUp" style={{ animationDelay: '0.3s' }}>
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
                  aria-label="View my projects"
                >
                  <span>View Projects</span>
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-500 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
                  aria-label="Contact me"
                >
                  <span>Contact Me</span>
                </a>
                <div 
                  className="px-6 py-3 bg-indigo-600 text-white rounded-md transition-all duration-300 shadow-md flex items-center cursor-pointer hover:bg-indigo-700"
                  role="button"
                  onClick={() => alert("Resume is available upon request via the contact form.")}
                  onKeyPress={(e) => e.key === 'Enter' && alert("Resume is available upon request via the contact form.")}
                  tabIndex={0}
                  aria-label="Resume information"
                >
                  <Download size={18} className="mr-2" aria-hidden="true" />
                  <span>Resume Available Upon Request</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fadeIn mt-4 md:mt-0" style={{ animationDelay: '0.5s' }}>
            <div className="relative" ref={profileRef}>
              {/* Profile Picture with enhanced presentation */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900/30">
                <img 
                  src="/profile-image.jpg" 
                  alt="Tobin Zolkowski, Data Professional" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/400x400?text=Profile+Image";
                  }}
                  loading="eager" 
                />
              </div>
              
              {/* Decorative elements with enhanced visibility */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-400/30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-indigo-400/30 animate-pulse delay-300"></div>
              
              {/* Floating skill indicators */}
              <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg transition-all duration-500 hover:scale-110 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                <Database size={24} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
              </div>
              <div className="absolute top-1/4 -right-8 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg transition-all duration-500 hover:scale-110 animate-fadeIn" style={{ animationDelay: '1s' }}>
                <LineChart size={24} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              </div>
              <div className="absolute bottom-1/4 -left-8 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg transition-all duration-500 hover:scale-110 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
                <Brain size={24} className="text-purple-600 dark:text-purple-400" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg transition-all duration-500 hover:scale-110 animate-fadeIn" style={{ animationDelay: '1.4s' }}>
                <Workflow size={24} className="text-teal-600 dark:text-teal-400" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
          <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px]">
            <span className="text-blue-600 dark:text-blue-400 font-bold">Python</span> & Pandas
          </div>
          <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px]">
            <span className="text-blue-600 dark:text-blue-400 font-bold">SQL</span> & Databases
          </div>
          <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px]">
            <span className="text-blue-600 dark:text-blue-400 font-bold">Tableau</span> & Visualization
          </div>
          <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px]">
            <span className="text-blue-600 dark:text-blue-400 font-bold">ML</span> & Statistics
          </div>
          <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px]">
            <span className="text-blue-600 dark:text-blue-400 font-bold">ETL</span> Processes
          </div>
        </div>
        
        {/* Quick stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '1.7s' }}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Years Experience</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">14+</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Projects</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">3+</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Certifications</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">7.7M+</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Records Analyzed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;