import React, { useState } from 'react';
import { ExternalLink, Star, X } from 'lucide-react';
import { Project } from '../types/project';
import { motion, AnimatePresence } from 'framer-motion';

interface FeaturedProjectCardProps {
  project: Project;
  formatCategoryName: (category: string) => string;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, formatCategoryName }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row"
      >
        <div className="w-full md:w-2/5 h-48 sm:h-56 md:h-auto relative overflow-hidden">
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
        
        <div className="w-full md:w-3/5 p-4 sm:p-6 flex flex-col">
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
                  <li 
                    className="text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300"
                    onClick={openModal}
                  >
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={openModal}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  +{project.technologies.length - 3} more
                </motion.button>
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

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 pr-8">{project.title}</h3>
              
              <div className="mb-5 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Description</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{project.description}</p>
              </div>

              <div className="mb-5 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs sm:text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-5 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm sm:text-base space-y-1 sm:space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    View Code <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                  >
                    Live Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturedProjectCard;