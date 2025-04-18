import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, BarChart2, ChevronDown, ChevronUp, Tag, Calendar, Clock, Brain, LineChart, BarChart, FileSpreadsheet, Briefcase } from 'lucide-react';

interface ProjectDetailsType {
  id: number;
  title: string;
  description: string;
  longDescription: string[];
  image: string;
  tags: string[];
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
  date: string;
  duration: string;
  category: string;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const projectsToShow = 6;
  
  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };
  
  const projects: ProjectDetailsType[] = [
    {
      id: 1,
      title: "Employee Churn Prediction",
      description: "Machine learning model predicting employee turnover with 98% accuracy using Python, scikit-learn, and pandas.",
      longDescription: [
        "Implemented a comprehensive employee churn prediction model using Random Forest, Logistic Regression, and Gradient Boosting algorithms.",
        "Performed extensive data cleaning and preprocessing on HR dataset including handling missing values, outlier detection, and feature engineering.",
        "Conducted feature importance analysis to identify key churn drivers (overtime, project count, satisfaction).",
        "Achieved 98% accuracy on test data, providing actionable insights for HR department retention strategies.",
        "Developed interactive dashboard for HR managers to visualize churn risk for current employees.",
        "Provided actionable HR recommendations based on model findings."
      ],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Machine Learning", "Python", "Data Analysis", "Classification"],
      technologies: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Matplotlib", "Seaborn"],
      links: {
        github: "https://github.com/tzolkowski96/Employee-Churn-Prediction",
        live: "https://tzolkowski96.github.io/Salifort-Motors-Project/"
      },
      date: "2023",
      duration: "3 months",
      category: "Data Analysis & Machine Learning",
      icon: <Brain size={24} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
    },
    {
      id: 2,
      title: "Traffic Accident Analytics Engine",
      description: "Analysis of 7.7M US traffic accident records to identify patterns and risk factors through interactive visualizations.",
      longDescription: [
        "Analyzed 7.7M US traffic accident records for public safety insights using Python and advanced analytics techniques.",
        "Performed statistical validation using chi-square tests and ANOVA analysis.",
        "Implemented Random Forest models for severity prediction, achieving 78% accuracy.",
        "Developed a scalable pipeline that processed data across 49 states efficiently.",
        "Created interactive dashboards with geospatial visualizations using Folium.",
        "Optimized memory usage, achieving a 3.25% reduction in resource consumption.",
        "Identified significant patterns in accident occurrence and severity based on time, location, and weather conditions."
      ],
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Big Data", "Geospatial Analysis", "Machine Learning", "Python"],
      technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "SciPy", "Matplotlib", "Seaborn", "Folium"],
      links: {
        github: "https://github.com/tzolkowski96/us_accidents_analysis"
      },
      date: "2022",
      duration: "4 months",
      category: "Data Analysis & Machine Learning",
      icon: <LineChart size={24} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
    },
    {
      id: 3,
      title: "UFood Customer Analysis",
      description: "Marketing analytics for a food delivery app through customer segmentation, campaign analysis, and behavior mapping.",
      longDescription: [
        "Optimized marketing strategies for a food delivery app using comprehensive customer data analysis.",
        "Implemented K-means clustering to create actionable customer segments for targeted marketing.",
        "Conducted A/B testing to measure campaign effectiveness and optimize messaging.",
        "Created detailed customer journey maps to identify key touchpoints and improvement opportunities.",
        "Developed recommendations to increase Customer Lifetime Value (CLV) based on data findings.",
        "Analyzed product preferences and purchasing patterns to guide menu optimization.",
        "Designed a complete marketing strategy framework based on analytical insights."
      ],
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Marketing Analytics", "Customer Segmentation", "A/B Testing", "Python"],
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "SciPy"],
      links: {
        github: "https://github.com/tzolkowski96/ufood_analysis",
        live: "https://tzolkowski96.github.io/analyst-builder-food-marketing-project/"
      },
      date: "2023",
      duration: "3 months",
      category: "Data Analysis & Machine Learning",
      icon: <BarChart size={24} className="text-purple-600 dark:text-purple-400" aria-hidden="true" />
    },
    {
      id: 4,
      title: "World Life Expectancy Analysis",
      description: "SQL-based analysis of global life expectancy data covering 183 countries over 15 years with advanced data cleaning techniques.",
      longDescription: [
        "Cleaned and analyzed global life expectancy data (2.9k records, 183 countries, 15 years) using advanced SQL techniques.",
        "Achieved 93.41% data quality through rigorous cleaning processes and validation.",
        "Identified a 12.36 year development gap in life expectancy between developed and developing nations.",
        "Quantified COVID-19 impact (-4.75% in 2020) and subsequent recovery (+5.91%).",
        "Implemented advanced window functions for prioritized deduplication and time-series analysis.",
        "Applied comprehensive data quality management techniques to ensure analytical integrity.",
        "Correlated life expectancy with socioeconomic factors across different regions and development statuses."
      ],
      image: "https://images.pexels.com/photos/3902882/pexels-photo-3902882.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SQL", "Data Cleaning", "Time-Series Analysis", "Global Health"],
      technologies: ["MySQL 8.0", "MySQL Workbench", "CTEs", "Window Functions", "Stored Procedures"],
      links: {
        github: "https://github.com/tzolkowski96/world_life_expectancy"
      },
      date: "2023",
      duration: "2 months",
      category: "SQL Projects",
      icon: <Database size={24} className="text-green-600 dark:text-green-400" aria-hidden="true" />
    },
    {
      id: 5,
      title: "US Household Income Analysis",
      description: "Comprehensive SQL analysis of US household income data across 50 states, revealing economic insights and regional disparities.",
      longDescription: [
        "Extracted economic insights from US demographic data (32k+ records, 50 states) using advanced SQL techniques.",
        "Developed a weighted quality scoring system, achieving an overall data quality score of 9.62/10.",
        "Identified a 30% regional income gap between Northeast and Southeast regions.",
        "Analyzed wealth concentration patterns using mean/median income ratios to identify inequality hotspots.",
        "Created a reusable data quality assessment framework for future projects.",
        "Optimized query performance, reducing execution time from 68.5s to 21.9s through indexing and query restructuring.",
        "Mapped economic prosperity gradients across different geographic regions.",
        "Provided targeted economic development recommendations based on data findings."
      ],
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SQL", "Economic Analysis", "Data Quality", "Statistical Analysis"],
      technologies: ["MySQL 8.0+", "MySQL Workbench", "Window Functions", "CTEs", "Stored Procedures", "Performance Optimization"],
      links: {
        github: "https://github.com/tzolkowski96/us-household-income-analysis"
      },
      date: "2022",
      duration: "3 months",
      category: "SQL Projects",
      icon: <Database size={24} className="text-teal-600 dark:text-teal-400" aria-hidden="true" />
    },
    {
      id: 6,
      title: "Portuguese Students Education Analysis",
      description: "Educational data mining project to identify factors influencing student performance and provide intervention recommendations.",
      longDescription: [
        "Identified factors influencing student academic performance through comprehensive data analysis.",
        "Developed predictive models to identify at-risk students with high accuracy.",
        "Discovered parental education level as the strongest predictor of student performance.",
        "Identified optimal study patterns and behaviors correlated with academic success.",
        "Provided detailed intervention recommendations for educators and administrators.",
        "Created visualizations highlighting key relationships between socioeconomic factors and academic outcomes.",
        "Designed a framework for early intervention based on predictive analytics."
      ],
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Educational Analytics", "Machine Learning", "Python", "Statistical Analysis"],
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      links: {
        github: "https://github.com/tzolkowski96/portuguese-students-higher-education-analysis",
        live: "https://tzolkowski96.github.io/student-education-analysis/"
      },
      date: "2022",
      duration: "2 months",
      category: "Data Analysis & Machine Learning",
      icon: <Brain size={24} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
    },
    {
      id: 7,
      title: "Web Data Insights Explorer",
      description: "Versatile web scraping and analysis tool with NLP capabilities for non-technical users.",
      longDescription: [
        "Developed a versatile tool for non-technical users to extract, analyze, and visualize web data.",
        "Implemented pattern-based extraction using regex and BeautifulSoup for flexible data collection.",
        "Integrated NLP sentiment analysis capabilities using NLTK for text processing.",
        "Created multi-format visualization options including charts, wordclouds, and interactive plots.",
        "Built with ethical scraping principles, respecting robots.txt and implementing rate limiting.",
        "Designed an intuitive interface allowing users to configure extractions without coding knowledge.",
        "Packaged as a Flask web application with a clean, responsive UI."
      ],
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Web Scraping", "NLP", "Data Visualization", "Flask"],
      technologies: ["Python", "Flask", "BeautifulSoup", "Pandas", "NLTK", "Matplotlib", "Seaborn", "WordCloud"],
      links: {
        github: "https://github.com/tzolkowski96/advanced_web_scraping_toolkit"
      },
      date: "2023",
      duration: "4 months",
      category: "Web Development & Applications",
      icon: <Code size={24} className="text-orange-600 dark:text-orange-400" aria-hidden="true" />
    },
    {
      id: 8,
      title: "Global Population Insights",
      description: "Interactive web platform for visualizing and analyzing global population trends and demographic patterns.",
      longDescription: [
        "Designed and built an interactive platform for global population trend visualization and analysis.",
        "Created dynamic, interactive visualizations using Plotly.js for intuitive data exploration.",
        "Implemented comparative analysis tools allowing users to examine multiple countries or regions simultaneously.",
        "Developed projection models to visualize future population trends based on current data.",
        "Included policy recommendations based on demographic analysis and research.",
        "Featured case studies highlighting significant demographic shifts and their implications.",
        "Built a responsive web interface accessible across devices and screen sizes."
      ],
      image: "https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["JavaScript", "Data Visualization", "Web Development", "Demographics"],
      technologies: ["HTML", "CSS", "JavaScript", "Plotly.js"],
      links: {
        github: "https://github.com/tzolkowski96/global-population-insights",
        live: "https://tzolkowski96.github.io/global-population-insights/"
      },
      date: "2023",
      duration: "3 months",
      category: "Web Development & Applications",
      icon: <LineChart size={24} className="text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
    },
  ];
  
  const upcomingProjects = [
    {
      title: "Excel Analytics Dashboard",
      description: "Advanced Excel dashboard for business metrics visualization.",
      status: "Coming Soon",
      category: "Data Analysis & Visualization",
      icon: <FileSpreadsheet size={20} className="text-green-600 dark:text-green-400" aria-hidden="true" />
    },
    {
      title: "Tableau Interactive Dashboards",
      description: "Collection of interactive Tableau dashboards for various business domains.",
      status: "Coming Soon",
      category: "Data Visualization",
      icon: <BarChart size={20} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
    },
    {
      title: "Power BI Reports",
      description: "Comprehensive Power BI reporting suite for business intelligence.",
      status: "In Progress",
      category: "Business Intelligence",
      icon: <Briefcase size={20} className="text-purple-600 dark:text-purple-400" aria-hidden="true" />
    },
    {
      title: "Data Engineering Pipeline",
      description: "End-to-end data engineering pipeline for big data processing.",
      status: "Planning Phase",
      category: "Data Engineering",
      icon: <Database size={20} className="text-orange-600 dark:text-orange-400" aria-hidden="true" />
    }
  ];
  
  // Get unique categories from projects
  const categories = Array.from(new Set(projects.map(project => project.category)));
  
  // Filter projects based on active category
  const filteredProjects = activeCategory 
    ? projects.filter(project => project.category === activeCategory) 
    : projects;
  
  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, projectsToShow);
  
  const ProjectTechTag: React.FC<{ tech: string }> = ({ tech }) => (
    <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs inline-flex items-center m-1 leading-none">
      {tech}
    </span>
  );
  
  const ProjectCategoryTag: React.FC<{ tag: string }> = ({ tag }) => (
    <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded text-xs inline-flex items-center m-1 leading-none">
      {tag}
    </span>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-pretty">
            A selection of my data analysis, machine learning, and visualization projects. Each project demonstrates
            my approach to solving complex problems using data-driven methods.
          </p>
        </div>
        
        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 opacity-0 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full flex items-center transition-all duration-300 shadow-sm ${
              activeCategory === null 
                ? 'bg-blue-600 text-white scale-105 shadow-md' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-pressed={activeCategory === null}
          >
            <span>All Projects</span>
          </button>
          
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full flex items-center transition-all duration-300 shadow-sm ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white scale-105 shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map(project => (
            <div 
              key={project.id} 
              className={`enhanced-card overflow-hidden transform transition-all duration-500 hover:shadow-lg flex flex-col h-full ${
                expandedProject === project.id ? 'scale-100 z-10' : 'hover:-translate-y-2'
              }`}
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={`${project.title} project`} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <ProjectCategoryTag key={idx} tag={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
                    <span className="mr-2">{project.icon}</span>
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <ProjectTechTag key={idx} tech={tech} />
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-gray-500 text-xs">+{project.technologies.length - 5} more</span>
                  )}
                </div>
                
                {/* Project timeline/info */}
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <Calendar size={14} className="mr-1" aria-hidden="true" />
                  <span className="mr-3">{project.date}</span>
                  <Clock size={14} className="mr-1" aria-hidden="true" />
                  <span>{project.duration}</span>
                </div>
                
                {/* Expanded content */}
                {expandedProject === project.id && (
                  <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4 animate-fadeIn">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Project Details</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                      {project.longDescription.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {project.technologies.length > 5 && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">All Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, idx) => (
                            <ProjectTechTag key={idx} tech={tech} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex space-x-2">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={20} aria-hidden="true" />
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={20} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => toggleExpand(project.id)}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center text-sm font-medium transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 focus:ring-offset-2 rounded"
                    aria-expanded={expandedProject === project.id}
                    aria-controls={`project-details-${project.id}`}
                  >
                    {expandedProject === project.id ? (
                      <>
                        <ChevronUp size={16} className="mr-1" aria-hidden="true" />
                        <span>Show less</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} className="mr-1" aria-hidden="true" />
                        <span>Read more</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length > projectsToShow && !showAllProjects && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllProjects(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Load {filteredProjects.length - projectsToShow} More Projects
            </button>
          </div>
        )}
        
        {showAllProjects && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllProjects(false)}
              className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Show Fewer Projects
            </button>
          </div>
        )}
        
        {/* Upcoming Projects Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Upcoming Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h4 className="font-bold text-gray-800 dark:text-gray-100">{project.title}</h4>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                        project.status === 'Coming Soon' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                        project.status === 'In Progress' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 italic">
              "I'm constantly working on new projects to expand my skills and explore new technologies. Check back soon to see these projects in action!"
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Additional Projects & Contributions</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
            In addition to the featured projects, I've worked on various smaller projects and contributions.
            Feel free to check out my GitHub for more examples of my work.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://github.com/tzolkowski96" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center"
            >
              <Github size={20} className="mr-2" aria-hidden="true" />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;