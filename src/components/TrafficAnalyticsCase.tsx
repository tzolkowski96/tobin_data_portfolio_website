import React from 'react';
import { ChevronDown, ChevronUp, MapPin, BarChart3, Database, CheckCircle, AlertTriangle } from 'lucide-react';

interface TrafficAnalyticsCaseProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const TrafficAnalyticsCase: React.FC<TrafficAnalyticsCaseProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-200 dark:from-red-900 dark:to-orange-800 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin size={24} className="text-red-600 dark:text-red-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Case Study: Traffic Accident Analytics Engine</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Comprehensive analysis of <strong>7.7M US traffic records</strong> using advanced statistical methods, 
              achieving 78% prediction accuracy with significant memory optimization.
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
              <AlertTriangle size={16} className="mr-2" />
              Challenge
            </h4>
            <p className="text-red-700 dark:text-red-300 text-sm">
              With millions of traffic accidents occurring annually in the US, there was a need to identify 
              patterns and risk factors that could inform public safety initiatives and policy decisions.
            </p>
          </div>

          {/* Dataset Overview */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <Database size={16} className="mr-2" />
              Dataset Characteristics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">7.7M</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total accident records</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">49</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">US states covered</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">47</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Feature variables</p>
              </div>
            </div>
          </div>

          {/* Technical Approach */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <BarChart3 size={16} className="mr-2" />
              Methodology & Analysis
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p><strong>Statistical Validation:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Chi-square tests for categorical relationships</li>
                  <li>ANOVA for continuous variable analysis</li>
                  <li>Correlation matrix for feature selection</li>
                  <li>P-value significance testing</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p><strong>Machine Learning:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Random Forest classification</li>
                  <li>Feature importance ranking</li>
                  <li>Cross-validation techniques</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h4 className="font-medium mb-3">Critical Insights Discovered</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-3">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Weather Impact:</strong> Fog and heavy rain increase severe accident probability by 35%
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-3">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Time Patterns:</strong> Rush hours (7-9 AM, 4-6 PM) show 2.3x higher accident density
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-3">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  <strong>Geographic Hotspots:</strong> Urban intersections account for 65% of severe accidents
                </p>
              </div>
            </div>
          </div>

          {/* Technical Innovation */}
          <div>
            <h4 className="font-medium mb-3">Technical Optimization</h4>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Memory Optimization:</p>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Reduced memory usage by 3.25%</li>
                    <li>• Chunked data processing for large datasets</li>
                    <li>• Efficient data type conversions</li>
                    <li>• Garbage collection optimization</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Geospatial Analysis:</p>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Interactive Folium visualizations</li>
                    <li>• Heatmap density analysis</li>
                    <li>• State-level aggregations</li>
                    <li>• Clustering algorithms for hotspots</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Results & Impact */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
            <h4 className="font-medium text-green-800 dark:text-green-200 mb-3 flex items-center">
              <CheckCircle size={16} className="mr-2" />
              Results & Applications
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-green-700 dark:text-green-300 mb-2"><strong>Model Performance:</strong></p>
                <ul className="text-green-600 dark:text-green-400 space-y-1">
                  <li>• 78% accuracy in severity prediction</li>
                  <li>• Statistical significance confirmed (p &lt; 0.001)</li>
                  <li>• Robust cross-validation scores</li>
                </ul>
              </div>
              <div>
                <p className="text-green-700 dark:text-green-300 mb-2"><strong>Practical Applications:</strong></p>
                <ul className="text-green-600 dark:text-green-400 space-y-1">
                  <li>• Public safety resource allocation</li>
                  <li>• Infrastructure improvement targeting</li>
                  <li>• Real-time risk assessment framework</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div>
            <h4 className="font-medium mb-3">Implementation Example</h4>
            <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`# Statistical significance testing
from scipy.stats import chi2_contingency

# Chi-square test for weather vs severity
contingency_table = pd.crosstab(df['Weather_Condition'], 
                               df['Severity'])
chi2, p_value, dof, expected = chi2_contingency(contingency_table)

print(f"Chi-square statistic: {chi2:.4f}")
print(f"P-value: {p_value:.2e}")
print(f"Statistical significance: {'Yes' if p_value < 0.05 else 'No'}")`}
              </pre>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-medium mb-3">Technical Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Scipy', 'Folium', 'Matplotlib', 'Seaborn', 'Statistical Analysis'].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <a 
              href="https://github.com/tzolkowski96/tzolkowski96/tree/main/us_accidents_analysis"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm"
            >
              View Complete Analysis →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrafficAnalyticsCase;