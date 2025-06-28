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
    <section className="section-dark section-padding">
      <div className="container-medium">
        
        {/* Large Section Header */}
        <div className="section-header">
          <h2 className="display-3">Experience</h2>
          <p className="body-large">
            Career path showcasing growth from foundational IT support to specialized data analysis, 
            with each role contributing valuable skills and insights.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="minimal-card">
              
              {/* Main Content */}
              <div className="mb-6">
                <h3 className="heading-2 mb-3">{exp.title}</h3>
                <h4 className="heading-3 mb-4">{exp.company}</h4>
                
                <div className="flex flex-wrap gap-6 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-gray-500" />
                    <span className="body-regular">{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-gray-500" />
                    <span className="body-regular">{exp.location}</span>
                  </div>
                </div>
                
                <p className="body-large mb-6">{exp.description}</p>
              </div>
              
              {/* Expand Button */}
              <button 
                className="flex items-center text-gray-500 hover:text-gray-300 body-regular group transition-colors"
                onClick={() => toggleExpand(exp.id)}
                aria-expanded={expandedExperience === exp.id}
              >
                {expandedExperience === exp.id ? (
                  <>
                    <ChevronUp size={20} className="mr-2 group-hover:transform group-hover:-translate-y-1 transition-transform" />
                    <span>Show Less</span>
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} className="mr-2 group-hover:transform group-hover:translate-y-1 transition-transform" />
                    <span>Show Details</span>
                  </>
                )}
              </button>
              
              {/* Expanded Details */}
              {expandedExperience === exp.id && (
                <div className="mt-6 pt-6 border-t border-gray-600 animate-slideUp">
                  <ul className="space-y-3">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="body-regular">{detail}</span>
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