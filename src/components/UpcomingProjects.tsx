import React from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const UpcomingProjects = () => {
  const upcomingProjects = [
    { title: "Excel Analytics", timeline: "Coming Soon" },
    { title: "Tableau Dashboards", timeline: "In Progress" },
    { title: "Power BI Reports", timeline: "Planning Phase" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-6 sm:p-8 shadow-lg"
    >
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white flex items-center">
          <Clock className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
          Coming Soon
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {upcomingProjects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              {project.title}
            </h4>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Clock size={14} className="mr-1" />
              {project.timeline}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UpcomingProjects;