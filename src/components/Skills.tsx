import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

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
      category: 'Programming',
      skills: [
        { name: 'Python', level: 75, description: 'Pandas, NumPy, Scikit-Learn, Flask, Streamlit' },
        { name: 'SQL', level: 80, description: 'MySQL, PostgreSQL, Advanced Queries, Optimization' },
        { name: 'JavaScript', level: 50, description: 'Web development basics, data visualization' },
        { name: 'HTML/CSS', level: 55, description: 'Web interfaces for data applications' },
      ]
    },
    {
      category: 'Data Analysis',
      skills: [
        { name: 'EDA', level: 85, description: 'Exploratory Data Analysis & Statistical Testing' },
        { name: 'Visualization', level: 80, description: 'Tableau, Looker, Matplotlib, Seaborn, Plotly' },
        { name: 'Statistical Methods', level: 70, description: 'Hypothesis testing, Regression, ANOVA' },
        { name: 'Excel Advanced', level: 85, description: 'Advanced Functions, Pivot Tables, VBA' },
      ]
    },
    {
      category: 'Machine Learning',
      skills: [
        { name: 'Classification', level: 65, description: 'Logistic Regression, Random Forest, XGBoost' },
        { name: 'Clustering', level: 60, description: 'K-means, Hierarchical Clustering' },
        { name: 'Model Evaluation', level: 70, description: 'Cross-validation, Metrics, Feature Importance' },
        { name: 'Feature Engineering', level: 65, description: 'Feature selection, transformation, encoding' },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', level: 80, description: 'Complex queries, optimization, stored procedures' },
        { name: 'PostgreSQL', level: 75, description: 'Advanced querying, window functions, indexing' },
        { name: 'Data Modeling', level: 70, description: 'Schema design, normalization, optimization' },
        { name: 'Query Optimization', level: 75, description: 'Performance tuning, execution plans' },
      ]
    },
  ];

  const softSkills = [
    {
      category: 'Communication',
      skills: [
        { name: 'Technical Writing', level: 80, description: 'Clear documentation and reports' },
        { name: 'Presentation', level: 75, description: 'Explaining complex concepts to diverse audiences' },
        { name: 'Data Storytelling', level: 85, description: 'Translating findings into compelling narratives' },
        { name: 'Cross-functional', level: 75, description: 'Communicating across technical and non-technical teams' },
      ]
    },
    {
      category: 'Problem Solving',
      skills: [
        { name: 'Analytical Thinking', level: 90, description: 'Breaking down complex problems systematically' },
        { name: 'Research', level: 85, description: 'Finding effective solutions through research' },
        { name: 'Adaptability', level: 80, description: 'Quick learning and applying new technologies' },
        { name: 'Critical Thinking', level: 85, description: 'Evaluating information objectively for decision-making' },
      ]
    },
  ];

  const certifications = [
    {
      title: "Google Advanced Data Analytics",
      issuer: "Coursera",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY"
    },
    {
      title: "Data Analyst in Tableau Track",
      issuer: "DataCamp",
      date: "2022-2023",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8"
    },
    {
      title: "Data Analyst in SQL Track",
      issuer: "DataCamp",
      date: "2022-2023",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d"
    }
  ];

  const developmentPathway = [
    {
      timeframe: 'Current',
      focus: 'JavaScript Programming',
      technologies: 'Interactive Web Visualization, DOM',
      goal: 'Enhance web-based data presentation',
    },
    {
      timeframe: 'Short-term',
      focus: 'TypeScript & React',
      technologies: 'Component UI, Static Typing',
      goal: 'Build robust & scalable data apps',
    },
    {
      timeframe: 'Mid-term',
      focus: 'Swift Development',
      technologies: 'iOS App Development',
      goal: 'Create mobile interfaces for data insights',
    },
    {
      timeframe: 'Ongoing',
      focus: 'Data Science & ML',
      technologies: 'Advanced Stats, Deep Learning, MLOps',
      goal: 'Tackle complex predictive modeling challenges',
    },
  ];

  const activeSkills = activeTab === 'technical' ? technicalSkills : softSkills;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My technical proficiencies and ongoing learning journey in data analysis, visualization, and related technologies.
              Each skill represents an area where I've developed practical expertise through project work and continuous learning.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded">
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 py-2 rounded transition-colors ${
                  activeTab === 'technical' 
                    ? 'bg-white text-gray-900 dark:bg-black dark:text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-6 py-2 rounded transition-colors ${
                  activeTab === 'soft' 
                    ? 'bg-white text-gray-900 dark:bg-black dark:text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Soft Skills
              </button>
            </div>
          </div>
          
          {/* Skills Display */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {activeSkills.map((skillGroup, idx) => (
              <div key={idx} className="skill-group minimal-card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
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

          {/* Certifications */}
          <div className="minimal-card mb-16">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="text-center p-4 border border-gray-200 dark:border-gray-800 rounded">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer} • {cert.date}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    View Certificate
                    <ArrowUpRight size={14} className="ml-1" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Development Pathway */}
          <div className="minimal-card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Professional Development Roadmap</h3>
            <div className="overflow-x-auto">
              <table className="minimal-table">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>Focus Areas</th>
                    <th>Technologies</th>
                    <th>Goal</th>
                  </tr>
                </thead>
                <tbody>
                  {developmentPathway.map((path, idx) => (
                    <tr key={idx}>
                      <td>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          path.timeframe === 'Current' ? 'bg-gray-900 text-white dark:bg-white dark:text-black' :
                          'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white'
                        }`}>
                          {path.timeframe}
                        </span>
                      </td>
                      <td className="font-medium">{path.focus}</td>
                      <td className="text-gray-600 dark:text-gray-400">{path.technologies}</td>
                      <td className="text-gray-600 dark:text-gray-400">{path.goal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 border border-gray-200 dark:border-gray-800 rounded">
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                <strong>Learning Focus:</strong> My approach combines web development skills (JavaScript → TypeScript → React) for interactive visualizations, 
                mobile app development (Swift), and continuous improvement in data science, machine learning, and database technologies. 
                This comprehensive skill set enables me to create end-to-end data solutions across multiple platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;