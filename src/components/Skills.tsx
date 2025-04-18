import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Code, Database, BarChart as ChartBar, LineChart, GitBranch, UserPlus, Lightbulb, MessagesSquare, Gauge, CheckCircle2, HardDrive, Cloud, CloudCog, Briefcase, Braces, CircleDashed, Boxes, Book, Network, FileCode, PenTool, Server, Laptop } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const progressBarsRef = useRef<HTMLDivElement[]>([]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Animation for skill bars on scroll with improved visibility
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.width || '0%';
              bar.classList.add('animated');
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
  }, [activeTab, activeCategory]);
  
  useEffect(() => {
    // Set initial active category
    if (technicalSkills.length > 0 && !activeCategory) {
      setActiveCategory(technicalSkills[0].category);
    }
  }, [activeTab]);

  const technicalSkills = [
    {
      category: 'Programming',
      icon: <Code size={24} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      skills: [
        { name: 'Python', level: 75, description: 'Pandas, NumPy, Scikit-Learn, Flask, Streamlit' },
        { name: 'SQL', level: 80, description: 'MySQL, PostgreSQL, Advanced Queries, Optimization' },
        { name: 'JavaScript', level: 50, description: 'Web development basics, data visualization' },
        { name: 'HTML/CSS', level: 55, description: 'Web interfaces for data applications' },
      ]
    },
    {
      category: 'Data Analysis',
      icon: <ChartBar size={24} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />,
      skills: [
        { name: 'EDA', level: 85, description: 'Exploratory Data Analysis & Statistical Testing' },
        { name: 'Visualization', level: 80, description: 'Tableau, Looker, Matplotlib, Seaborn, Plotly' },
        { name: 'Statistical Methods', level: 70, description: 'Hypothesis testing, Regression, ANOVA' },
        { name: 'Excel Advanced', level: 85, description: 'Advanced Functions, Pivot Tables, VBA' },
      ]
    },
    {
      category: 'Machine Learning',
      icon: <Boxes size={24} className="text-purple-600 dark:text-purple-400" aria-hidden="true" />,
      skills: [
        { name: 'Classification', level: 65, description: 'Logistic Regression, Random Forest, XGBoost' },
        { name: 'Clustering', level: 60, description: 'K-means, Hierarchical Clustering' },
        { name: 'Model Evaluation', level: 70, description: 'Cross-validation, Metrics, Feature Importance' },
        { name: 'Feature Engineering', level: 65, description: 'Feature selection, transformation, encoding' },
      ]
    },
    {
      category: 'Databases',
      icon: <Database size={24} className="text-green-600 dark:text-green-400" aria-hidden="true" />,
      skills: [
        { name: 'MySQL', level: 80, description: 'Complex queries, optimization, stored procedures' },
        { name: 'PostgreSQL', level: 75, description: 'Advanced querying, window functions, indexing' },
        { name: 'Data Modeling', level: 70, description: 'Schema design, normalization, optimization' },
        { name: 'Query Optimization', level: 75, description: 'Performance tuning, execution plans' },
      ]
    },
    {
      category: 'ETL/Pipelines',
      icon: <Braces size={24} className="text-amber-600 dark:text-amber-400" aria-hidden="true" />,
      skills: [
        { name: 'Data Cleaning', level: 85, description: 'Handling missing values, outliers, inconsistencies' },
        { name: 'Data Transformation', level: 80, description: 'Reshaping, aggregating, feature creation' },
        { name: 'Pipeline Development', level: 65, description: 'Building efficient data processing systems' },
        { name: 'Automation', level: 70, description: 'Scheduled processes, reporting automation' },
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: <GitBranch size={24} className="text-teal-600 dark:text-teal-400" aria-hidden="true" />,
      skills: [
        { name: 'Version Control', level: 65, description: 'Git, GitHub' },
        { name: 'Jupyter', level: 85, description: 'Interactive notebooks, data exploration' },
        { name: 'VS Code', level: 80, description: 'Development environment, extensions' },
        { name: 'Database Tools', level: 75, description: 'MySQL Workbench, pgAdmin, DataGrip' },
        { name: 'Healthcare Systems', level: 80, description: 'HIPAA Compliance, REDCap, Clinical Data' },
      ]
    },
    {
      category: 'Cloud & Enterprise',
      icon: <Cloud size={24} className="text-blue-500 dark:text-blue-400" aria-hidden="true" />,
      skills: [
        { name: 'AWS & Azure', level: 55, description: 'Cloud databases, basic services' },
        { name: 'Enterprise Tools', level: 65, description: 'SSMS, Power Automate, SharePoint' },
        { name: 'Power BI', level: 60, description: 'Business intelligence reporting' },
        { name: 'Cloud Databases', level: 60, description: 'Setup and management of cloud-based data storage' },
      ]
    },
  ];

  const softSkills = [
    {
      category: 'Communication',
      icon: <MessagesSquare size={24} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      skills: [
        { name: 'Technical Writing', level: 80, description: 'Clear documentation and reports' },
        { name: 'Presentation', level: 75, description: 'Explaining complex concepts to diverse audiences' },
        { name: 'Data Storytelling', level: 85, description: 'Translating findings into compelling narratives' },
        { name: 'Cross-functional', level: 75, description: 'Communicating across technical and non-technical teams' },
      ]
    },
    {
      category: 'Collaboration',
      icon: <UserPlus size={24} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />,
      skills: [
        { name: 'Team Projects', level: 80, description: 'Working effectively in cross-functional teams' },
        { name: 'Stakeholder Management', level: 70, description: 'Understanding needs and setting expectations' },
        { name: 'Peer Review', level: 75, description: 'Constructive feedback and code reviews' },
        { name: 'Version Control', level: 70, description: 'Collaborative development using Git/GitHub' },
      ]
    },
    {
      category: 'Problem Solving',
      icon: <Lightbulb size={24} className="text-purple-600 dark:text-purple-400" aria-hidden="true" />,
      skills: [
        { name: 'Analytical Thinking', level: 90, description: 'Breaking down complex problems systematically' },
        { name: 'Research', level: 85, description: 'Finding effective solutions through research' },
        { name: 'Adaptability', level: 80, description: 'Quick learning and applying new technologies' },
        { name: 'Critical Thinking', level: 85, description: 'Evaluating information objectively for decision-making' },
      ]
    },
    {
      category: 'Professional Growth',
      icon: <Gauge size={24} className="text-green-600 dark:text-green-400" aria-hidden="true" />,
      skills: [
        { name: 'Continuous Learning', level: 95, description: 'Dedication to expanding technical knowledge' },
        { name: 'Self-Direction', level: 85, description: 'Initiative in starting and completing projects' },
        { name: 'Time Management', level: 75, description: 'Balancing priorities and meeting deadlines' },
        { name: 'Goal Setting', level: 80, description: 'Strategic planning for skill development' },
      ]
    },
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
    {
      timeframe: 'Ongoing',
      focus: 'Database Systems',
      technologies: 'PostgreSQL Deep Dive, MSSQL, NoSQL',
      goal: 'Broaden database expertise',
    },
  ];

  const specializations = [
    {
      area: "Data Pipeline Development",
      description: "Building and optimizing ETL pipelines for efficient data processing",
      icon: <Database size={20} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
    },
    {
      area: "Healthcare Analytics",
      description: "Conducting HIPAA-compliant data analysis for medical research",
      icon: <LineChart size={20} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
    },
    {
      area: "Performance Optimization",
      description: "Improving database and query performance for large datasets",
      icon: <Gauge size={20} className="text-purple-600 dark:text-purple-400" aria-hidden="true" />
    },
    {
      area: "Automated Reporting",
      description: "Creating streamlined data processing workflows and automated reporting systems",
      icon: <ChartBar size={20} className="text-green-600 dark:text-green-400" aria-hidden="true" />
    }
  ];
  
  // Add certifications
  const certifications = [
    {
      title: "Google Advanced Data Analytics",
      issuer: "Coursera",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY",
      skills: ["Python", "Machine Learning", "Statistical Analysis", "Data Visualization"]
    },
    {
      title: "Data Analyst in Tableau Track",
      issuer: "DataCamp",
      date: "2022-2023",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8",
      skills: ["Tableau", "Dashboard Design", "Data Visualization", "Business Intelligence"]
    },
    {
      title: "Data Analyst in SQL Track",
      issuer: "DataCamp",
      date: "2022-2023",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d",
      skills: ["SQL", "Data Analysis", "Database Design", "Query Optimization"]
    }
  ];

  // Updated specialized skills tables from README
  const specializedSkills = [
    {
      category: "Data Engineering & Analysis",
      skills: [
        { 
          area: "Python & Data Processing", 
          level: "Proficient",
          description: "Strong foundation in data manipulation using Pandas, NumPy, SciPy"
        },
        { 
          area: "SQL & Databases", 
          level: "Proficient",
          description: "Skilled in writing complex queries and database optimization (PostgreSQL, MySQL, MSSQL)"
        },
        { 
          area: "ETL Development", 
          level: "Intermediate",
          description: "Experience in building and maintaining data pipelines with focus on data quality and automation"
        }
      ],
      icon: <Database size={24} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
    },
    {
      category: "Machine Learning & Analytics",
      skills: [
        { 
          area: "Machine Learning", 
          level: "Foundational",
          description: "Actively developing skills in ML model implementation using Scikit-learn, XGBoost"
        },
        { 
          area: "Business Intelligence", 
          level: "Proficient",
          description: "Creation of interactive dashboards in Tableau, Looker, Power BI"
        },
        { 
          area: "Statistical Analysis", 
          level: "Intermediate",
          description: "Solid understanding of hypothesis testing, A/B testing, and regression analysis"
        }
      ],
      icon: <Boxes size={24} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
    },
    {
      category: "Enterprise Solutions",
      skills: [
        { 
          area: "Healthcare Systems", 
          level: "Proficient",
          description: "Strong knowledge of healthcare data management and HIPAA compliance"
        },
        { 
          area: "Cloud Services", 
          level: "Foundational",
          description: "Developing experience with AWS, Azure, and cloud databases"
        },
        { 
          area: "Enterprise Tools", 
          level: "Intermediate",
          description: "Working knowledge of SSMS, Power Automate, and SharePoint"
        }
      ],
      icon: <Briefcase size={24} className="text-teal-600 dark:text-teal-400" aria-hidden="true" />
    }
  ];

  // Key technologies from README
  const keyTechnologies = [
    {
      category: "Python Ecosystem",
      technologies: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Flask", "Streamlit", "Selenium", "Tkinter"],
      icon: <Code size={24} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
    },
    {
      category: "SQL & Databases",
      technologies: ["MySQL", "PostgreSQL", "CTEs", "Window Functions", "Query Optimization", "Schema Design"],
      icon: <Database size={24} className="text-green-600 dark:text-green-400" aria-hidden="true" />
    },
    {
      category: "Web Technologies",
      technologies: ["HTML", "CSS", "JavaScript", "TypeScript (Learning)", "React (Learning)"],
      icon: <FileCode size={24} className="text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
    },
    {
      category: "Data Visualization",
      technologies: ["Tableau", "Looker", "Power BI", "Plotly.js", "D3.js (Learning)"],
      icon: <LineChart size={24} className="text-purple-600 dark:text-purple-400" aria-hidden="true" />
    },
    {
      category: "Development Tools",
      technologies: ["Git", "GitHub", "VS Code", "Jupyter", "MySQL Workbench", "pgAdmin", "DataGrip"],
      icon: <PenTool size={24} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
    },
    {
      category: "Enterprise & Healthcare",
      technologies: ["REDCap", "HIPAA Compliance", "Excel Advanced", "SSMS", "Power Automate", "SharePoint"],
      icon: <Briefcase size={24} className="text-teal-600 dark:text-teal-400" aria-hidden="true" />
    }
  ];

  const activeSkills = activeTab === 'technical' ? technicalSkills : softSkills;
  
  const getLevelClass = (level: number) => {
    if (level >= 80) return 'bg-green-600 dark:bg-green-500';
    if (level >= 65) return 'bg-blue-600 dark:bg-blue-500';
    if (level >= 50) return 'bg-indigo-600 dark:bg-indigo-500';
    return 'bg-purple-600 dark:bg-purple-500';
  };
  
  const getSkillTooltip = (skill: { name: string, level: number, description: string }) => {
    let proficiency = 'Beginner';
    if (skill.level >= 80) proficiency = 'Expert';
    else if (skill.level >= 65) proficiency = 'Advanced';
    else if (skill.level >= 50) proficiency = 'Intermediate';
    
    return `${skill.name} (${proficiency}): ${skill.description}`;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-primary" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-pretty">
            My technical proficiencies and ongoing learning journey in data analysis, visualization, and related technologies.
            Each skill represents an area where I've developed practical expertise through project work and continuous learning.
          </p>
        </div>

        {/* Tab Selection with improved accessibility */}
        <div className="flex justify-center mb-12 opacity-0 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <div className="bg-white dark:bg-gray-700 inline-flex rounded-lg p-1 shadow-sm" role="tablist">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-2.5 rounded-md transition-all duration-300 ${
                activeTab === 'technical' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              role="tab"
              aria-selected={activeTab === 'technical'}
              aria-controls="technical-skills-panel"
              id="technical-skills-tab"
            >
              <span className="flex items-center">
                <Code size={18} className="mr-2" aria-hidden="true" />
                Technical Skills
              </span>
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-2.5 rounded-md transition-all duration-300 ${
                activeTab === 'soft' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              role="tab"
              aria-selected={activeTab === 'soft'}
              aria-controls="soft-skills-panel"
              id="soft-skills-tab"
            >
              <span className="flex items-center">
                <UserPlus size={18} className="mr-2" aria-hidden="true" />
                Soft Skills
              </span>
            </button>
          </div>
        </div>
        
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 opacity-0 animate-fadeIn" style={{animationDelay: '0.3s'}}>
          {activeSkills.map((skillGroup, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(skillGroup.category)}
              className={`px-4 py-2 rounded-full flex items-center transition-all duration-300 shadow-sm ${
                activeCategory === skillGroup.category 
                  ? 'bg-blue-600 text-white scale-105 shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              aria-pressed={activeCategory === skillGroup.category}
            >
              <span className="mr-2">{skillGroup.icon}</span>
              {skillGroup.category}
            </button>
          ))}
        </div>

        {/* Skills Display with improved interactivity */}
        <div 
          role="tabpanel" 
          id={`${activeTab}-skills-panel`}
          aria-labelledby={`${activeTab}-skills-tab`}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeSkills
              .filter(skillGroup => !activeCategory || skillGroup.category === activeCategory)
              .map((skillGroup, idx) => (
                <div 
                  key={idx} 
                  className="skill-group enhanced-card p-6 transform transition-all duration-500 hover:shadow-lg opacity-0 animate-fadeIn" 
                  style={{animationDelay: `${0.4 + idx * 0.1}s`}}
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
                    <span className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-md mr-3">{skillGroup.icon}</span>
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-6">
                    {skillGroup.skills.map((skill, skillIdx) => (
                      <div 
                        key={skillIdx} 
                        className="mb-6"
                        onMouseEnter={() => setHoveredSkill(`${skillGroup.category}-${skill.name}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                          <div className="flex items-center">
                            <span 
                              className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                                skill.level >= 80 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                                skill.level >= 65 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                                skill.level >= 50 ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' :
                                'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                              }`}
                            >
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        <div className="relative w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className={`progress-bar ${getLevelClass(skill.level)} h-2.5 rounded-full transition-all duration-1000 ease-out relative`} 
                            style={{ width: '0%' }}
                            data-width={`${skill.level}%`}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={skill.level}
                            role="progressbar"
                            aria-label={`${skill.name} skill level: ${skill.level}%`}
                          >
                            <div className="absolute inset-0 bg-white/20 overflow-hidden rounded-full skill-shine"></div>
                          </div>
                        </div>
                        
                        {/* Skill description */}
                        <div className={`mt-2 text-sm text-gray-700 dark:text-gray-300 flex items-start overflow-hidden transition-all duration-300 ${
                          hoveredSkill === `${skillGroup.category}-${skill.name}` ? 'max-h-24 opacity-100' : 'max-h-6 opacity-75'
                        }`}>
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <p>{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Key Technologies Section */}
        <div className="mb-16 enhanced-card p-8 transform transition-all duration-500 hover:shadow-lg opacity-0 animate-fadeIn bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm" style={{animationDelay: '0.5s'}}>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center flex items-center justify-center">
            <Server size={24} className="mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            Key Technologies & Libraries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyTechnologies.map((tech, idx) => (
              <div key={idx} className="bg-blue-50/80 dark:bg-blue-900/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-full mr-3 shadow-sm">
                    {tech.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100">{tech.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((item, i) => (
                    <span key={i} className="bg-white/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Specialized Skills Tables */}
        <div className="mb-16 enhanced-card p-8 transform transition-all duration-500 hover:shadow-lg opacity-0 animate-fadeIn bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm" style={{animationDelay: '0.55s'}}>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center flex items-center justify-center">
            <Laptop size={24} className="mr-2 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            Specialized Skills & Proficiencies
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {specializedSkills.map((skillCategory, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                    {skillCategory.icon}
                    <span className="ml-2">{skillCategory.category}</span>
                  </h4>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {skillCategory.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill.area}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          skill.level === 'Proficient' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          skill.level === 'Intermediate' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="mb-16 enhanced-card p-8 transform transition-all duration-500 hover:shadow-lg opacity-0 animate-fadeIn bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center flex items-center justify-center">
            <CheckCircle2 size={24} className="mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            Certifications & Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-blue-50/80 dark:bg-blue-900/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2">{cert.title}</h4>
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <span>{cert.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.slice(0, 2).map((skill, i) => (
                    <span key={i} className="bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 2 && (
                    <span className="bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md">
                      +{cert.skills.length - 2} more
                    </span>
                  )}
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                  aria-label={`View ${cert.title} certificate`}
                >
                  View Certificate
                  <ArrowUpRight size={14} className="ml-1" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Focus Areas & Specializations */}
        <div className="mb-16 enhanced-card p-8 transform transition-all duration-500 hover:shadow-lg opacity-0 animate-fadeIn bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm" style={{animationDelay: '0.7s'}}>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Focus Areas & Specializations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializations.map((spec, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm mr-4">
                    {spec.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2">{spec.area}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{spec.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Pathway */}
        <div className="enhanced-card p-8 transform transition-all duration-500 hover:shadow-lg opacity-0 animate-fadeIn bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Professional Development Roadmap</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-transparent divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-blue-50 dark:bg-blue-900/30 text-left text-sm font-semibold text-gray-800 dark:text-gray-200 border-b-2 border-blue-100 dark:border-blue-900/50 rounded-tl-lg">Timeframe</th>
                  <th className="py-3 px-4 bg-blue-50 dark:bg-blue-900/30 text-left text-sm font-semibold text-gray-800 dark:text-gray-200 border-b-2 border-blue-100 dark:border-blue-900/50">Focus Areas</th>
                  <th className="py-3 px-4 bg-blue-50 dark:bg-blue-900/30 text-left text-sm font-semibold text-gray-800 dark:text-gray-200 border-b-2 border-blue-100 dark:border-blue-900/50">Technologies</th>
                  <th className="py-3 px-4 bg-blue-50 dark:bg-blue-900/30 text-left text-sm font-semibold text-gray-800 dark:text-gray-200 border-b-2 border-blue-100 dark:border-blue-900/50 rounded-tr-lg">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {developmentPathway.map((path, idx) => (
                  <tr 
                    key={idx} 
                    className={`${
                      idx % 2 === 0 ? 'bg-gray-50/70 dark:bg-gray-800/50' : 'bg-white/70 dark:bg-gray-800/30'
                    } hover:bg-blue-50/80 dark:hover:bg-blue-900/30 transition-colors relative group`}
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        path.timeframe === 'Current' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        path.timeframe === 'Short-term' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        path.timeframe === 'Mid-term' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                      }`}>
                        {path.timeframe}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">{path.focus}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">{path.technologies}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">{path.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-xl border-l-4 border-blue-500 dark:border-blue-700">
            <p className="text-gray-700 dark:text-gray-300 text-sm text-pretty">
              <strong className="text-blue-700 dark:text-blue-400">Learning Focus:</strong> My approach combines web development skills (JavaScript → TypeScript → React) for interactive visualizations, mobile app development (Swift), and continuous improvement in data science, machine learning, and database technologies. This comprehensive skill set enables me to create end-to-end data solutions across multiple platforms.
            </p>
          </div>
        </div>
        
        {/* Learning Journey Quote - Enhanced contrast version */}
        <div className="mt-10 p-8 rounded-xl shadow-lg max-w-4xl mx-auto border-l-4 border-indigo-600 dark:border-indigo-500" style={{
          background: "linear-gradient(135deg, rgba(224, 231, 255, 0.95) 0%, rgba(214, 226, 255, 0.95) 100%)",
          color: "#1e3a8a"
        }}>
          <div className="flex">
            <div className="flex-shrink-0">
              <Lightbulb size={32} className="text-indigo-700" style={{ filter: "drop-shadow(0 1px 1px rgba(30, 64, 175, 0.4))" }} aria-hidden="true" />
            </div>
            <div className="ml-4">
              <blockquote className="italic text-lg font-medium text-indigo-900" style={{ textShadow: "0 1px 1px rgba(255, 255, 255, 0.5)" }}>
                "I believe in continuous learning and practical application. Each project represents both a learning opportunity and a chance to solve real-world problems with data."
              </blockquote>
              <p className="mt-4 text-indigo-800 font-normal">
                As someone actively developing my skills, I focus on projects that challenge me to grow while delivering practical value. 
                I embrace transparency in my learning journey, utilizing online resources, courses, and AI assistance to tackle complex 
                problems, always aiming to deepen my understanding and capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Dark mode version of the quote with enhanced contrast */}
        <style jsx>{`
          @media (prefers-color-scheme: dark) {
            .dark .mt-10.p-8.rounded-xl {
              background: linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(49, 46, 129, 0.8) 100%) !important;
              color: #e0e7ff !important;
              border-color: #6366f1 !important;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1) !important;
            }
            
            .dark .text-indigo-700 {
              color: #a5b4fc !important; /* indigo-300 */
            }
            
            .dark .text-indigo-900 {
              color: #e0e7ff !important; /* indigo-100 */
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
            }
            
            .dark .text-indigo-800 {
              color: #c7d2fe !important; /* indigo-200 */
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;