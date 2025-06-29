import React from 'react';
import { Github, Linkedin, Download, MapPin, ArrowRight, TrendingUp, Database, Award, Code, Users, BarChart, Cpu, Target, Layers, Zap, Globe, Brain } from 'lucide-react';
import CaseStudy from './CaseStudy';
import TrafficAnalyticsCase from './TrafficAnalyticsCase';
import SkillsVisualization from './SkillsVisualization';
import TechnicalBlog from './TechnicalBlog';
import AnimatedMetrics from './AnimatedMetrics';

const Hero: React.FC = () => {
  const [expandedCase, setExpandedCase] = React.useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto container-responsive py-16 sm:py-20">
      
      {/* Minimalist Profile Section */}
      <div className="mb-16">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-200 dark:border-gray-800 mb-6">
            <img 
              src="/profile-image.jpg" 
              alt="Tobin Zolkowski" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iMzAiIHI9IjEyIiBmaWxsPSIjOUM5Qzk2Ii8+CjxwYXRoIGQ9Ik0yMCA2MEMyMCA1Mi4yNjggMjYuMjY4IDQ2IDM0IDQ2SDQ2QzUzLjczMiA0NiA2MCA1Mi4yNjggNjAgNjBWNjBIMjBWNjBaIiBmaWxsPSIjOUM5Qzk2Ii8+Cjwvc3ZnPgo=";
              }}
            />
          </div>
          
          <h1 className="mb-4">Tobin Zolkowski</h1>
          <p className="text-large text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
            Senior Data Analyst specializing in machine learning, predictive analytics, and business intelligence
          </p>
          
          <div className="flex items-center space-x-6 text-small text-gray-500 dark:text-gray-500 mb-8">
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              Madison, WI
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Available
            </div>
          </div>

          <a 
            href="/Tobin_Zolkowski_Data_Professional_Resume_2025.pdf" 
            download
            className="minimal-button"
          >
            <Download size={16} className="mr-2" />
            Resume
          </a>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-semibold mb-1">98%</div>
            <div className="text-small text-gray-600 dark:text-gray-400">Model Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-semibold mb-1">7.7M</div>
            <div className="text-small text-gray-600 dark:text-gray-400">Records Analyzed</div>
          </div>
          <div>
            <div className="text-2xl font-semibold mb-1">35%</div>
            <div className="text-small text-gray-600 dark:text-gray-400">Cost Reduction</div>
          </div>
          <div>
            <div className="text-2xl font-semibold mb-1">4+</div>
            <div className="text-small text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section id="experience" className="mb-20">
        <h2 className="mb-4">Experience</h2>
        <div className="section-divider"></div>
        
        <div className="space-y-8">
          <div className="minimal-card p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3>Data Analyst</h3>
              <div className="text-small text-gray-500">Jul 2023 - Present</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
              Indiana University School of Medicine
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Transforming complex biomedical datasets into meaningful insights through data mining and statistical analysis. 
              Developing ETL pipelines improving data quality by 35%. Expert in healthcare analytics and regulatory compliance.
            </p>
          </div>

          <div className="minimal-card p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3>Business Data Analyst Intern</h3>
              <div className="text-small text-gray-500">Jul 2022 - Sep 2022</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
              Telkomsel
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Applied business intelligence and data visualization in enterprise telecommunications environment. 
              Built executive KPI dashboards using Tableau and advanced analytics.
            </p>
          </div>

          <div className="minimal-card p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3>Data Manager Intern</h3>
              <div className="text-small text-gray-500">Jun 2021 - Aug 2021</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
              University of Wisconsin-Madison
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Implemented data governance frameworks and quality assurance protocols for research data. 
              Developed data standardization procedures and metadata management systems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-20">
        <h2 className="mb-4">Technical Skills</h2>
        <div className="section-divider"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-6">Data Science & ML</h3>
            <div className="space-y-4">
              {[
                { name: 'Python (Pandas, NumPy, Scikit-Learn)', level: 80 },
                { name: 'SQL (MySQL, PostgreSQL, BigQuery)', level: 85 },
                { name: 'Machine Learning & MLOps', level: 70 },
                { name: 'Statistical Analysis', level: 75 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-small">{skill.name}</span>
                    <span className="text-small text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                    <div 
                      className="bg-black dark:bg-white h-1 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-6">Business Intelligence</h3>
            <div className="space-y-4">
              {[
                { name: 'Tableau & Power BI', level: 85 },
                { name: 'Excel (Advanced)', level: 85 },
                { name: 'Git/GitHub', level: 70 },
                { name: 'ETL/Data Engineering', level: 65 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-small">{skill.name}</span>
                    <span className="text-small text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                    <div 
                      className="bg-black dark:bg-white h-1 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Methodologies */}
        <div className="mt-12">
          <h3 className="mb-6">Methodologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="minimal-card p-6 text-center">
              <BarChart size={24} className="mx-auto mb-4" />
              <h4 className="font-medium mb-3">Statistical Analysis</h4>
              <ul className="text-small text-gray-600 dark:text-gray-400 space-y-1">
                <li>Hypothesis Testing</li>
                <li>Regression Analysis</li>
                <li>ANOVA</li>
                <li>Bayesian Statistics</li>
              </ul>
            </div>
            
            <div className="minimal-card p-6 text-center">
              <Brain size={24} className="mx-auto mb-4" />
              <h4 className="font-medium mb-3">Machine Learning</h4>
              <ul className="text-small text-gray-600 dark:text-gray-400 space-y-1">
                <li>Supervised Learning</li>
                <li>Feature Engineering</li>
                <li>Model Validation</li>
                <li>Hyperparameter Tuning</li>
              </ul>
            </div>
            
            <div className="minimal-card p-6 text-center">
              <Cpu size={24} className="mx-auto mb-4" />
              <h4 className="font-medium mb-3">Data Engineering</h4>
              <ul className="text-small text-gray-600 dark:text-gray-400 space-y-1">
                <li>ETL Pipelines</li>
                <li>Data Warehousing</li>
                <li>API Integration</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h2 className="mb-4">Featured Projects</h2>
        <div className="section-divider"></div>
        
        <div className="space-y-8">
          {/* Case Studies */}
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
              description: "Advanced SQL analytics achieving 93.41% data quality. Identified 12.36 year development gap through demographic analysis and quantified COVID-19 impact across 183 countries.",
              tags: ["SQL", "Statistical Analysis", "Healthcare"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/world_life_expectancy",
              icon: <BarChart size={20} />
            },
            {
              title: "Customer Intelligence & Marketing Analytics", 
              description: "Machine learning customer segmentation using K-means clustering and A/B testing frameworks. Comprehensive marketing attribution analysis with CLV modeling.",
              tags: ["Python", "Machine Learning", "Customer Analytics"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/ufood_analysis",
              demo: "https://tzolkowski96.github.io/analyst-builder-food-marketing-project/",
              icon: <Target size={20} />
            },
            {
              title: "Automated Data Intelligence Platform",
              description: "End-to-end Flask application for automated web data extraction with NLP, sentiment analysis, and real-time business intelligence dashboards.",
              tags: ["Python", "Flask", "NLP", "Business Intelligence"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/advanced_web_scraping_toolkit",
              icon: <Globe size={20} />
            }
          ].map((project, index) => (
            <div key={project.title} className="minimal-card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded flex items-center justify-center flex-shrink-0">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-small bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-small text-gray-600 dark:text-gray-400 hover:opacity-70"
                      >
                        <Github size={16} className="inline mr-1" /> Code
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="text-small text-gray-600 dark:text-gray-400 hover:opacity-70"
                        >
                          Demo
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
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:opacity-70"
          >
            View all projects 
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </section>

      {/* Technical Writing */}
      <section className="mb-20">
        <TechnicalBlog />
      </section>

      {/* About Section */}
      <section id="about" className="mb-20">
        <h2 className="mb-4">About</h2>
        <div className="section-divider"></div>
        
        <div className="space-y-8">
          <div className="minimal-card p-6">
            <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
              "I believe in continuous learning and practical application. Each project represents both 
              a learning opportunity and a chance to solve real-world problems with data."
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                  <div className="font-medium">Master of Science, Information Science</div>
                  <div className="text-gray-600 dark:text-gray-400">University of Wisconsin-Madison</div>
                  <div className="text-small text-gray-500">Data Science, Machine Learning, Statistical Analysis</div>
                </div>
                <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                  <div className="font-medium">Bachelor of Arts, International Studies</div>
                  <div className="text-gray-600 dark:text-gray-400">University of Wisconsin-Madison</div>
                  <div className="text-small text-gray-500">Research Methods, Quantitative Analysis</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4">Certifications</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="text-small">
                  • <a 
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70"
                  >
                    Google Advanced Data Analytics
                  </a>
                </li>
                <li className="text-small">
                  • <a 
                    href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70"
                  >
                    Data Analyst in Tableau Track
                  </a>
                </li>
                <li className="text-small">
                  • <a 
                    href="https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70"
                  >
                    Data Analyst in SQL Track
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Available For */}
      <section className="mb-20">
        <h2 className="mb-4">Available For</h2>
        <div className="section-divider"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Senior Data Analyst Roles", desc: "Advanced analytics and statistical modeling", icon: <Users size={20} /> },
            { title: "Data Science Projects", desc: "ML and predictive analytics consulting", icon: <Brain size={20} /> },
            { title: "Business Intelligence", desc: "Dashboard development and data strategy", icon: <BarChart size={20} /> },
            { title: "Data Engineering", desc: "ETL pipelines and data architecture", icon: <Layers size={20} /> }
          ].map((item) => (
            <div key={item.title} className="minimal-card p-4">
              <div className="flex items-center mb-2">
                <div className="mr-3">{item.icon}</div>
                <h3 className="text-small font-medium">{item.title}</h3>
              </div>
              <p className="text-small text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;