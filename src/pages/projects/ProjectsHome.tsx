import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Globe, Code, Brain } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import GradientText from '../../components/GradientText';
import AnimatedSection from '../../components/AnimatedSection';

const ProjectsHome = () => {
  const categories = [
    {
      title: "Data Analysis and Machine Learning",
      description: "Projects showcasing expertise in data analysis, machine learning, and visualization.",
      path: "/projects/data-analysis",
      gradient: "from-blue-500 to-purple-500",
      icon: <BarChart2 className="w-8 h-8" />,
      count: 5
    },
    {
      title: "Web Development and Applications",
      description: "Web applications and tools demonstrating full-stack development capabilities.",
      path: "/projects/web-development",
      gradient: "from-purple-500 to-pink-500",
      icon: <Globe className="w-8 h-8" />,
      count: 3
    },
    {
      title: "Python Programming and Utilities",
      description: "Collection of Python-based tools and utility applications.",
      path: "/projects/python-utilities",
      gradient: "from-green-500 to-teal-500",
      icon: <Code className="w-8 h-8" />,
      count: 2
    },
    {
      title: "Additional Projects",
      description: "Other notable projects and contributions.",
      path: "/projects/additional",
      gradient: "from-orange-500 to-red-500",
      icon: <Brain className="w-8 h-8" />,
      count: 12
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Project <GradientText>Portfolio</GradientText>
            </motion.h1>
            <AnimatedSection delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Explore my diverse collection of projects showcasing expertise in data analysis, web development, and more.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <AnimatedSection key={category.title} delay={0.3 + index * 0.1}>
                <Link to={category.path}>
                  <motion.div
                    className="group relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 overflow-hidden h-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${category.gradient}`}>
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      <div className="flex items-start justify-between mb-4">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {category.title}
                        </h2>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                          {category.count} Projects
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        {category.description}
                      </p>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                        <span>Explore Projects</span>
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.7}>
            <div className="mt-16 text-center">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Want to see more of my work and contributions?
              </p>
              <a
                href="https://github.com/tzolkowski96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-lg"
              >
                View GitHub Profile
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsHome;