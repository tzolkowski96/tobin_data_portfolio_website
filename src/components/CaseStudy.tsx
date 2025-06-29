import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, BarChart3, Brain, CheckCircle, Github, ExternalLink } from 'lucide-react';

interface CaseStudyProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded flex items-center justify-center flex-shrink-0">
            <Brain size={16} className="text-gray-600 dark:text-gray-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Case Study: Employee Churn Prediction</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              A comprehensive machine learning capstone project for Salifort Motors HR department achieving <strong>98% accuracy</strong> in predicting employee turnover using Random Forest and XGBoost models on <strong>15,000 employee records</strong>.
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
        <div className="mt-6 space-y-6">
          
          {/* Problem Statement */}
          <div className="minimal-card p-4 border-l-4 border-red-400">
            <h4 className="font-medium mb-2 flex items-center">
              <Target size={14} className="mr-2" />
              Problem Statement
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-small">
              The HR department at Salifort Motors collected employee data but didn't know how to use it effectively. 
              They needed data-driven insights to improve employee satisfaction and predict which employees are likely to leave, 
              as finding and training new employees is time-consuming and expensive.
            </p>
          </div>

          {/* Approach */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <BarChart3 size={14} className="mr-2" />
              Technical Approach
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div className="space-y-2">
                <p><strong>Data Exploration:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Analyzed 14,999 employee records (11,991 after cleaning)</li>
                  <li>Identified 10 key features</li>
                  <li>Removed 3,008 duplicate entries</li>
                  <li>Comprehensive EDA and correlation analysis</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p><strong>Model Development:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Logistic Regression (83% accuracy)</li>
                  <li>Random Forest (98% accuracy)</li>
                  <li>XGBoost (98% accuracy)</li>
                  <li>Cross-validation and hyperparameter tuning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div>
            <h4 className="font-medium mb-3">Key Findings</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">16.6%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Employee turnover rate</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">34.4%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Satisfaction importance in model</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">2.1%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Employees promoted in 5 years</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="minimal-card p-4 border-l-4 border-green-400">
            <h4 className="font-medium mb-3 flex items-center">
              <CheckCircle size={14} className="mr-2" />
              Results & Impact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Model Performance:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Random Forest: 98% accuracy, 97% precision</li>
                  <li>XGBoost: 98% accuracy, 98% precision</li>
                  <li>Cross-validation confirmed robustness</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Business Impact:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Identified satisfaction as top churn predictor</li>
                  <li>Enabled proactive employee retention strategies</li>
                  <li>Provided actionable insights for HR policies</li>
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
                  <p className="font-medium mb-2">Tools & Libraries:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-small">Python</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-small">Pandas</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-small">Scikit-learn</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-small">XGBoost</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-small">Matplotlib</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-small">Seaborn</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Feature Importance (Random Forest):</p>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>1. Satisfaction Level (34.4%)</li>
                    <li>2. Tenure (17.0%)</li>
                    <li>3. Number of Projects (16.7%)</li>
                    <li>4. Average Monthly Hours (16.0%)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div>
            <h4 className="font-medium mb-3">Code Snippet</h4>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded overflow-x-auto">
              <pre className="text-gray-700 dark:text-gray-300 text-small">
{`# Feature importance analysis
importances = rf_model.feature_importances_
features = X_train.columns

feature_importance_df = pd.DataFrame({
    'Feature': features, 
    'Importance': importances
}).sort_values('importance', ascending=False)

# Results show satisfaction as top predictor (34.4%)
print(feature_importance_df.head())`}
              </pre>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-900">
            <a 
              href="https://github.com/tzolkowski96/tzolkowski96/tree/main/Employee-Churn-Prediction"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center text-small"
            >
              <Github size={14} className="mr-1" /> Code
            </a>
            <a 
              href="https://tzolkowski96.github.io/Salifort-Motors-Project/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center text-small"
            >
              <ExternalLink size={14} className="mr-1" /> Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;