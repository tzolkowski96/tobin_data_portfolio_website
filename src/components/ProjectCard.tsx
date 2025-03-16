import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Project } from '../types/project';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  formatCategoryName: (category: string) => string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, formatCategoryName, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        {project.featured && (
          <div className="absolute top-2 right-2 px-3 py-1 bg-yellow-500/80 text-white text-xs font-medium rounded-full flex items-center">
            <Star size={12} className="mr-1" /> Featured
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
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
        
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">
          {project.description}
        </p>
        
        <div className="mb-4 flex-grow">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Highlights:</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
            {project.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-1">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-auto">
          {project.githubUrl && (
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm"
            >
              View Code <ExternalLink size={16} className="ml-1" />
            </motion.a>
          )}
          {project.demoUrl && (
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium text-sm"
            >
              Live Demo <ExternalLink size={16} className="ml-1" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;