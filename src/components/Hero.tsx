import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      
      {/* Main Content */}
      <div className="space-y-8">
        <div>
          <p className="text-lg leading-relaxed">
            Hey, I'm a Data Professional with 4+ years of experience transforming complex datasets 
            into actionable business insights. I enjoy working with Python, SQL, and machine learning 
            to solve real-world problems.
          </p>
        </div>

        <div>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            This portfolio showcases my expertise in data analytics, machine learning, and visualization. 
            I focus on the <em>results</em> and <em>impact</em> of data-driven solutions.
          </p>
        </div>

        <div>
          <a 
            href="https://github.com/tzolkowski96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            View my projects <ExternalLink size={16} className="ml-1" />
          </a>{' '}
          on GitHub.
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="mt-20">
        <h2 className="text-xl font-semibold mb-8">Selected Projects</h2>
        
        <div className="space-y-8">
          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <h3 className="font-medium mb-2">Employee Churn Prediction</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Machine learning model achieving 98% accuracy in predicting employee turnover using Random Forest and feature engineering.
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
              <span className="text-gray-500">Python, Scikit-Learn</span>
            </div>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <h3 className="font-medium mb-2">Traffic Accident Analytics</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Analysis of 7.7M US traffic records identifying patterns and risk factors using statistical validation and geospatial visualization.
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
              <span className="text-gray-500">Python, Big Data, Geospatial</span>
            </div>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <h3 className="font-medium mb-2">Customer Segmentation Analysis</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Marketing analytics through K-means clustering and A/B testing for targeted customer engagement strategies.
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
              <span className="text-gray-500">Python, Clustering, Marketing</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="mt-20">
        <h2 className="text-xl font-semibold mb-8">About</h2>
        
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            I hold a Master's in Information Science from UW-Madison with a focus on data analytics and machine learning. 
            Currently working as a Data Analyst at Indiana University School of Medicine, where I develop ETL processes 
            and ensure HIPAA compliance for biomedical research data.
          </p>
          
          <div>
            <h3 className="font-medium mb-3">Certifications</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Google Advanced Data Analytics (Coursera, 2023)</li>
              <li>• Data Analyst in Tableau (DataCamp, 2022-2023)</li>
              <li>• Data Analyst in SQL (DataCamp, 2022-2023)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Core Skills</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Python (Pandas, Scikit-Learn) • SQL • Machine Learning • Tableau • Data Visualization • 
              Statistical Analysis • ETL Pipelines • HIPAA Compliance
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-6">
          <span className="text-gray-600 dark:text-gray-400">Connect:</span>
          <a 
            href="https://github.com/tzolkowski96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            <Github size={18} className="mr-2" /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            <Linkedin size={18} className="mr-2" /> LinkedIn
          </a>
          <a 
            href="mailto:contact@example.com"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            <Mail size={18} className="mr-2" /> Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;