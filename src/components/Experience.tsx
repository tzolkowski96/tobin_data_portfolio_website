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
      company: 'Indiana University School of Medicine',
      period: 'July 2023 - Present',
      location: 'Madison, WI',
      description: 'Transform complex biomedical datasets into meaningful insights. ETL processes, clinical data, HIPAA compliance.',
      details: [
        'Data cleaning, transformation, and integration of biomedical research data',
        'Develop ETL processes improving data quality by 35%',
        'Bridge technical capabilities and clinical requirements',
        'Ensure HIPAA compliance in all data handling',
        'Translate findings into actionable insights'
      ]
    },
    {
      id: 2,
      title: 'Business Data Analyst Intern',
      company: 'Telkomsel',
      period: 'July 2022 - Sept 2022',
      location: 'Jakarta, Indonesia',
      description: 'Applied data analysis in large-scale business environment. Big data, marketing analytics, executive dashboards.',
      details: [
        'Analyzed market and customer data for business insights',
        'Built executive decision-making dashboards using Tableau',
        'Collaborated with marketing teams to optimize campaigns',
        'Created reports influencing strategic business decisions'
      ]
    },
    {
      id: 3,
      title: 'Data Manager Intern',
      company: 'University of Wisconsin-Madison',
      period: 'June 2021 - Aug 2021',
      location: 'Madison, WI',
      description: 'Structured data governance in academic setting. Data quality, documentation, standardization.',
      details: [
        'Implemented data quality control measures',
        'Developed comprehensive documentation for data management',
        'Standardized data entry procedures',
        'Created training materials for research assistants'
      ]
    },
    {
      id: 4,
      title: 'IT Support Assistant',
      company: 'University of Wisconsin-Madison',
      period: 'Sept 2019 - April 2021',
      location: 'Madison, WI',
      description: 'Gateway into technical world. User support, assistive technologies, troubleshooting.',
      details: [
        'Provided technical support for faculty, staff, and students',
        'Specialized in assistive technologies',
        'Maintained inventory databases and implemented automation',
        'Developed technical documentation and user guides'
      ]
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-900 dark:text-white mb-8">Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Career path showcasing growth from foundational IT support to specialized data analysis.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="minimal-card">
              <div className="mb-3">
                <h3 className="text-lg text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                <p className="text-gray-900 dark:text-white mb-2">{exp.company}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500 mb-2">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={12} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{exp.description}</p>
              </div>
              
              <button 
                className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 text-sm"
                onClick={() => toggleExpand(exp.id)}
                aria-expanded={expandedExperience === exp.id}
              >
                {expandedExperience === exp.id ? (
                  <>
                    <ChevronUp size={14} className="mr-1" />
                    <span>Less</span>
                  </>
                ) : (
                  <>
                    <ChevronDown size={14} className="mr-1" />
                    <span>Details</span>
                  </>
                )}
              </button>
              
              {expandedExperience === exp.id && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-800">
                  <ul className="space-y-1">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;