import React, { useState, useEffect } from 'react';
import { TrendingUp, Database, Award, Code } from 'lucide-react';

interface MetricData {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  description: string;
}

const AnimatedMetrics: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const metrics: MetricData[] = [
    {
      label: "ML Accuracy",
      value: 98,
      suffix: "%",
      icon: <TrendingUp size={20} />,
      description: "Employee churn prediction model"
    },
    {
      label: "Records Analyzed", 
      value: 7.7,
      suffix: "M",
      icon: <Database size={20} />,
      description: "US traffic accident dataset"
    },
    {
      label: "Years Experience",
      value: 4,
      suffix: "+",
      icon: <Award size={20} />,
      description: "Professional data work"
    },
    {
      label: "Projects",
      value: 14,
      suffix: "+", 
      icon: <Code size={20} />,
      description: "Completed data projects"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate each metric value
          metrics.forEach((metric, index) => {
            let currentValue = 0;
            const increment = metric.value / 50; // 50 steps for smooth animation
            const duration = 2000; // 2 seconds
            const stepTime = duration / 50;

            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= metric.value) {
                currentValue = metric.value;
                clearInterval(timer);
              }
              
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = currentValue;
                return newValues;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('animated-metrics');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const formatValue = (value: number, suffix: string) => {
    if (suffix === "M") {
      return value.toFixed(1);
    }
    return Math.round(value);
  };

  return (
    <div id="animated-metrics" className="grid grid-cols-4 gap-4 mb-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg group">
      {metrics.map((metric, index) => (
        <div key={metric.label} className="text-center group/item">
          <div className="flex justify-center mb-2 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
            {metric.icon}
          </div>
          <div 
            className="text-2xl font-semibold text-black dark:text-white transition-all duration-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400"
            style={{
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              opacity: isVisible ? 1 : 0.5,
              transition: `all 0.5s ease-out ${index * 100}ms`
            }}
          >
            {formatValue(animatedValues[index], metric.suffix)}{metric.suffix}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mb-1">
            {metric.label}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
            {metric.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedMetrics;