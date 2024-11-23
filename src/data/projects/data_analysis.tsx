import React from 'react';
import { BarChart2, Database, Code, Search } from 'lucide-react';
import { Project } from '../../types/project';

export const dataAnalysisProjects: Project[] = [
  {
    title: "Employee Churn Prediction",
    description: "Developed predictive models to assess employee churn and provide actionable insights for improving employee retention.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "XGBoost"],
    icon: <Code className="w-6 h-6" />,
    category: "Data Analysis and Machine Learning",
    highlights: [
      "Achieved up to 98% accuracy",
      "Identified key churn predictors",
      "Presented actionable recommendations",
      "Conducted independent analysis"
    ],
    links: {
      demo: "https://tzolkowski96.github.io/Salifort-Motors-Project/",
      github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/Employee-Churn-Prediction"
    }
  },
  {
    title: "Crypto Market Insights",
    description: "Developed a comprehensive cryptocurrency data pipeline for real-time market analysis.",
    tags: ["Python", "Selenium", "Pandas", "Matplotlib", "Seaborn", "SciPy"],
    icon: <BarChart2 className="w-6 h-6" />,
    category: "Data Analysis and Machine Learning",
    highlights: [
      "Real-time data scraping from CoinMarketCap",
      "In-depth analysis of top cryptocurrencies",
      "Generated various visualizations",
      "Automated Excel report generation"
    ],
    links: {
      github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/crypto_market_insights"
    }
  },
  {
    title: "UFood Customer Analysis",
    description: "Analyzed UFood's customer data and marketing campaign performance to improve marketing strategies and customer engagement.",
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "SciPy"],
    icon: <Database className="w-6 h-6" />,
    category: "Data Analysis and Machine Learning",
    highlights: [
      "Conducted customer segmentation using K-means",
      "Performed A/B testing on marketing campaigns",
      "Analyzed product preferences",
      "Provided data-driven recommendations"
    ],
    links: {
      demo: "https://tzolkowski96.github.io/analyst-builder-food-marketing-project/",
      github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/ufood_analysis"
    }
  },
  {
    title: "Movie Genre Analysis",
    description: "Analyzed movie genres using the IMDb movies dataset to understand genre popularity, financial performance, and audience preferences.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    icon: <Search className="w-6 h-6" />,
    category: "Data Analysis and Machine Learning",
    highlights: [
      "Identified trends in genre popularity",
      "Conducted statistical analysis",
      "Created comprehensive visualizations",
      "Interpreted key findings"
    ],
    links: {
      github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/Movie_Genre_Analysis"
    }
  },
  {
    title: "Portuguese Students Higher Education Analysis",
    description: "Analyzed factors influencing higher education outcomes among Portuguese students and predicted their interest in continuing education.",
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    icon: <BarChart2 className="w-6 h-6" />,
    category: "Data Analysis and Machine Learning",
    highlights: [
      "Developed predictive models for student performance",
      "Identified key determinants of student success",
      "Analyzed impact of parental education",
      "Provided educational strategy insights"
    ],
    links: {
      demo: "https://tzolkowski96.github.io/student-education-analysis/",
      github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/portuguese-students-higher-education-analysis"
    }
  }
];