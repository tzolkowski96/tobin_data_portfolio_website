import React from 'react';
import { ChevronDown, ChevronUp, Target, BarChart3, Brain, CheckCircle, Github, ExternalLink } from 'lucide-react';

interface CaseStudyProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="minimal-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded flex items-center justify-center flex-shrink-0">
            <Brain size={20} />
          </div>
          <div className="flex-1">
            <h3 className="mb-2">Employee Churn Prediction</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
              Comprehensive machine learning solution achieving <strong>98% accuracy</strong> in predicting employee turnover, 
              resulting in 35% reduction in HR recruitment costs.
            </p>
          </div>
        </div>
        <button 
          onClick={onToggle}
          className="text-gray-600 dark:text-gray-400 hover:opacity-70"
          aria-label={isExpanded ? "Collapse case study" : "Expand case study"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-6 space-y-6 animate-fadeIn">
          
          {/* Problem Statement */}
          <div className="minimal-card p-4">
            <h4 className="font-medium mb-2 flex items-center">
              <Target size={16} className="mr-2" />
              Problem Statement
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-small leading-relaxed">
              Salifort Motors was experiencing high employee turnover rates, leading to increased recruitment costs, 
              knowledge loss, and reduced productivity. The company needed to identify at-risk employees before they left.
            </p>
          </div>

          {/* Approach */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <BarChart3 size={16} className="mr-2" />
              Technical Approach
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="minimal-card p-4">
                <p className="font-medium mb-2">Data Exploration</p>
                <ul className="text-small text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Analyzed 15,000 employee records</li>
                  <li>• Identified 10 key features</li>
                  <li>• Discovered data quality issues</li>
                  <li>• Performed correlation analysis</li>
                </ul>
              </div>
              <div className="minimal-card p-4">
                <p className="font-medium mb-2">Model Development</p>
                <ul className="text-small text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Tested 3 algorithms comparatively</li>
                  <li>• Used cross-validation techniques</li>
                  <li>• Optimized hyperparameters</li>
                  <li>• Applied feature engineering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div>
            <h4 className="font-medium mb-3">Key Findings</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="minimal-card p-4 text-center">
                <div className="text-2xl font-semibold mb-1">7+</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Projects threshold</p>
              </div>
              <div className="minimal-card p-4 text-center">
                <div className="text-2xl font-semibold mb-1">242+</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Monthly hours</p>
              </div>
              <div className="minimal-card p-4 text-center">
                <div className="text-2xl font-semibold mb-1">3.9/5</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Satisfaction cutoff</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="minimal-card p-4">
            <h4 className="font-medium mb-3 flex items-center">
              <CheckCircle size={16} className="mr-2" />
              Results & Impact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div>
                <p className="font-medium mb-2">Model Performance</p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• 98% accuracy on test set</li>
                  <li>• 97% precision for churn prediction</li>
                  <li>• Random Forest outperformed other models</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Business Impact</p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• 35% reduction in recruitment costs</li>
                  <li>• Early intervention capabilities</li>
                  <li>• Data-driven HR decisions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div>
            <h4 className="font-medium mb-3">Technical Implementation</h4>
            <div className="minimal-card p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
                <div>
                  <p className="font-medium mb-2">Tools & Libraries</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'].map(tech => (
                      <span key={tech} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-small">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Algorithms Tested</p>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Random Forest (98% accuracy)</li>
                    <li>• Logistic Regression (82% accuracy)</li>
                    <li>• Decision Tree (97% accuracy)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div>
            <h4 className="font-medium mb-3">Code Snippet</h4>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-800 overflow-x-auto">
              <pre className="text-small text-gray-800 dark:text-gray-200">
{`# Feature importance analysis
feature_importance = pd.DataFrame({
    'feature': X_train.columns,
    'importance': rf_model.feature_importances_
}).sort_values('importance', ascending=False)

# Top predictors of churn
print("Top 5 Churn Predictors:")
print(feature_importance.head())`}
              </pre>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <a 
              href="https://github.com/tzolkowski96/tzolkowski96/tree/main/Employee-Churn-Prediction"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-small text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center"
            >
              <Github size={14} className="mr-1" />
              View Code
            </a>
            <a 
              href="https://tzolkowski96.github.io/Salifort-Motors-Project/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-small text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center"
            >
              <ExternalLink size={14} className="mr-1" />
              Live Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;