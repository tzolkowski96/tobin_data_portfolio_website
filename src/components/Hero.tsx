import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Calendar, ChevronRight } from 'lucide-react';
import CaseStudy from './CaseStudy';
import TrafficAnalyticsCase from './TrafficAnalyticsCase';
import SkillsVisualization from './SkillsVisualization';
import TechnicalBlog from './TechnicalBlog';
import AnimatedMetrics from './AnimatedMetrics';

const Hero: React.FC = () => {
  const [expandedCase, setExpandedCase] = React.useState<string | null>(null);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      
      {/* Enhanced Profile Section */}
      <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6 mb-12 group">
        <div className="w-24 h-24 mx-auto sm:mx-0 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800 flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-400 dark:group-hover:border-gray-600">
          <img 
            src="/profile-image.jpg" 
            alt="Tobin Zolkowski" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00OCA0OEM1NC42Mjc0IDQ4IDYwIDQyLjYyNzQgNjAgMzZDNjAgMjkuMzcyNiA1NC42Mjc0IDI0IDQ4IDI0QzQxLjM3MjYgMjQgMzYgMjkuMzcyNiAzNiAzNkMzNiA0Mi42Mjc0IDQxLjM3MjYgNDggNDggNDhaIiBmaWxsPSIjOUM5Qzk2Ii8+CjxwYXRoIGQ9Ik0yNCA3MkMyNCA2NC4yNjggMzAuMjY4IDU4IDM4IDU4SDU4QzY1LjczMiA1OCA3MiA2NC4yNjggNzIgNzJWNzJIMjRWNzJaIiBmaWxsPSIjOUM5Qzk2Ii8+Cjwvc3ZnPgo=";
            }}
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-3 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-semibold transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-300 text-center sm:text-left">
              Tobin Zolkowski
            </h1>
            <a 
              href="/Tobin_Zolkowski_Data_Professional_Resume_2025.pdf" 
              download
              className="inline-flex items-center px-3 py-1.5 text-sm bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-80 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <Download size={14} className="mr-1.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              Resume
            </a>
          </div>
          
          <p className="text-base sm:text-lg leading-relaxed mb-6 transition-colors duration-300 text-center sm:text-left">
            <strong>Senior Data Analyst</strong> specializing in <strong>machine learning</strong>, <strong>predictive analytics</strong>, and <strong>business intelligence</strong>. 
            Expert in <strong>Python</strong>, <strong>SQL</strong>, and <strong>data engineering</strong> with proven track record of delivering actionable insights.
          </p>
          
          {/* Key Achievements Highlight */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-lg sm:text-xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">98%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight">ML Model Accuracy</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-lg sm:text-xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">7.7M</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight">Records Analyzed</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-lg sm:text-xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">35%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight">Cost Reduction</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-lg sm:text-xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">4+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center text-sm text-gray-600 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 justify-center sm:justify-start">
              <MapPin size={14} className="mr-1" />
              Madison, WI
            </div>
            <div className="flex items-center group justify-center sm:justify-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <Calendar size={14} className="mr-1" />
              <span className="hidden sm:inline">Open to Data Science & Analytics Roles</span>
              <span className="sm:hidden">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Professional Quote */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-12 border-l-4 border-gray-900 dark:border-white transition-all duration-300 hover:border-l-8 hover:shadow-lg">
        <blockquote className="text-center text-gray-600 dark:text-gray-400 italic text-lg leading-relaxed">
          "Transforming complex datasets into strategic business value through advanced analytics, statistical modeling, and data-driven decision making."
        </blockquote>
      </div>

      {/* Enhanced Experience Timeline */}
      <div id="experience" className="mb-20">
        <h2 className="text-xl font-semibold mb-8 relative">
          Professional Experience
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 group">
            <div className="absolute w-3 h-3 bg-gray-900 dark:bg-white rounded-full -left-[7px] top-2 transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
              <h3 className="font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Data Analyst</h3>
              <span className="text-sm text-gray-500">July 2023 - Present</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Indiana University School of Medicine | Department of Medical and Molecular Genetics</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transforming complex biomedical datasets into meaningful insights through <strong>data mining</strong> and <strong>statistical analysis</strong>. 
              Developing <strong>ETL pipelines</strong> improving data quality by 35%. Expert in <strong>healthcare analytics</strong>, 
              <strong>regulatory compliance</strong>, and <strong>clinical data management</strong> with HIPAA requirements.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 group">
            <div className="absolute w-3 h-3 bg-gray-900 dark:bg-white rounded-full -left-[7px] top-2 transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
              <h3 className="font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Business Data Analyst Intern</h3>
              <span className="text-sm text-gray-500">July 2022 - Sept 2022</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Telkomsel | Indonesia's largest telecommunications company</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Applied <strong>business intelligence</strong> and <strong>data visualization</strong> in enterprise telecommunications environment. 
              Built executive <strong>KPI dashboards</strong> using <strong>Tableau</strong> and <strong>advanced analytics</strong>. 
              Led <strong>customer segmentation</strong> projects and <strong>marketing attribution</strong> analysis driving strategic decisions.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 group">
            <div className="absolute w-3 h-3 bg-gray-900 dark:bg-white rounded-full -left-[7px] top-2 transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
              <h3 className="font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Data Manager Intern</h3>
              <span className="text-sm text-gray-500">June 2021 - Aug 2021</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">University of Wisconsin-Madison</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Implemented <strong>data governance</strong> frameworks and <strong>quality assurance</strong> protocols for research data. 
              Developed <strong>data standardization</strong> procedures and <strong>metadata management</strong> systems. 
              Created comprehensive <strong>data documentation</strong> and training programs.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 group">
            <div className="absolute w-3 h-3 bg-gray-900 dark:bg-white rounded-full -left-[7px] top-2 transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
              <h3 className="font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">IT Support Assistant</h3>
              <span className="text-sm text-gray-500">Sept 2019 - April 2021</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">University of Wisconsin-Madison</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Provided technical support and <strong>database administration</strong> for academic systems. 
              Specialized in <strong>assistive technologies</strong> and maintained <strong>SQL databases</strong>. 
              Implemented <strong>process automation</strong> and developed comprehensive technical documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Animated Metrics */}
      <AnimatedMetrics />

      {/* Enhanced Skills with Interactive Visualization */}
      <div id="skills" className="mb-20">
        <h2 className="text-xl font-semibold mb-8 relative">
          Technical Expertise & Data Science Stack
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-6">
            <h3 className="font-medium mb-4">Data Science & Machine Learning</h3>
            <div className="space-y-4">
              {[
                { name: 'Python (Pandas, NumPy, Scikit-Learn)', level: 80, projects: 8 },
                { name: 'SQL (MySQL, PostgreSQL, BigQuery)', level: 85, projects: 12 },
                { name: 'JavaScript, HTML, CSS', level: 50, projects: 3 },
                { name: 'Machine Learning & MLOps', level: 70, projects: 4 }
              ].map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-black dark:bg-white h-2 rounded-full transition-all duration-700 ease-out hover:bg-blue-600 dark:hover:bg-blue-400"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Used in {skill.projects} projects
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium mb-4">Business Intelligence & DevOps</h3>
            <div className="space-y-4">
              {[
                { name: 'Tableau & Power BI', level: 85, projects: 5 },
                { name: 'Excel (Advanced)', level: 85, projects: 10 },
                { name: 'Git/GitHub & Version Control', level: 70, projects: 8 },
                { name: 'ETL/Data Engineering', level: 65, projects: 6 }
              ].map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-black dark:bg-white h-2 rounded-full transition-all duration-700 ease-out hover:bg-blue-600 dark:hover:bg-blue-400"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${(index + 4) * 200}ms`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Used in {skill.projects} projects
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-300">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic mb-2">
              Proficiency levels based on real-world project implementation and business impact
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-6 text-xs text-gray-500 dark:text-gray-500">
              <span>• <strong>Advanced Analytics</strong></span>
              <span>• <strong>Statistical Modeling</strong></span>
              <span>• <strong>Data Architecture</strong></span>
              <span>• <strong>Predictive Analytics</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Data Science Competencies */}
      <div className="mb-20">
        <h2 className="text-xl font-semibold mb-8 relative">
          Data Science Methodologies
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              category: "Statistical Analysis",
              skills: ["Hypothesis Testing", "Regression Analysis", "ANOVA", "Chi-Square Tests", "Bayesian Statistics"],
              icon: "📊"
            },
            {
              category: "Machine Learning",
              skills: ["Supervised Learning", "Random Forest", "Feature Engineering", "Model Validation", "Hyperparameter Tuning"],
              icon: "🤖"
            },
            {
              category: "Data Engineering",
              skills: ["ETL Pipelines", "Data Warehousing", "API Integration", "Data Quality", "Performance Optimization"],
              icon: "⚙️"
            }
          ].map((competency, index) => (
            <div key={competency.category} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg group">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">{competency.icon}</div>
                <h3 className="font-medium text-lg group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {competency.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {competency.skills.map((skill) => (
                  <li key={skill} className="text-sm text-gray-600 dark:text-gray-400 text-center hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
          <h4 className="font-medium mb-4 text-center">Industry Applications & Domain Expertise</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 text-center text-xs sm:text-sm">
            {[
              "Healthcare Analytics", "Telecommunications", "Employee Analytics", "Traffic Safety",
              "Marketing Analytics", "Risk Assessment", "Predictive Maintenance", "Customer Segmentation"
            ].map((domain, index) => (
              <div key={domain} className="bg-white dark:bg-gray-800 p-2 sm:p-3 rounded border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105 group">
                <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {domain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Featured Projects */}
      <div id="projects" className="mb-20">
        <h2 className="text-xl font-semibold mb-8 relative">
          Featured Projects
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        
        <div className="space-y-8">
          {/* Detailed Case Studies */}
          <CaseStudy 
            isExpanded={expandedCase === 'churn'} 
            onToggle={() => setExpandedCase(expandedCase === 'churn' ? null : 'churn')} 
          />

          <TrafficAnalyticsCase
            isExpanded={expandedCase === 'traffic'}
            onToggle={() => setExpandedCase(expandedCase === 'traffic' ? null : 'traffic')}
          />

          {/* Additional Projects */}
          {[
            {
              title: "Global Health Data Intelligence",
              description: "Advanced SQL analytics and statistical modeling achieving 93.41% data quality. Identified 12.36 year development gap through demographic analysis and quantified COVID-19 impact across 183 countries using time-series analysis.",
              tags: ["Advanced SQL", "Statistical Analysis", "Healthcare Analytics", "Data Quality"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/world_life_expectancy",
              icon: "📊"
            },
            {
              title: "Customer Intelligence & Marketing Analytics", 
              description: "Machine learning customer segmentation using K-means clustering and A/B testing frameworks. Comprehensive marketing attribution analysis with customer lifetime value modeling and predictive analytics.",
              tags: ["Python", "Machine Learning", "Customer Analytics", "Marketing Science"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/ufood_analysis",
              demo: "https://tzolkowski96.github.io/analyst-builder-food-marketing-project/",
              icon: "🎯"
            },
            {
              title: "Automated Data Intelligence Platform",
              description: "End-to-end Flask application for automated web data extraction with natural language processing, sentiment analysis, and real-time business intelligence dashboards. Features advanced pattern recognition and multi-format reporting.",
              tags: ["Python", "Flask", "NLP", "Business Intelligence", "Automation"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/advanced_web_scraping_toolkit",
              icon: "🕸️"
            }
          ].map((project, index) => (
            <div key={project.title} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <span className="text-2xl">{project.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-1.5 sm:px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 ml-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm transition-all duration-300 hover:scale-105"
                      >
                        <Github size={14} className="mr-1" /> Code
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm transition-all duration-300 hover:scale-105"
                        >
                          <ExternalLink size={14} className="mr-1" /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://github.com/tzolkowski96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline group transition-all duration-300 hover:scale-105"
          >
            View Complete Data Science Portfolio (14+ Projects) 
            <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Enhanced Interactive Skills Visualization */}
      <div className="mb-20">
        <h2 className="text-xl font-semibold mb-8 relative">
          Interactive Technical Proficiency Analysis
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        <SkillsVisualization />
      </div>

      {/* Enhanced Technical Writing */}
      <div className="mb-20">
        <TechnicalBlog />
      </div>

      {/* Enhanced About Section */}
      <div id="about" className="mb-20">
        <h2 className="text-xl font-semibold mb-8 relative">
          About
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border-l-4 border-gray-900 dark:border-white transition-all duration-300 hover:border-l-8 hover:shadow-lg">
            <p className="text-gray-600 dark:text-gray-400 italic mb-4 text-lg leading-relaxed">
              "I believe in continuous learning and practical application. Each project represents both 
              a learning opportunity and a chance to solve real-world problems with data."
            </p>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey into <strong>data science</strong> and <strong>analytics</strong> began during my undergraduate studies, where I discovered 
              the power of data-driven insights through academic research projects. This passion led me to pursue specialized training in 
              <strong>statistical analysis</strong>, <strong>machine learning</strong>, and <strong>business intelligence</strong>.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Through intensive study and hands-on application, I developed expertise in <strong>Python programming</strong>, 
              <strong>advanced SQL</strong>, and <strong>statistical modeling</strong>. My Master's in Information Science from UW-Madison 
              provided the theoretical foundation, while real-world projects in <strong>predictive analytics</strong>, <strong>healthcare data</strong>, 
              and <strong>business intelligence</strong> built my practical expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4">
              <h3 className="font-medium mb-3">Educational Background</h3>
              <div className="space-y-3">
                {[
                  {
                    degree: "Master of Science, Information Science",
                    school: "University of Wisconsin-Madison",
                    focus: "Data Science, Machine Learning, Statistical Analysis, Information Systems"
                  },
                  {
                    degree: "Bachelor of Arts, International Studies", 
                    school: "University of Wisconsin-Madison",
                    focus: "Research Methods, Quantitative Analysis, Cross-Cultural Data Studies"
                  },
                  {
                    degree: "Communication Science Studies (2 years)",
                    school: "Rochester Institute of Technology",
                    focus: "Statistical Methods, Research Design, Analytical Foundations"
                  }
                ].map((edu, index) => (
                  <div key={index} className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 group">
                    <div className="font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{edu.degree}</div>
                    <div className="text-gray-600 dark:text-gray-400">{edu.school}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">{edu.focus}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium mb-3">Professional Certifications & Training</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {[
                  {
                    name: "Google Advanced Data Analytics Professional Certificate",
                    provider: "Coursera, 2023",
                    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY"
                  },
                  {
                    name: "Data Analyst Professional Track (Tableau Specialization)",
                    provider: "DataCamp, 2022-2023", 
                    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8"
                  },
                  {
                    name: "SQL Data Analyst Professional Track",
                    provider: "DataCamp, 2022-2023",
                    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d"
                  }
                ].map((cert, index) => (
                  <li key={index} className="group">
                    • <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300 group-hover:scale-105 inline-block"
                    >
                      {cert.name}
                    </a> ({cert.provider})
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Continuous Learning & Skill Development</h4>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Advanced Machine Learning: Deep learning and neural networks",
                    "Cloud Analytics: AWS, Azure data engineering and MLOps", 
                    "Big Data Technologies: Spark, Hadoop, distributed computing",
                    "Real-time Analytics: Streaming data and event-driven architecture"
                  ].map((focus, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                      <strong>{focus.split(':')[0]}:</strong> {focus.split(':')[1]}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Available For Section */}
      <div className="mb-20">
        <h2 className="text-xl font-semibold mb-6 relative">
          Open to Data Science & Analytics Opportunities
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Senior Data Analyst Roles", desc: "Advanced analytics, BI, and statistical modeling", icon: "💼" },
            { title: "Data Science Projects", desc: "Machine learning and predictive analytics consulting", icon: "📋" },
            { title: "Business Intelligence", desc: "Dashboard development and data strategy", icon: "🧠" },
            { title: "Data Engineering", desc: "ETL pipelines and data architecture", icon: "🤝" }
          ].map((item, index) => (
            <div key={item.title} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg hover:scale-105 group">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-3 transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                <h3 className="font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
          <h4 className="font-medium mb-4 text-center">Core Value Proposition</h4>
          <div className="text-center space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <p>✓ <strong>Proven Track Record:</strong> 98% model accuracy, 35% cost reduction, 7.7M+ records analyzed</p>
            <p>✓ <strong>Technical Excellence:</strong> Advanced Python, SQL, machine learning, and statistical analysis</p>
            <p>✓ <strong>Business Impact:</strong> Translating complex data into actionable insights and strategic value</p>
            <p>✓ <strong>Industry Experience:</strong> Healthcare, telecommunications, academic research, and enterprise analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;