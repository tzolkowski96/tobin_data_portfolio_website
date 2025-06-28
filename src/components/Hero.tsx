import React, { useEffect, useState } from 'react';
import { ArrowDown, TrendingUp, Database, BarChart3, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    dataPoints: 0,
    accuracy: 0
  });

  const finalStats = {
    experience: 4,
    projects: 14,
    dataPoints: 7.7,
    accuracy: 98
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        experience: Math.round(finalStats.experience * progress),
        projects: Math.round(finalStats.projects * progress),
        dataPoints: Number((finalStats.dataPoints * progress).toFixed(1)),
        accuracy: Math.round(finalStats.accuracy * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-light section-padding min-h-screen flex items-center relative overflow-hidden">
      {/* Background Data Visualization */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32">
          <BarChart3 size={128} className="text-gray-900 dark:text-white" />
        </div>
        <div className="absolute top-20 right-20 w-24 h-24">
          <TrendingUp size={96} className="text-gray-900 dark:text-white" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20">
          <Database size={80} className="text-gray-900 dark:text-white" />
        </div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28">
          <Brain size={112} className="text-gray-900 dark:text-white" />
        </div>
      </div>

      <div className="container-large relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content - Left Side */}
          <div className="lg:col-span-8">
            
            {/* Availability Badge */}
            <div className="animate-fadeIn mb-8">
              <div className="inline-flex items-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-6 py-3 border-2 border-green-200 dark:border-green-800">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="caption font-medium">Available for new opportunities</span>
              </div>
            </div>
            
            {/* Main Heading - BOLD */}
            <div className="animate-slideUp mb-8" style={{animationDelay: '0.2s'}}>
              <h1 className="font-light leading-none mb-6">
                <span className="display-1 text-gray-900 dark:text-white block">TOBIN</span>
                <span className="display-1 text-gray-900 dark:text-white block">ZOLKOWSKI</span>
                <span className="heading-1 text-gray-600 dark:text-gray-400 block mt-4">Data Professional</span>
              </h1>
              
              <div className="w-32 h-1 bg-gray-900 dark:bg-white mb-8"></div>
              
              <p className="body-large max-w-2xl leading-relaxed">
                <strong>Transforming complex data into actionable business insights</strong> through advanced analytics, 
                machine learning, and strategic visualization. Continuously learning and delivering measurable results 
                for data-driven decision making.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-slideUp" style={{animationDelay: '0.4s'}}>
              <a href="#projects" className="btn-large">View Portfolio</a>
              <a href="#contact" className="btn-outline">Discuss Opportunities</a>
              <button 
                onClick={() => window.open('mailto:contact@example.com', '_blank')}
                className="btn-outline"
              >
                Download CV
              </button>
            </div>

            {/* Quick Skills Tags */}
            <div className="animate-fadeIn" style={{animationDelay: '0.6s'}}>
              <div className="flex flex-wrap gap-3">
                <span className="tag-large font-medium">Python & SQL</span>
                <span className="tag-large font-medium">Machine Learning</span>
                <span className="tag-large font-medium">Tableau & Looker</span>
                <span className="tag-large font-medium">ETL Pipelines</span>
                <span className="tag-large font-medium">Statistical Analysis</span>
              </div>
            </div>
          </div>

          {/* Stats & Profile - Right Side */}
          <div className="lg:col-span-4">
            
            {/* Profile Image */}
            <div className="animate-fadeIn mb-8" style={{animationDelay: '0.3s'}}>
              <div className="profile-large mx-auto overflow-hidden">
                <img 
                  src="/profile-image.jpg" 
                  alt="Tobin Zolkowski - Data Professional" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/256x256/000000/FFFFFF?text=TZ";
                  }}
                  loading="eager" 
                />
              </div>
            </div>

            {/* Animated Stats */}
            <div className="animate-slideUp" style={{animationDelay: '0.5s'}}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 border-2 border-gray-200 dark:border-gray-800">
                  <div className="heading-1 text-gray-900 dark:text-white mb-2">{animatedStats.experience}+</div>
                  <div className="caption text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                
                <div className="text-center p-6 border-2 border-gray-200 dark:border-gray-800">
                  <div className="heading-1 text-gray-900 dark:text-white mb-2">{animatedStats.projects}+</div>
                  <div className="caption text-gray-600 dark:text-gray-400">Data Projects</div>
                </div>
                
                <div className="text-center p-6 border-2 border-gray-200 dark:border-gray-800">
                  <div className="heading-1 text-gray-900 dark:text-white mb-2">{animatedStats.dataPoints}M+</div>
                  <div className="caption text-gray-600 dark:text-gray-400">Records Analyzed</div>
                </div>
                
                <div className="text-center p-6 border-2 border-gray-200 dark:border-gray-800">
                  <div className="heading-1 text-gray-900 dark:text-white mb-2">{animatedStats.accuracy}%</div>
                  <div className="caption text-gray-600 dark:text-gray-400">ML Accuracy</div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mt-8 animate-fadeIn" style={{animationDelay: '0.7s'}}>
              <div className="minimal-card">
                <h3 className="heading-3 text-gray-900 dark:text-white mb-4">Recent Achievements</h3>
                <ul className="space-y-2 body-small">
                  <li className="flex items-center">
                    <TrendingUp size={16} className="mr-3 text-green-500" />
                    <span>98% accuracy in employee churn prediction</span>
                  </li>
                  <li className="flex items-center">
                    <Database size={16} className="mr-3 text-blue-500" />
                    <span>Analyzed 7.7M traffic accident records</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart3 size={16} className="mr-3 text-purple-500" />
                    <span>35% improvement in data quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeIn" style={{animationDelay: '0.8s'}}>
          <button 
            onClick={scrollToNext}
            className="p-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={24} className="group-hover:transform group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;