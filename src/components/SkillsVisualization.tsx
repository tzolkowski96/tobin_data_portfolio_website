import React, { useEffect, useRef, useState } from 'react';

interface SkillData {
  skill: string;
  level: number;
  category: 'Programming' | 'Analytics' | 'Visualization' | 'Tools';
  projects: number;
}

const SkillsVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillsData: SkillData[] = [
    { skill: 'Python', level: 75, category: 'Programming', projects: 8 },
    { skill: 'SQL', level: 80, category: 'Programming', projects: 12 },
    { skill: 'JavaScript', level: 50, category: 'Programming', projects: 3 },
    { skill: 'Machine Learning', level: 65, category: 'Analytics', projects: 4 },
    { skill: 'Statistical Analysis', level: 70, category: 'Analytics', projects: 6 },
    { skill: 'Data Cleaning', level: 85, category: 'Analytics', projects: 14 },
    { skill: 'Tableau', level: 80, category: 'Visualization', projects: 5 },
    { skill: 'Excel', level: 85, category: 'Tools', projects: 10 },
    { skill: 'Git', level: 65, category: 'Tools', projects: 8 },
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    // Clear previous content
    svg.innerHTML = '';

    // Set up scales
    const xScale = (index: number) => margin.left + (index * (width - margin.left - margin.right)) / (skillsData.length - 1);
    const yScale = (value: number) => height - margin.bottom - ((value / 100) * (height - margin.top - margin.bottom));

    // Create skill level line
    const pathData = skillsData
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.level)}`)
      .join(' ');

    // Add grid lines
    for (let i = 0; i <= 100; i += 25) {
      const y = yScale(i);
      const gridLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      gridLine.setAttribute('x1', margin.left.toString());
      gridLine.setAttribute('y1', y.toString());
      gridLine.setAttribute('x2', (width - margin.right).toString());
      gridLine.setAttribute('y2', y.toString());
      gridLine.setAttribute('stroke', '#e5e5e5');
      gridLine.setAttribute('stroke-width', '1');
      gridLine.setAttribute('opacity', '0.5');
      svg.appendChild(gridLine);

      // Add y-axis labels
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', (margin.left - 10).toString());
      label.setAttribute('y', (y + 4).toString());
      label.setAttribute('text-anchor', 'end');
      label.setAttribute('font-size', '12');
      label.setAttribute('fill', '#666');
      label.textContent = `${i}%`;
      svg.appendChild(label);
    }

    // Add the main path
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('stroke', '#3b82f6');
    path.setAttribute('stroke-width', '3');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(path);

    // Add data points
    skillsData.forEach((skill, index) => {
      const x = xScale(index);
      const y = yScale(skill.level);

      // Create circle for data point
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x.toString());
      circle.setAttribute('cy', y.toString());
      circle.setAttribute('r', '6');
      circle.setAttribute('fill', '#3b82f6');
      circle.setAttribute('stroke', 'white');
      circle.setAttribute('stroke-width', '2');
      circle.style.cursor = 'pointer';
      
      // Add hover effects
      circle.addEventListener('mouseenter', () => setHoveredSkill(skill.skill));
      circle.addEventListener('mouseleave', () => setHoveredSkill(null));

      svg.appendChild(circle);

      // Add skill labels
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', x.toString());
      label.setAttribute('y', (height - margin.bottom + 20).toString());
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('font-size', '10');
      label.setAttribute('fill', '#666');
      label.setAttribute('transform', `rotate(-45, ${x}, ${height - margin.bottom + 20})`);
      label.textContent = skill.skill;
      svg.appendChild(label);
    });

    // Add title
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    title.setAttribute('x', (width / 2).toString());
    title.setAttribute('y', '15');
    title.setAttribute('text-anchor', 'middle');
    title.setAttribute('font-size', '14');
    title.setAttribute('font-weight', 'bold');
    title.setAttribute('fill', '#333');
    title.textContent = 'Skill Proficiency Levels';
    svg.appendChild(title);

  }, []);

  const hoveredSkillData = hoveredSkill ? skillsData.find(s => s.skill === hoveredSkill) : null;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
        <div className="flex-1">
          <svg
            ref={svgRef}
            width="400"
            height="300"
            viewBox="0 0 400 300"
            className="w-full h-auto border border-gray-200 dark:border-gray-700 rounded"
          />
        </div>
        
        <div className="w-full lg:w-64 space-y-4">
          <div>
            <h4 className="font-medium mb-3">Interactive Skills Chart</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Hover over data points to see detailed information about each skill.
            </p>
          </div>

          {hoveredSkillData && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                {hoveredSkillData.skill}
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400">Proficiency:</span>
                  <span className="font-medium">{hoveredSkillData.level}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400">Category:</span>
                  <span className="font-medium">{hoveredSkillData.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400">Projects:</span>
                  <span className="font-medium">{hoveredSkillData.projects}</span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h5 className="font-medium mb-3">Skill Categories</h5>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Programming & Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Analytics & ML</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Visualization</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Tools & Platforms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        <p>Chart built with vanilla JavaScript and SVG • Data reflects project experience and self-assessment</p>
      </div>
    </div>
  );
};

export default SkillsVisualization;