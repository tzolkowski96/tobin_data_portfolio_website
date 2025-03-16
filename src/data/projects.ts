import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "Employee Churn Prediction",
    description: "Predictive models to assess employee churn and provide actionable insights for improving employee retention.",
    objective: "Develop predictive models to assess employee churn and provide actionable insights for improving employee retention.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "XGBoost"],
    highlights: [
      "Achieved up to 98% accuracy",
      "Identified key churn predictors",
      "Presented actionable recommendations"
    ],
    role: "Data cleaning, feature engineering, model development, and evaluation. Conducted an independent project and included actionable recommendations in the report.",
    category: ['data-analysis', 'machine-learning'],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true,
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/Employee-Churn-Prediction",
    demoUrl: "https://tzolkowski96.github.io/Salifort-Motors-Project/"
  },
  {
    id: 2,
    title: "Movie Genre Analysis",
    description: "Analysis of movie genres using the IMDb movies dataset to understand genre popularity, financial performance, and audience preferences.",
    objective: "Analyze movie genres using the IMDb movies dataset to understand genre popularity, financial performance, and audience preferences.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    highlights: [
      "Identified trends in genre popularity and financial performance",
      "Conducted statistical analysis to test hypotheses about movie success factors",
      "Created visualizations to illustrate key findings about genre characteristics"
    ],
    role: "Data cleaning, exploratory data analysis, statistical testing, data visualization, and interpretation of results.",
    category: ['data-analysis'],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/Movie_Genre_Analysis"
  },
  {
    id: 3,
    title: "Portuguese Students Higher Education Analysis",
    description: "Analysis of factors influencing higher education outcomes among Portuguese students using machine learning techniques.",
    objective: "Analyze factors influencing higher education outcomes among Portuguese students using machine learning techniques.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    highlights: [
      "Developed predictive models for student performance",
      "Identified key determinants of student success, including parental education and study time",
      "Provided actionable insights for improving educational strategies"
    ],
    role: "Data preparation, exploratory data analysis, feature engineering, model development and evaluation, and formulation of recommendations.",
    category: ['data-analysis', 'machine-learning'],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/portuguese-students-higher-education-analysis",
    demoUrl: "https://tzolkowski96.github.io/student-education-analysis/"
  },
  {
    id: 4,
    title: "UFood Customer Analysis",
    description: "Analysis of UFood's customer data and marketing campaign performance to improve marketing strategies and customer engagement.",
    objective: "Analyze UFood's customer data and marketing campaign performance to improve marketing strategies and customer engagement.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "SciPy"],
    highlights: [
      "Conducted customer segmentation using K-means clustering",
      "Performed A/B testing on marketing campaigns",
      "Analyzed product preferences and customer lifecycle value",
      "Provided data-driven recommendations for marketing strategy optimization"
    ],
    role: "Comprehensive data analysis, including exploratory data analysis, customer segmentation, time-series analysis, statistical testing, and strategic recommendation formulation.",
    category: ['data-analysis', 'machine-learning'],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/ufood_analysis",
    demoUrl: "https://tzolkowski96.github.io/analyst-builder-food-marketing-project/"
  },
  {
    id: 5,
    title: "Crypto Market Insights",
    description: "Comprehensive cryptocurrency data pipeline for real-time market analysis.",
    objective: "Develop a comprehensive cryptocurrency data pipeline for real-time market analysis.",
    technologies: ["Python", "Selenium", "Pandas", "Matplotlib", "Seaborn", "SciPy"],
    highlights: [
      "Real-time data scraping from CoinMarketCap",
      "In-depth analysis of top cryptocurrencies",
      "Generation of various visualizations including price comparisons and correlation heatmaps",
      "Automated Excel report generation with raw data and analysis results"
    ],
    role: "Designed and implemented the entire data pipeline, including web scraping, data processing, analysis, and visualization components.",
    category: ['data-analysis', 'python'],
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/crypto_market_insights"
  },
  {
    id: 6,
    title: "Traffic Accident Analytics Engine",
    description: "Comprehensive data analysis platform analyzing 7.7 million US traffic accidents (2016-2023).",
    objective: "Comprehensive data analysis platform analyzing 7.7 million US traffic accidents (2016-2023). Utilizes advanced statistical modeling and machine learning to generate actionable insights for traffic management and public safety through interactive visualizations and predictive analytics.",
    technologies: ["Python", "NumPy", "pandas", "scikit-learn", "SciPy", "Matplotlib", "Seaborn", "Folium"],
    highlights: [
      "Implemented robust weather impact analysis using chi-square testing and ANOVA",
      "Developed and optimized Random Forest classifier achieving 78% accuracy in severity prediction",
      "Processed and standardized nationwide temporal and geospatial data across 49 states",
      "Created interactive dashboard combining heat maps, temporal analysis, and weather correlations",
      "Optimized data processing pipeline reducing memory usage by 3.25%"
    ],
    role: "Data preparation, statistical analysis, machine learning model development, feature importance analysis, cross-validation, testing, and visualization development.",
    category: ['data-analysis', 'machine-learning'],
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true,
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/us_accidents_analysis"
  },
  {
    id: 7,
    title: "Length Unit Converter",
    description: "A length unit converter application using Python and Shiny for Python.",
    objective: "Build a length unit converter application using Python and Shiny for Python.",
    technologies: ["Python", "Shiny for Python"],
    highlights: [
      "Converts values between various length units",
      "Ensures non-negative input values",
      "Provides a user-friendly interface"
    ],
    role: "Developed the conversion logic, designed the user interface, and implemented real-time result display.",
    category: ['web-development', 'python'],
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/measurement_converter"
  },
  {
    id: 8,
    title: "Streamlit Calculator",
    description: "A web-based calculator application using Streamlit.",
    objective: "Create a web-based calculator application using Streamlit.",
    technologies: ["Python", "Streamlit"],
    highlights: [
      "Supports basic arithmetic operations",
      "Displays calculation history",
      "Includes reset functionality"
    ],
    role: "Designed and implemented the calculator logic, developed the Streamlit interface, and ensured error handling.",
    category: ['web-development', 'python'],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/streamlit_calculator"
  },
  {
    id: 9,
    title: "Web Data Insights Explorer",
    description: "A comprehensive web scraping and data analysis tool with a user-friendly interface.",
    objective: "Develop a comprehensive web scraping and data analysis tool with a user-friendly interface.",
    technologies: ["Python", "Flask", "BeautifulSoup", "Pandas", "NLTK", "Matplotlib", "Seaborn", "WordCloud"],
    highlights: [
      "Dynamic web scraping with customizable regex patterns",
      "Sentiment analysis of extracted text data",
      "Generation of insightful visualizations",
      "CSV export for further analysis",
      "User-friendly web interface",
      "Ethical scraping practices"
    ],
    role: "Designed and implemented the entire data pipeline, including web scraping, data processing, analysis, visualization, and web interface development.",
    category: ['web-development', 'python', 'data-analysis'],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true,
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/advanced_web_scraping_toolkit"
  },
  {
    id: 10,
    title: "Python Exercises",
    description: "Various Python programming exercises to improve coding skills.",
    objective: "Solve various Python programming exercises to improve coding skills.",
    technologies: ["Python"],
    highlights: [
      "Covered topics such as functions, modules, file I/O, and inheritance",
      "Implemented various algorithms and data structures",
      "Practiced object-oriented programming concepts"
    ],
    role: "Independently solved exercises, documented solutions, and shared learnings with peers.",
    category: ['python'],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/python_exercises"
  },
  {
    id: 11,
    title: "File Organizer",
    description: "Automatically sort files in a specified folder by file type using a graphical user interface (GUI).",
    objective: "Automatically sort files in a specified folder by file type using a graphical user interface (GUI).",
    technologies: ["Python", "Tkinter", "Pathlib", "Shutil", "Logging"],
    highlights: [
      "Dynamic file handling by creating folders based on file extensions",
      "Option to create new folders or relocate files to an existing folder",
      "Visual file selection with checkboxes",
      "Options to handle duplicate files (skip, overwrite, or rename)",
      "User-friendly interface with logging and secure coding"
    ],
    role: "Developed the file sorting logic, designed the GUI, and implemented logging for tracking operations.",
    category: ['python'],
    image: "https://images.unsplash.com/photo-1586772002345-339f8042a777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/file_organizer"
  },
  {
    id: 12,
    title: "World Life Expectancy Analysis",
    description: "Comprehensive data cleaning and analysis of global life expectancy statistics (2007-2022).",
    objective: "Comprehensive data cleaning and analysis of global life expectancy statistics (2007-2022).",
    technologies: ["MySQL", "MySQL Workbench", "Git"],
    highlights: [
      "Data Quality: 93.41%",
      "Development Gap: 12.36 years",
      "COVID Impact: -4.75%",
      "Recovery: +5.91%",
      "Advanced SQL: CTEs, Window Functions, Statistical Calculations",
      "Data Cleaning: Deduplication, Standardization, Quality Scoring"
    ],
    role: "Developed robust data pipeline, performed comprehensive analysis, and documented findings with technical documentation.",
    category: ['sql', 'data-analysis'],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true,
    githubUrl: "https://github.com/tzolkowski96/tzolkowski96/tree/main/world_life_expectancy"
  },
  {
    id: 13,
    title: "Global Population Insights",
    description: "Comprehensive analysis of global population growth, trends, and policies with interactive visualizations.",
    objective: "Present comprehensive data and insights on population growth from 1960 to 2021, with projections for the future.",
    technologies: ["HTML", "CSS", "JavaScript", "Plotly.js"],
    highlights: [
      "Interactive data visualizations using Plotly.js",
      "Analysis of population growth across different regions and income groups",
      "Future population projections and implications",
      "Policy recommendations based on data analysis",
      "Case studies of successful population control measures"
    ],
    role: "Developed interactive visualizations, conducted data analysis, and created comprehensive documentation.",
    category: ['data-analysis', 'web-development'],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true,
    githubUrl: "https://github.com/tzolkowski96/global-population-insights.io",
    demoUrl: "https://tzolkowski96.github.io/global-population-insights/"
  }
];