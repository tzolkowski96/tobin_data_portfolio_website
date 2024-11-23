import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import GradientText from '../../components/GradientText';
import AnimatedSection from '../../components/AnimatedSection';
import ProjectCard from '../../components/projects/ProjectCard';
import { projectsData } from '../../data/projects';

const WebDevelopment = () => {
  const projects = projectsData["Web Development and Applications"];

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
              <GradientText>Web Development and Applications</GradientText>
            </motion.h1>
            <AnimatedSection delay={0.2}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                A collection of web applications and tools demonstrating my expertise in web development and user interface design.
              </p>
            </AnimatedSection>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default WebDevelopment;