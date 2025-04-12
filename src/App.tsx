import React, { useState, useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Database, Code, BarChart3, BookOpen, Award, Briefcase } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import { ProjectSkeleton, SkillSkeleton } from './components/LoadingSkeletons';
import AnimatedSection from './components/AnimatedSection';

const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check for system dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
    
    // Add viewport height fix for mobile browsers
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 dark:border-blue-400 mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-300">
      <Helmet>
        <title>Tobin Zolkowski | Data Professional</title>
        <meta name="theme-color" content={theme === 'dark' ? '#1f2937' : '#ffffff'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
      </Helmet>

      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="overflow-hidden">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        
        <Suspense fallback={<div className="py-16 md:py-24"><div className="container mx-auto px-4 grid gap-8"><SkillSkeleton /></div></div>}>
          <AnimatedSection>
            <About />
          </AnimatedSection>
        </Suspense>
        
        <Suspense fallback={<div className="py-16 md:py-24"><div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[...Array(6)].map((_, i) => <ProjectSkeleton key={i} />)}</div></div>}>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
        </Suspense>
        
        <Suspense fallback={<div className="py-16 md:py-24 px-4 sm:px-6"><div className="container mx-auto grid gap-8"><SkillSkeleton /></div></div>}>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
        </Suspense>
        
        <Suspense fallback={<div className="py-16 md:py-24 px-4 sm:px-6"><div className="container mx-auto"><SkillSkeleton /></div></div>}>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </Suspense>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
      
      <ScrollToTop />
    </div>
  );
}

export default App;