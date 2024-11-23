import React from 'react';
import { BarChart2, Shield, Database, FileSpreadsheet, Brain, Globe, BarChart, FileText } from 'lucide-react';
import { Project } from '../../types/project';

export const additionalProjects: Project[] = [
  {
    title: "Global Population Growth Analysis",
    description: "Analyzed the impact of population growth on countries' ecological and resource sustainability.",
    tags: ["Tableau", "Python", "Data Visualization", "Sustainability Analysis"],
    icon: <Globe className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Created comprehensive visualizations of global population trends",
      "Analyzed impact on resource sustainability",
      "Highlighted female empowerment importance",
      "Addressed equitable resource distribution"
    ],
    links: {
      demo: "https://tzolkowski96.github.io/global-population-insights/"
    }
  },
  {
    title: "Cyber Threats in K-12 Schools During COVID-19",
    description: "Investigated increased cyber attacks on K-12 schools during the COVID-19 pandemic.",
    tags: ["Security Analysis", "Education", "COVID-19 Impact"],
    icon: <Shield className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Identified key cyber threats",
      "Advocated for stronger data privacy legislation",
      "Promoted security awareness",
      "Analyzed pandemic-specific vulnerabilities"
    ],
    links: {}
  },
  {
    title: "Student Disability Accommodation Database",
    description: "Developed a relational database to streamline accommodation coordination for students with disabilities.",
    tags: ["Database Design", "Education", "Accessibility"],
    icon: <Database className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Comprehensive management system",
      "Student-instructor assignment tracking",
      "Service provider coordination",
      "Streamlined accommodation process"
    ],
    links: {}
  },
  {
    title: "Academic Information System Data Management",
    description: "Improved student academic performance through enhanced data management practices.",
    tags: ["Data Management", "Education", "Decision Support"],
    icon: <FileSpreadsheet className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Implemented Distributed Decision Support",
      "Established data privacy framework",
      "Enhanced academic performance tracking",
      "Streamlined information management"
    ],
    links: {}
  },
  {
    title: "Nutritional Data Statistical Analysis",
    description: "Performed statistical hypothesis testing on nutritional data to promote public health awareness.",
    tags: ["Statistical Analysis", "Public Health", "Nutrition"],
    icon: <BarChart className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Conducted hypothesis testing",
      "Analyzed nutritional trends",
      "Promoted public health awareness",
      "Generated evidence-based insights"
    ],
    links: {}
  },
  {
    title: "Ethical Dilemmas of Data Manipulation Study",
    description: "Investigated ethical issues in data manipulation and developed guidelines for ethical data usage.",
    tags: ["Ethics", "Data Governance", "Best Practices"],
    icon: <Brain className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Applied CIA triad model",
      "Developed ethical guidelines",
      "Analyzed manipulation risks",
      "Created usage framework"
    ],
    links: {}
  },
  {
    title: "Foreign Language Skills and Test Performance Study",
    description: "Examined the correlation between foreign language proficiency and standardized test results.",
    tags: ["Education Research", "Statistical Analysis", "Language Studies"],
    icon: <BarChart2 className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Analyzed correlation patterns",
      "Highlighted language education benefits",
      "Examined test performance factors",
      "Generated educational insights"
    ],
    links: {
      github: "https://github.com/tzolkowski96/language-performance-study"
    }
  },
  {
    title: "Telecom Spatial Analytics Dashboard",
    description: "Created a spatial analytics dashboard to identify premium client opportunities in telecommunications.",
    tags: ["Tableau", "Spatial Analysis", "Marketing Analytics"],
    icon: <Globe className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Developed interactive visualizations",
      "Identified top subscriber cities",
      "Enhanced targeted marketing",
      "Improved client acquisition"
    ],
    links: {}
  },
  {
    title: "Data Reconciliation Project",
    description: "Developed a solution to reconcile and clean up data across multiple systems.",
    tags: ["Power Automate", "Python", "SQL", "Data Cleaning"],
    icon: <Database className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Improved accuracy by 25%",
      "Reduced manual effort by 40%",
      "Automated reconciliation process",
      "Enhanced data quality"
    ],
    links: {}
  },
  {
    title: "Database Utilities Development",
    description: "Created tools to streamline database management and analysis processes.",
    tags: ["Python", "SQL", "Database Management"],
    icon: <Database className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Created schema analysis tools",
      "Saved 30% manual effort",
      "Automated database documentation",
      "Improved efficiency"
    ],
    links: {}
  },
  {
    title: "Data Dictionary Management",
    description: "Managed and maintained data dictionaries and codebooks for improved data consistency.",
    tags: ["Documentation", "Data Governance", "Version Control"],
    icon: <FileText className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Reduced inconsistencies by 20%",
      "Implemented version control",
      "Enhanced collaboration",
      "Improved documentation"
    ],
    links: {}
  },
  {
    title: "Report Generation System",
    description: "Created an automated report generation system to streamline reporting processes.",
    tags: ["Python", "Automation", "Reporting"],
    icon: <FileText className="w-6 h-6" />,
    category: "Additional Projects",
    highlights: [
      "Saved 10 hours weekly",
      "Automated report creation",
      "Improved accuracy",
      "Enhanced efficiency"
    ],
    links: {}
  }
];