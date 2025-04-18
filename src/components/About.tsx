import React, { useState } from 'react';
import { BookOpen, Award, Code, ArrowUpRight, ChevronDown, ChevronUp, Lightbulb, GraduationCap, Workflow } from 'lucide-react';

const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-pretty">
            A data enthusiast focused on analysis, SQL, and machine learning. With a growth mindset and 
            commitment to continuous learning, I leverage data to drive insights and solve problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div 
            className="enhanced-card p-8 bg-blue-50 dark:bg-blue-900/20 transform transition-all duration-500 hover:translate-y-[-5px]"
            tabIndex={0}
          >
            <div className="mb-4 text-blue-600 dark:text-blue-400">
              <GraduationCap size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Education</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-4">
              <li className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 dark:bg-blue-900/50 rounded-full p-2">
                    <BookOpen size={18} className="text-blue-700 dark:text-blue-300" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-gray-800 dark:text-gray-100">Master's in Information Science</strong>
                    <p className="text-sm">University of Wisconsin-Madison</p>
                  </div>
                </div>
              </li>
              <li className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 dark:bg-blue-900/50 rounded-full p-2">
                    <BookOpen size={18} className="text-blue-700 dark:text-blue-300" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-gray-800 dark:text-gray-100">Bachelor's in International Studies</strong>
                    <p className="text-sm">University of Wisconsin-Madison</p>
                  </div>
                </div>
              </li>
              <li className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 dark:bg-blue-900/50 rounded-full p-2">
                    <BookOpen size={18} className="text-blue-700 dark:text-blue-300" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-gray-800 dark:text-gray-100">Communication Science Studies</strong>
                    <p className="text-sm">Rochester Institute of Technology (2 years)</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div 
            className="enhanced-card p-8 bg-indigo-50 dark:bg-indigo-900/20 transform transition-all duration-500 hover:translate-y-[-5px]"
            tabIndex={0}
          >
            <div className="mb-4 text-indigo-600 dark:text-indigo-400">
              <Award size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Certifications</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-4">
              <li className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <div className="mr-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-2">
                      <Award size={18} className="text-indigo-700 dark:text-indigo-300" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="block text-gray-800 dark:text-gray-100">Google Advanced Data Analytics</strong>
                      <p className="text-sm">Coursera - 2023</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-flex p-1 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-full transition-colors"
                    aria-label="View Google Advanced Data Analytics certificate"
                    title="View certificate"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </li>
              <li className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <div className="mr-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-2">
                      <Award size={18} className="text-indigo-700 dark:text-indigo-300" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="block text-gray-800 dark:text-gray-100">Data Analyst in Tableau Track</strong>
                      <p className="text-sm">DataCamp - 2022-2023</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-flex p-1 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-full transition-colors"
                    aria-label="View Data Analyst in Tableau certificate"
                    title="View certificate"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </li>
              <li className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <div className="mr-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-2">
                      <Award size={18} className="text-indigo-700 dark:text-indigo-300" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="block text-gray-800 dark:text-gray-100">Data Analyst in SQL Track</strong>
                      <p className="text-sm">DataCamp - 2022-2023</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-flex p-1 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-full transition-colors"
                    aria-label="View Data Analyst in SQL certificate"
                    title="View certificate"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div 
            className="enhanced-card p-8 bg-teal-50 dark:bg-teal-900/20 transform transition-all duration-500 hover:translate-y-[-5px]"
            tabIndex={0}
          >
            <div className="mb-4 text-teal-600 dark:text-teal-400">
              <Code size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Key Strengths</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-4">
              <li className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 bg-teal-100 dark:bg-teal-900/50 rounded-full p-2">
                    <Workflow size={18} className="text-teal-700 dark:text-teal-300" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-gray-800 dark:text-gray-100">Data Analysis & Visualization</strong>
                    <p className="text-sm">Python, SQL, Tableau, and Looker</p>
                  </div>
                </div>
              </li>
              <li className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 bg-teal-100 dark:bg-teal-900/50 rounded-full p-2">
                    <Workflow size={18} className="text-teal-700 dark:text-teal-300" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-gray-800 dark:text-gray-100">Machine Learning Applications</strong>
                    <p className="text-sm">Classification, Clustering for business problems</p>
                  </div>
                </div>
              </li>
              <li className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 bg-teal-100 dark:bg-teal-900/50 rounded-full p-2">
                    <Workflow size={18} className="text-teal-700 dark:text-teal-300" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-gray-800 dark:text-gray-100">Data Engineering Fundamentals</strong>
                    <p className="text-sm">ETL processes and database optimization</p>
                  </div>
                </div>
              </li>
              <li className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 bg-teal-100 dark:bg-teal-900/50 rounded-full p-2">
                    <Workflow size={18} className="text-teal-700 dark:text-teal-300" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-gray-800 dark:text-gray-100">SQL Development</strong>
                    <p className="text-sm">Querying, optimization, stored procedures</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-10 transform transition-all duration-500 hover:shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between cursor-pointer" 
            onClick={() => toggleSection('journey')}
            onKeyDown={(e) => e.key === 'Enter' && toggleSection('journey')}
            tabIndex={0}
            role="button"
            aria-expanded={expandedSection === 'journey'}
            aria-controls="journey-content"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">My Journey in Tech</h3>
            {expandedSection === 'journey' ? 
              <ChevronUp className="text-blue-600 dark:text-blue-400" aria-hidden="true" /> : 
              <ChevronDown className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
            }
          </div>
          
          <div 
            id="journey-content" 
            className={`mt-4 text-gray-600 dark:text-gray-300 space-y-4 transition-all duration-300 overflow-hidden ${
              expandedSection === 'journey' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p>
              My path into data science wasn't traditional. Starting with Communication Science at RIT, 
              I later transferred to UW-Madison for International Studies. It was during my undergraduate 
              years I discovered a passion for data analysis, initially through class projects and 
              self-exploration with Excel.
            </p>
            <p>
              This interest grew, leading me to teach myself SQL and eventually pursue a Master's in 
              Information Science at UW-Madison, which formalized my skills. Real growth came from 
              hands-on projects: predicting employee churn (achieving 98% accuracy), analyzing student 
              performance data, and building a complex crypto market data pipeline with web scraping 
              and automated reporting.
            </p>
            <p>
              My focus shifted towards data engineering as I found building efficient data processing 
              systems deeply satisfying, especially when handling large datasets like the 7.7 million 
              records in the Traffic Accident Analytics project. SQL, particularly CTEs and window 
              functions, became a favorite tool.
            </p>
            <p>
              My diverse background offers a unique perspective, helping translate technical results 
              into actionable business strategies. I embrace AI tools to accelerate learning and tackle 
              complex challenges faster. This unconventional journey has shaped my problem-solving approach, 
              blending technical expertise with a strong understanding of context and communication.
            </p>
            <blockquote className="italic border-l-4 border-blue-600 pl-4 py-2 my-4 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 rounded-r-lg">
              "The journey continues. I'm currently deepening my skills in Tableau, Excel, and PostgreSQL. 
              The constant learning and problem-solving are what I love about this field."
            </blockquote>
          </div>
        </div>

        {/* Learning Journey & Approach Section */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 shadow-md transform transition-all duration-500 hover:shadow-lg border border-indigo-100 dark:border-indigo-900/50">
          <div className="flex items-center justify-between cursor-pointer" 
            onClick={() => toggleSection('learning')}
            onKeyDown={(e) => e.key === 'Enter' && toggleSection('learning')}
            tabIndex={0}
            role="button"
            aria-expanded={expandedSection === 'learning'}
            aria-controls="learning-content"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 flex items-center">
              <Lightbulb className="mr-2 text-indigo-600 dark:text-indigo-400" size={24} aria-hidden="true" />
              Learning Journey & Approach
            </h3>
            {expandedSection === 'learning' ? 
              <ChevronUp className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" /> : 
              <ChevronDown className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            }
          </div>
          
          <div 
            id="learning-content" 
            className={`mt-4 text-gray-600 dark:text-gray-300 transition-all duration-300 overflow-hidden ${
              expandedSection === 'learning' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <blockquote className="italic mb-6 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg shadow-sm text-pretty">
              "I believe in continuous learning and practical application. Each project represents both a learning opportunity and a chance to solve real-world problems with data."
            </blockquote>
            
            <p className="mb-6">
              As someone actively developing my skills, I focus on projects that challenge me to grow while delivering practical value. 
              I embrace transparency in my learning journey, utilizing online resources, courses, and AI assistance to tackle complex problems, 
              always aiming to deepen my understanding and capabilities.
            </p>
            
            <div className="mt-6 bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg shadow-sm">
              <p className="font-medium mb-2 text-gray-800 dark:text-gray-200">I'm particularly interested in:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  </div>
                  <span>Strengthening my foundation in <strong className="text-indigo-700 dark:text-indigo-300">statistics</strong> and mathematical concepts</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  </div>
                  <span>Developing more advanced <strong className="text-indigo-700 dark:text-indigo-300">machine learning</strong> skills (e.g., deep learning, NLP)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  </div>
                  <span>Creating sophisticated <strong className="text-indigo-700 dark:text-indigo-300">data pipelines</strong> and <strong className="text-indigo-700 dark:text-indigo-300">ETL processes</strong></span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  </div>
                  <span>Contributing to <strong className="text-indigo-700 dark:text-indigo-300">open-source data projects</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;