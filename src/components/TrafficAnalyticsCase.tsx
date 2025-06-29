import React from 'react';
import { ChevronDown, ChevronUp, MapPin, BarChart3, Database, CheckCircle, AlertTriangle, Github } from 'lucide-react';

interface TrafficAnalyticsCaseProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const TrafficAnalyticsCase: React.FC<TrafficAnalyticsCaseProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded flex items-center justify-center flex-shrink-0">
            <MapPin size={16} className="text-gray-600 dark:text-gray-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Case Study: US Traffic Safety Analysis Engine</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Comprehensive analysis of <strong>7.7M US traffic accident records (2016-2023)</strong> using advanced statistical methods and geospatial visualization, 
              achieving 78% severity prediction accuracy with 3.25% memory optimization across <strong>49 US states</strong>.
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
              <AlertTriangle size={14} className="mr-2" />
              Research Objectives
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-small">
              Analyze the US Accidents dataset (2016-2023) to identify accident hotspots and temporal patterns, 
              analyze environmental factors contributing to accidents, study COVID-19 impact on traffic patterns, 
              and develop predictive insights for accident prevention across multiple data sources.
            </p>
          </div>

          {/* Dataset Overview */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <Database size={14} className="mr-2" />
              Data Processing & Quality
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">7,728,394</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Initial records processed</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">46→51</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Features (5 new derived)</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">3.25%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Memory optimization</p>
              </div>
            </div>
          </div>

          {/* Technical Approach */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <BarChart3 size={14} className="mr-2" />
              Statistical Analysis & Machine Learning
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div className="space-y-2">
                <p><strong>Statistical Validation:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Chi-square test: χ² = 96,229.39, p &lt; 0.001</li>
                  <li>ANOVA for weather-duration analysis</li>
                  <li>Cross-validation and performance metrics</li>
                  <li>Feature importance ranking</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p><strong>Geospatial & Temporal:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Interactive Folium heatmaps</li>
                  <li>Temporal pattern analysis (hourly/daily)</li>
                  <li>Urban hotspot identification</li>
                  <li>Weather condition clustering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h4 className="font-medium mb-3">Key Research Findings</h4>
            <div className="space-y-3">
              <div className="minimal-card p-3 border-l-4 border-blue-400">
                <p className="text-gray-600 dark:text-gray-400 text-small">
                  <strong>Weather Dominance:</strong> Fair weather accounts for 44.1% of accidents, followed by cloudy conditions (33.3%)
                </p>
              </div>
              <div className="minimal-card p-3 border-l-4 border-green-400">
                <p className="text-gray-600 dark:text-gray-400 text-small">
                  <strong>Temporal Patterns:</strong> Peak hours 7-9 AM and 3-7 PM, 50% reduction on weekends, December shows highest frequency
                </p>
              </div>
              <div className="minimal-card p-3 border-l-4 border-yellow-400">
                <p className="text-gray-600 dark:text-gray-400 text-small">
                  <strong>Geographic Distribution:</strong> California leads (1.7M), Florida second (0.9M), major urban corridor clustering
                </p>
              </div>
            </div>
          </div>

          {/* Feature Analysis */}
          <div>
            <h4 className="font-medium mb-3">Feature Importance & Weather Analysis</h4>
            <div className="minimal-card p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
                <div>
                  <p className="font-medium mb-2">Weather Feature Importance:</p>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Pressure: 35% importance</li>
                    <li>Temperature: 33% importance</li>
                    <li>Wind Speed: 22% importance</li>
                    <li>Visibility: 10% importance</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Severity Distribution:</p>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Level 2: ~6M accidents (dominant)</li>
                    <li>Level 3: ~1.3M accidents</li>
                    <li>Level 4: ~0.2M accidents</li>
                    <li>Level 1: <0.1M accidents</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Results & Impact */}
          <div className="minimal-card p-4 border-l-4 border-green-400">
            <h4 className="font-medium mb-3 flex items-center">
              <CheckCircle size={14} className="mr-2" />
              Model Performance & Data Insights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Machine Learning Results:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>78% accuracy in severity prediction</li>
                  <li>Random Forest classifier implementation</li>
                  <li>Strong statistical significance (p < 0.001)</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Data Quality Achievements:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>2,041.59 MB → 1,975.20 MB optimization</li>
                  <li>7,728,394 → 7,728,141 cleaned records</li>
                  <li>Comprehensive 7-year temporal analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div>
            <h4 className="font-medium mb-3">Implementation Example</h4>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded overflow-x-auto">
              <pre className="text-gray-700 dark:text-gray-300 text-small">
{`# Statistical significance testing
import scipy.stats as stats

# Weather-severity relationship analysis
contingency = pd.crosstab(df_clean['Weather_Simple'], 
                         df_clean['Severity'])
chi2, p_value, dof, expected = stats.chi2_contingency(contingency)

print(f"Chi-square statistic: {chi2:.4f}")
print(f"P-value: {p_value:.2e}")  # Result: 96229.39, p=0.00e+00`}
              </pre>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-medium mb-3">Technical Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Scipy', 'Folium', 'Matplotlib', 'Seaborn', 'Kagglehub'].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-small">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-900">
            <a 
              href="https://github.com/tzolkowski96/tzolkowski96/tree/main/us_accidents_analysis"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center text-small"
            >
              <Github size={14} className="mr-1" /> Code
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrafficAnalyticsCase;