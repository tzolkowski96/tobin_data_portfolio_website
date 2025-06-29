import React from 'react';
import { Github, Linkedin, Download, MapPin, ArrowRight, Database, Code, BarChart, Target, Globe, Brain } from 'lucide-react';
import CaseStudy from './CaseStudy';
import TrafficAnalyticsCase from './TrafficAnalyticsCase';
import TechnicalBlog from './TechnicalBlog';

const Hero: React.FC = () => {
  const [expandedCase, setExpandedCase] = React.useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto container-responsive py-16 sm:py-20">
      
      {/* Profile Section */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-8 mb-8">
          <div className="flex-shrink-0 mb-6 sm:mb-0">
            <img 
              src="/1741090918274.jpeg" 
              alt="Tobin Zolkowski"
              className="w-32 h-32 rounded-full object-cover border border-gray-200 dark:border-gray-800"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="mb-4">Tobin Zolkowski</h1>
            <p className="text-large text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
              Data Professional focused on analysis, SQL, and machine learning with a growth mindset and commitment to continuous learning
            </p>
            
            <div className="flex items-center space-x-6 text-small text-gray-500 dark:text-gray-500 mb-8">
              <div className="flex items-center">
                <MapPin size={14} className="mr-1.5" />
                Madison, WI
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Available for opportunities
              </div>
            </div>

            <a 
              href="/Tobin_Zolkowski_Data_Professional_Resume_2025.pdf" 
              download
              className="minimal-button"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </div>
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
            <div className="text-2xl font-semibold mb-1">93.41%</div>
            <div className="text-small text-gray-600 dark:text-gray-400">Data Quality</div>
          </div>
          <div>
            <div className="text-2xl font-semibold mb-1">4+</div>
            <div className="text-small text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
      {/* Experience */}
      <section id="experience" className="mb-20">
        <h2 className="mb-4">Experience</h2>
        <div className="section-divider"></div>
        
        <div className="space-y-6">
          <div className="minimal-card p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3>Data Analyst</h3>
              <div className="text-small text-gray-500">Jul 2023 - Present</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
              Indiana University School of Medicine Department of Medical and Molecular Genetics
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Working with researchers to transform complex biomedical datasets into meaningful insights. 
              Focused on ETL processes, bridging technical/clinical gaps, handling sensitive data, and collaboration.
            </p>
          </div>

          <div className="minimal-card p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3>Business Data Analyst Intern</h3>
              <div className="text-small text-gray-500">Jul 2022 - Sept 2022</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
              Telkomsel
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Applied data analysis in a large-scale business environment. Gained experience with big data, 
              marketing analytics, cross-functional teams, and presenting technical findings.
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
            <p className="text-gray-600 dark:text-gray-400">
              Focused on structured data governance in an academic setting. Developed skills in data quality, 
              documentation, standardization, and understanding user needs.
            </p>
          </div>

          <div className="minimal-card p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3>IT Support Assistant</h3>
              <div className="text-small text-gray-500">Sept 2019 - April 2021</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
              University of Wisconsin-Madison
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Gateway into the technical world, focusing on user support and assistive technologies. 
              Developed troubleshooting skills and foundational database/automation concepts.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-20">
        <h2 className="mb-4">Skills</h2>
        <div className="section-divider"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-6">Data Science & ML</h3>
            <div className="space-y-4">
              {[
                { name: 'Python (Pandas, NumPy, Scikit-Learn)', level: 75 },
                { name: 'SQL (MySQL, PostgreSQL)', level: 80 },
                { name: 'Machine Learning', level: 60 },
                { name: 'Statistical Analysis', level: 70 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-small font-medium">{skill.name}</span>
                    <span className="text-small text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1">
                    <div 
                      className="bg-black dark:bg-white h-1 rounded-full"
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
                { name: 'Tableau & Looker', level: 75 },
                { name: 'Excel (Advanced)', level: 85 },
                { name: 'Git/GitHub', level: 75 },
                { name: 'ETL/Data Engineering', level: 65 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-small font-medium">{skill.name}</span>
                    <span className="text-small text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1">
                    <div 
                      className="bg-black dark:bg-white h-1 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Methodologies */}
        <div className="mt-16">
          <h3 className="mb-8">Key Focus Areas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="minimal-card p-6 text-center">
              <BarChart size={20} className="mx-auto mb-4 text-gray-600 dark:text-gray-400" />
              <h4 className="font-medium mb-3">Statistical Analysis</h4>
              <ul className="text-small text-gray-600 dark:text-gray-400 space-y-1">
                <li>Hypothesis Testing</li>
                <li>Regression Analysis</li>
                <li>A/B Testing</li>
                <li>EDA & Validation</li>
              </ul>
            </div>
            
            <div className="minimal-card p-6 text-center">
              <Brain size={20} className="mx-auto mb-4 text-gray-600 dark:text-gray-400" />
              <h4 className="font-medium mb-3">Machine Learning</h4>
              <ul className="text-small text-gray-600 dark:text-gray-400 space-y-1">
                <li>Classification & Clustering</li>
                <li>Feature Engineering</li>
                <li>Model Validation</li>
                <li>Performance Evaluation</li>
              </ul>
            </div>
            
            <div className="minimal-card p-6 text-center">
              <Database size={20} className="mx-auto mb-4 text-gray-600 dark:text-gray-400" />
              <h4 className="font-medium mb-3">Data Engineering</h4>
              <ul className="text-small text-gray-600 dark:text-gray-400 space-y-1">
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
      <section id="projects" className="mb-20">
        <h2 className="mb-4">Projects</h2>
        <div className="section-divider"></div>
        
        <div className="space-y-8">
          <CaseStudy 
            isExpanded={expandedCase === 'churn'} 
            onToggle={() => setExpandedCase(expandedCase === 'churn' ? null : 'churn')} 
          />

          <TrafficAnalyticsCase
            isExpanded={expandedCase === 'traffic'}
            onToggle={() => setExpandedCase(expandedCase === 'traffic' ? null : 'traffic')}
          />

          {[
            {
              title: "World Life Expectancy Analysis",
              description: "Advanced SQL data cleaning and analysis of global life expectancy data (2.9k records, 183 countries, 15 years). Achieved 93.41% data quality and quantified 12.36 year development gap.",
              tags: ["SQL", "Data Quality", "Time-Series Analysis"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/world_life_expectancy",
              icon: <BarChart size={16} />
            },
            {
              title: "UFood Customer Analysis", 
              description: "Customer segmentation using K-means clustering and A/B testing for food delivery app optimization. Comprehensive analysis including customer journey mapping and CLV insights.",
              tags: ["Python", "Machine Learning", "Customer Analytics"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/ufood_analysis",
              demo: "https://tzolkowski96.github.io/analyst-builder-food-marketing-project/",
              icon: <Target size={16} />
            },
            {
              title: "Web Data Insights Explorer",
              description: "Versatile Flask application for non-technical users to extract, analyze, and visualize web data. Features pattern-based extraction, NLP sentiment analysis, and ethical scraping practices.",
              tags: ["Python", "Flask", "NLP", "Business Intelligence"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/advanced_web_scraping_toolkit",
              icon: <Globe size={16} />
            },
            {
              title: "US Household Income Analysis",
              description: "Statistical analysis of US demographic data (32k+ records, 50 states) with weighted quality scoring. Identified 30% regional income gap and created reusable quality framework.",
              tags: ["SQL", "Statistical Analysis", "Data Quality"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/us-household-income-analysis",
              icon: <BarChart size={16} />
            }
          ].map((project, index) => (
            <div key={project.title} className="minimal-card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-50 dark:bg-gray-900 rounded flex items-center justify-center flex-shrink-0">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
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
                    <div className="flex items-center space-x-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-small text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center"
                      >
                        <Github size={14} className="mr-1" /> Code
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

      {/* About */}
      <section id="about" className="mb-20">
        <h2 className="mb-4">About</h2>
        <div className="section-divider"></div>
        
        <div className="space-y-8">
          <div className="minimal-card p-6">
            <p className="text-gray-600 dark:text-gray-400 italic">
              "I believe in continuous learning and practical application. Each project represents both 
              a learning opportunity and a chance to solve real-world problems with data."
            </p>
          </div>

          <div className="minimal-card p-6">
            <h3 className="mb-4">My Journey in Tech</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
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