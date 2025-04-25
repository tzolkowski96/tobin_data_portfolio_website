import React, { useState } from 'react';
import { BookOpen, Award, Code, ArrowUpRight, ChevronDown, ChevronUp, Lightbulb, GraduationCap, Workflow, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  // Navigation to next section
  const goToNextSection = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mx-auto max-w-6xl">
          <div 
            className="enhanced-card p-8 bg-blue-50 dark:bg-blue-900/20 transform transition-all duration-500 hover:translate-y-[-5px]"
            tabIndex={0}
          >
            <div className="mb-4 text-blue-600 dark:text-blue-400 flex justify-center">
              <GraduationCap size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">Education</h3>
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
            <div className="mb-4 text-indigo-600 dark:text-indigo-400 flex justify-center">
              <Award size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">Certifications</h3>
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
            <div className="mb-4 text-teal-600 dark:text-teal-400 flex justify-center">
              <Code size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">Key Strengths</h3>
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

        {/* Content section with accordion styles for better organization */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-10 transform transition-all duration-500 hover:shadow-lg border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
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
            className={`mt-4 space-y-4 transition-all duration-300 overflow-hidden ${
              expandedSection === 'journey' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {/* Formatted text with better visual structure */}
            <div className="prose max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-3">
                My path into data science wasn't traditional. Starting with Communication Science at RIT, 
                I later transferred to UW-Madison for International Studies. It was during my undergraduate 
                years I discovered a passion for data analysis, initially through class projects and 
                self-exploration with Excel.
              </p>
              
              <div className="flex items-start my-4 p-4 bg-blue-50/70 dark:bg-blue-900/20 rounded-lg">
                <div className="mr-3 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400">
                  <Lightbulb size={20} aria-hidden="true" />
                </div>
                <p className="m-0">
                  This interest grew, leading me to teach myself SQL and eventually pursue a Master's in 
                  Information Science at UW-Madison, which formalized my skills.
                </p>
              </div>
              
              <p className="mb-3">
                Real growth came from hands-on projects: predicting employee churn (achieving 98% accuracy), 
                analyzing student performance data, and building a complex crypto market data pipeline with web scraping 
                and automated reporting.
              </p>
              
              <p className="mb-3">
                My focus shifted towards data engineering as I found building efficient data processing 
                systems deeply satisfying, especially when handling large datasets like the 7.7 million 
                records in the Traffic Accident Analytics project. SQL, particularly CTEs and window 
                functions, became a favorite tool.
              </p>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2 my-4">
                <p className="italic text-gray-700 dark:text-gray-300">
                  "My diverse background offers a unique perspective, helping translate technical results 
                  into actionable business strategies. I embrace AI tools to accelerate learning and tackle 
                  complex challenges faster."
                </p>
              </div>
              
              <p className="mb-3">
                This unconventional journey has shaped my problem-solving approach, 
                blending technical expertise with a strong understanding of context and communication.
              </p>
            </div>
            
            <blockquote className="italic border-l-4 border-blue-600 pl-4 py-3 my-4 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 rounded-r-lg text-pretty">
              "The journey continues. I'm currently deepening my skills in Tableau, Excel, and PostgreSQL. 
              The constant learning and problem-solving are what I love about this field."
            </blockquote>
          </div>
        </div>

        {/* Learning Journey & Approach Section with more visual elements */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 shadow-md transform transition-all duration-500 hover:shadow-lg border border-indigo-100 dark:border-indigo-900/50 max-w-4xl mx-auto">
          <div className="flex items-center justify-between cursor-pointer" 
            onClick={() => toggleSection('learning')}
            onKeyDown={(e) => e.key === 'Enter' && toggleSection('learning')}
            tabIndex={0}
            role="button"
            aria-expanded={expandedSection === 'learning'}
            aria-controls="learning-content"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 flex items-center">
              <Lightbulb className="mr-3 text-indigo-600 dark:text-indigo-400" size={24} aria-hidden="true" />
              Learning Journey & Approach
            </h3>
            {expandedSection === 'learning' ? 
              <ChevronUp className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" /> : 
              <ChevronDown className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            }
          </div>
          
          <div 
            id="learning-content" 
            className={`mt-6 transition-all duration-300 overflow-hidden ${
              expandedSection === 'learning' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {/* Visual blockquote with enhanced styling */}
            <div className="learning-journey-quote mb-6">
              <div className="flex items-start justify-center">
                <div className="flex-shrink-0 mr-4">
                  <Lightbulb size={28} className="icon" aria-hidden="true" />
                </div>
                <blockquote className="text-pretty">
                  "I believe in continuous learning and practical application. Each project represents both a learning opportunity and a chance to solve real-world problems with data."
                </blockquote>
              </div>
            </div>
            
            <div className="content-block prose max-w-none text-gray-600 dark:text-gray-300 mb-6 text-center">
              <p>
                As someone actively developing my skills, I focus on projects that challenge me to grow while delivering practical value. 
                I embrace transparency in my learning journey, utilizing online resources, courses, and AI assistance to tackle complex problems, 
                always aiming to deepen my understanding and capabilities.
              </p>
            </div>
            
            {/* Interest areas with enhanced visual presentation */}
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg shadow-sm">
              <h4 className="font-medium mb-4 text-gray-800 dark:text-gray-200 text-lg border-b border-gray-200 dark:border-gray-700 pb-2 text-center">Current Learning Focus Areas:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50/80 dark:bg-indigo-900/30 p-4 rounded-lg">
                  <h5 className="flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-semibold mb-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center mr-2">
                      <span className="text-indigo-600 dark:text-indigo-300">01</span>
                    </div>
                    Statistics & Mathematics
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    Strengthening my foundation in statistical concepts and mathematical principles for more robust data analysis.
                  </p>
                </div>
                
                <div className="bg-blue-50/80 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h5 className="flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300">02</span>
                    </div>
                    Advanced Machine Learning
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    Developing skills in deep learning, natural language processing, and MLOps for sophisticated modeling.
                  </p>
                </div>
                
                <div className="bg-purple-50/80 dark:bg-purple-900/30 p-4 rounded-lg">
                  <h5 className="flex items-center justify-center text-purple-700 dark:text-purple-300 font-semibold mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300">03</span>
                    </div>
                    Data Pipeline Development
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    Creating sophisticated ETL processes and data pipelines for efficient, automated data workflows.
                  </p>
                </div>
                
                <div className="bg-teal-50/80 dark:bg-teal-900/30 p-4 rounded-lg">
                  <h5 className="flex items-center justify-center text-teal-700 dark:text-teal-300 font-semibold mb-2">
                    <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center mr-2">
                      <span className="text-teal-600 dark:text-teal-300">04</span>
                    </div>
                    Open-Source Contributions
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    Contributing to open-source data projects to enhance my skills and give back to the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Next Section Navigation */}
        <div className="next-section-nav mt-10">
          <button 
            onClick={goToNextSection}
            className="next-section-button"
            aria-label="Go to Experience section"
          >
            <span>Explore My Experience</span>
            <ArrowRight size={16} className="ml-2" aria-hidden="true" />
          </button>
        </div>
      </div>
      
      {/* Section Navigation Dots */}
      <div className="section-navigator">
        <a href="#hero" className={expandedSection === 'hero' ? 'active' : ''}>
          <span className="tooltip">Home</span>
        </a>
        <a href="#about" className={expandedSection === 'about' ? 'active' : ''}>
          <span className="tooltip">About</span>
        </a>
        <a href="#experience" className={expandedSection === 'experience' ? 'active' : ''}>
          <span className="tooltip">Experience</span>
        </a>
        <a href="#projects" className={expandedSection === 'projects' ? 'active' : ''}>
          <span className="tooltip">Projects</span>
        </a>
        <a href="#skills" className={expandedSection === 'skills' ? 'active' : ''}>
          <span className="tooltip">Skills</span>
        </a>
        <a href="#contact" className={expandedSection === 'contact' ? 'active' : ''}>
          <span className="tooltip">Contact</span>
        </a>
      </div>
    </section>
  );
};

export default About;