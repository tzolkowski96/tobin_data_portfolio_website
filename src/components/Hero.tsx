import React, { useEffect, useRef } from 'react';
import { ChevronDown, Database, Code, BarChart3, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];

    const colors = ['#3B82F6', '#6366F1', '#8B5CF6', '#EC4899'];

    // Adjust number of particles based on screen size
    const particleCount = window.innerWidth < 768 ? 25 : 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (window.innerWidth < 768 ? 3 : 5) + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;

        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.3;
        ctx.fill();
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-12 md:pt-32 md:pb-24 flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium text-sm">
              Data Professional & Integration Engineer
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
              Transforming <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">Complex Data</span> into Actionable Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
              Data and IT professional with experience across healthcare, telecoms, and higher education. Currently designing and implementing ETL architectures for genetic and biomedical data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToProjects}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                View Projects <ChevronDown className="ml-2" size={18} />
              </button>
              <button 
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium py-3 px-6 rounded-lg border border-blue-600 dark:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                Get in Touch <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full shadow-xl overflow-hidden flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center">
                  <img 
                    src="/profile.jpg" 
                    alt="Tobin Zolkowski" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-600 dark:bg-blue-500 text-white p-3 sm:p-4 rounded-full shadow-lg animate-pulse">
                <Database size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-indigo-600 dark:bg-indigo-500 text-white p-3 sm:p-4 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                <Code size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-green-600 dark:bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '2s' }}>
                <BarChart3 size={20} className="sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <button 
            onClick={scrollToProjects}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-blue-600 dark:text-blue-400"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;