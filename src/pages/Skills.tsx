import React, { useState } from 'react';
import { Code, BarChart2, Brain, Database, Globe, MessageSquare, GitBranch, Wrench, Users, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import GradientText from '../components/GradientText';
import AnimatedSection from '../components/AnimatedSection';
import SkillCategory from '../components/skills/SkillCategory';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: "Intermediate", description: "Data analysis, automation, web development" },
        { name: "SQL", level: "Advanced", description: "MySQL, PostgreSQL, learning MSSQL" }
      ]
    },
    {
      title: "Data Analysis & Visualization",
      icon: BarChart2,
      skills: [
        { name: "Pandas", level: "Proficient", description: "Data manipulation and analysis" },
        { name: "NumPy", level: "Learning", description: "Numerical computing and array operations" },
        { name: "Matplotlib", level: "Proficient", description: "Data visualization and plotting" },
        { name: "Seaborn", level: "Proficient", description: "Statistical data visualization" },
        { name: "SciPy", level: "Familiar", description: "Scientific computing and statistics" },
        { name: "Excel", level: "Advanced", description: "Advanced formulas, pivot tables, macros" },
        { name: "Tableau", level: "Intermediate", description: "Interactive dashboards and visualizations" },
        { name: "Looker", level: "Basic", description: "Business intelligence and analytics" }
      ]
    },
    {
      title: "Machine Learning & Statistics",
      icon: Brain,
      skills: [
        { name: "Scikit-Learn", level: "Proficient", description: "ML algorithms and model development" },
        { name: "XGBoost", level: "Familiar", description: "Gradient boosting implementation" },
        { name: "K-means clustering", level: "Familiar", description: "Unsupervised learning" },
        { name: "A/B Testing", level: "Familiar", description: "Statistical hypothesis testing" },
        { name: "Predictive Modeling", level: "Familiar", description: "Model development and evaluation" }
      ]
    },
    {
      title: "Data Management & Integration",
      icon: Database,
      skills: [
        { name: "ETL Processes", level: "Intermediate", description: "Data pipeline development" },
        { name: "Database Design", level: "Basic", description: "Schema design and optimization" },
        { name: "Data Quality Management", level: "Familiar", description: "Quality assurance and validation" },
        { name: "HIPAA Compliance", level: "Familiar", description: "Healthcare data security" }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML", level: "Basic", description: "Structure and semantics" },
        { name: "JSON", level: "Basic", description: "Data interchange format" },
        { name: "Streamlit", level: "Familiar", description: "Data app development" },
        { name: "Flask", level: "Familiar", description: "Web framework implementation" }
      ]
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: [
        { name: "Git", level: "Basic", description: "Version control fundamentals" },
        { name: "GitHub", level: "Basic", description: "Collaboration and project management" }
      ]
    },
    {
      title: "Other Tools",
      icon: Wrench,
      skills: [
        { name: "Jupyter Notebooks", level: "Proficient", description: "Interactive computing" },
        { name: "Microsoft Access", level: "Intermediate", description: "Database management" },
        { name: "REDCap", level: "Familiar", description: "Research data capture" },
        { name: "Power Automate", level: "Intermediate", description: "Workflow automation" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Data Storytelling", level: "Proficient", description: "Communicating insights effectively" },
        { name: "Cross-functional Collaboration", level: "Proficient", description: "Team coordination" },
        { name: "Project Management", level: "Proficient", description: "Planning and execution" },
        { name: "Problem-solving", level: "Proficient", description: "Analytical thinking" }
      ]
    },
    {
      title: "Languages",
      icon: Languages,
      skills: [
        { name: "English", level: "Expert", description: "Native proficiency" },
        { name: "American Sign Language", level: "Advanced", description: "Fluent communication" },
        { name: "French", level: "Intermediate", description: "Conversational proficiency" },
        { name: "Spanish", level: "Intermediate", description: "Conversational proficiency" }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl font-bold text-slate-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Skills & <GradientText>Capabilities</GradientText>
            </motion.h1>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                A comprehensive overview of my technical abilities, tools, and professional competencies, developed through hands-on experience and continuous learning.
              </p>
            </AnimatedSection>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                {...category}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;