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
      description: "ML model predicting employee turnover with 98% accuracy using Python and scikit-learn.",
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
    <section id="projects" className="py-16 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-900 dark:text-white mb-8">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Data analysis, machine learning, and visualization projects demonstrating problem-solving with data-driven methods.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {visibleProjects.map(project => (
            <div key={project.id} className="minimal-card">
              <div className="mb-3">
                <h3 className="text-lg text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="minimal-tag">{tag}</span>
                  ))}
                </div>
                
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{project.date}</p>
                
                {expandedProject === project.id && (
                  <div className="mb-3 pt-3 border-t border-gray-200 dark:border-gray-800">
                    <ul className="space-y-1">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                
                <button 
                  onClick={() => toggleExpand(project.id)}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 flex items-center"
                  aria-expanded={expandedProject === project.id}
                >
                  {expandedProject === project.id ? (
                    <>
                      <ChevronUp size={14} className="mr-1" />
                      <span>Less</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown size={14} className="mr-1" />
                      <span>More</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && projects.length > 4 && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary"
            >
              View {projects.length - 4} More Projects
            </button>
          </div>
        )}
        
        <div className="text-center">
          <a 
            href="https://github.com/tzolkowski96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github size={16} className="mr-2" />
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;