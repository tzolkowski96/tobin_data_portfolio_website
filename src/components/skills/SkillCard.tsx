import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: string;
  description: string;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon: Icon,
  name,
  level,
  description,
  delay = 0,
}) => {
  const getLevelColor = (level: string): string => {
    const colors: { [key: string]: string } = {
      'Expert': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Advanced': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Proficient': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Basic': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Familiar': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'Learning': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
    };
    return colors[level] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  };

  const getProficiency = (level: string): number => {
    const proficiencies: { [key: string]: number } = {
      'Expert': 95,
      'Advanced': 85,
      'Proficient': 75,
      'Intermediate': 60,
      'Basic': 40,
      'Familiar': 30,
      'Learning': 20,
    };
    return proficiencies[level] || 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all p-4 border border-slate-100 dark:border-slate-700"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
          <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{name}</h3>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(level)}`}>
              {level}
            </span>
            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${getProficiency(level)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: delay + 0.3 }}
              />
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;