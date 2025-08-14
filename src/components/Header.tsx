import React from 'react';
import { Github, Linkedin, Download, MapPin, ArrowRight, Database, Code, BarChart, Target, Globe, Brain } from 'lucide-react';
import CaseStudy from './CaseStudy';
import TrafficAnalyticsCase from './TrafficAnalyticsCase';
import WorldLifeExpectancyCase from './WorldLifeExpectancyCase';
import UFoodCase from './UFoodCase';
import USHouseholdIncomeCase from './USHouseholdIncomeCase';
import TechnicalBlog from './TechnicalBlog';

const Hero: React.FC = () => {
  const [expandedCase, setExpandedCase] = React.useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto container-responsive py-16 sm:py-24 page-transition">
      
      {/* Profile Section */}
      <div className="mb-24 gradient-bg rounded-2xl p-8 sm:p-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-8 mb-8">
          <div className="flex-shrink-0 mb-6 sm:mb-0">
            <img 
              src="/1741090918274.jpeg" 
              alt="Tobin Zolkowski"
              className="w-32 h-32 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-xl float-animation"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Tobin Zolkowski
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Data Professional focused on analysis, SQL, and machine learning with a growth mindset and commitment to continuous learning
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-500 mb-8">
              <div className="flex items-center">
                <MapPin size={14} className="mr-1.5" />
                Madison, WI
              </div>
              <div className="status-indicator">
                <div className="status-dot"></div>
                Available for opportunities
              </div>
            </div>

            <a 
              href="/Tobin_Zolkowski_Data_Professional_Resume_2025.pdf" 
              download
              className="vercel-button"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          <div className="vercel-card text-center stagger-animation">
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">98%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Model Accuracy</div>
          </div>
          <div className="vercel-card text-center stagger-animation">
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">7.7M</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Records Analyzed</div>
          </div>
          <div className="vercel-card text-center stagger-animation">
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">93.41%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Data Quality</div>
          </div>
          <div className="vercel-card text-center stagger-animation">
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">4+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
      
      {/* Experience */}
      <section id="experience" className="mb-24">
        <h2 className="mb-6">Experience</h2>
        <div className="section-divider"></div>
        
        <div className="space-y-8">
          <div className="vercel-card">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3 className="text-lg font-semibold">Data Analyst</h3>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Jul 2023 - Present</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
              Indiana University School of Medicine Medical & Molecular Genetics Department | Remote
            </div>
            <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-sm leading-relaxed">
              <li>• Orchestrated ETL pipelines processing terabytes of imaging data for Michael J. Fox Foundation-funded Parkinson's Progression Markers Initiative (PPMI)</li>
              <li>• Reduced manual data handling by 25% through secure API integration between REDCap, Laboratory of Neuro Imaging (LONI), and OpenSpecimen</li>
              <li>• Improved data completion rates by 30% via AWS-hosted automated communication workflows for 4,000+ participants</li>
              <li>• Developed interactive Folium geospatial dashboards optimizing participant travel logistics across 50+ research sites</li>
              <li>• Maintained HIPAA compliance while synchronizing clinical, imaging, and biospecimen data using Python, SQL, and SSIS</li>
            </ul>
          </div>

          <div className="vercel-card">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3 className="text-lg font-semibold">Business Data Analyst Intern</h3>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Jul 2022 - Sep 2022</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
              Telkomsel (Indonesia's largest telecommunications company) | Jakarta, Indonesia
            </div>
            <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-sm leading-relaxed">
              <li>• Contributed to analysis identifying $340M revenue opportunities through Tableau dashboard for HVC subscriber segmentation</li>
              <li>• Optimized ETL processes improving data processing efficiency by 30% for executive reporting</li>
              <li>• Created automated reporting dashboards tracking KPIs and market trends</li>
              <li>• Pioneered A/B testing framework</li>
            </ul>
          </div>

          <div className="vercel-card">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3 className="text-lg font-semibold">Data Manager Intern</h3>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Jun 2021 - Aug 2021</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
              University of Wisconsin-Madison | Madison, WI
            </div>
            <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-sm leading-relaxed">
              <li>• Documented MySQL database with 500+ elements, reducing lookup time by 15% for 1,200+ users</li>
              <li>• Streamlined FERPA-compliant data processes, decreasing data entry errors by 10%</li>
              <li>• Supported research data management and quality assurance initiatives</li>
            </ul>
          </div>

          <div className="vercel-card">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3 className="text-lg font-semibold">IT Support Assistant</h3>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Sep 2019 - Apr 2021</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
              University of Wisconsin-Madison | Madison, WI
            </div>
            <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-sm leading-relaxed">
              <li>• Managed help desk service request database and created Excel analytics for technology usage patterns</li>
              <li>• Provided technical support and troubleshooting for university systems</li>
              <li>• Developed foundational skills in database management and automation concepts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-24">
        <h2 className="mb-6">Skills</h2>
        <div className="section-divider"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="mb-8 text-xl font-semibold">Data Science & ML</h3>
            <div className="space-y-6">
              {[
                { name: 'Python (Pandas, NumPy, Scikit-Learn)', level: 75 },
                { name: 'SQL (MySQL, PostgreSQL)', level: 80 },
                { name: 'Machine Learning', level: 60 },
                { name: 'Statistical Analysis', level: 70 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                    <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-8 text-xl font-semibold">Business Intelligence</h3>
            <div className="space-y-6">
              {[
                { name: 'Tableau & Looker', level: 75 },
                { name: 'Excel (Advanced)', level: 85 },
                { name: 'Git/GitHub', level: 75 },
                { name: 'ETL/Data Engineering', level: 65 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                    <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Methodologies */}
        <div className="mt-20">
          <h3 className="mb-10 text-xl font-semibold">Key Focus Areas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="vercel-card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart size={20} className="text-white" />
              </div>
              <h4 className="font-semibold mb-4 text-lg">Statistical Analysis</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Hypothesis Testing</li>
                <li>Regression Analysis</li>
                <li>A/B Testing</li>
                <li>EDA & Validation</li>
              </ul>
            </div>
            
            <div className="vercel-card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain size={20} className="text-white" />
              </div>
              <h4 className="font-semibold mb-4 text-lg">Machine Learning</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Classification & Clustering</li>
                <li>Feature Engineering</li>
                <li>Model Validation</li>
                <li>Performance Evaluation</li>
              </ul>
            </div>
            
            <div className="vercel-card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Database size={20} className="text-white" />
              </div>
              <h4 className="font-semibold mb-4 text-lg">Data Engineering</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>ETL Pipelines</li>
                <li>Data Cleaning</li>
                <li>Pipeline Concepts</li>
                <li>Database Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-24">
        <h2 className="mb-6">Projects</h2>
        <div className="section-divider"></div>
        
        <div className="space-y-10">
          <CaseStudy 
            isExpanded={expandedCase === 'churn'} 
            onToggle={() => setExpandedCase(expandedCase === 'churn' ? null : 'churn')} 
          />

          <TrafficAnalyticsCase
            isExpanded={expandedCase === 'traffic'}
            onToggle={() => setExpandedCase(expandedCase === 'traffic' ? null : 'traffic')}
          />

          <UFoodCase
            isExpanded={expandedCase === 'ufood'}
            onToggle={() => setExpandedCase(expandedCase === 'ufood' ? null : 'ufood')}
          />

          <WorldLifeExpectancyCase
            isExpanded={expandedCase === 'life-expectancy'}
            onToggle={() => setExpandedCase(expandedCase === 'life-expectancy' ? null : 'life-expectancy')}
          />

          <USHouseholdIncomeCase
            isExpanded={expandedCase === 'us-income'}
            onToggle={() => setExpandedCase(expandedCase === 'us-income' ? null : 'us-income')}
          />

          {[
            {
              title: "Web Data Insights Explorer",
              description: "Versatile Flask application for non-technical users to extract, analyze, and visualize web data. Features pattern-based extraction, NLP sentiment analysis, and ethical scraping practices.",
              tags: ["Python", "Flask", "NLP", "Business Intelligence"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/advanced_web_scraping_toolkit",
              icon: <Globe size={16} />
            },
          ].map((project, index) => (
            <div key={project.title} className="vercel-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center transition-colors duration-200 link-underline"
                      >
                        <Github size={14} className="mr-1" /> Code
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 link-underline"
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
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/tzolkowski96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="vercel-button-secondary inline-flex items-center"
          >
            View all projects 
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </section>

      {/* Technical Writing */}
      <section className="mb-24">
        <TechnicalBlog />
      </section>

      {/* About */}
      <section id="about" className="mb-24">
        <h2 className="mb-6">About</h2>
        <div className="section-divider"></div>
        
        <div className="space-y-10">
          <div className="vercel-card border-l-4 border-blue-500">
            <p className="text-lg text-gray-600 dark:text-gray-400 italic leading-relaxed">
              "I believe in continuous learning and practical application. Each project represents both 
              a learning opportunity and a chance to solve real-world problems with data."
            </p>
          </div>

          <div className="vercel-card">
            <h3 className="mb-6 text-xl font-semibold">My Journey in Tech</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My path into data science wasn't traditional. Starting with Communication Science at RIT, I later 
              transferred to UW-Madison for International Studies. It was during my undergraduate years I discovered 
              a passion for data analysis, initially through class projects and self-exploration with Excel.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This interest grew, leading me to teach myself SQL and eventually pursue a Master's in Information 
              Science at UW-Madison. Real growth came from hands-on projects: predicting employee churn, analyzing 
              large datasets, and building data processing systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              My diverse background offers a unique perspective, helping translate technical results into actionable 
              business strategies. I embrace AI tools to accelerate learning and tackle complex challenges faster.
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
                <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                  <div className="font-medium">Communication Science Studies</div>
                  <div className="text-gray-600 dark:text-gray-400">Rochester Institute of Technology</div>
                  <div className="text-small text-gray-500">2 years</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4">Certifications</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="text-small">
                  <a 
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70"
                  >
                    Google Advanced Data Analytics
                  </a>
                </li>
                <li className="text-small">
                  <a 
                    href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70"
                  >
                    Data Analyst in Tableau Track
                  </a>
                </li>
                <li className="text-small">
                  <a 
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
            { title: "Data Analyst Roles", desc: "Analysis, visualization, and statistical modeling", icon: <Code size={16} /> },
            { title: "Data Science Projects", desc: "ML model implementation and evaluation", icon: <Brain size={16} /> },
            { title: "Business Intelligence", desc: "Dashboard development and data strategy", icon: <BarChart size={16} /> },
            { title: "Data Engineering Tasks", desc: "ETL pipeline development and optimization", icon: <Database size={16} /> }
          ].map((item) => (
            <div key={item.title} className="minimal-card p-4">
              <div className="flex items-center mb-2">
                <div className="mr-3 text-gray-600 dark:text-gray-400">{item.icon}</div>
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