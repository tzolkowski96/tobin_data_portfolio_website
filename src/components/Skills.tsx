import React, { useState, useEffect, useRef } from 'react';

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
            }, index * 50);
          });
        }
      });
    }, { threshold: 0.3 });

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
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 80 },
        { name: 'JavaScript', level: 50 },
        { name: 'HTML/CSS', level: 55 },
      ]
    },
    {
      category: 'Data Analysis',
      skills: [
        { name: 'EDA', level: 85 },
        { name: 'Visualization', level: 80 },
        { name: 'Statistical Methods', level: 70 },
        { name: 'Excel Advanced', level: 85 },
      ]
    },
    {
      category: 'Machine Learning',
      skills: [
        { name: 'Classification', level: 65 },
        { name: 'Clustering', level: 60 },
        { name: 'Model Evaluation', level: 70 },
        { name: 'Feature Engineering', level: 65 },
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Tableau', level: 80 },
        { name: 'Looker', level: 75 },
        { name: 'Jupyter', level: 85 },
        { name: 'Git', level: 65 },
      ]
    },
  ];

  const softSkills = [
    {
      category: 'Communication',
      skills: [
        { name: 'Technical Writing', level: 80 },
        { name: 'Presentation', level: 75 },
        { name: 'Data Storytelling', level: 85 },
        { name: 'Cross-functional', level: 75 },
      ]
    },
    {
      category: 'Problem Solving',
      skills: [
        { name: 'Analytical Thinking', level: 90 },
        { name: 'Research', level: 85 },
        { name: 'Adaptability', level: 80 },
        { name: 'Critical Thinking', level: 85 },
      ]
    },
  ];

  const activeSkills = activeTab === 'technical' ? technicalSkills : softSkills;

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900" ref={skillsRef}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-900 dark:text-white mb-8">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Technical proficiencies and ongoing learning in data analysis, visualization, and related technologies.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-1">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-2 text-sm transition-colors ${
                activeTab === 'technical' 
                  ? 'bg-white text-gray-900 dark:bg-black dark:text-white' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-4 py-2 text-sm transition-colors ${
                activeTab === 'soft' 
                  ? 'bg-white text-gray-900 dark:bg-black dark:text-white' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>
        
        {/* Skills Display */}
        <div className="grid md:grid-cols-2 gap-6">
          {activeSkills.map((skillGroup, idx) => (
            <div key={idx} className="skill-group minimal-card">
              <h3 className="text-lg text-gray-900 dark:text-white mb-4">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="progress-track">
                      <div 
                        className="progress-bar" 
                        style={{ width: '0%' }}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;