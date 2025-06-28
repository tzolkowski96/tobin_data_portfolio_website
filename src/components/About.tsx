import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return (
    <section className="section-gray section-padding">
      <div className="container-medium">
        
        {/* Large Section Header */}
        <div className="section-header">
          <h2 className="display-3 text-gray-900 dark:text-white">About</h2>
          <p className="body-large">
            Data enthusiast focused on analysis, SQL, and machine learning with commitment to continuous learning and practical application.
          </p>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Education */}
          <div className="minimal-card">
            <h3 className="heading-3 text-gray-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="heading-3 text-gray-900 dark:text-white mb-2">Master's in Information Science</h4>
                <p className="body-regular">University of Wisconsin-Madison</p>
              </div>
              <div>
                <h4 className="heading-3 text-gray-900 dark:text-white mb-2">Bachelor's in International Studies</h4>
                <p className="body-regular">University of Wisconsin-Madison</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="minimal-card">
            <h3 className="heading-3 text-gray-900 dark:text-white mb-6">Certifications</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="heading-3 text-gray-900 dark:text-white mb-2">Google Advanced Data Analytics</h4>
                  <p className="body-regular">Coursera, 2023</p>
                </div>
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 p-2"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="heading-3 text-gray-900 dark:text-white mb-2">Data Analyst in Tableau</h4>
                  <p className="body-regular">DataCamp, 2022-2023</p>
                </div>
                <a 
                  href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 p-2"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Core Skills */}
        <div className="minimal-card mb-12">
          <h3 className="heading-2 text-gray-900 dark:text-white mb-8 text-center">Core Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Data Analysis & Visualization</h4>
              <p className="body-regular">Python, SQL, Tableau, Looker</p>
            </div>
            <div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Machine Learning</h4>
              <p className="body-regular">Classification, Clustering, Feature Engineering</p>
            </div>
            <div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Data Engineering</h4>
              <p className="body-regular">ETL processes, Database optimization</p>
            </div>
            <div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-3">SQL Development</h4>
              <p className="body-regular">Complex queries, Performance optimization</p>
            </div>
          </div>
        </div>

        {/* Journey Expandable */}
        <div className="minimal-card">
          <button
            className="w-full flex justify-between items-center text-left group"
            onClick={() => toggleSection('journey')}
            aria-expanded={expandedSection === 'journey'}
          >
            <h3 className="heading-2 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">My Journey</h3>
            <div className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              {expandedSection === 'journey' ? 
                <ChevronUp size={24} /> : 
                <ChevronDown size={24} />
              }
            </div>
          </button>
          
          {expandedSection === 'journey' && (
            <div className="mt-8 space-y-6 animate-slideUp">
              <p className="body-large">
                Started with Communication Science at RIT, transferred to UW-Madison for International Studies. 
                Discovered passion for data analysis through class projects and self-exploration with Excel.
              </p>
              
              <p className="body-large">
                Taught myself SQL and pursued Master's in Information Science at UW-Madison. 
                Real growth came from hands-on projects: employee churn prediction (98% accuracy), 
                traffic accident analysis (7.7M records), and crypto market data pipelines.
              </p>
              
              <p className="body-large">
                Focus shifted to data engineering - building efficient processing systems for large datasets. 
                My diverse background helps translate technical results into actionable business strategies.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;