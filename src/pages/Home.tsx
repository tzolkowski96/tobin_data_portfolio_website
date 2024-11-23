import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Search, PieChart, MessageCircle, Globe, ExternalLink, Github, Code, Brain, Database, ChartBar } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import GradientText from '../components/GradientText';
import AnimatedSection from '../components/AnimatedSection';
import { projectsData } from '../data/projects';

const Home = () => {
  const strengths = [
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Data Visualization",
      text: "Transforming complex datasets into clear, impactful visualizations and reports that drive decision-making",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Strategic Analysis",
      text: "Developing and implementing data-driven strategies to solve real-world business problems with measurable impact",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integration",
      text: "Creating efficient data pipelines and integrations to streamline data management and analysis processes",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Communication",
      text: "Bridging the gap between technical insights and non-technical stakeholders through effective data storytelling",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      text: "Applying cross-cultural insights and international experience to enhance data interpretation and analysis",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  // Select featured projects
  const featuredProjects = [
    projectsData["Data Analysis and Machine Learning"][0], // Employee Churn Prediction
    projectsData["Data Analysis and Machine Learning"][1], // Crypto Market Insights
    projectsData["Data Analysis and Machine Learning"][2], // UFood Customer Analysis
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section with Gradient Background */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-white dark:from-slate-900 dark:to-slate-800/50"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
                Tobin <GradientText>Zolkowski</GradientText>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
                Data Insight Specialist | Integration Enthusiast | Continuous Learner
              </p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-800 dark:text-slate-200 max-w-4xl mx-auto leading-tight mb-8">
                Transforming Complex Data into <GradientText>Actionable Business Strategies</GradientText>
              </h2>
            </motion.div>

            <AnimatedSection delay={0.3}>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
                As a Data Insight Specialist, I excel at uncovering hidden patterns and translating complex data into clear, actionable insights that drive strategic growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-lg"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-lg transition-colors text-lg border-2 border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-slate-700"
                >
                  Get in Touch
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Projects Section with Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={0.4}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Featured <GradientText>Projects</GradientText>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-500/10 dark:from-primary-500/10 dark:to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                          {project.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-4">
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline text-lg"
                >
                  View All Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Areas of Focus Section with Interactive Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={0.6}>
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Key Areas of <GradientText>Focus</GradientText>
              </h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strengths.map((strength, index) => (
                <AnimatedSection key={index} delay={0.7 + index * 0.1}>
                  <motion.div
                    className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${strength.gradient}`}>
                        <div className="text-white">
                          {strength.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                        {strength.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {strength.text}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Gradient Background */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-primary-900 dark:from-slate-800 dark:to-primary-900">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection delay={0.8}>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
                Ready to Transform Your <GradientText>Data Strategy</GradientText>?
              </h3>
              <p className="text-slate-200 mb-8 text-lg max-w-2xl mx-auto">
                Let's collaborate to unlock the full potential of your data and drive meaningful business outcomes.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-primary-600 px-8 py-4 rounded-lg transition-colors group text-lg font-medium"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;