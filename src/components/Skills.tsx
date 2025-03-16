import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Database, Code, Brain, Server, Terminal, BarChart3, 
  GitBranch, Lightbulb, Star, Search, ChevronDown,
  LineChart, Workflow, Shield, Laptop, Gauge, Zap
} from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const skillCategories = [
    {
      id: 'data-engineering',
      title: 'Data Engineering & Analysis',
      icon: <Database className="w-6 h-6" />,
      color: 'blue',
      skills: [
        {
          name: 'Python & Data Processing',
          level: 'Proficient',
          tools: ['Pandas', 'NumPy', 'SciPy'],
          description: 'Strong foundation in data manipulation and analysis using Python ecosystem'
        },
        {
          name: 'SQL & Databases',
          level: 'Proficient',
          tools: ['PostgreSQL', 'MySQL', 'MSSQL'],
          description: 'Skilled in writing complex queries and database optimization'
        },
        {
          name: 'ETL Development',
          level: 'Intermediate',
          tools: ['Data Pipelines', 'Data Quality', 'Automation'],
          description: 'Experience in building and maintaining ETL pipelines'
        }
      ]
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning & Analytics',
      icon: <Brain className="w-6 h-6" />,
      color: 'purple',
      skills: [
        {
          name: 'Machine Learning',
          level: 'Growing',
          tools: ['Scikit-learn', 'XGBoost', 'Statistical Analysis'],
          description: 'Actively developing skills in ML model implementation and analysis'
        },
        {
          name: 'Business Intelligence',
          level: 'Proficient',
          tools: ['Tableau', 'Looker', 'Power BI'],
          description: 'Creation of interactive dashboards and data visualizations'
        },
        {
          name: 'Statistical Analysis',
          level: 'Intermediate',
          tools: ['Hypothesis Testing', 'A/B Testing', 'Regression Analysis'],
          description: 'Solid understanding of statistical methods and their applications'
        }
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      icon: <Server className="w-6 h-6" />,
      color: 'emerald',
      skills: [
        {
          name: 'Healthcare Systems',
          level: 'Proficient',
          tools: ['HIPAA Compliance', 'REDCap', 'Clinical Data'],
          description: 'Strong knowledge of healthcare data management and compliance'
        },
        {
          name: 'Cloud Services',
          level: 'Growing',
          tools: ['AWS', 'Azure', 'Cloud Databases'],
          description: 'Developing experience with cloud platforms and services'
        },
        {
          name: 'Enterprise Tools',
          level: 'Intermediate',
          tools: ['SSMS', 'Power Automate', 'SharePoint'],
          description: 'Working knowledge of enterprise-grade tools and platforms'
        }
      ]
    }
  ];

  const technicalMetrics = [
    { skill: "Data Processing", score: 85, color: "blue", icon: <Database size={20} /> },
    { skill: "SQL & Databases", score: 80, color: "indigo", icon: <Terminal size={20} /> },
    { skill: "Python Development", score: 75, color: "purple", icon: <Code size={20} /> },
    { skill: "Machine Learning", score: 65, color: "emerald", icon: <Brain size={20} /> },
    { skill: "Data Visualization", score: 80, color: "amber", icon: <BarChart3 size={20} /> },
    { skill: "ETL Development", score: 75, color: "rose", icon: <Workflow size={20} /> }
  ];

  const specializations = [
    {
      title: "Data Pipeline Development",
      icon: <Workflow size={24} />,
      description: "Building and optimizing ETL pipelines",
      color: "blue"
    },
    {
      title: "Healthcare Analytics",
      icon: <Shield size={24} />,
      description: "HIPAA-compliant data analysis",
      color: "emerald"
    },
    {
      title: "Performance Optimization",
      icon: <Gauge size={24} />,
      description: "Database and query optimization",
      color: "purple"
    },
    {
      title: "Automated Reporting",
      icon: <Zap size={24} />,
      description: "Streamlined data processing and reporting",
      color: "amber"
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      bgSolid: 'bg-blue-500 dark:bg-blue-400',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-500',
      gradient: 'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      bgSolid: 'bg-purple-500 dark:bg-purple-400',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-500',
      gradient: 'from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500'
    },
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      bgSolid: 'bg-emerald-500 dark:bg-emerald-400',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-500',
      gradient: 'from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500'
    },
    indigo: {
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      bgSolid: 'bg-indigo-500 dark:bg-indigo-400',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-indigo-500',
      gradient: 'from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500'
    },
    amber: {
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      bgSolid: 'bg-amber-500 dark:bg-amber-400',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-500',
      gradient: 'from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500'
    },
    rose: {
      bg: 'bg-rose-50 dark:bg-rose-900/20',
      bgSolid: 'bg-rose-500 dark:bg-rose-400',
      text: 'text-rose-600 dark:text-rose-400',
      border: 'border-rose-500',
      gradient: 'from-rose-500 to-rose-600 dark:from-rose-400 dark:to-rose-500'
    }
  };

  const ProgressBar = ({ value, color }: { value: number; color: keyof typeof colorClasses }) => {
    return (
      <div className="relative h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 1.2,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.2
          }}
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${colorClasses[color].gradient} rounded-full`}
        />
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Skills & Competencies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Focused on data engineering and analytics, with growing experience in machine learning and enterprise solutions. Continuously learning and expanding my skillset in healthcare data management.
          </p>
        </motion.div>

        {/* Technical Metrics */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {technicalMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${colorClasses[metric.color].bg} rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${colorClasses[metric.color].bg} ${colorClasses[metric.color].text} mr-3`}>
                  {metric.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{metric.skill}</h3>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${colorClasses[metric.color].bg} ${colorClasses[metric.color].text}`}>
                      Proficiency
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <span className={`text-xs font-semibold ${colorClasses[metric.color].text}`}>
                      {metric.score}%
                    </span>
                  </motion.div>
                </div>
                <ProgressBar value={metric.score} color={metric.color} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="mb-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className={`${colorClasses[category.color].bg} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${colorClasses[category.color].bg} ${colorClasses[category.color].text} mr-3`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">{category.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: selectedCategory === category.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-500" size={20} />
                  </motion.div>
                </div>

                <AnimatePresence mode="wait">
                  {selectedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                        >
                          <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                            <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClasses[category.color].bg} ${colorClasses[category.color].text}`}>
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{skill.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {skill.tools.map((tool, toolIndex) => (
                              <span
                                key={toolIndex}
                                className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Specializations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${colorClasses[spec.color].border}`}
            >
              <div className={`inline-flex p-3 rounded-lg ${colorClasses[spec.color].bg} ${colorClasses[spec.color].text} mb-4`}>
                {spec.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{spec.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{spec.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;