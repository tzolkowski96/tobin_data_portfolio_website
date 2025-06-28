import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My career path showcases my growth as a data professional, from foundational IT support to specialized data analysis.
              Each role has contributed valuable skills and insights to my development.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="minimal-card">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                    <p className="text-gray-900 dark:text-white font-medium mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" aria-hidden="true" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" aria-hidden="true" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  </div>
                </div>
                
                <button 
                  className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors"
                  onClick={() => toggleExpand(exp.id)}
                  aria-expanded={expandedExperience === exp.id}
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
                
                {expandedExperience === exp.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 p-6 border border-gray-200 dark:border-gray-800 rounded">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Future Career Focus</h3>
            <p className="text-gray-600 dark:text-gray-400">
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