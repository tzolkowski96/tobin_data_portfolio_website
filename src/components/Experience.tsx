import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };
  
  const experiences = [
    {
      id: 1,
      title: 'Data Analyst',
      company: 'Indiana University School of Medicine Department of Medical and Molecular Genetics',
      period: 'July 2023 - Present',
      location: 'Madison, WI',
      description: 'Working with researchers to transform complex biomedical datasets into meaningful insights. Focused on ETL processes, bridging technical/clinical gaps, handling sensitive data, and collaboration.',
      details: [
        'Perform data cleaning, transformation, and integration of complex biomedical research data',
        'Develop efficient ETL processes that improve data quality by 35%',
        'Bridge the gap between technical capabilities and clinical requirements',
        'Ensure HIPAA compliance in all data handling procedures',
        'Collaborate with research teams to translate findings into actionable insights'
      ]
    },
    {
      id: 2,
      title: 'Business Data Analyst Intern',
      company: 'Telkomsel',
      period: 'July 2022 - Sept 2022',
      location: 'Jakarta, Indonesia',
      description: 'Applied data analysis in a large-scale business environment. Gained experience with big data, marketing analytics, cross-functional teams, and presenting technical findings.',
      details: [
        'Analyzed market and customer data to derive actionable business insights',
        'Assisted in building dashboards for executive decision-making using Tableau',
        'Collaborated with marketing teams to optimize campaign performance',
        'Created reports that influenced strategic business decisions',
        'Participated in cross-functional team meetings to align data strategy with business goals'
      ]
    },
    {
      id: 3,
      title: 'Data Manager Intern',
      company: 'University of Wisconsin-Madison',
      period: 'June 2021 - Aug 2021',
      location: 'Madison, WI',
      description: 'Focused on structured data governance in an academic setting. Developed skills in data quality, documentation, standardization, and understanding user needs.',
      details: [
        'Implemented data quality control measures across academic research databases',
        'Developed comprehensive documentation for data management protocols',
        'Standardized data entry procedures to ensure consistency and reliability',
        'Conducted user interviews to understand data access and usability needs',
        'Created training materials for research assistants on proper data handling'
      ]
    },
    {
      id: 4,
      title: 'IT Support Assistant',
      company: 'University of Wisconsin-Madison',
      period: 'Sept 2019 - April 2021',
      location: 'Madison, WI',
      description: 'Gateway into the technical world, focusing on user support and assistive technologies. Developed troubleshooting skills and foundational database/automation concepts.',
      details: [
        'Provided technical support for faculty, staff, and students',
        'Specialized in assistive technologies for users with disabilities',
        'Troubleshot hardware and software issues across various platforms',
        'Maintained inventory databases and implemented automation for routine tasks',
        'Developed technical documentation and user guides for common procedures'
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-pretty">
            My career path showcases my growth as a data professional, from foundational IT support to specialized data analysis.
            Each role has contributed valuable skills and insights to my development.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line with gradient effect */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 rounded-full"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`mb-16 relative flex ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Timeline bullet and date */}
              <div className="absolute left-3 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                <div className="w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-blue-100 dark:border-blue-900 shadow-md"></div>
                <div className="mt-2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-md">
                  {exp.period}
                </div>
              </div>
              
              {/* Content */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="enhanced-card p-6 hover:translate-y-[-5px]">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 flex items-center">
                    <Briefcase size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                    {exp.company}
                  </p>
                  <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 flex-shrink-0" aria-hidden="true" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1 flex-shrink-0" aria-hidden="true" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                  
                  {/* Expandable details */}
                  <div>
                    <button 
                      className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 focus:ring-offset-2 rounded-md transition-colors"
                      onClick={() => toggleExpand(exp.id)}
                      aria-expanded={expandedExperience === exp.id}
                      aria-controls={`details-${exp.id}`}
                    >
                      {expandedExperience === exp.id ? (
                        <>
                          <ChevronUp size={16} className="mr-1" aria-hidden="true" />
                          <span>Show less</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} className="mr-1" aria-hidden="true" />
                          <span>View details</span>
                        </>
                      )}
                    </button>
                    
                    <div 
                      id={`details-${exp.id}`}
                      className={`mt-3 overflow-hidden transition-all duration-300 ${
                        expandedExperience === exp.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 pl-5">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Future career goals */}
          <div className="text-center max-w-2xl mx-auto mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Future Career Focus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              My aim is to deepen my expertise in data engineering and advanced analytics while expanding my knowledge in machine learning. 
              I'm committed to continuous learning and growth in the ever-evolving data landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;