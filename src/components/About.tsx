import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, GraduationCap, Award, Code2, TrendingUp, Database, Brain } from 'lucide-react';

const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-black relative">
      {/* Data Theme Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="data-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#data-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="section-divider"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A data enthusiast focused on analysis, SQL, and machine learning. With a growth mindset and 
              commitment to continuous learning, I leverage data to drive insights and solve problems.
            </p>
          </div>

          {/* Education with Data Theme Icons */}
          <div className="minimal-card mb-8 data-pattern-bg">
            <div className="flex items-center mb-6">
              <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                <GraduationCap size={24} className="text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="timeline-item">
                <h4 className="font-medium text-gray-900 dark:text-white">Master's in Information Science</h4>
                <p className="text-gray-600 dark:text-gray-400">University of Wisconsin-Madison</p>
                <span className="text-sm text-gray-500">Data-focused curriculum</span>
              </div>
              <div className="timeline-item">
                <h4 className="font-medium text-gray-900 dark:text-white">Bachelor's in International Studies</h4>
                <p className="text-gray-600 dark:text-gray-400">University of Wisconsin-Madison</p>
                <span className="text-sm text-gray-500">Analytics foundation</span>
              </div>
              <div className="timeline-item">
                <h4 className="font-medium text-gray-900 dark:text-white">Communication Science Studies</h4>
                <p className="text-gray-600 dark:text-gray-400">Rochester Institute of Technology (2 years)</p>
                <span className="text-sm text-gray-500">Research methodology</span>
              </div>
            </div>
          </div>

          {/* Certifications with Data Professional Theme */}
          <div className="minimal-card mb-8 data-pattern-bg">
            <div className="flex items-center mb-6">
              <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                <Award size={24} className="text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Science Certifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start p-3 border border-gray-100 dark:border-gray-800 rounded">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Google Advanced Data Analytics</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Coursera - 2023 | Advanced Python, ML, Statistical Analysis</p>
                  </div>
                </div>
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors interactive-element"
                  aria-label="View Google Advanced Data Analytics certificate"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="flex justify-between items-start p-3 border border-gray-100 dark:border-gray-800 rounded">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Data Analyst in Tableau Track</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">DataCamp - 2022-2023 | Advanced Visualization, BI</p>
                  </div>
                </div>
                <a 
                  href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors interactive-element"
                  aria-label="View Data Analyst in Tableau certificate"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="flex justify-between items-start p-3 border border-gray-100 dark:border-gray-800 rounded">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Data Analyst in SQL Track</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">DataCamp - 2022-2023 | Advanced SQL, Database Design</p>
                  </div>
                </div>
                <a 
                  href="https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors interactive-element"
                  aria-label="View Data Analyst in SQL certificate"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Core Data Competencies */}
          <div className="minimal-card mb-8 data-pattern-bg">
            <div className="flex items-center mb-6">
              <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                <TrendingUp size={24} className="text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Core Data Competencies</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 border border-gray-100 dark:border-gray-800 rounded interactive-element">
                <Database size={20} className="text-gray-600 dark:text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Data Engineering & ETL</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Python pipelines, SQL optimization, data quality management</p>
                </div>
              </div>
              <div className="flex items-start p-4 border border-gray-100 dark:border-gray-800 rounded interactive-element">
                <Brain size={20} className="text-gray-600 dark:text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Machine Learning & Analytics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Classification models, predictive analytics, statistical testing</p>
                </div>
              </div>
              <div className="flex items-start p-4 border border-gray-100 dark:border-gray-800 rounded interactive-element">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-400 mr-3 mt-0.5 flex-shrink-0">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Business Intelligence</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tableau dashboards, Looker development, executive reporting</p>
                </div>
              </div>
              <div className="flex items-start p-4 border border-gray-100 dark:border-gray-800 rounded interactive-element">
                <Code2 size={20} className="text-gray-600 dark:text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Healthcare Data Systems</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">HIPAA compliance, clinical data analysis, research support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Journey with Data Visualization Theme */}
          <div className="minimal-card mb-8 data-pattern-bg">
            <button
              className="w-full flex justify-between items-center text-left interactive-element"
              onClick={() => toggleSection('journey')}
              aria-expanded={expandedSection === 'journey'}
            >
              <div className="flex items-center">
                <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-400">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Data Science Journey</h3>
              </div>
              {expandedSection === 'journey' ? 
                <ChevronUp className="text-gray-600 dark:text-gray-400" aria-hidden="true" /> : 
                <ChevronDown className="text-gray-600 dark:text-gray-400" aria-hidden="true" />
              }
            </button>
            
            {expandedSection === 'journey' && (
              <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <div className="viz-preview">
                  <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
                    Data Journey Visualization
                  </div>
                </div>
                
                <p>
                  My path into data science wasn't traditional. Starting with Communication Science at RIT, 
                  I later transferred to UW-Madison for International Studies. It was during my undergraduate 
                  years I discovered a passion for data analysis, initially through class projects and 
                  self-exploration with Excel.
                </p>
                
                <p>
                  This interest grew, leading me to teach myself SQL and eventually pursue a Master's in 
                  Information Science at UW-Madison, which formalized my skills in statistical analysis, 
                  database management, and research methodology.
                </p>
                
                <p>
                  Real growth came from hands-on projects: predicting employee churn (achieving 98% accuracy), 
                  analyzing student performance data, and building a complex crypto market data pipeline with web scraping 
                  and automated reporting.
                </p>
                
                <div className="p-4 border-l-4 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-r">
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "My diverse background offers a unique perspective, helping translate technical results 
                    into actionable business strategies. I embrace AI tools to accelerate learning and tackle 
                    complex challenges faster."
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Learning Philosophy */}
          <div className="minimal-card data-pattern-bg">
            <button
              className="w-full flex justify-between items-center text-left interactive-element"
              onClick={() => toggleSection('learning')}
              aria-expanded={expandedSection === 'learning'}
            >
              <div className="flex items-center">
                <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-400">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data-Driven Learning Philosophy</h3>
              </div>
              {expandedSection === 'learning' ? 
                <ChevronUp className="text-gray-600 dark:text-gray-400" aria-hidden="true" /> : 
                <ChevronDown className="text-gray-600 dark:text-gray-400" aria-hidden="true" />
              }
            </button>
            
            {expandedSection === 'learning' && (
              <div className="mt-6 space-y-6">
                <div className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded bg-gray-50 dark:bg-gray-900">
                  <p className="text-lg italic text-gray-900 dark:text-white mb-4">
                    "I believe in continuous learning and practical application. Each project represents both a learning opportunity and a chance to solve real-world problems with data."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    As someone actively developing my skills, I focus on projects that challenge me to grow while delivering practical value. 
                    I embrace transparency in my learning journey, utilizing online resources, courses, and AI assistance to tackle complex problems, 
                    always aiming to deepen my understanding and capabilities.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">Current Data Science Focus Areas:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded interactive-element">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                          <span className="text-sm font-semibold">01</span>
                        </div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Advanced Statistics & ML</h5>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Deep learning, statistical modeling, and MLOps for production systems.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded interactive-element">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                          <span className="text-sm font-semibold">02</span>
                        </div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Data Engineering</h5>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Building scalable ETL pipelines and data infrastructure solutions.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded interactive-element">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                          <span className="text-sm font-semibold">03</span>
                        </div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Cloud Analytics</h5>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">AWS, Azure, and GCP data services for enterprise-scale analytics.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded interactive-element">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                          <span className="text-sm font-semibold">04</span>
                        </div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Data Leadership</h5>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Strategic data thinking and cross-functional collaboration skills.</p>
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