import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, BarChart3, Brain, CheckCircle } from 'lucide-react';

interface CaseStudyProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
            <Brain size={24} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Case Study: Employee Churn Prediction</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              A comprehensive machine learning solution achieving <strong>98% accuracy</strong> in predicting employee turnover, 
              resulting in 35% reduction in HR recruitment costs.
            </p>
          </div>
        </div>
        <button 
          onClick={onToggle}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
          aria-label={isExpanded ? "Collapse case study" : "Expand case study"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-6 space-y-6 animate-in slide-in-from-top duration-300">
          
          {/* Problem Statement */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4">
            <h4 className="font-medium text-red-800 dark:text-red-200 mb-2 flex items-center">
              <Target size={16} className="mr-2" />
              Problem Statement
            </h4>
            <p className="text-red-700 dark:text-red-300 text-sm">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p><strong>Data Exploration:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Analyzed 15,000 employee records</li>
                  <li>Identified 10 key features</li>
                  <li>Discovered data quality issues</li>
                  <li>Performed correlation analysis</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p><strong>Model Development:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Tested 3 algorithms comparatively</li>
                  <li>Used cross-validation techniques</li>
                  <li>Optimized hyperparameters</li>
                  <li>Applied feature engineering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div>
            <h4 className="font-medium mb-3">Key Findings</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">7+ projects</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Strong predictor of turnover</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">242+ hours</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monthly work threshold</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">3.9/5</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction score cutoff</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
            <h4 className="font-medium text-green-800 dark:text-green-200 mb-3 flex items-center">
              <CheckCircle size={16} className="mr-2" />
              Results & Impact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-green-700 dark:text-green-300 mb-2"><strong>Model Performance:</strong></p>
                <ul className="text-green-600 dark:text-green-400 space-y-1">
                  <li>• 98% accuracy on test set</li>
                  <li>• 97% precision for churn prediction</li>
                  <li>• Random Forest outperformed other models</li>
                </ul>
              </div>
              <div>
                <p className="text-green-700 dark:text-green-300 mb-2"><strong>Business Impact:</strong></p>
                <ul className="text-green-600 dark:text-green-400 space-y-1">
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
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Tools & Libraries:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Pandas</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Scikit-learn</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Matplotlib</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Seaborn</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Algorithms Tested:</p>
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
            <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <pre className="text-green-400 text-sm">
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
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm"
            >
              View Complete Code →
            </a>
            <a 
              href="https://tzolkowski96.github.io/Salifort-Motors-Project/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm"
            >
              Live Demo →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;