import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp, Calendar, Clock } from 'lucide-react';

interface ProjectDetailsType {
  id: number;
  title: string;
  description: string;
  longDescription: string[];
  tags: string[];
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
  date: string;
  duration: string;
  category: string;
}

interface ProjectsProps {
  activeSection: string;
}

const Projects: React.FC<ProjectsProps> = ({ activeSection }) => {
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
      tags: ["Machine Learning", "Python", "Data Analysis", "Classification"],
      technologies: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Matplotlib", "Seaborn"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/Employee-Churn-Prediction",
        live: "https://tzolkowski96.github.io/Salifort-Motors-Project/"
      },
      date: "2023",
      duration: "3 months",
      category: "Data Analysis & Machine Learning"
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
      tags: ["Big Data", "Geospatial Analysis", "Machine Learning", "Python"],
      technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "SciPy", "Matplotlib", "Seaborn", "Folium"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/us_accidents_analysis"
      },
      date: "2022",
      duration: "4 months",
      category: "Data Analysis & Machine Learning"
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
      tags: ["Marketing Analytics", "Customer Segmentation", "A/B Testing", "Python"],
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "SciPy"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/ufood_analysis",
        live: "https://tzolkowski96.github.io/analyst-builder-food-marketing-project/"
      },
      date: "2023",
      duration: "3 months",
      category: "Data Analysis & Machine Learning"
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
      tags: ["SQL", "Data Cleaning", "Time-Series Analysis", "Global Health"],
      technologies: ["MySQL 8.0", "MySQL Workbench", "CTEs", "Window Functions", "Stored Procedures"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/world_life_expectancy"
      },
      date: "2023",
      duration: "2 months",
      category: "SQL Projects"
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
      tags: ["SQL", "Economic Analysis", "Data Quality", "Statistical Analysis"],
      technologies: ["MySQL 8.0+", "MySQL Workbench", "Window Functions", "CTEs", "Stored Procedures", "Performance Optimization"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/us-household-income-analysis"
      },
      date: "2022",
      duration: "3 months",
      category: "SQL Projects"
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
      tags: ["Educational Analytics", "Machine Learning", "Python", "Statistical Analysis"],
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/portuguese-students-higher-education-analysis",
        live: "https://tzolkowski96.github.io/student-education-analysis/"
      },
      date: "2022",
      duration: "2 months",
      category: "Data Analysis & Machine Learning"
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
      tags: ["Web Scraping", "NLP", "Data Visualization", "Flask"],
      technologies: ["Python", "Flask", "BeautifulSoup", "Pandas", "NLTK", "Matplotlib", "Seaborn", "WordCloud"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/advanced_web_scraping_toolkit"
      },
      date: "2023",
      duration: "4 months",
      category: "Web Development & Applications"
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
      tags: ["JavaScript", "Data Visualization", "Web Development", "Demographics"],
      technologies: ["HTML", "CSS", "JavaScript", "Plotly.js"],
      links: {
        github: "https://github.com/tzolkowski96/global-population-insights",
        live: "https://tzolkowski96.github.io/global-population-insights/"
      },
      date: "2023",
      duration: "3 months",
      category: "Web Development & Applications"
    },
  ];
  
  const categories = Array.from(new Set(projects.map(project => project.category)));
  const filteredProjects = activeCategory 
    ? projects.filter(project => project.category === activeCategory) 
    : projects;
  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, projectsToShow);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-px bg-gray-900 dark:bg-white mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my data analysis, machine learning, and visualization projects. Each project demonstrates
            my approach to solving complex problems using data-driven methods.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 text-sm border rounded transition-colors ${
              activeCategory === null 
                ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white' 
                : 'bg-white text-gray-900 border-gray-300 hover:border-gray-900 dark:bg-black dark:text-white dark:border-gray-700 dark:hover:border-white'
            }`}
          >
            All Projects
          </button>
          
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm border rounded transition-colors ${
                activeCategory === category 
                  ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white' 
                  : 'bg-white text-gray-900 border-gray-300 hover:border-gray-900 dark:bg-black dark:text-white dark:border-gray-700 dark:hover:border-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {visibleProjects.map(project => (
            <div key={project.id} className="minimal-card h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="minimal-tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="minimal-tag">+{project.tags.length - 3} more</span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="text-xs text-gray-500 dark:text-gray-500">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-gray-500 dark:text-gray-500">+{project.technologies.length - 4} more</span>
                  )}
                </div>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-4">
                  <Calendar size={14} className="mr-1" aria-hidden="true" />
                  <span className="mr-3">{project.date}</span>
                  <Clock size={14} className="mr-1" aria-hidden="true" />
                  <span>{project.duration}</span>
                </div>
                
                {expandedProject === project.id && (
                  <div className="mb-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {project.longDescription.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex space-x-3">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={18} aria-hidden="true" />
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
                
                <button 
                  onClick={() => toggleExpand(project.id)}
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center transition-colors"
                  aria-expanded={expandedProject === project.id}
                >
                  {expandedProject === project.id ? (
                    <>
                      <ChevronUp size={14} className="mr-1" aria-hidden="true" />
                      <span>Less</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown size={14} className="mr-1" aria-hidden="true" />
                      <span>More</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length > projectsToShow && !showAllProjects && (
          <div className="text-center">
            <button
              onClick={() => setShowAllProjects(true)}
              className="btn-secondary"
            >
              Load {filteredProjects.length - projectsToShow} More Projects
            </button>
          </div>
        )}
        
        {showAllProjects && (
          <div className="text-center">
            <button
              onClick={() => setShowAllProjects(false)}
              className="btn-secondary"
            >
              Show Fewer Projects
            </button>
          </div>
        )}
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/tzolkowski96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github size={18} className="mr-2" aria-hidden="true" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;