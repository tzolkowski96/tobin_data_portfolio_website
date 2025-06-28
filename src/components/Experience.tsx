import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Building, TrendingUp, Database, Users } from 'lucide-react';

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
      icon: <Database size={20} className="text-gray-600 dark:text-gray-400" />,
      achievements: [
        'Improved data quality by 35% through efficient ETL processes',
        'Ensured 100% HIPAA compliance across all data handling procedures',
        'Collaborated with 10+ research teams on clinical data analysis'
      ],
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
      icon: <TrendingUp size={20} className="text-gray-600 dark:text-gray-400" />,
      achievements: [
        'Built executive dashboards using Tableau for strategic decision-making',
        'Optimized marketing campaigns resulting in measurable performance improvements',
        'Presented insights to C-level executives and cross-functional teams'
      ],
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
      icon: <Database size={20} className="text-gray-600 dark:text-gray-400" />,
      achievements: [
        'Implemented data quality control measures across research databases',
        'Created comprehensive documentation standards adopted department-wide',
        'Trained 15+ research assistants on proper data handling procedures'
      ],
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
      icon: <Building size={20} className="text-gray-600 dark:text-gray-400" />,
      achievements: [
        'Provided technical support to 500+ faculty, staff, and students',
        'Specialized in assistive technologies improving accessibility',
        'Developed automation solutions for routine inventory management'
      ],
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      {/* Career progression background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 50" className="text-gray-400">
          <defs>
            <pattern id="career-pattern" x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,5 L20,5" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.5"/>
              <circle cx="15" cy="5" r="1" fill="currentColor" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#career-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h2>
            <div className="section-divider"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My career path showcases my growth as a data professional, from foundational IT support to specialized data analysis.
              Each role has contributed valuable skills and insights to my development.
            </p>
          </div>

          {/* Enhanced experience timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="minimal-card data-pattern-bg">
                {/* Experience header with icon and company branding */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start flex-1">
                    <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4 flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mr-3">{exp.title}</h3>
                        <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                          {index === 0 ? 'Current' : 'Past'}
                        </span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Building size={16} className="text-gray-500 dark:text-gray-500 mr-2" />
                        <p className="text-gray-900 dark:text-white font-medium">{exp.company}</p>
                      </div>
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
                      
                      {/* Key achievements showcase */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                        <div className="grid gap-2">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start text-sm">
                              <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors interactive-element"
                  onClick={() => toggleExpand(exp.id)}
                  aria-expanded={expandedExperience === exp.id}
                >
                  {expandedExperience === exp.id ? (
                    <>
                      <ChevronUp size={16} className="mr-1" aria-hidden="true" />
                      <span>Show less details</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} className="mr-1" aria-hidden="true" />
                      <span>View detailed responsibilities</span>
                    </>
                  )}
                </button>
                
                {expandedExperience === exp.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Detailed Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Career progression summary */}
          <div className="mt-12 p-8 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black">
            <div className="flex items-center mb-4">
              <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                <TrendingUp size={24} className="text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Career Progression & Future Focus</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Growth Trajectory</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  From IT support foundations to specialized healthcare data analysis, 
                  each role has built upon previous experiences to create a comprehensive 
                  skill set in data management, analysis, and strategic insights.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Next Chapter Goals</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Seeking opportunities to leverage my data engineering and analytics expertise 
                  in roles that combine technical depth with strategic business impact, 
                  particularly in healthcare, technology, or data-driven organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;