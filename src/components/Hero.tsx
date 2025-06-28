import React from 'react';
import { Download, ArrowDown, Database, BarChart3, Brain, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-white dark:bg-black pt-20 relative overflow-hidden">
      {/* Minimalist Data Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Floating Data Elements */}
      <div className="absolute top-20 left-10 floating-element opacity-20">
        <Database size={24} className="text-gray-400" />
      </div>
      <div className="absolute top-40 right-20 floating-element opacity-20" style={{animationDelay: '-1s'}}>
        <BarChart3 size={32} className="text-gray-400" />
      </div>
      <div className="absolute bottom-40 left-20 floating-element opacity-20" style={{animationDelay: '-3s'}}>
        <Brain size={28} className="text-gray-400" />
      </div>
      <div className="absolute top-1/3 right-10 floating-element opacity-20" style={{animationDelay: '-5s'}}>
        <Target size={20} className="text-gray-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeIn">
            {/* Data Professional Badge */}
            <div className="data-professional-badge mx-auto">
              Data Professional
            </div>
            
            <div className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative">
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
              {/* Data Theme Border */}
              <div className="absolute inset-0 border-2 border-gray-900 dark:border-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Tobin Zolkowski
            </h1>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-light">
                Transforming Data into Insights
              </p>
              
              <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Continuously learning and growing as a data professional, turning complex data into actionable insights 
                through advanced analytics, machine learning, and strategic thinking.
              </p>
            </div>

            {/* Data Metrics Showcase */}
            <div className="metric-showcase max-w-2xl mx-auto mb-8">
              <div className="metric-item interactive-element">
                <span className="metric-number">7.7M+</span>
                <span className="metric-label">Records Analyzed</span>
              </div>
              <div className="metric-item interactive-element">
                <span className="metric-number">98%</span>
                <span className="metric-label">ML Accuracy</span>
              </div>
              <div className="metric-item interactive-element">
                <span className="metric-number">14+</span>
                <span className="metric-label">Projects</span>
              </div>
              <div className="metric-item interactive-element">
                <span className="metric-number">4+</span>
                <span className="metric-label">Years</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <a 
              href="#projects" 
              className="btn-primary interactive-element"
              aria-label="View my data projects"
            >
              View Data Projects
            </a>
            <a 
              href="#contact" 
              className="btn-secondary interactive-element"
              aria-label="Contact me"
            >
              Let's Connect
            </a>
            <button 
              className="btn-secondary interactive-element flex items-center"
              onClick={() => alert("Resume is available upon request via the contact form.")}
              aria-label="Resume information"
            >
              <Download size={18} className="mr-2" aria-hidden="true" />
              Resume
            </button>
          </div>

          {/* Technical Expertise Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <span className="minimal-tag interactive-element ds-accent">Python & Pandas</span>
            <span className="minimal-tag interactive-element ds-accent">SQL & Databases</span>
            <span className="minimal-tag interactive-element ds-accent">Machine Learning</span>
            <span className="minimal-tag interactive-element ds-accent">Data Visualization</span>
            <span className="minimal-tag interactive-element ds-accent">Statistical Analysis</span>
            <span className="minimal-tag interactive-element ds-accent">ETL Pipelines</span>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <button 
              onClick={scrollToNext}
              className="p-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-900"
              aria-label="Scroll to next section"
            >
              <ArrowDown size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Data Visualization Abstract Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 128" className="text-gray-400">
          <defs>
            <pattern id="data-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#data-pattern)" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <path d="M0,64 Q300,32 600,64 T1200,64" />
            <path d="M0,96 Q300,80 600,96 T1200,96" opacity="0.7" />
            <path d="M0,32 Q300,16 600,32 T1200,32" opacity="0.5" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;