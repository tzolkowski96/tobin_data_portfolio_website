import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Project } from '../types/project';
import { motion } from 'framer-motion';

interface FeaturedProjectCardProps {
  project: Project;
  formatCategoryName: (category: string) => string;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, formatCategoryName }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row"
    >
      <div className="md:w-2/5 h-48 sm:h-56 md:h-auto relative overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/80 text-white flex items-center backdrop-blur-sm">
          <Star size={12} className="mr-1" /> Featured
        </div>
      </div>
      
      <div className="md:w-3/5 p-4 sm:p-6 flex flex-col">
        <div className="mb-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.category.map((cat) => (
              <span 
                key={cat} 
                className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
              >
                {formatCategoryName(cat)}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">
            {project.description}
          </p>
          
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Highlights:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
              {project.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="line-clamp-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {highlight}
                </li>
              ))}
              {project.highlights.length > 3 && (
                <li className="text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300">
                  +{project.highlights.length - 3} more highlights
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="space-y-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <motion.span 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer"
              >
                +{project.technologies.length - 3} more
              </motion.span>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm group"
              >
                View Code 
                <ExternalLink size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
              </motion.a>
            )}
            {project.demoUrl && (
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium text-sm group"
              >
                Live Demo 
                <ExternalLink size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;