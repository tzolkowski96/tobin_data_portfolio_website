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
      <div className="flex items-start space-x-6 mb-12 group">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800 flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-400 dark:group-hover:border-gray-600">
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
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-300">
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
          
          <p className="text-lg leading-relaxed mb-4 transition-colors duration-300">
            Data professional focused on <strong>data analysis</strong>, <strong>SQL</strong>, and <strong>machine learning</strong>. 
            With a growth mindset and commitment to continuous learning, I leverage data to drive insights and solve problems.
          </p>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
            <div className="flex items-center hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
              <MapPin size={14} className="mr-1" />
              Madison, WI
            </div>
            <div className="flex items-center group">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <Calendar size={14} className="mr-1" />
              Available for opportunities
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Professional Quote */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-12 border-l-4 border-gray-900 dark:border-white transition-all duration-300 hover:border-l-8 hover:shadow-lg">
        <blockquote className="text-center text-gray-600 dark:text-gray-400 italic text-lg leading-relaxed">
          "Continuously learning and growing as a data professional, turning data into actionable insights."
        </blockquote>
      </div>

      {/* Animated Key Metrics */}
      <AnimatedMetrics />

      {/* Enhanced Experience Timeline */}
      <div id="experience" className="mb-20">
        <h2 className="text-xl font-semibold mb-8 relative">
          Professional Experience
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 group">
            <div className="absolute w-3 h-3 bg-gray-900 dark:bg-white rounded-full -left-[7px] top-2 transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Data Analyst</h3>
              <span className="text-sm text-gray-500">July 2023 - Present</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Indiana University School of Medicine | Department of Medical and Molecular Genetics</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transforming complex biomedical datasets into meaningful insights. Developing ETL processes 
              improving data quality by 35%. Bridging technical and clinical requirements while ensuring 
              HIPAA compliance in all data handling.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 group">
            <div className="absolute w-3 h-3 bg-gray-900 dark:bg-white rounded-full -left-[7px] top-2 transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Business Data Analyst Intern</h3>
              <span className="text-sm text-gray-500">July 2022 - Sept 2022</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Telkomsel | Indonesia's largest telecommunications company</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Applied data analysis in large-scale business environment. Built executive decision-making 
              dashboards using Tableau. Collaborated with marketing teams to optimize campaigns and created 
              reports influencing strategic business decisions.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 group">
            <div className="absolute w-3 h-3 bg-gray-900 dark:bg-white rounded-full -left-[7px] top-2 transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Data Manager Intern</h3>
              <span className="text-sm text-gray-500">June 2021 - Aug 2021</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">University of Wisconsin-Madison</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Implemented data quality control measures and developed comprehensive documentation for data management. 
              Standardized data entry procedures and created training materials for research assistants.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 group">
            <div className="absolute w-3 h-3 bg-gray-900 dark:bg-white rounded-full -left-[7px] top-2 transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">IT Support Assistant</h3>
              <span className="text-sm text-gray-500">Sept 2019 - April 2021</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">University of Wisconsin-Madison</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Provided technical support for faculty, staff, and students. Specialized in assistive technologies
              and maintained inventory databases. Implemented automation solutions and developed technical 
              documentation and user guides.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Skills with Interactive Visualization */}
      <div id="skills" className="mb-20">
        <h2 className="text-xl font-semibold mb-8 relative">
          Core Technical Skills
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-medium mb-4">Programming & Data Analysis</h3>
            <div className="space-y-4">
              {[
                { name: 'Python (Pandas, NumPy, Scikit-Learn)', level: 75, projects: 8 },
                { name: 'SQL (MySQL, PostgreSQL)', level: 80, projects: 12 },
                { name: 'JavaScript, HTML, CSS', level: 50, projects: 3 },
                { name: 'Machine Learning', level: 65, projects: 4 }
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
            <h3 className="font-medium mb-4">Visualization & Tools</h3>
            <div className="space-y-4">
              {[
                { name: 'Tableau', level: 80, projects: 5 },
                { name: 'Excel (Advanced)', level: 85, projects: 10 },
                { name: 'Git/GitHub', level: 65, projects: 8 },
                { name: 'ETL/Data Pipelines', level: 60, projects: 6 }
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
          <p className="text-sm text-gray-600 dark:text-gray-400 italic text-center">
            Self-assessment based on project experience and continuous learning journey
          </p>
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
              title: "World Life Expectancy Analysis",
              description: "Advanced SQL analysis achieving 93.41% data quality. Identified 12.36 year development gap and quantified COVID-19 impact across 183 countries.",
              tags: ["SQL", "Data Cleaning", "Health Data"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/world_life_expectancy",
              icon: "📊"
            },
            {
              title: "UFood Customer Analysis", 
              description: "Marketing analytics using K-means clustering and A/B testing for customer segmentation. Complete marketing strategy framework with CLV analysis.",
              tags: ["Python", "Marketing", "Clustering"],
              github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/ufood_analysis",
              demo: "https://tzolkowski96.github.io/analyst-builder-food-marketing-project/",
              icon: "🎯"
            },
            {
              title: "Web Data Insights Explorer",
              description: "Versatile Flask application for web scraping with pattern-based extraction, NLP sentiment analysis, and multi-format visualizations.",
              tags: ["Python", "Flask", "Web Scraping", "NLP"],
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
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-3">
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
            View all 14+ projects on GitHub 
            <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Enhanced Interactive Skills Visualization */}
      <div className="mb-20">
        <h2 className="text-xl font-semibold mb-8 relative">
          Skills Visualization
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
              My path into data science wasn't traditional. Starting with Communication Science at RIT, I later transferred to 
              UW-Madison for International Studies. During my undergraduate years I discovered a passion for data analysis, 
              initially through class projects and self-exploration with Excel.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This interest grew, leading me to teach myself SQL and eventually pursue a Master's in Information Science at 
              UW-Madison, which formalized my skills. Real growth came from hands-on projects: predicting employee churn, 
              analyzing student performance data, and building complex data pipelines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium mb-3">Educational Background</h3>
              <div className="space-y-3">
                {[
                  {
                    degree: "Master of Science, Information Science",
                    school: "University of Wisconsin-Madison",
                    focus: "Data Analytics, Machine Learning, Information Systems"
                  },
                  {
                    degree: "Bachelor of Arts, International Studies", 
                    school: "University of Wisconsin-Madison",
                    focus: "Research Methods, Data Analysis"
                  },
                  {
                    degree: "Communication Science Studies (2 years)",
                    school: "Rochester Institute of Technology",
                    focus: "Foundation in analytical thinking"
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
              <h3 className="font-medium mb-3">Certifications</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {[
                  {
                    name: "Google Advanced Data Analytics",
                    provider: "Coursera, 2023",
                    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY"
                  },
                  {
                    name: "Data Analyst in Tableau Track",
                    provider: "DataCamp, 2022-2023", 
                    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8"
                  },
                  {
                    name: "Data Analyst in SQL Track",
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
                <h4 className="font-medium mb-3">Current Learning Focus</h4>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "JavaScript & TypeScript: Building interactive data visualizations",
                    "Advanced Statistics: Deepening mathematical foundations", 
                    "PostgreSQL & MSSQL: Expanding database expertise",
                    "MLOps: Production machine learning systems"
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
          Available For
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Full-time Positions", desc: "Data analysis and visualization roles", icon: "💼" },
            { title: "Contract Projects", desc: "Defined scope data projects", icon: "📋" },
            { title: "Consulting", desc: "ML implementation and optimization", icon: "🧠" },
            { title: "Collaboration", desc: "Data pipeline development", icon: "🤝" }
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
      </div>
    </div>
  );
};

export default Hero;