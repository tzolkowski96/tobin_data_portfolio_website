import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A data enthusiast focused on analysis, SQL, and machine learning. With a growth mindset and 
              commitment to continuous learning, I leverage data to drive insights and solve problems.
            </p>
          </div>

          {/* Education */}
          <div className="minimal-card mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Master's in Information Science</h4>
                <p className="text-gray-600 dark:text-gray-400">University of Wisconsin-Madison</p>
              </div>
              <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Bachelor's in International Studies</h4>
                <p className="text-gray-600 dark:text-gray-400">University of Wisconsin-Madison</p>
              </div>
              <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Communication Science Studies</h4>
                <p className="text-gray-600 dark:text-gray-400">Rochester Institute of Technology (2 years)</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="minimal-card mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Certifications</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Google Advanced Data Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-400">Coursera - 2023</p>
                </div>
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="View Google Advanced Data Analytics certificate"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Data Analyst in Tableau Track</h4>
                  <p className="text-gray-600 dark:text-gray-400">DataCamp - 2022-2023</p>
                </div>
                <a 
                  href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="View Data Analyst in Tableau certificate"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Data Analyst in SQL Track</h4>
                  <p className="text-gray-600 dark:text-gray-400">DataCamp - 2022-2023</p>
                </div>
                <a 
                  href="https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="View Data Analyst in SQL certificate"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="minimal-card mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Key Strengths</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Data Analysis & Visualization</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Python, SQL, Tableau, and Looker</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Machine Learning Applications</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Classification, Clustering for business problems</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Data Engineering Fundamentals</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">ETL processes and database optimization</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">SQL Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Querying, optimization, stored procedures</p>
              </div>
            </div>
          </div>

          {/* Journey */}
          <div className="minimal-card mb-8">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleSection('journey')}
              aria-expanded={expandedSection === 'journey'}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Journey in Tech</h3>
              {expandedSection === 'journey' ? 
                <ChevronUp className="text-gray-600 dark:text-gray-400" aria-hidden="true" /> : 
                <ChevronDown className="text-gray-600 dark:text-gray-400" aria-hidden="true" />
              }
            </button>
            
            {expandedSection === 'journey' && (
              <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  My path into data science wasn't traditional. Starting with Communication Science at RIT, 
                  I later transferred to UW-Madison for International Studies. It was during my undergraduate 
                  years I discovered a passion for data analysis, initially through class projects and 
                  self-exploration with Excel.
                </p>
                
                <p>
                  This interest grew, leading me to teach myself SQL and eventually pursue a Master's in 
                  Information Science at UW-Madison, which formalized my skills.
                </p>
                
                <p>
                  Real growth came from hands-on projects: predicting employee churn (achieving 98% accuracy), 
                  analyzing student performance data, and building a complex crypto market data pipeline with web scraping 
                  and automated reporting.
                </p>
                
                <p>
                  My focus shifted towards data engineering as I found building efficient data processing 
                  systems deeply satisfying, especially when handling large datasets like the 7.7 million 
                  records in the Traffic Accident Analytics project.
                </p>
                
                <blockquote className="border-l-2 border-gray-200 dark:border-gray-800 pl-4 italic">
                  "My diverse background offers a unique perspective, helping translate technical results 
                  into actionable business strategies. I embrace AI tools to accelerate learning and tackle 
                  complex challenges faster."
                </blockquote>
              </div>
            )}
          </div>

          {/* Learning Approach */}
          <div className="minimal-card">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleSection('learning')}
              aria-expanded={expandedSection === 'learning'}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Learning Journey & Approach</h3>
              {expandedSection === 'learning' ? 
                <ChevronUp className="text-gray-600 dark:text-gray-400" aria-hidden="true" /> : 
                <ChevronDown className="text-gray-600 dark:text-gray-400" aria-hidden="true" />
              }
            </button>
            
            {expandedSection === 'learning' && (
              <div className="mt-6 space-y-6">
                <blockquote className="text-center border border-gray-200 dark:border-gray-800 p-6 rounded">
                  <p className="text-lg italic text-gray-900 dark:text-white mb-4">
                    "I believe in continuous learning and practical application. Each project represents both a learning opportunity and a chance to solve real-world problems with data."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    As someone actively developing my skills, I focus on projects that challenge me to grow while delivering practical value. 
                    I embrace transparency in my learning journey, utilizing online resources, courses, and AI assistance to tackle complex problems, 
                    always aiming to deepen my understanding and capabilities.
                  </p>
                </blockquote>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Current Learning Focus Areas:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">Statistics & Mathematics</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Strengthening foundation in statistical concepts and mathematical principles for robust data analysis.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">Advanced Machine Learning</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Developing skills in deep learning, natural language processing, and MLOps for sophisticated modeling.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">Data Pipeline Development</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Creating sophisticated ETL processes and data pipelines for efficient, automated data workflows.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">Open-Source Contributions</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Contributing to open-source data projects to enhance skills and give back to the community.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;