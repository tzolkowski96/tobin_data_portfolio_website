import React, { useState } from 'react';
import { Award, TrendingUp, Database, Target, ExternalLink, Github, Calendar, Users, BarChart3, Brain } from 'lucide-react';

const Showcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const achievements = [
    {
      id: 1,
      type: 'project',
      title: 'Employee Churn Prediction',
      metric: '98% Accuracy',
      description: 'Machine learning model achieving industry-leading accuracy in predicting employee turnover patterns',
      technologies: ['Python', 'Scikit-Learn', 'Random Forest'],
      impact: '35% reduction in HR recruitment costs',
      date: '2023',
      links: {
        github: 'https://github.com/tzolkowski96/tzolkowski96/tree/main/Employee-Churn-Prediction',
        live: 'https://tzolkowski96.github.io/Salifort-Motors-Project/'
      }
    },
    {
      id: 2,
      type: 'project',
      title: 'Traffic Analytics Engine',
      metric: '7.7M Records',
      description: 'Comprehensive analysis of US traffic accident data revealing critical safety patterns',
      technologies: ['Python', 'Big Data', 'Geospatial Analysis'],
      impact: 'Risk factor identification for public safety',
      date: '2022',
      links: {
        github: 'https://github.com/tzolkowski96/tzolkowski96/tree/main/us_accidents_analysis'
      }
    },
    {
      id: 3,
      type: 'certification',
      title: 'Google Advanced Data Analytics',
      metric: 'Coursera',
      description: 'Comprehensive specialization covering Python, machine learning, and statistical analysis',
      technologies: ['Python', 'Machine Learning', 'Statistics'],
      impact: 'Advanced ML implementation skills',
      date: '2023',
      links: {
        external: 'https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY'
      }
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Data Quality Optimization',
      metric: '35% Improvement',
      description: 'Systematic enhancement of biomedical research data processing workflows',
      technologies: ['ETL', 'Data Validation', 'Quality Metrics'],
      impact: 'Accelerated research timelines',
      date: '2023',
      links: {}
    },
    {
      id: 5,
      type: 'project',
      title: 'Healthcare Data Pipeline',
      metric: 'HIPAA Compliant',
      description: 'End-to-end data processing system for medical research with strict compliance requirements',
      technologies: ['SQL', 'Python', 'HIPAA'],
      impact: 'Streamlined research data workflows',
      date: '2023',
      links: {}
    },
    {
      id: 6,
      type: 'certification',
      title: 'Data Analyst in Tableau',
      metric: 'DataCamp',
      description: 'Advanced visualization and dashboard development certification',
      technologies: ['Tableau', 'Dashboard Design', 'Data Viz'],
      impact: 'Enhanced business intelligence capabilities',
      date: '2022-2023',
      links: {
        external: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Achievements', count: achievements.length },
    { id: 'project', label: 'Projects', count: achievements.filter(a => a.type === 'project').length },
    { id: 'certification', label: 'Certifications', count: achievements.filter(a => a.type === 'certification').length },
    { id: 'achievement', label: 'Accomplishments', count: achievements.filter(a => a.type === 'achievement').length }
  ];

  const filteredAchievements = activeFilter === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'project': return <BarChart3 size={24} className="text-gray-900 dark:text-white" />;
      case 'certification': return <Award size={24} className="text-gray-900 dark:text-white" />;
      case 'achievement': return <Target size={24} className="text-gray-900 dark:text-white" />;
      default: return <TrendingUp size={24} className="text-gray-900 dark:text-white" />;
    }
  };

  const keyMetrics = [
    { label: 'Projects Completed', value: '14+', icon: <BarChart3 size={32} /> },
    { label: 'Records Analyzed', value: '7.7M+', icon: <Database size={32} /> },
    { label: 'ML Model Accuracy', value: '98%', icon: <Brain size={32} /> },
    { label: 'Certifications Earned', value: '3+', icon: <Award size={32} /> }
  ];

  return (
    <section className="section-gray section-padding">
      <div className="container-large">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="display-3 text-gray-900 dark:text-white">Portfolio Showcase</h2>
          <p className="body-large">
            <strong>Comprehensive overview</strong> of projects, certifications, and significant achievements 
            demonstrating expertise in data analytics, machine learning, and business intelligence.
          </p>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, idx) => (
            <div key={idx} className="text-center p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors group">
              <div className="icon-container mx-auto mb-4 group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>
              <div className="heading-1 text-gray-900 dark:text-white mb-2">{metric.value}</div>
              <div className="caption text-gray-600 dark:text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 border-2 transition-all ${
                activeFilter === filter.id
                  ? 'border-gray-900 dark:border-white bg-gray-900 dark:bg-white text-white dark:text-black'
                  : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-500 dark:hover:border-gray-500'
              }`}
            >
              <span className="body-regular font-medium mr-2">{filter.label}</span>
              <span className="caption bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredAchievements.map((achievement) => (
            <div key={achievement.id} className="project-card-large group">
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="icon-container mr-4">
                    {getTypeIcon(achievement.type)}
                  </div>
                  <div>
                    <span className="caption text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 uppercase">
                      {achievement.type}
                    </span>
                  </div>
                </div>
                <span className="caption text-gray-500 dark:text-gray-500">{achievement.date}</span>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="heading-2 text-gray-900 dark:text-white mb-3">{achievement.title}</h3>
                <div className="display-2 text-gray-900 dark:text-white mb-4 font-light">
                  {achievement.metric}
                </div>
                <p className="body-regular mb-4">{achievement.description}</p>
                <p className="body-small text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Impact:</strong> {achievement.impact}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech, idx) => (
                    <span key={idx} className="tag-large">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-300 dark:border-gray-600">
                <div className="flex space-x-4">
                  {achievement.links.github && (
                    <a 
                      href={achievement.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {achievement.links.live && (
                    <a 
                      href={achievement.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {achievement.links.external && (
                    <a 
                      href={achievement.links.external} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2"
                      aria-label="View certificate or external link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                
                {achievement.type === 'project' && (
                  <span className="caption text-gray-500 dark:text-gray-500 flex items-center">
                    <Users size={14} className="mr-1" />
                    Production Ready
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Highlights */}
        <div className="minimal-card">
          <h3 className="heading-2 text-gray-900 dark:text-white mb-8 text-center">Professional Highlights</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="icon-container mx-auto mb-4">
                <Target size={32} className="text-gray-900 dark:text-white" />
              </div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Data Excellence</h4>
              <p className="body-regular">
                Consistently delivering <strong>high-accuracy models</strong> and <strong>quality data solutions</strong> 
                that drive measurable business impact and operational efficiency.
              </p>
            </div>
            
            <div className="text-center">
              <div className="icon-container mx-auto mb-4">
                <TrendingUp size={32} className="text-gray-900 dark:text-white" />
              </div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Continuous Growth</h4>
              <p className="body-regular">
                Committed to <strong>lifelong learning</strong> through certifications, practical projects, 
                and staying current with emerging data science technologies and methodologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="icon-container mx-auto mb-4">
                <Users size={32} className="text-gray-900 dark:text-white" />
              </div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Business Impact</h4>
              <p className="body-regular">
                Translating complex data insights into <strong>actionable strategies</strong> that enhance 
                decision-making and create tangible value for organizations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="heading-2 text-gray-900 dark:text-white mb-6">Ready to Collaborate?</h3>
          <p className="body-large mb-8 max-w-2xl mx-auto">
            Let's discuss how my expertise in data analytics and machine learning 
            can help drive your organization's data initiatives forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-large">Start Conversation</a>
            <a 
              href="https://github.com/tzolkowski96" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center"
            >
              <Github size={20} className="mr-3" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;