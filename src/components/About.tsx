import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Award, GraduationCap, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return (
    <section className="section-gray section-padding">
      <div className="container-large">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="display-3 text-gray-900 dark:text-white">Digital CV</h2>
          <p className="body-large">
            Comprehensive overview of educational background, professional certifications, 
            and specialized skills in data analytics and machine learning.
          </p>
        </div>

        {/* Summary Statement */}
        <div className="minimal-card mb-12 text-center">
          <h3 className="heading-2 text-gray-900 dark:text-white mb-6">Professional Summary</h3>
          <p className="body-large leading-relaxed max-w-4xl mx-auto">
            <strong>Data Professional</strong> with <strong>4+ years of experience</strong> transforming complex datasets 
            into actionable business insights. Proven track record in <strong>machine learning implementation</strong>, 
            <strong>ETL pipeline development</strong>, and <strong>data visualization</strong>. Successfully analyzed 
            <strong>7.7M+ records</strong> and achieved <strong>98% ML model accuracy</strong> in production environments.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-12">
          <h3 className="heading-2 text-gray-900 dark:text-white mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="minimal-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <Target size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Data Analysis & ML</h4>
              <p className="body-regular">Python, SQL, Scikit-Learn, Statistical Analysis, Predictive Modeling</p>
            </div>
            
            <div className="minimal-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                <Target size={32} className="text-green-600 dark:text-green-400" />
              </div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Data Engineering</h4>
              <p className="body-regular">ETL Pipelines, Database Optimization, Data Quality, HIPAA Compliance</p>
            </div>
            
            <div className="minimal-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                <Target size={32} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Business Intelligence</h4>
              <p className="body-regular">Tableau, Looker, Dashboard Development, Data Storytelling</p>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Education */}
          <div className="minimal-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="heading-2 text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="heading-3 text-gray-900 dark:text-white mb-2">Master of Science</h4>
                <p className="body-regular font-medium mb-1">Information Science</p>
                <p className="body-small text-gray-600 dark:text-gray-400 mb-2">University of Wisconsin-Madison</p>
                <p className="caption">Focus: Data Analytics, Machine Learning, Information Systems</p>
              </div>
              
              <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6">
                <h4 className="heading-3 text-gray-900 dark:text-white mb-2">Bachelor of Arts</h4>
                <p className="body-regular font-medium mb-1">International Studies</p>
                <p className="body-small text-gray-600 dark:text-gray-400 mb-2">University of Wisconsin-Madison</p>
                <p className="caption">Concentration: Research Methods, Data Analysis</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="minimal-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                <Award size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="heading-2 text-gray-900 dark:text-white">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="heading-3 text-gray-900 dark:text-white mb-2">Google Advanced Data Analytics</h4>
                  <p className="body-regular mb-1">Coursera • 2023</p>
                  <p className="caption">Python, Machine Learning, Statistical Analysis</p>
                </div>
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 p-2 flex-shrink-0"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="heading-3 text-gray-900 dark:text-white mb-2">Data Analyst in Tableau</h4>
                  <p className="body-regular mb-1">DataCamp • 2022-2023</p>
                  <p className="caption">Data Visualization, Dashboard Design</p>
                </div>
                <a 
                  href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 p-2 flex-shrink-0"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="heading-3 text-gray-900 dark:text-white mb-2">Data Analyst in SQL</h4>
                  <p className="body-regular mb-1">DataCamp • 2022-2023</p>
                  <p className="caption">Advanced SQL, Database Optimization</p>
                </div>
                <a 
                  href="https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 p-2 flex-shrink-0"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Proficiencies */}
        <div className="minimal-card mb-12">
          <h3 className="heading-2 text-gray-900 dark:text-white mb-8 text-center">Technical Proficiencies</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-4">Programming</h4>
              <ul className="space-y-2 body-regular">
                <li>• Python (Pandas, NumPy, Scikit-Learn)</li>
                <li>• SQL (MySQL, PostgreSQL)</li>
                <li>• JavaScript (Data Visualization)</li>
                <li>• R (Statistical Analysis)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-4">Analytics & ML</h4>
              <ul className="space-y-2 body-regular">
                <li>• Machine Learning</li>
                <li>• Statistical Analysis</li>
                <li>• A/B Testing</li>
                <li>• Predictive Modeling</li>
              </ul>
            </div>
            
            <div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-4">Visualization</h4>
              <ul className="space-y-2 body-regular">
                <li>• Tableau</li>
                <li>• Looker</li>
                <li>• Power BI</li>
                <li>• Matplotlib/Seaborn</li>
              </ul>
            </div>
            
            <div>
              <h4 className="heading-3 text-gray-900 dark:text-white mb-4">Tools & Platforms</h4>
              <ul className="space-y-2 body-regular">
                <li>• Jupyter Notebooks</li>
                <li>• Git/GitHub</li>
                <li>• Excel (Advanced)</li>
                <li>• AWS/Azure</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Philosophy */}
        <div className="minimal-card">
          <button
            className="w-full flex justify-between items-center text-left group"
            onClick={() => toggleSection('philosophy')}
            aria-expanded={expandedSection === 'philosophy'}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4 bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                <Lightbulb size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="heading-2 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                Professional Philosophy & Approach
              </h3>
            </div>
            <div className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              {expandedSection === 'philosophy' ? 
                <ChevronUp size={24} /> : 
                <ChevronDown size={24} />
              }
            </div>
          </button>
          
          {expandedSection === 'philosophy' && (
            <div className="mt-8 pl-16 space-y-6 animate-slideUp">
              <div className="p-6 bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500">
                <p className="body-large italic mb-4">
                  "I believe in continuous learning and practical application. Each project represents both 
                  a learning opportunity and a chance to solve real-world problems with data."
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Learning Approach</h4>
                  <p className="body-regular">
                    Embrace transparency in my learning journey, utilizing online resources, courses, 
                    and AI assistance to tackle complex problems while always aiming to deepen understanding 
                    and capabilities.
                  </p>
                </div>
                
                <div>
                  <h4 className="heading-3 text-gray-900 dark:text-white mb-3">Problem-Solving Method</h4>
                  <p className="body-regular">
                    Focus on projects that challenge growth while delivering practical value. 
                    My diverse background helps translate technical results into actionable business strategies.
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
                <h4 className="heading-3 text-gray-900 dark:text-white mb-4">Current Learning Focus</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="body-regular mb-2"><strong>Advanced Statistics:</strong> Deepening mathematical foundations</p>
                    <p className="body-regular mb-2"><strong>MLOps:</strong> Production machine learning systems</p>
                  </div>
                  <div>
                    <p className="body-regular mb-2"><strong>Cloud Platforms:</strong> AWS, Azure data services</p>
                    <p className="body-regular"><strong>Real-time Analytics:</strong> Streaming data processing</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;