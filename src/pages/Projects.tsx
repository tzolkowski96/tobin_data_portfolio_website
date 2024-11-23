import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientText from '../components/GradientText';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/projects/ProjectCard';
import CategoryTabs from '../components/projects/CategoryTabs';
import { projectsData } from '../data/projects';

const Projects = () => {
  const categories = Object.keys(projectsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <PageTransition>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GradientText>{activeCategory}</GradientText>
            </motion.h1>
            <AnimatedSection delay={0.2}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                A showcase of my data-driven projects, demonstrating expertise in data analysis, machine learning, and visualization.
              </p>
            </AnimatedSection>
          </div>

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
          >
            {projectsData[activeCategory].map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {projectsData[activeCategory].length === 0 && (
            <AnimatedSection delay={0.3}>
              <div className="text-center py-12">
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  More projects coming soon in this category!
                </p>
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-16">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8">
                Explore more of my projects and contributions on GitHub
              </p>
              <motion.a
                href="https://github.com/tzolkowski96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                View More on GitHub
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;