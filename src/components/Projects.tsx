import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectDetailsType {
  id: number;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  date: string;
}

interface ProjectsProps {
  activeSection: string;
}

const Projects: React.FC<ProjectsProps> = ({ activeSection }) => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };
  
  const projects: ProjectDetailsType[] = [
    {
      id: 1,
      title: "Employee Churn Prediction",
      description: "Machine learning model predicting employee turnover with 98% accuracy using Python and scikit-learn.",
      details: [
        "Random Forest, Logistic Regression, and Gradient Boosting algorithms",
        "Extensive data preprocessing and feature engineering",
        "Feature importance analysis identifying key churn drivers",
        "Interactive dashboard for HR risk visualization"
      ],
      tags: ["Python", "ML", "Scikit-Learn"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/Employee-Churn-Prediction",
        live: "https://tzolkowski96.github.io/Salifort-Motors-Project/"
      },
      date: "2023"
    },
    {
      id: 2,
      title: "Traffic Accident Analytics",
      description: "Analysis of 7.7M US traffic records identifying patterns and risk factors.",
      details: [
        "Statistical validation using chi-square tests and ANOVA",
        "Random Forest models achieving 78% accuracy",
        "Geospatial visualizations using Folium",
        "Memory optimization reducing resource usage by 3.25%"
      ],
      tags: ["Python", "Big Data", "Geospatial"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/us_accidents_analysis"
      },
      date: "2022"
    },
    {
      id: 3,
      title: "UFood Customer Analysis",
      description: "Marketing analytics through customer segmentation and behavior mapping.",
      details: [
        "K-means clustering for targeted marketing segments",
        "A/B testing for campaign optimization",
        "Customer journey mapping and CLV analysis",
        "Complete marketing strategy framework"
      ],
      tags: ["Python", "Marketing", "Clustering"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/ufood_analysis",
        live: "https://tzolkowski96.github.io/analyst-builder-food-marketing-project/"
      },
      date: "2023"
    },
    {
      id: 4,
      title: "World Life Expectancy Analysis",
      description: "SQL analysis of global life expectancy data across 183 countries over 15 years.",
      details: [
        "Advanced SQL techniques achieving 93.41% data quality",
        "12.36 year development gap identification",
        "COVID-19 impact quantification and recovery analysis",
        "Advanced window functions and time-series analysis"
      ],
      tags: ["SQL", "Data Cleaning", "Health Data"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/world_life_expectancy"
      },
      date: "2023"
    },
    {
      id: 5,
      title: "US Household Income Analysis",
      description: "Comprehensive SQL analysis revealing economic insights and regional disparities.",
      details: [
        "32k+ records across 50 states analysis",
        "Quality scoring system achieving 9.62/10",
        "30% regional income gap identification",
        "Query optimization reducing execution time from 68.5s to 21.9s"
      ],
      tags: ["SQL", "Economic Data", "Optimization"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/us-household-income-analysis"
      },
      date: "2022"
    },
    {
      id: 6,
      title: "Student Performance Analysis",
      description: "Educational data mining identifying factors influencing academic performance.",
      details: [
        "Predictive models for at-risk student identification",
        "Parental education level as strongest performance predictor",
        "Optimal study pattern analysis",
        "Intervention framework based on predictive analytics"
      ],
      tags: ["Python", "Education", "Predictive"],
      links: {
        github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/portuguese-students-higher-education-analysis",
        live: "https://tzolkowski96.github.io/student-education-analysis/"
      },
      date: "2022"
    }
  ];
  
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="section-light section-padding">
      <div className="container-large">
        
        {/* Large Section Header */}
        <div className="section-header">
          <h2 className="display-3 text-gray-900 dark:text-white">Portfolio</h2>
          <p className="body-large">
            <strong>Featured projects</strong> demonstrating expertise in data analysis, machine learning, 
            and visualization. Each project showcases measurable results and practical business applications.
          </p>
        </div>
        
        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 border-2 border-gray-200 dark:border-gray-800">
            <div className="heading-2 text-gray-900 dark:text-white mb-2">14+</div>
            <div className="caption text-gray-600 dark:text-gray-400">Completed Projects</div>
          </div>
          <div className="text-center p-6 border-2 border-gray-200 dark:border-gray-800">
            <div className="heading-2 text-gray-900 dark:text-white mb-2">7.7M</div>
            <div className="caption text-gray-600 dark:text-gray-400">Records Processed</div>
          </div>
          <div className="text-center p-6 border-2 border-gray-200 dark:border-gray-800">
            <div className="heading-2 text-gray-900 dark:text-white mb-2">98%</div>
            <div className="caption text-gray-600 dark:text-gray-400">ML Accuracy</div>
          </div>
          <div className="text-center p-6 border-2 border-gray-200 dark:border-gray-800">
            <div className="heading-2 text-gray-900 dark:text-white mb-2">35%</div>
            <div className="caption text-gray-600 dark:text-gray-400">Quality Improvement</div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {visibleProjects.map(project => (
            <div key={project.id} className="project-card-large">
              
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                <h3 className="heading-2 text-gray-900 dark:text-white mb-4">{project.title}</h3>
                  <span className="caption text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1">{project.date}</span>
                </div>
                <p className="body-large mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag-large">{tag}</span>
                  ))}
                </div>
              </div>
              
              {/* Expanded Details */}
              {expandedProject === project.id && (
                <div className="mb-6 pt-6 border-t border-gray-300 dark:border-gray-600 animate-slideUp">
                  <ul className="space-y-3">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="body-regular">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-300 dark:border-gray-600">
                <div className="flex space-x-4">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                
                <button 
                  onClick={() => toggleExpand(project.id)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 flex items-center body-regular group transition-colors"
                  aria-expanded={expandedProject === project.id}
                >
                  {expandedProject === project.id ? (
                    <>
                      <ChevronUp size={20} className="mr-2 group-hover:transform group-hover:-translate-y-1 transition-transform" />
                      <span>Less</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown size={20} className="mr-2 group-hover:transform group-hover:translate-y-1 transition-transform" />
                      <span>Details</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More Button */}
        {!showAll && projects.length > 4 && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline"
            >
              View {projects.length - 4} More Projects
            </button>
          </div>
        )}
        
        {/* GitHub CTA */}
        <div className="text-center">
          <div className="mb-6">
            <h3 className="heading-2 text-gray-900 dark:text-white mb-4">Explore All Projects</h3>
            <p className="body-regular max-w-2xl mx-auto">
              Visit my GitHub repository to explore additional projects, code samples, 
              and contributions to open-source data science initiatives.
            </p>
          </div>
          <a 
            href="https://github.com/tzolkowski96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-large inline-flex items-center"
          >
            <Github size={20} className="mr-3" />
            View GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;