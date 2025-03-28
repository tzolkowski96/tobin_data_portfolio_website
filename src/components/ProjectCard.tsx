import React, { useState } from 'react';
import { ExternalLink, Star, X } from 'lucide-react';
import { Project } from '../types/project';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  formatCategoryName: (category: string) => string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, formatCategoryName, index }) => {
  const [showModal, setShowModal] = useState(false);
  const [hoveredHighlight, setHoveredHighlight] = useState<string | null>(null);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col h-full"
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          {project.featured && (
            <div className="absolute top-2 right-2 px-3 py-1 bg-yellow-500/80 text-white text-xs font-medium rounded-full flex items-center backdrop-blur-sm">
              <Star size={12} className="mr-1" /> Featured
            </div>
          )}
        </div>
        
        {/* Content Container */}
        <div className="flex flex-col flex-grow p-4 sm:p-6">
          {/* Categories */}
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
          
          {/* Title */}
          <h3 
            className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 cursor-pointer"
            onClick={openModal}
          >
            {project.title}
          </h3>
          
          {/* Description */}
          <p 
            className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2 cursor-pointer"
            onClick={openModal}
          >
            {project.description}
          </p>
          
          {/* Technologies Section */}
          <div className="mt-auto space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <button
                    onClick={openModal}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    +{project.technologies.length - 3} more
                  </button>
                )}
              </div>
            </div>
            
            {/* Highlights Section */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Highlights:</h4>
              <ul className="space-y-2">
                {project.highlights.slice(0, 3).map((highlight, index) => (
                  <li 
                    key={index}
                    className="relative group/highlight cursor-pointer flex items-start"
                    onMouseEnter={() => setHoveredHighlight(highlight)}
                    onMouseLeave={() => setHoveredHighlight(null)}
                    onClick={openModal}
                  >
                    <span className="w-1.5 h-1.5 mt-1.5 mr-2 bg-blue-500 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {highlight}
                    </span>
                  </li>
                ))}
                {project.highlights.length > 3 && (
                  <li 
                    className="text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 pl-3.5"
                    onClick={openModal}
                  >
                    +{project.highlights.length - 3} more highlights
                  </li>
                )}
              </ul>
            </div>
            
            {/* Links Section */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm"
                >
                  View Code <ExternalLink size={16} className="ml-1" />
                </a>
              )}
              {project.demoUrl && (
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium text-sm"
                >
                  Live Demo <ExternalLink size={16} className="ml-1" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative modal-mobile"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="pr-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {project.title}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Description</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 mt-2 mr-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Code <ExternalLink size={16} className="ml-2" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Live Demo <ExternalLink size={16} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;