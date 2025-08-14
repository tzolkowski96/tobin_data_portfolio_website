import React from 'react';
import { ChevronDown, ChevronUp, MapPin, Database, BarChart3, CheckCircle, TrendingDown, Github, DollarSign, Zap } from 'lucide-react';

interface USHouseholdIncomeCaseProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const USHouseholdIncomeCase: React.FC<USHouseholdIncomeCaseProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded flex items-center justify-center flex-shrink-0">
            <DollarSign size={16} className="text-gray-600 dark:text-gray-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Case Study: US Household Income Analysis</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Advanced SQL analysis of <strong>32,533 US household income records across all 50 states</strong> using enterprise-grade data engineering. 
              Achieved <strong>9.62/10 data quality score</strong> and revealed a striking <strong>30% income gap</strong> between Northeast and Southeast regions through sophisticated statistical methods.
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
              <MapPin size={14} className="mr-2" />
              Research Objectives
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-small">
              Analyze America's economic geography to understand regional income disparities, identify patterns of wealth concentration, 
              and create production-ready business intelligence tools for policymakers and economic development leaders. The goal was to transform 
              raw Census data into actionable insights while achieving enterprise-grade data quality standards.
            </p>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <BarChart3 size={14} className="mr-2" />
              Key Achievements
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">30%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Income gap revealed</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">9.62/10</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Data quality score</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">68%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Performance improvement</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">32,533</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Locations analyzed</p>
              </div>
            </div>
          </div>

          {/* Two-Phase Approach */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <Database size={14} className="mr-2" />
              Two-Phase Technical Framework
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div className="space-y-2">
                <p><strong>Phase 1: Data Engineering & Analysis</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>2,000+ lines of comprehensive data cleaning</li>
                  <li>Advanced text standardization procedures</li>
                  <li>Geographic validation with coordinate bounds</li>
                  <li>Weighted quality scoring methodology</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p><strong>Phase 2: Production EDA Framework</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>4 focused analytical procedures</li>
                  <li>Executive dashboard with visual alerts</li>
                  <li>15-45 second execution for quarterly reviews</li>
                  <li>Chart-ready data exports for BI tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regional Analysis Results */}
          <div>
            <h4 className="font-medium mb-3">Regional Economic Disparities</h4>
            <div className="minimal-card p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-small">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2">Region</th>
                      <th className="text-right py-2">Locations</th>
                      <th className="text-right py-2">Mean Income</th>
                      <th className="text-right py-2">Median Income</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 font-medium">Northeast</td>
                      <td className="text-right py-2">9</td>
                      <td className="text-right py-2">$118,973</td>
                      <td className="text-right py-2">$102,068</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 font-medium">West</td>
                      <td className="text-right py-2">11</td>
                      <td className="text-right py-2">$107,983</td>
                      <td className="text-right py-2">$96,742</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 font-medium">Midwest</td>
                      <td className="text-right py-2">12</td>
                      <td className="text-right py-2">$84,627</td>
                      <td className="text-right py-2">$83,405</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 font-medium">Southwest</td>
                      <td className="text-right py-2">4</td>
                      <td className="text-right py-2">$82,354</td>
                      <td className="text-right py-2">$77,494</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Southeast</td>
                      <td className="text-right py-2">12</td>
                      <td className="text-right py-2">$74,968</td>
                      <td className="text-right py-2">$71,307</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Income Distribution Analysis */}
          <div className="minimal-card p-4 border-l-4 border-yellow-400">
            <h4 className="font-medium mb-3 flex items-center">
              <TrendingDown size={14} className="mr-2" />
              Income Distribution & Inequality
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Percentile Analysis:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>25th Percentile: $36,039</li>
                  <li>50th Percentile (True Median): $51,871</li>
                  <li>75th Percentile: $80,909</li>
                  <li>90th Percentile: $300,000 (Ceiling Effect)</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Inequality Metrics:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Alaska: 3.65 mean-to-median ratio (highest)</li>
                  <li>National Average: $85,453 median</li>
                  <li>Standard Deviation: $87,810 (high variance)</li>
                  <li>15% of states show high inequality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Quality Framework */}
          <div>
            <h4 className="font-medium mb-3">Advanced Data Quality Framework</h4>
            <div className="minimal-card p-4">
              <p className="text-gray-600 dark:text-gray-400 text-small mb-3">
                Implemented weighted quality scoring prioritizing critical data elements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-small">
                <div>
                  <p className="font-medium mb-1">Coordinates (40% weight)</p>
                  <p className="text-gray-600 dark:text-gray-400">Geographic accuracy most critical for spatial analysis</p>
                </div>
                <div>
                  <p className="font-medium mb-1">ZIP Codes (35% weight)</p>
                  <p className="text-gray-600 dark:text-gray-400">Important for regional grouping</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Place Values (25% weight)</p>
                  <p className="text-gray-600 dark:text-gray-400">Useful for display purposes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Optimization */}
          <div className="minimal-card p-4 border-l-4 border-green-400">
            <h4 className="font-medium mb-3 flex items-center">
              <Zap size={14} className="mr-2" />
              Performance Engineering Results
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Query Optimization:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Execution time: 68.5s → 21.9s (68% improvement)</li>
                  <li>Strategic indexing on join columns</li>
                  <li>CTE optimization for complex queries</li>
                  <li>Memory usage optimization</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Production Framework:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>4 focused analytical procedures</li>
                  <li>Executive dashboard in &lt;45 seconds</li>
                  <li>Parameterized stored procedures</li>
                  <li>Comprehensive error handling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced SQL Techniques */}
          <div>
            <h4 className="font-medium mb-3">Advanced SQL Implementation</h4>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded overflow-x-auto">
              <pre className="text-gray-700 dark:text-gray-300 text-small">
{`-- Advanced Text Standardization Procedure
DROP PROCEDURE IF EXISTS standardize_text_field;
DELIMITER //
CREATE PROCEDURE standardize_text_field(
    IN p_table_name VARCHAR(100),
    IN p_column_name VARCHAR(100),
    IN p_where_clause VARCHAR(255)
)
BEGIN
    DECLARE affected_rows_count INT DEFAULT 0;
    
    -- First letter uppercase, rest lowercase
    SET @sql = CONCAT('UPDATE ', p_table_name, 
                    ' SET ', p_column_name, ' = CONCAT(UPPER(SUBSTRING(', p_column_name, ', 1, 1)), ',
                    'LOWER(SUBSTRING(', p_column_name, ', 2)))', 
                    IFNULL(CONCAT(' WHERE ', p_where_clause), ''));
    
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    SET affected_rows_count = ROW_COUNT();
    DEALLOCATE PREPARE stmt;
    
    -- Log the standardization
    INSERT INTO error_log (error_section, error_message, affected_rows)
    VALUES ('Text Standardization', CONCAT('Standardized ', p_column_name), affected_rows_count);
END //
DELIMITER ;

-- Regional Income Analysis with Window Functions
WITH regional_analysis AS (
    SELECT 
        State_Name,
        CASE 
            WHEN State_Name IN ('New York', 'Massachusetts', 'Connecticut') THEN 'Northeast'
            WHEN State_Name IN ('Florida', 'Georgia', 'Alabama') THEN 'Southeast'
            -- Additional regional classifications...
        END AS region,
        AVG(Median) OVER (PARTITION BY region) as regional_median,
        DENSE_RANK() OVER (ORDER BY Median DESC) as income_rank
    FROM ushouseholdincome_statistics
)
SELECT region, regional_median, COUNT(*) as state_count
FROM regional_analysis 
GROUP BY region 
ORDER BY regional_median DESC;`}
              </pre>
            </div>
          </div>

          {/* Executive Dashboard Results */}
          <div>
            <h4 className="font-medium mb-3">Executive Dashboard Output</h4>
            <div className="minimal-card p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-small">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2">Metric</th>
                      <th className="text-right py-2">Value</th>
                      <th className="text-right py-2">Signal</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2">Locations Analyzed</td>
                      <td className="text-right py-2">32,526</td>
                      <td className="text-right py-2">🟢</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2">National Median</td>
                      <td className="text-right py-2">$85,453</td>
                      <td className="text-right py-2">🟡</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2">Inequality Index</td>
                      <td className="text-right py-2">1.027</td>
                      <td className="text-right py-2">🔴</td>
                    </tr>
                    <tr>
                      <td className="py-2">Regional Disparity Ratio</td>
                      <td className="text-right py-2">1.43</td>
                      <td className="text-right py-2">🔴</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Results & Impact */}
          <div className="minimal-card p-4 border-l-4 border-purple-400">
            <h4 className="font-medium mb-3 flex items-center">
              <CheckCircle size={14} className="mr-2" />
              Business Impact & Applications
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Policy Applications:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Regional development investment guidance</li>
                  <li>Economic opportunity mapping</li>
                  <li>Infrastructure prioritization insights</li>
                  <li>Wealth concentration intervention areas</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Technical Achievements:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Enterprise-grade data quality (9.62/10)</li>
                  <li>Production-ready analytical framework</li>
                  <li>68% performance optimization</li>
                  <li>Reusable SQL components library</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Limitations */}
          <div>
            <h4 className="font-medium mb-3">Data Limitations & Transparency</h4>
            <div className="minimal-card p-4">
              <div className="text-small text-gray-600 dark:text-gray-400 space-y-2">
                <p><strong>$300,000 Ceiling Effect:</strong> Income values above $300,000 are capped, affecting analysis of high-income areas and inequality metrics for approximately 10% of locations.</p>
                <p><strong>Geographic Coverage:</strong> Data represents locations with sufficient Census response rates, potentially underrepresenting transient or undocumented populations.</p>
                <p><strong>Time Period:</strong> Dataset covers 2018-2020, including early COVID-19 impact but not recent economic changes.</p>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-medium mb-3">Technical Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['MySQL 8.0+', 'Advanced SQL', 'Window Functions', 'CTEs', 'Stored Procedures', 'Dynamic SQL', 'Transaction Management', 'Index Optimization', 'Data Quality Framework', 'Statistical Analysis'].map((tech) => (
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
                <div className="font-semibold mb-1">21.9s</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Complex Query Runtime</p>
              </div>
              <div className="minimal-card p-3 text-center">
                <div className="font-semibold mb-1">100%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Data Coverage</p>
              </div>
              <div className="minimal-card p-3 text-center">
                <div className="font-semibold mb-1">45s</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Executive Dashboard</p>
              </div>
              <div className="minimal-card p-3 text-center">
                <div className="font-semibold mb-1">4GB</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Recommended RAM</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-900">
            <a 
              href="https://github.com/tzolkowski96/tzolkowski96/tree/main/us-household-income-analysis"
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

export default USHouseholdIncomeCase;