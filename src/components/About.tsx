import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return (
    <section id="about" className="py-16 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-900 dark:text-white mb-8">About</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Data enthusiast focused on analysis, SQL, and machine learning with commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <div className="minimal-card">
            <h3 className="text-lg text-gray-900 dark:text-white mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-normal text-gray-900 dark:text-white">Master's in Information Science</h4>
                <p className="text-sm text-gray-500 dark:text-gray-500">University of Wisconsin-Madison</p>
              </div>
              <div>
                <h4 className="font-normal text-gray-900 dark:text-white">Bachelor's in International Studies</h4>
                <p className="text-sm text-gray-500 dark:text-gray-500">University of Wisconsin-Madison</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="minimal-card">
            <h3 className="text-lg text-gray-900 dark:text-white mb-4">Certifications</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-normal text-gray-900 dark:text-white">Google Advanced Data Analytics</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Coursera, 2023</p>
                </div>
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-normal text-gray-900 dark:text-white">Data Analyst in Tableau</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">DataCamp, 2022-2023</p>
                </div>
                <a 
                  href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="minimal-card mb-8">
          <h3 className="text-lg text-gray-900 dark:text-white mb-4">Core Skills</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-normal text-gray-900 dark:text-white mb-1">Data Analysis & Visualization</h4>
              <p className="text-sm text-gray-500 dark:text-gray-500">Python, SQL, Tableau, Looker</p>
            </div>
            <div>
              <h4 className="font-normal text-gray-900 dark:text-white mb-1">Machine Learning</h4>
              <p className="text-sm text-gray-500 dark:text-gray-500">Classification, Clustering, Feature Engineering</p>
            </div>
            <div>
              <h4 className="font-normal text-gray-900 dark:text-white mb-1">Data Engineering</h4>
              <p className="text-sm text-gray-500 dark:text-gray-500">ETL processes, Database optimization</p>
            </div>
            <div>
              <h4 className="font-normal text-gray-900 dark:text-white mb-1">SQL Development</h4>
              <p className="text-sm text-gray-500 dark:text-gray-500">Complex queries, Performance optimization</p>
            </div>
          </div>
        </div>

        {/* Journey */}
        <div className="minimal-card">
          <button
            className="w-full flex justify-between items-center text-left"
            onClick={() => toggleSection('journey')}
            aria-expanded={expandedSection === 'journey'}
          >
            <h3 className="text-lg text-gray-900 dark:text-white">Journey</h3>
            {expandedSection === 'journey' ? 
              <ChevronUp className="text-gray-500" size={18} /> : 
              <ChevronDown className="text-gray-500" size={18} />
            }
          </button>
          
          {expandedSection === 'journey' && (
            <div className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
              <p>
                Started with Communication Science at RIT, transferred to UW-Madison for International Studies. 
                Discovered passion for data analysis through class projects and self-exploration with Excel.
              </p>
              
              <p>
                Taught myself SQL and pursued Master's in Information Science at UW-Madison. 
                Real growth came from hands-on projects: employee churn prediction (98% accuracy), 
                traffic accident analysis (7.7M records), and crypto market data pipelines.
              </p>
              
              <p>
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