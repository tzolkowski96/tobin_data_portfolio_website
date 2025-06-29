import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      
      {/* Profile Section with Photo */}
      <div className="flex items-start space-x-6 mb-12">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800 flex-shrink-0">
          <img 
            src="/profile-image.jpg" 
            alt="Tobin Zolkowski" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00OCA0OEM1NC42Mjc0IDQ4IDYwIDQyLjYyNzQgNjAgMzZDNjAgMjkuMzcyNiA1NC42Mjc0IDI0IDQ4IDI0QzQxLjM3MjYgMjQgMzYgMjkuMzcyNiAzNiAzNkMzNiA0Mi42Mjc0IDQxLjM3MjYgNDggNDggNDhaIiBmaWxsPSIjOUM5Qzk2Ii8+CjxwYXRoIGQ9Ik0yNCA3MkMyNCA2NC4yNjggMzAuMjY4IDU4IDM4IDU4SDU4QzY1LjczMiA1OCA3MiA2NC4yNjggNzIgNzJWNzJIMjRWNzJaIiBmaWxsPSIjOUM5Qzk2Ii8+Cjwvc3ZnPgo=";
            }}
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Tobin Zolkowski</h1>
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center px-3 py-1.5 text-sm bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-80 transition-opacity"
            >
              <Download size={14} className="mr-1.5" />
              Resume
            </a>
          </div>
          
          <p className="text-lg leading-relaxed mb-4">
            Data Professional with 4+ years of experience transforming complex datasets 
            into actionable business insights. I enjoy working with Python, SQL, and machine learning 
            to solve real-world problems.
          </p>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              Madison, WI
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              Available for opportunities
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-semibold text-black dark:text-white">98%</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">ML Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-black dark:text-white">7.7M</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Records Analyzed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-black dark:text-white">4+</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-black dark:text-white">14+</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div id="experience" className="mb-20">
        <h2 className="text-xl font-semibold mb-8">Experience</h2>
        
        <div className="space-y-6">
          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Data Analyst</h3>
              <span className="text-sm text-gray-500">2023 - Present</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Indiana University School of Medicine</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transform biomedical datasets, develop ETL processes, ensure HIPAA compliance. 
              Improved data quality by 35%.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Business Data Analyst Intern</h3>
              <span className="text-sm text-gray-500">2022</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Telkomsel</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Analyzed market data, built executive dashboards using Tableau, 
              collaborated with marketing teams for campaign optimization.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Data Manager Intern</h3>
              <span className="text-sm text-gray-500">2021</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">University of Wisconsin-Madison</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Implemented data quality control measures, developed documentation, 
              standardized data entry procedures.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Visualization */}
      <div id="skills" className="mb-20">
        <h2 className="text-xl font-semibold mb-8">Core Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-4">Technical</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Python</span>
                  <span className="text-gray-500">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>SQL</span>
                  <span className="text-gray-500">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Machine Learning</span>
                  <span className="text-gray-500">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tableau</span>
                  <span className="text-gray-500">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Soft Skills</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Data Storytelling</span>
                  <span className="text-gray-500">Expert</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Problem Solving</span>
                  <span className="text-gray-500">Expert</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Communication</span>
                  <span className="text-gray-500">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Leadership</span>
                  <span className="text-gray-500">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-black dark:bg-white h-1.5 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section with Previews */}
      <div id="projects" className="mb-20">
        <h2 className="text-xl font-semibold mb-8">Featured Projects</h2>
        
        <div className="space-y-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"/>
                  <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
              </div>
              <div className="flex-1">
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
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
                </svg>
              </div>
              <div className="flex-1">
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
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="m22 21-3-3"/>
                </svg>
              </div>
              <div className="flex-1">
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
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://github.com/tzolkowski96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all projects on GitHub <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="mb-20">
        <h2 className="text-xl font-semibold mb-8">About</h2>
        
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            I hold a Master's in Information Science from UW-Madison with a focus on data analytics and machine learning. 
            Currently working as a Data Analyst at Indiana University School of Medicine, where I develop ETL processes 
            and ensure HIPAA compliance for biomedical research data.
          </p>
          
          <div>
            <h3 className="font-medium mb-3">Education</h3>
            <div className="space-y-2">
              <div>
                <div className="font-medium">Master of Science, Information Science</div>
                <div className="text-gray-600 dark:text-gray-400">University of Wisconsin-Madison</div>
              </div>
              <div>
                <div className="font-medium">Bachelor of Arts, International Studies</div>
                <div className="text-gray-600 dark:text-gray-400">University of Wisconsin-Madison</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Certifications</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Advanced Data Analytics</a> (Coursera, 2023)</li>
              <li>• <a href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Data Analyst in Tableau</a> (DataCamp, 2022-2023)</li>
              <li>• <a href="https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Data Analyst in SQL</a> (DataCamp, 2022-2023)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="mb-20">
        <h2 className="text-xl font-semibold mb-8">Testimonials</h2>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <blockquote className="text-gray-600 dark:text-gray-400 italic mb-4">
            "Tobin consistently delivers high-quality data analysis and has been instrumental in improving our data processing workflows. His attention to detail and ability to translate complex findings into actionable insights makes him an invaluable team member."
          </blockquote>
          <cite className="text-sm font-medium text-black dark:text-white">
            Dr. Sarah Johnson, Research Director
            <span className="text-gray-500 dark:text-gray-400 font-normal"> - Indiana University School of Medicine</span>
          </cite>
        </div>
      </div>
    </div>
  );
};

export default Hero;