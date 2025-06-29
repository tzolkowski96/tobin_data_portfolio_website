import React from 'react';
import { Calendar, Clock, ExternalLink, ArrowRight, BookOpen } from 'lucide-react';

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
  const blogPosts: BlogPost[] = [
    {
      title: "From Drag and Drop to Code: My Tableau to LookML Journey",
      excerpt: "A personal journey exploring the transition from visual BI tools to code-based analytics with LookML.",
      readTime: "8 min",
      date: "2024-03-15",
      url: "https://medium.com/@grateful_aqua_goat_147/from-drag-and-drop-to-code-my-tableau-to-lookml-journey-fde0165ada94",
      tags: ["Tableau", "LookML", "Data Visualization"],
      isExternal: true,
      featured: true
    },
    {
      title: "Building Effective ML Pipelines",
      excerpt: "Key insights from developing a machine learning model that achieved 98% accuracy in predicting employee turnover.",
      readTime: "12 min",
      date: "2024-02-28",
      url: "#",
      tags: ["Machine Learning", "Python", "Data Science"]
    },
    {
      title: "SQL Performance Optimization",
      excerpt: "Practical techniques for optimizing SQL queries when working with large datasets.",
      readTime: "10 min",
      date: "2024-02-15",
      url: "#",
      tags: ["SQL", "Performance", "Big Data"]
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
        <h2>Writing</h2>
        <a 
          href="https://medium.com/@grateful_aqua_goat_147" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-small text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center"
        >
          View all 
          <ExternalLink size={12} className="ml-1" />
        </a>
      </div>
      <div className="section-divider"></div>

      {/* Featured Article */}
      {featuredPost && (
        <div className="minimal-card p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <span className="text-small font-medium">Featured</span>
            <span className="text-small bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              Published
            </span>
          </div>

          <h3 className="mb-3">
            <a 
              href={featuredPost.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              {featuredPost.title}
            </a>
          </h3>
          
          <div className="flex items-center space-x-4 text-small text-gray-500 mb-4">
            <div className="flex items-center">
              <Calendar size={12} className="mr-1" />
              {formatDate(featuredPost.date)}
            </div>
            <div className="flex items-center">
              <Clock size={12} className="mr-1" />
              {featuredPost.readTime}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {featuredPost.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {featuredPost.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-small bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href={featuredPost.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-small text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center"
            >
              Read article <ArrowRight size={12} className="ml-1" />
            </a>
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div className="space-y-6">
        {regularPosts.map((post, index) => (
          <div key={index} className="minimal-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="mb-2">
                  {post.isExternal ? (
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-70"
                    >
                      {post.title}
                    </a>
                  ) : (
                    <span className="flex items-center">
                      {post.title}
                      <span className="ml-2 text-small bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    </span>
                  )}
                </h3>
                
                <div className="flex items-center space-x-4 text-small text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock size={12} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-small bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
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
                  className="text-small text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center"
                >
                  Read article <ArrowRight size={12} className="ml-1" />
                </a>
              ) : (
                <span className="text-small text-gray-400 flex items-center">
                  Coming soon <ArrowRight size={12} className="ml-1" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="minimal-card p-8 text-center">
        <div className="flex justify-center mb-4">
          <BookOpen size={20} className="text-gray-600 dark:text-gray-400" />
        </div>
        
        <h3 className="mb-2">Stay Updated</h3>
        <p className="text-gray-600 dark:text-gray-400 text-small mb-6 max-w-md mx-auto">
          Subscribe to my newsletter for insights on data science, project deep-dives, and lessons learned 
          from real-world analytics work.
        </p>
        
        <a 
          href="https://tobinzolkowski.substack.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="minimal-button"
        >
          <BookOpen size={16} className="mr-2" />
          Subscribe
        </a>
        
        <div className="text-small text-gray-500 mt-4">
          Free • No spam • Unsubscribe anytime
        </div>
      </div>
    </div>
  );
};

export default TechnicalBlog;