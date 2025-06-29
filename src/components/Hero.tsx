import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      
      {/* Profile Section with Photo */}
      <div className="flex items-start space-x-6 mb-12">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800 flex-shrink-0">
          <img 
            src="/profile-image.jpg" 
            alt="Tobin Zolkowski" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00OCA0OEM1NC42Mjc0IDQ4IDYwIDQyLjYyNzQgNjAgMzZDNjAgMjkuMzcyNiA1NC42Mjc0IDI0IDQ4IDI0QzQxLjM3MjYgMjQgMzYgMjkuMzcyNiAzNiAzNkMzNiA0Mi42Mjc0IDQxLjM3MjYgNDggNDggNDhaIiBmaWxsPSIjOUM5Qzk2Ii8+CjxwYXRoIGQ9Ik0yNCA3MkMyNCA2NC4yNjggMzAuMjY4IDU4IDM4IDU4SDU4QzY1LjczMiA1OCA3MiA2NC4yNjggNzIgNzJWNzJIMjRWNzJaIiBmaWxsPSIjOUM5Qzk2Ii8+Cjwvc3ZnPgo=";
            }}
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Tobin Zolkowski</h1>
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center px-3 py-1.5 text-sm bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-80 transition-opacity"
            >
              <Download size={14} className="mr-1.5" />
              Resume
            </a>
          </div>
          
          <p className="text-lg leading-relaxed mb-4">
            Data professional focused on <strong>data analysis</strong>, <strong>SQL</strong>, and <strong>machine learning</strong>. 
            With a growth mindset and commitment to continuous learning, I leverage data to drive insights and solve problems.
          </p>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              Madison, WI
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              Available for opportunities
            </div>
          </div>
        </div>
      </div>

      {/* Professional Quote */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-12">
        <blockquote className="text-center text-gray-600 dark:text-gray-400 italic">
          "Continuously learning and growing as a data professional, turning data into actionable insights."
        </blockquote>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-semibold text-black dark:text-white">98%</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">ML Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-black dark:text-white">7.7M</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Records Analyzed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-black dark:text-white">4+</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-black dark:text-white">14+</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div id="experience" className="mb-20">
        <h2 className="text-xl font-semibold mb-8">Professional Experience</h2>
        
        <div className="space-y-6">
          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Data Analyst</h3>
              <span className="text-sm text-gray-500">July 2023 - Present</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Indiana University School of Medicine | Department of Medical and Molecular Genetics</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transforming complex biomedical datasets into meaningful insights. Developing ETL processes 
              improving data quality by 35%. Bridging technical and clinical requirements while ensuring 
              HIPAA compliance in all data handling.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Business Data Analyst Intern</h3>
              <span className="text-sm text-gray-500">July 2022 - Sept 2022</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Telkomsel | Indonesia's largest telecommunications company</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Applied data analysis in large-scale business environment. Built executive decision-making 
              dashboards using Tableau. Collaborated with marketing teams to optimize campaigns and created 
              reports influencing strategic business decisions.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Data Manager Intern</h3>
              <span className="text-sm text-gray-500">June 2021 - Aug 2021</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">University of Wisconsin-Madison</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Implemented data quality control measures and developed comprehensive documentation for data management. 
              Standardized data entry procedures and created training materials for research assistants.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">IT Support Assistant</h3>
              <span className="text-sm text-gray-500">Sept 2019 - April 2021</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">University of Wisconsin-Madison</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Provided technical support for faculty, staff, and students. Specialized in assistive technologies
              and maintained inventory databases. Implemented automation solutions and developed technical 
              documentation and user guides.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Visualization - Updated with realistic assessments */}
      <div id="skills" className="mb-20">
        <h2 className="text-xl font-semibold mb-8">Core Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-4">Programming & Data Analysis</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Python (Pandas, NumPy, Scikit-Learn)</span>
                  <span className="text-gray-500">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>SQL (MySQL, PostgreSQL)</span>
                  <span className="text-gray-500">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>JavaScript, HTML, CSS</span>
                  <span className="text-gray-500">Foundational</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Machine Learning</span>
                  <span className="text-gray-500">Foundational</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Visualization & Tools</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tableau</span>
                  <span className="text-gray-500">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Excel (Advanced)</span>
                  <span className="text-gray-500">Proficient</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Git/GitHub</span>
                  <span className="text-gray-500">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>ETL/Data Pipelines</span>
                  <span className="text-gray-500">Foundational</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 italic text-center">
            Self-assessment based on project experience and continuous learning journey
          </p>
        </div>
      </div>

      {/* Featured Projects - Updated with accurate information */}
      <div id="projects" className="mb-20">
        <h2 className="text-xl font-semibold mb-8">Featured Projects</h2>
        
        <div className="space-y-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"/>
                  <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">Employee Churn Prediction</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Developed ML models with <strong>98% accuracy</strong> using Random Forest, Logistic Regression, 
                  and Gradient Boosting. Identified key churn drivers and provided actionable HR recommendations.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <a 
                    href="https://github.com/tzolkowski96/tzolkowski96/tree/main/Employee-Churn-Prediction"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    <Github size={14} className="mr-1" /> Code
                  </a>
                  <a 
                    href="https://tzolkowski96.github.io/Salifort-Motors-Project/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    <ExternalLink size={14} className="mr-1" /> Demo
                  </a>
                  <span className="text-gray-500">Python • ML • Scikit-Learn</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">Traffic Accident Analytics Engine</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Analysis of <strong>7.7M US traffic records</strong> with statistical validation (chi-square, ANOVA). 
                  Random Forest models achieving 78% accuracy with memory optimization.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <a 
                    href="https://github.com/tzolkowski96/tzolkowski96/tree/main/us_accidents_analysis"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    <Github size={14} className="mr-1" /> Code
                  </a>
                  <span className="text-gray-500">Python • Big Data • Geospatial</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">World Life Expectancy Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Advanced SQL analysis achieving <strong>93.41% data quality</strong>. Identified 12.36 year development gap 
                  and quantified COVID-19 impact across 183 countries.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <a 
                    href="https://github.com/tzolkowski96/tzolkowski96/tree/main/world_life_expectancy"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    <Github size={14} className="mr-1" /> Code
                  </a>
                  <span className="text-gray-500">SQL • Data Cleaning • Health Data</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="m22 21-3-3"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">UFood Customer Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Marketing analytics using K-means clustering and A/B testing for customer segmentation. 
                  Complete marketing strategy framework with CLV analysis.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <a 
                    href="https://github.com/tzolkowski96/tzolkowski96/tree/main/ufood_analysis"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    <Github size={14} className="mr-1" /> Code
                  </a>
                  <a 
                    href="https://tzolkowski96.github.io/analyst-builder-food-marketing-project/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    <ExternalLink size={14} className="mr-1" /> Demo
                  </a>
                  <span className="text-gray-500">Python • Marketing • Clustering</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">Web Data Insights Explorer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Versatile Flask application for web scraping with pattern-based extraction, NLP sentiment analysis, 
                  and multi-format visualizations. Ethical scraping with robots.txt compliance.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <a 
                    href="https://github.com/tzolkowski96/tzolkowski96/tree/main/advanced_web_scraping_toolkit"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    <Github size={14} className="mr-1" /> Code
                  </a>
                  <span className="text-gray-500">Python • Flask • Web Scraping • NLP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://github.com/tzolkowski96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all 14+ projects on GitHub <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>

      {/* About Section - Updated with accurate education and background */}
      {/* Featured Writing */}
      <div className="mb-20">
        <h2 className="text-xl font-semibold mb-8">Featured Writing</h2>
        
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-2">From Drag and Drop to Code: My Tableau to LookML Journey</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                A personal journey exploring the transition from visual BI tools to code-based analytics with LookML.
                This article discusses the learning process, challenges, and benefits of expanding beyond drag-and-drop tools.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a 
                  href="https://medium.com/@grateful_aqua_goat_147/from-drag-and-drop-to-code-my-tableau-to-lookml-journey-fde0165ada94"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  <ExternalLink size={14} className="mr-1" /> Read Article
                </a>
                <span className="text-gray-500">Tableau • LookML • Data Visualization</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://medium.com/@grateful_aqua_goat_147" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all articles on Medium <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>

      <div id="about" className="mb-20">
        <h2 className="text-xl font-semibold mb-8">About</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-400 italic mb-4">
              "I believe in continuous learning and practical application. Each project represents both 
              a learning opportunity and a chance to solve real-world problems with data."
            </p>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400">
            My path into data science wasn't traditional. Starting with Communication Science at RIT, I later transferred to 
            UW-Madison for International Studies. During my undergraduate years I discovered a passion for data analysis, 
            initially through class projects and self-exploration with Excel.
          </p>
          
          <p className="text-gray-600 dark:text-gray-400">
            This interest grew, leading me to teach myself SQL and eventually pursue a Master's in Information Science at 
            UW-Madison, which formalized my skills. Real growth came from hands-on projects: predicting employee churn, 
            analyzing student performance data, and building complex data pipelines.
          </p>
          
          <div>
            <h3 className="font-medium mb-3">Educational Background</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                <div className="font-medium">Master of Science, Information Science</div>
                <div className="text-gray-600 dark:text-gray-400">University of Wisconsin-Madison</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">Focus: Data Analytics, Machine Learning, Information Systems</div>
              </div>
              <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                <div className="font-medium">Bachelor of Arts, International Studies</div>
                <div className="text-gray-600 dark:text-gray-400">University of Wisconsin-Madison</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">Concentration: Research Methods, Data Analysis</div>
              </div>
              <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                <div className="font-medium">Communication Science Studies (2 years)</div>
                <div className="text-gray-600 dark:text-gray-400">Rochester Institute of Technology</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 italic">
              Technical skills primarily built through self-directed learning and hands-on project work, 
              augmented by strategic use of AI tools for efficient development.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Certifications</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Advanced Data Analytics</a> (Coursera, 2023)</li>
              <li>• <a href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Data Analyst in Tableau Track</a> (DataCamp, 2022-2023)</li>
              <li>• <a href="https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Data Analyst in SQL Track</a> (DataCamp, 2022-2023)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Current Learning Focus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>JavaScript & TypeScript:</strong> Building interactive data visualizations</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Advanced Statistics:</strong> Deepening mathematical foundations</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>PostgreSQL & MSSQL:</strong> Expanding database expertise</p>
                <p className="text-gray-600 dark:text-gray-400"><strong>MLOps:</strong> Production machine learning systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available For Section */}
      <div className="mb-20">
        <h2 className="text-xl font-semibold mb-6">Available For</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="font-medium mb-2">Full-time Positions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Data analysis and visualization roles</p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="font-medium mb-2">Contract Projects</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Defined scope data projects</p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="font-medium mb-2">Consulting</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">ML implementation and optimization</p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="font-medium mb-2">Collaboration</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Data pipeline development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;