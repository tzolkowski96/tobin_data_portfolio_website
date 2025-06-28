import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Code, Database, BarChart, Brain, Cloud, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.width || '0%';
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.2 });

    if (skillsRef.current) {
      const skillGroups = skillsRef.current.querySelectorAll('.skill-group');
      skillGroups.forEach(group => {
        observer.observe(group);
      });
    }

    return () => {
      if (skillsRef.current) {
        const skillGroups = skillsRef.current.querySelectorAll('.skill-group');
        skillGroups.forEach(group => {
          observer.unobserve(group);
        });
      }
    };
  }, [activeTab]);

  const technicalSkills = [
    {
      category: 'Data Programming',
      icon: <Code size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: [
        { name: 'Python', level: 75, description: 'Pandas, NumPy, Scikit-Learn, Flask, Streamlit', projects: '12+' },
        { name: 'SQL', level: 80, description: 'MySQL, PostgreSQL, Advanced Queries, Optimization', projects: '15+' },
        { name: 'JavaScript', level: 50, description: 'Web development basics, data visualization', projects: '4+' },
        { name: 'R', level: 45, description: 'Statistical analysis, data visualization', projects: '3+' },
      ]
    },
    {
      category: 'Data Analysis & ML',
      icon: <Brain size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: [
        { name: 'Machine Learning', level: 70, description: 'Classification, Regression, Clustering, Model Evaluation', projects: '8+' },
        { name: 'Statistical Analysis', level: 75, description: 'Hypothesis testing, ANOVA, Regression Analysis', projects: '10+' },
        { name: 'Feature Engineering', level: 65, description: 'Feature selection, transformation, encoding', projects: '6+' },
        { name: 'A/B Testing', level: 60, description: 'Experimental design, statistical significance', projects: '4+' },
      ]
    },
    {
      category: 'Data Visualization',
      icon: <BarChart size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: [
        { name: 'Tableau', level: 80, description: 'Advanced dashboards, calculated fields, LOD expressions', projects: '10+' },
        { name: 'Python Viz', level: 75, description: 'Matplotlib, Seaborn, Plotly, interactive plots', projects: '12+' },
        { name: 'Looker', level: 70, description: 'LookML development, dashboard creation', projects: '5+' },
        { name: 'Excel Advanced', level: 85, description: 'Pivot tables, VBA, advanced formulas, charts', projects: '15+' },
      ]
    },
    {
      category: 'Database & Infrastructure',
      icon: <Database size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: [
        { name: 'MySQL', level: 80, description: 'Complex queries, optimization, stored procedures', projects: '10+' },
        { name: 'PostgreSQL', level: 75, description: 'Advanced querying, window functions, indexing', projects: '8+' },
        { name: 'Data Modeling', level: 70, description: 'Schema design, normalization, optimization', projects: '6+' },
        { name: 'ETL/Pipelines', level: 65, description: 'Data cleaning, transformation, automation', projects: '5+' },
      ]
    },
  ];

  const softSkills = [
    {
      category: 'Data Communication',
      icon: <TrendingUp size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: [
        { name: 'Data Storytelling', level: 85, description: 'Translating findings into compelling narratives', projects: '10+' },
        { name: 'Technical Writing', level: 80, description: 'Clear documentation and reports', projects: '12+' },
        { name: 'Stakeholder Presentation', level: 75, description: 'Explaining complex concepts to diverse audiences', projects: '8+' },
        { name: 'Business Translation', level: 75, description: 'Converting technical results to business insights', projects: '9+' },
      ]
    },
    {
      category: 'Analytical Thinking',
      icon: <Brain size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: [
        { name: 'Problem Decomposition', level: 90, description: 'Breaking down complex problems systematically', projects: '15+' },
        { name: 'Critical Analysis', level: 85, description: 'Evaluating data quality and methodology', projects: '12+' },
        { name: 'Pattern Recognition', level: 80, description: 'Identifying trends and anomalies in data', projects: '10+' },
        { name: 'Research Methodology', level: 75, description: 'Designing effective data collection strategies', projects: '8+' },
      ]
    },
  ];

  const certifications = [
    {
      title: "Google Advanced Data Analytics",
      issuer: "Coursera",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY",
      focus: "Python, Machine Learning, Statistical Analysis"
    },
    {
      title: "Data Analyst in Tableau Track",
      issuer: "DataCamp",
      date: "2022-2023",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8",
      focus: "Advanced Tableau, Dashboard Design"
    },
    {
      title: "Data Analyst in SQL Track",
      issuer: "DataCamp",
      date: "2022-2023",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d",
      focus: "Advanced SQL, Database Design"
    }
  ];

  const developmentPathway = [
    {
      timeframe: 'Current',
      focus: 'Advanced Analytics',
      technologies: 'Statistical Modeling, Time Series, Forecasting',
      goal: 'Deepen statistical and analytical expertise',
      priority: 'High'
    },
    {
      timeframe: 'Short-term',
      focus: 'Cloud Data Platforms',
      technologies: 'AWS, Azure, Snowflake, Databricks',
      goal: 'Build cloud-native data solutions',
      priority: 'High'
    },
    {
      timeframe: 'Mid-term',
      focus: 'MLOps & Production ML',
      technologies: 'MLflow, Kubeflow, Docker, CI/CD',
      goal: 'Deploy and monitor ML models at scale',
      priority: 'Medium'
    },
    {
      timeframe: 'Ongoing',
      focus: 'Data Leadership',
      technologies: 'Strategy, Team Management, Data Governance',
      goal: 'Lead data-driven organizational transformation',
      priority: 'Medium'
    },
  ];

  const activeSkills = activeTab === 'technical' ? technicalSkills : softSkills;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative" ref={skillsRef}>
      {/* Data analytics background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-gray-400">
          <defs>
            <pattern id="analytics-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <rect x="5" y="5" width="2" height="15" fill="currentColor" opacity="0.3" />
              <rect x="10" y="8" width="2" height="12" fill="currentColor" opacity="0.5" />
              <rect x="15" y="3" width="2" height="17" fill="currentColor" opacity="0.7" />
              <rect x="20" y="10" width="2" height="10" fill="currentColor" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#analytics-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Data Science Expertise</h2>
            <div className="section-divider"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My comprehensive skill set in data analysis, machine learning, and business intelligence.
              Each skill represents practical experience gained through real-world projects and continuous learning.
            </p>
          </div>

          {/* Enhanced tab selection with data icons */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 py-3 rounded-lg transition-all interactive-element flex items-center ${
                  activeTab === 'technical' 
                    ? 'bg-white text-gray-900 shadow dark:bg-black dark:text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Code size={18} className="mr-2" />
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-6 py-3 rounded-lg transition-all interactive-element flex items-center ${
                  activeTab === 'soft' 
                    ? 'bg-white text-gray-900 shadow dark:bg-black dark:text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <TrendingUp size={18} className="mr-2" />
                Analytical Skills
              </button>
            </div>
          </div>
          
          {/* Enhanced skills display with project counts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {activeSkills.map((skillGroup, idx) => (
              <div key={idx} className="skill-group minimal-card data-pattern-bg">
                <div className="flex items-center mb-6">
                  <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                </div>
                <div className="space-y-6">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="interactive-element">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900 dark:text-white mr-2">{skill.name}</span>
                          {skill.projects && (
                            <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                              {skill.projects} projects
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="progress-track">
                        <div 
                          className="progress-bar" 
                          style={{ width: '0%' }}
                          data-width={`${skill.level}%`}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced certifications with focus areas */}
          <div className="minimal-card mb-16 data-pattern-bg">
            <div className="flex items-center mb-6">
              <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-400">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Certifications</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg interactive-element">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-400">
                      <circle cx="12" cy="8" r="5"/>
                      <path d="M20 21a8 8 0 1 0-16 0"/>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer} • {cert.date}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{cert.focus}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors ds-accent"
                  >
                    View Certificate
                    <ArrowUpRight size={14} className="ml-1" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced development pathway with priorities */}
          <div className="minimal-card data-pattern-bg">
            <div className="flex items-center mb-6">
              <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                <TrendingUp size={24} className="text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Development Roadmap</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="minimal-table">
                <thead>
                  <tr>
                    <th>Timeline</th>
                    <th>Focus Area</th>
                    <th>Technologies</th>
                    <th>Objective</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {developmentPathway.map((path, idx) => (
                    <tr key={idx} className="interactive-element">
                      <td>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          path.timeframe === 'Current' ? 'bg-gray-900 text-white dark:bg-white dark:text-black' :
                          'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white'
                        }`}>
                          {path.timeframe}
                        </span>
                      </td>
                      <td className="font-medium">{path.focus}</td>
                      <td className="text-gray-600 dark:text-gray-400 text-sm">{path.technologies}</td>
                      <td className="text-gray-600 dark:text-gray-400 text-sm">{path.goal}</td>
                      <td>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          path.priority === 'High' ? 'bg-gray-900 text-white dark:bg-white dark:text-black' :
                          'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {path.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Strategic Learning Approach</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                My development strategy focuses on building end-to-end data capabilities, from advanced analytics and cloud platforms 
                to production ML systems and data leadership. This comprehensive approach ensures I can contribute value across 
                the entire data science lifecycle while staying current with industry trends and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;