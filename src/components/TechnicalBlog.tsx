import React, { useState } from 'react';
import { Calendar, Clock, ExternalLink, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  url: string;
  tags: string[];
  isExternal?: boolean;
  featured?: boolean;
}

const TechnicalBlog: React.FC = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      title: "From Drag and Drop to Code: My Tableau to LookML Journey",
      excerpt: "A personal journey exploring the transition from visual BI tools to code-based analytics with LookML. This article discusses the learning process, challenges, and benefits of expanding beyond drag-and-drop tools.",
      readTime: "8 min read",
      date: "2024-03-15",
      url: "https://medium.com/@grateful_aqua_goat_147/from-drag-and-drop-to-code-my-tableau-to-lookml-journey-fde0165ada94",
      tags: ["Tableau", "LookML", "Data Visualization", "Career Development"],
      isExternal: true,
      featured: true
    },
    {
      title: "Building Effective ML Pipelines: Lessons from Employee Churn Prediction",
      excerpt: "Key insights from developing a machine learning model that achieved 98% accuracy in predicting employee turnover. Covers data preprocessing, feature engineering, model selection, and deployment considerations.",
      readTime: "12 min read",
      date: "2024-02-28",
      url: "#",
      tags: ["Machine Learning", "Python", "Scikit-Learn", "Data Science"]
    },
    {
      title: "SQL Performance Optimization: Analyzing 7.7M Records Efficiently",
      excerpt: "Practical techniques for optimizing SQL queries when working with large datasets. Real-world examples from traffic accident analysis project, including indexing strategies and query optimization.",
      readTime: "10 min read",
      date: "2024-02-15",
      url: "#",
      tags: ["SQL", "Performance", "Big Data", "Optimization"]
    },
    {
      title: "The Reality of Self-Taught Data Science: A Honest Assessment",
      excerpt: "Reflections on building data science skills through self-directed learning, online courses, and practical projects. What worked, what didn't, and advice for others on a similar journey.",
      readTime: "7 min read",
      date: "2024-01-30",
      url: "#",
      tags: ["Career", "Learning", "Data Science", "Education"]
    },
    {
      title: "Statistical Validation in Data Analysis: Beyond Basic Descriptives",
      excerpt: "Exploring chi-square tests, ANOVA, and other statistical methods for validating findings in real-world data analysis. Examples from healthcare and demographic data analysis projects.",
      readTime: "15 min read",
      date: "2024-01-15",
      url: "#",
      tags: ["Statistics", "Data Analysis", "Research Methods", "Python"]
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold relative">
          Technical Writing
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-white"></div>
        </h2>
        <a 
          href="https://medium.com/@grateful_aqua_goat_147" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm group transition-all duration-300 hover:scale-105"
        >
          View all on Medium 
          <ExternalLink size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>

      {/* Featured Article */}
      {featuredPost && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg group">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2">
              <TrendingUp size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Featured Article</span>
            </div>
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              Published
            </span>
          </div>

          <h3 className="font-semibold text-xl mb-3 text-blue-900 dark:text-blue-100 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
            <a 
              href={featuredPost.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              {featuredPost.title}
              <ExternalLink size={18} className="ml-2 opacity-60 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </h3>
          
          <div className="flex items-center space-x-4 text-sm text-blue-700 dark:text-blue-300 mb-4">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {formatDate(featuredPost.date)}
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              {featuredPost.readTime}
            </div>
          </div>

          <p className="text-blue-800 dark:text-blue-200 mb-4 leading-relaxed">
            {featuredPost.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {featuredPost.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded border border-blue-200 dark:border-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href={featuredPost.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-blue-300 hover:underline flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
            >
              Read article <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div className="grid gap-6">
        {regularPosts.map((post, index) => (
          <article 
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 group hover:shadow-lg"
            onMouseEnter={() => setHoveredPost(index)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-medium text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.isExternal ? (
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      {post.title}
                      <ExternalLink size={16} className="ml-2 opacity-60" />
                    </a>
                  ) : (
                    <span className="flex items-center">
                      {post.title}
                      <span className="ml-2 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    </span>
                  )}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>
              
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                hoveredPost === index ? 'bg-blue-500 scale-150' : 'bg-gray-300 dark:bg-gray-600'
              }`}></div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {post.isExternal ? (
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read article <ArrowRight size={14} className="ml-1" />
                </a>
              ) : (
                <span className="text-gray-400 dark:text-gray-600 flex items-center text-sm">
                  Coming soon <ArrowRight size={14} className="ml-1" />
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Enhanced Newsletter Signup */}
      <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg group">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
              <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-lg">
            Stay Updated with My Technical Journey
          </h3>
          <p className="text-blue-700 dark:text-blue-300 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            Subscribe to my newsletter for insights on data science, project deep-dives, and lessons learned 
            from real-world analytics work. New content every month.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://tobinzolkowski.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg group"
            >
              <BookOpen size={16} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Subscribe on Substack 
              <ExternalLink size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            
            <div className="text-xs text-blue-600 dark:text-blue-400">
              ✨ Free • No spam • Unsubscribe anytime
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalBlog;