import React, { useEffect, useRef, useState } from 'react';

interface SkillData {
  skill: string;
  level: number;
  category: 'Programming' | 'Analytics' | 'Visualization' | 'Tools';
  projects: number;
  color: string;
}

const SkillsVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  const skillsData: SkillData[] = [
    { skill: 'Python', level: 75, category: 'Programming', projects: 8, color: '#3776ab' },
    { skill: 'SQL', level: 80, category: 'Programming', projects: 12, color: '#336791' },
    { skill: 'JavaScript', level: 50, category: 'Programming', projects: 3, color: '#f7df1e' },
    { skill: 'Machine Learning', level: 65, category: 'Analytics', projects: 4, color: '#ff6b6b' },
    { skill: 'Statistical Analysis', level: 70, category: 'Analytics', projects: 6, color: '#4ecdc4' },
    { skill: 'Data Cleaning', level: 85, category: 'Analytics', projects: 14, color: '#45b7d1' },
    { skill: 'Tableau', level: 80, category: 'Visualization', projects: 5, color: '#e97627' },
    { skill: 'Excel', level: 85, category: 'Tools', projects: 10, color: '#217346' },
    { skill: 'Git', level: 65, category: 'Tools', projects: 8, color: '#f05032' },
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const width = 500;
    const height = 350;
    const margin = { top: 30, right: 30, bottom: 60, left: 50 };

    // Clear previous content
    svg.innerHTML = '';

    // Set up scales
    const xScale = (index: number) => margin.left + (index * (width - margin.left - margin.right)) / (skillsData.length - 1);
    const yScale = (value: number) => height - margin.bottom - ((value / 100) * (height - margin.top - margin.bottom));

    // Add grid lines with animation
    for (let i = 0; i <= 100; i += 25) {
      const y = yScale(i);
      const gridLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      gridLine.setAttribute('x1', margin.left.toString());
      gridLine.setAttribute('y1', y.toString());
      gridLine.setAttribute('x2', (width - margin.right).toString());
      gridLine.setAttribute('y2', y.toString());
      gridLine.setAttribute('stroke', '#e5e5e5');
      gridLine.setAttribute('stroke-width', '1');
      gridLine.setAttribute('opacity', '0');
      svg.appendChild(gridLine);

      // Animate grid line appearance
      setTimeout(() => {
        gridLine.style.transition = 'opacity 0.5s ease-out';
        gridLine.setAttribute('opacity', '0.3');
      }, i * 20);

      // Add y-axis labels
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', (margin.left - 10).toString());
      label.setAttribute('y', (y + 4).toString());
      label.setAttribute('text-anchor', 'end');
      label.setAttribute('font-size', '12');
      label.setAttribute('fill', '#666');
      label.setAttribute('opacity', '0');
      label.textContent = `${i}%`;
      svg.appendChild(label);

      setTimeout(() => {
        label.style.transition = 'opacity 0.5s ease-out';
        label.setAttribute('opacity', '1');
      }, i * 20 + 200);
    }

    // Create animated path
    const pathData = skillsData
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.level)}`)
      .join(' ');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('stroke', '#3b82f6');
    path.setAttribute('stroke-width', '3');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-dasharray', '1000');
    path.setAttribute('stroke-dashoffset', '1000');
    svg.appendChild(path);

    // Animate path drawing
    setTimeout(() => {
      path.style.transition = 'stroke-dashoffset 2s ease-out';
      path.setAttribute('stroke-dashoffset', '0');
      setAnimationStarted(true);
    }, 500);

    // Add animated data points
    skillsData.forEach((skill, index) => {
      const x = xScale(index);
      const y = yScale(skill.level);

      // Create circle for data point
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x.toString());
      circle.setAttribute('cy', y.toString());
      circle.setAttribute('r', '0');
      circle.setAttribute('fill', '#3b82f6');
      circle.setAttribute('stroke', 'white');
      circle.setAttribute('stroke-width', '3');
      circle.style.cursor = 'pointer';
      circle.style.transition = 'all 0.3s ease';
      
      // Add hover effects
      circle.addEventListener('mouseenter', () => {
        setHoveredSkill(skill.skill);
        circle.setAttribute('r', '8');
        circle.setAttribute('fill', skill.color);
      });
      
      circle.addEventListener('mouseleave', () => {
        setHoveredSkill(null);
        circle.setAttribute('r', '6');
        circle.setAttribute('fill', '#3b82f6');
      });

      svg.appendChild(circle);

      // Animate circle appearance
      setTimeout(() => {
        circle.style.transition = 'r 0.5s ease-out';
        circle.setAttribute('r', '6');
      }, 1000 + index * 100);

      // Add skill labels with rotation
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', x.toString());
      label.setAttribute('y', (height - margin.bottom + 25).toString());
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('font-size', '11');
      label.setAttribute('fill', '#666');
      label.setAttribute('font-weight', '500');
      label.setAttribute('transform', `rotate(-45, ${x}, ${height - margin.bottom + 25})`);
      label.setAttribute('opacity', '0');
      label.textContent = skill.skill;
      svg.appendChild(label);

      setTimeout(() => {
        label.style.transition = 'opacity 0.5s ease-out';
        label.setAttribute('opacity', '1');
      }, 1200 + index * 100);
    });

    // Add title with typewriter effect
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    title.setAttribute('x', (width / 2).toString());
    title.setAttribute('y', '20');
    title.setAttribute('text-anchor', 'middle');
    title.setAttribute('font-size', '16');
    title.setAttribute('font-weight', 'bold');
    title.setAttribute('fill', '#333');
    svg.appendChild(title);

    const titleText = 'Interactive Skills Proficiency Chart';
    let currentText = '';
    let charIndex = 0;

    const typeWriter = () => {
      if (charIndex < titleText.length) {
        currentText += titleText.charAt(charIndex);
        title.textContent = currentText;
        charIndex++;
        setTimeout(typeWriter, 50);
      }
    };

    setTimeout(typeWriter, 1500);

  }, []);

  const hoveredSkillData = hoveredSkill ? skillsData.find(s => s.skill === hoveredSkill) : null;

  const categoryColors = {
    'Programming': '#3b82f6',
    'Analytics': '#ef4444', 
    'Visualization': '#8b5cf6',
    'Tools': '#f59e0b'
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="flex-1">
          <svg
            ref={svgRef}
            width="500"
            height="350"
            viewBox="0 0 500 350"
            className="w-full h-auto border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
          />
        </div>
        
        <div className="w-full lg:w-80 space-y-6">
          <div>
            <h4 className="font-medium mb-3">Interactive Skills Analysis</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              This visualization shows my technical proficiency levels across different skill categories. 
              Hover over data points for detailed insights including project experience.
            </p>
          </div>

          {hoveredSkillData && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
              <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: hoveredSkillData.color }}
                ></div>
                {hoveredSkillData.skill}
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400">Proficiency Level:</span>
                  <span className="font-semibold">{hoveredSkillData.level}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400">Category:</span>
                  <span className="font-semibold">{hoveredSkillData.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400">Projects Used:</span>
                  <span className="font-semibold">{hoveredSkillData.projects}</span>
                </div>
                <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-800/30 rounded text-xs">
                  <strong>Assessment basis:</strong> Self-evaluated based on project complexity and real-world application
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h5 className="font-medium mb-3">Skill Categories</h5>
            <div className="space-y-3 text-sm">
              {Object.entries(categoryColors).map(([category, color]) => (
                <div key={category} className="flex items-center justify-between group hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125" 
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {category}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {skillsData.filter(skill => skill.category === category).length} skills
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h5 className="font-medium mb-2 flex items-center">
              📊 Chart Features
            </h5>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Real-time hover interactions</li>
              <li>• Animated data visualization</li>
              <li>• Category-based color coding</li>
              <li>• Project experience tracking</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center border-t border-gray-200 dark:border-gray-800 pt-4">
        <p className="flex items-center justify-center space-x-2">
          <span>🛠️</span>
          <span>Interactive chart built with vanilla JavaScript and SVG</span>
          <span>•</span>
          <span>Data reflects hands-on project experience</span>
        </p>
      </div>
    </div>
  );
};

export default SkillsVisualization;