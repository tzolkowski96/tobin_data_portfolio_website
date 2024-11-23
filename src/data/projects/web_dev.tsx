import React from 'react';
import { Globe, Calculator } from 'lucide-react';
import { Project } from '../../types/project';

export const webDevProjects: Project[] = [
  {
    title: "Length Unit Converter",
    description: "Built a length unit converter application using Python and Shiny for Python with a focus on user experience.",
    tags: ["Python", "Shiny", "UI/UX Design"],
    icon: <Calculator className="w-6 h-6" />,
    category: "Web Development and Applications",
    highlights: [
      "Converts between various length units",
      "Ensures non-negative input values",
      "Provides user-friendly interface",
      "Real-time result display"
    ],
    links: {
      github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/measurement_converter"
    }
  },
  {
    title: "Streamlit Calculator",
    description: "Created a web-based calculator application using Streamlit with comprehensive functionality.",
    tags: ["Python", "Streamlit", "Web Development"],
    icon: <Calculator className="w-6 h-6" />,
    category: "Web Development and Applications",
    highlights: [
      "Supports basic arithmetic operations",
      "Displays calculation history",
      "Includes reset functionality",
      "Error handling implementation"
    ],
    links: {
      github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/streamlit_calculator"
    }
  },
  {
    title: "Web Data Insights Explorer",
    description: "Developed a comprehensive web scraping and data analysis tool with an intuitive interface.",
    tags: ["Python", "Flask", "BeautifulSoup", "Pandas", "NLTK", "Matplotlib"],
    icon: <Globe className="w-6 h-6" />,
    category: "Web Development and Applications",
    highlights: [
      "Dynamic web scraping with regex patterns",
      "Sentiment analysis of text data",
      "Insightful visualizations generation",
      "CSV export functionality"
    ],
    links: {
      github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/advanced_web_scraping_toolkit"
    }
  }
];