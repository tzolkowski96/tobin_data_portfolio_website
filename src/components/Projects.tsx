import React, { useState, useRef } from 'react';
import { Search, X, Filter, Star, ArrowRight } from 'lucide-react';
import { ProjectCategory } from '../types/project';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import FeaturedProjectCard from './FeaturedProjectCard';
import UpcomingProjects from './UpcomingProjects';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const projectsRef = useRef<HTMLDivElement>(null);
  const allProjectsRef = useRef<HTMLDivElement>(null);
  
  const featuredProjects = projects.filter(project => project.featured);
  
  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setVisibleProjects(6);
    if (allProjectsRef.current) {
      allProjectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewAllProjects = () => {
    setActiveCategory('all');
    setVisibleProjects(6);
    if (allProjectsRef.current) {
      allProjectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setVisibleProjects(6);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category.includes(activeCategory);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatCategoryName = (category: string) => {
    return category.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800" ref={projectsRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto mb-4"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my collection of data analysis, machine learning, and development projects. Each project demonstrates my commitment to delivering impactful solutions and continuous learning.
          </p>
        </motion.div>
        
        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
              <Star className="mr-2 text-yellow-500" size={24} />
              Featured Projects
            </h3>
            <button 
              onClick={handleViewAllProjects}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center whitespace-nowrap"
            >
              View All Projects <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard 
                key={project.id} 
                project={project}
                formatCategoryName={formatCategoryName}
              />
            ))}
          </div>
        </div>
        
        {/* All Projects Section */}
        <div ref={allProjectsRef}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">All Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-6">
              Browse through a diverse range of projects showcasing my expertise in data analysis, machine learning, and web development. Each project reflects my dedication to solving real-world problems with innovative solutions.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto"></div>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
              {searchTerm && (
                <button 
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
            <div>
              <button 
                onClick={toggleFilters}
                className="w-full md:hidden flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 mb-4"
                aria-expanded={isFilterOpen}
              >
                <span className="flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filter by Category
                </span>
                <span>{isFilterOpen ? '−' : '+'}</span>
              </button>
              
              <div className={`md:flex gap-2 flex-wrap ${isFilterOpen ? 'grid grid-cols-2 gap-2' : 'hidden md:flex'}`}>
                <CategoryButton
                  category="all"
                  active={activeCategory === 'all'}
                  onClick={() => handleCategoryChange('all')}
                  label="All Projects"
                />
                <CategoryButton
                  category="data-analysis"
                  active={activeCategory === 'data-analysis'}
                  onClick={() => handleCategoryChange('data-analysis')}
                  label="Data Analysis"
                />
                <CategoryButton
                  category="machine-learning"
                  active={activeCategory === 'machine-learning'}
                  onClick={() => handleCategoryChange('machine-learning')}
                  label="Machine Learning"
                />
                <CategoryButton
                  category="web-development"
                  active={activeCategory === 'web-development'}
                  onClick={() => handleCategoryChange('web-development')}
                  label="Web Development"
                />
                <CategoryButton
                  category="python"
                  active={activeCategory === 'python'}
                  onClick={() => handleCategoryChange('python')}
                  label="Python"
                />
                <CategoryButton
                  category="sql"
                  active={activeCategory === 'sql'}
                  onClick={() => handleCategoryChange('sql')}
                  label="SQL"
                />
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.1, 0.5) }}
                    className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
                  >
                    <ProjectCard 
                      project={project}
                      formatCategoryName={formatCategoryName}
                      index={index}
                    />
                  </motion.div>
                ))}
              </div>
              
              {filteredProjects.length > visibleProjects && (
                <div className="mt-12 text-center">
                  <button 
                    onClick={loadMore}
                    className="px-6 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Load More Projects
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md mx-auto shadow-md">
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">No projects found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchTerm('');
                  }}
                  className="px-4 py-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        <UpcomingProjects />
      </div>
    </section>
  );
};

interface CategoryButtonProps {
  category: ProjectCategory;
  active: boolean;
  onClick: () => void;
  label: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`w-full md:w-auto px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      active
        ? 'bg-blue-600 dark:bg-blue-500 text-white'
        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
    }`}
  >
    {label}
  </button>
);

export default Projects;