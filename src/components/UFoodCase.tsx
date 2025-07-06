import React from 'react';
import { ChevronDown, ChevronUp, Target, BarChart3, Users, CheckCircle, TrendingUp, Github, ExternalLink, Brain } from 'lucide-react';

interface UFoodCaseProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const UFoodCase: React.FC<UFoodCaseProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded flex items-center justify-center flex-shrink-0">
            <Target size={16} className="text-gray-600 dark:text-gray-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Case Study: UFood Customer Analysis</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Comprehensive customer segmentation and marketing optimization analysis for Brazil's leading food delivery app. 
              Analyzed <strong>2,205 customer records across 39 features</strong>, achieving <strong>373% higher conversion rates</strong> and identifying strategies for <strong>47.5% increase in CLV</strong>.
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
          <div className="minimal-card p-4 border-l-4 border-orange-400">
            <h4 className="font-medium mb-2 flex items-center">
              <Target size={14} className="mr-2" />
              Business Objectives
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-small">
              UFood needed actionable insights from their customer and marketing data to revolutionize their marketing strategy and boost ROI. 
              The goal was to identify customer segments, optimize campaign performance, analyze customer lifecycle patterns, and develop 
              data-driven strategies for targeted retention and acquisition.
            </p>
          </div>

          {/* Key Impact Metrics */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <TrendingUp size={14} className="mr-2" />
              Business Impact Achieved
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">373%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Higher conversion rate</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">47.5%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">CLV increase potential</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">3</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Customer segments</p>
              </div>
              <div className="minimal-card p-4">
                <div className="text-xl font-semibold mb-1">38.7%</div>
                <p className="text-small text-gray-600 dark:text-gray-400">Engagement increase</p>
              </div>
            </div>
          </div>

          {/* Technical Approach */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <BarChart3 size={14} className="mr-2" />
              Technical Methodology
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div className="space-y-2">
                <p><strong>Data Processing:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>2,205 customer records analyzed (100% complete)</li>
                  <li>39 features across demographics and behavior</li>
                  <li>Feature engineering for total spending metrics</li>
                  <li>Customer lifecycle and tenure analysis</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p><strong>Advanced Analytics:</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>K-means clustering for segmentation</li>
                  <li>A/B testing with statistical validation</li>
                  <li>Chi-square tests for conversion analysis</li>
                  <li>Correlation analysis and feature importance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Customer Segmentation Results */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <Users size={14} className="mr-2" />
              Customer Segmentation Analysis
            </h4>
            <div className="minimal-card p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-small">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2">Segment</th>
                      <th className="text-right py-2">Income</th>
                      <th className="text-right py-2">Age</th>
                      <th className="text-right py-2">Total Spend</th>
                      <th className="text-right py-2">Web Visits</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 font-medium">High-Value (Cluster 0)</td>
                      <td className="text-right py-2">$75,202</td>
                      <td className="text-right py-2">50.99</td>
                      <td className="text-right py-2">$1,252</td>
                      <td className="text-right py-2">3.05</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 font-medium">Budget-Conscious (Cluster 1)</td>
                      <td className="text-right py-2">$33,405</td>
                      <td className="text-right py-2">43.33</td>
                      <td className="text-right py-2">$131</td>
                      <td className="text-right py-2">6.88</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Moderate Spenders (Cluster 2)</td>
                      <td className="text-right py-2">$50,980</td>
                      <td className="text-right py-2">61.21</td>
                      <td className="text-right py-2">$414</td>
                      <td className="text-right py-2">5.68</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Campaign Performance */}
          <div>
            <h4 className="font-medium mb-3">Campaign Performance Analysis</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="minimal-card p-4">
                <p className="font-medium mb-2 text-small">Campaign Acceptance Rates:</p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-small">
                  <li>Response (Current): 15.1% ⭐</li>
                  <li>Campaign 4: 7.4%</li>
                  <li>Campaign 3: 7.4%</li>
                  <li>Campaign 5: 7.3%</li>
                  <li>Campaign 1: 6.4%</li>
                  <li>Campaign 2: 1.4% ❌</li>
                </ul>
              </div>
              <div className="minimal-card p-4">
                <p className="font-medium mb-2 text-small">Statistical Validation:</p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-small">
                  <li>Chi-square: 62.639, p = 2.48e-15</li>
                  <li>Conversion rates significantly different</li>
                  <li>A/B test confirmed optimal formats</li>
                  <li>ROI improvement potential: 25-30%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Customer Lifecycle Insights */}
          <div className="minimal-card p-4 border-l-4 border-blue-400">
            <h4 className="font-medium mb-3 flex items-center">
              <Brain size={14} className="mr-2" />
              Customer Lifecycle Insights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-small">
              <div>
                <p className="font-medium mb-1">New Customers</p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Avg Spend: $464</li>
                  <li>Campaign Response: 33.5%</li>
                  <li>Web Visits: 4.52/month</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Developing</p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Avg Spend: $507</li>
                  <li>Campaign Response: 27.5%</li>
                  <li>Web Visits: 5.04/month</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Established</p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Avg Spend: $598</li>
                  <li>Campaign Response: 28.7%</li>
                  <li>Web Visits: 5.53/month</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Long-term</p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Avg Spend: $684</li>
                  <li>Campaign Response: 30.1%</li>
                  <li>Web Visits: 6.27/month</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results & Recommendations */}
          <div className="minimal-card p-4 border-l-4 border-green-400">
            <h4 className="font-medium mb-3 flex items-center">
              <CheckCircle size={14} className="mr-2" />
              Strategic Recommendations & Business Impact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-small">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Targeting Strategy:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Premium offerings for high-value segment ($75K+ income)</li>
                  <li>Budget bundles for cost-conscious customers</li>
                  <li>Engagement campaigns for moderate spenders</li>
                  <li>Lifecycle-based retention programs</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Campaign Optimization:</strong></p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Reallocate budget from Campaign 2 (1.4% rate)</li>
                  <li>Scale Response campaign format (15.1% rate)</li>
                  <li>A/B test new formats against Campaign 1</li>
                  <li>Expected ROI improvement: 25-30%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div>
            <h4 className="font-medium mb-3">Code Implementation</h4>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded overflow-x-auto">
              <pre className="text-gray-700 dark:text-gray-300 text-small">
{`# Customer Segmentation with K-means
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

# Select features for clustering
features = ['Income', 'Age', 'MntTotal', 'NumWebVisitsMonth']
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df[features])

# Perform clustering
kmeans = KMeans(n_clusters=3, random_state=42)
df['Cluster'] = kmeans.fit_predict(df_scaled)

# A/B Testing with Statistical Validation
def perform_ab_test(df, campaign_a, campaign_b, metric):
    group_a = df[df[campaign_a] == 1][metric]
    group_b = df[df[campaign_b] == 1][metric]
    t_stat, p_value = stats.ttest_ind(group_a, group_b)
    return t_stat, p_value

# Results: Chi-square = 62.639, p = 2.48e-15`}
              </pre>
            </div>
          </div>

          {/* Product Preferences */}
          <div>
            <h4 className="font-medium mb-3">Product Category Analysis</h4>
            <div className="minimal-card p-4">
              <p className="text-gray-600 dark:text-gray-400 text-small mb-3">
                Wine dominates all customer segments (45-60% of total spending), followed by meat products and gold items. 
                This insight enables targeted product recommendations and inventory optimization strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Wine (Dominant)', 'Meat Products', 'Gold Items', 'Fruits', 'Fish Products', 'Sweet Products'].map((category) => (
                  <span key={category} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-small">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-medium mb-3">Technical Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'SciPy', 'K-means Clustering', 'A/B Testing', 'Statistical Analysis'].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-small">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-900">
            <a 
              href="https://github.com/tzolkowski96/tzolkowski96/tree/main/ufood_analysis"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center text-small"
            >
              <Github size={14} className="mr-1" /> Code
            </a>
            <a 
              href="https://tzolkowski96.github.io/analyst-builder-food-marketing-project/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:opacity-70 flex items-center text-small"
            >
              <ExternalLink size={14} className="mr-1" /> Interactive Report
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UFoodCase;