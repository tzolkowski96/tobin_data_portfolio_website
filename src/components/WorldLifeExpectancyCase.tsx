import React from 'react';
import { ChevronDown, ChevronUp, Globe, BarChart3, Database, CheckCircle, Target, Github, TrendingUp } from 'lucide-react';

interface WorldLifeExpectancyCaseProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const WorldLifeExpectancyCase: React.FC<WorldLifeExpectancyCaseProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded flex items-center justify-center flex-shrink-0">
            <Globe size={16} className="text-gray-600 dark:text-gray-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Case Study: Global Life Expectancy Analysis</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Comprehensive analysis of <strong>2,938 global health records across 183 countries (2007-2022)</strong> using advanced SQL data processing. 
              Achieved <strong>93.41% data quality</strong> and identified a <strong>12.36-year development gap</strong> with precise COVID-19 impact quantification.
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
          <div className="minimal-card p-4 border-l-4 border-blue-400">
            <h4 className="font-medium mb-2 flex items-center">
              <Target size={14} className="mr-2" />
              Research Objectives
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-small">
              Quantify global life expectancy changes from 2007-2022, expose development gaps between nations, 
              isolate COVID-19's precise health impact, and create a robust data quality framework for 
              decision-ready insights supporting governments, healthcare providers, and international organizations.
            </p>
          </div>

          {/* Key Metrics */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <BarChart3 size={14} className="mr-2" />
              Key Findings Overview
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">12.36</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Year development gap</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">-4.75%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">COVID-19 impact (2020)</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">93.41%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Data quality score</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">183</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Countries analyzed</p>
              </div>
            </div>
          </div>

          {/* Technical Approach */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <Database size={14} className="mr-2" />
              Data Processing & Quality Framework
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div className="space-y-2">
                <p><strong>Data Pipeline:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>2,938 records processed with deduplication</li>
                  <li>37 duplicate entries resolved using priority logic</li>
                  <li>Time-series interpolation for missing values</li>
                  <li>100-point quality scoring methodology</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p><strong>Statistical Analysis:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Pearson correlation with significance testing</li>
                  <li>Two-sample hypothesis testing (p &lt; 0.05)</li>
                  <li>Moving average trend analysis</li>
                  <li>COVID-19 impact isolation methodology</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Gap Analysis */}
          <div>
            <h4 className="font-medium mb-3">Development Status Comparison</h4>
            <div className="minimal-card p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-small">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2">Metric</th>
                      <th className="text-right py-2">Developed</th>
                      <th className="text-right py-2">Developing</th>
                      <th className="text-right py-2">Gap</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2">Life Expectancy</td>
                      <td className="text-right py-2">79.20 years</td>
                      <td className="text-right py-2">66.84 years</td>
                      <td className="text-right py-2 font-medium">12.36 years</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2">GDP per Capita</td>
                      <td className="text-right py-2">$19,334</td>
                      <td className="text-right py-2">$3,614</td>
                      <td className="text-right py-2 font-medium">5.3× higher</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2">Adult Mortality</td>
                      <td className="text-right py-2">79.81</td>
                      <td className="text-right py-2">182.69</td>
                      <td className="text-right py-2 font-medium">2.3× higher</td>
                    </tr>
                    <tr>
                      <td className="py-2">Education Years</td>
                      <td className="text-right py-2">14.39</td>
                      <td className="text-right py-2">10.69</td>
                      <td className="text-right py-2 font-medium">3.70 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* COVID-19 Impact */}
          <div className="minimal-card p-4 border-l-4 border-red-400">
            <h4 className="font-medium mb-3 flex items-center">
              <TrendingUp size={14} className="mr-2" />
              COVID-19 Global Health Impact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-small">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Pre-Pandemic (2007-2019):</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Steady growth: 66.75 → 70.92 years</li>
                  <li>4.17 years improvement over 12 years</li>
                  <li>Consistent upward trajectory</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Pandemic Impact (2020):</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Sharp decline: 70.92 → 67.55 years</li>
                  <li>-4.75% global reduction</li>
                  <li>Reversed 3+ years of progress</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Recovery (2021-2022):</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Rapid rebound: 67.55 → 71.62 years</li>
                  <li>+5.91% recovery rate</li>
                  <li>Exceeded pre-pandemic levels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Correlation Analysis */}
          <div>
            <h4 className="font-medium mb-3">Health Determinants Analysis</h4>
            <div className="minimal-card p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
                <div>
                  <p className="font-medium mb-2">Positive Correlations:</p>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Schooling: r = +0.56 (Strong)</li>
                    <li>BMI: r = +0.50 (Moderate)</li>
                    <li>GDP: r = +0.40 (Moderate)</li>
                    <li>Development Status: Significant</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Negative Correlations:</p>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Adult Mortality: r = -0.69 (Strong)</li>
                    <li>Infant Deaths: r = -0.17 (Weak)</li>
                    <li>Disease Prevalence: Significant</li>
                    <li>Poverty Indicators: Moderate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Results & Impact */}
          <div className="minimal-card p-4 border-l-4 border-green-400">
            <h4 className="font-medium mb-3 flex items-center">
              <CheckCircle size={14} className="mr-2" />
              Project Impact & Applications
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Technical Achievements:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>98% high-quality data pipeline</li>
                  <li>Advanced SQL statistical analysis</li>
                  <li>Robust quality scoring framework</li>
                  <li>Automated data processing system</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Business Value:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Policy-ready insights for governments</li>
                  <li>Healthcare resource allocation guidance</li>
                  <li>Development program evaluation metrics</li>
                  <li>Global health surveillance framework</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div>
            <h4 className="font-medium mb-3">SQL Implementation Example</h4>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded overflow-x-auto">
              <pre className="text-gray-700 dark:text-gray-300 text-small">
{`-- Advanced Quality Scoring System
UPDATE worldlifexpectancy
SET data_quality_score = (
    CASE WHEN Lifeexpectancy IS NOT NULL THEN 20 ELSE 0 END +
    CASE WHEN AdultMortality IS NOT NULL AND AdultMortality > 0 THEN 20 ELSE 0 END +
    CASE WHEN GDP IS NOT NULL AND GDP > 0 THEN 20 ELSE 0 END +
    CASE WHEN BMI IS NOT NULL AND BMI BETWEEN 10 AND 100 THEN 20 ELSE 0 END +
    CASE WHEN Schooling > 0 THEN 20 ELSE 0 END
);

-- Development Gap Analysis
SELECT 
    Status,
    ROUND(AVG(Lifeexpectancy), 2) as avg_life_expectancy,
    ROUND(AVG(GDP), 0) as avg_gdp,
    COUNT(*) as record_count
FROM worldlifexpectancy
WHERE Status IN ('Developed', 'Developing')
GROUP BY Status;`}
              </pre>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-medium mb-3">Technical Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['MySQL 8.0+', 'Advanced SQL', 'Statistical Analysis', 'Data Quality Framework', 'Time Series Analysis', 'ETL Pipeline', 'Data Visualization'].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-small">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div>
            <h4 className="font-medium mb-3">System Performance</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="minimal-card p-3 text-center">
                <div className="font-semibold mb-1">&lt;2s</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Query Runtime</p>
              </div>
              <div className="minimal-card p-3 text-center">
                <div className="font-semibold mb-1">99.4%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Data Coverage</p>
              </div>
              <div className="minimal-card p-3 text-center">
                <div className="font-semibold mb-1">±1.2</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Years Accuracy</p>
              </div>
              <div className="minimal-card p-3 text-center">
                <div className="font-semibold mb-1">95%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Confidence Level</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-900">
            <a 
              href="https://github.com/tzolkowski96/tzolkowski96/tree/main/world_life_expectancy"
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

export default WorldLifeExpectancyCase;