import React from 'react';
import { motion } from 'framer-motion';

interface GoalCardProps {
  text: string;
  index: number;
}

const GoalCard: React.FC<GoalCardProps> = ({ text, index }) => {
  return (
    <motion.div
      className="flex gap-4 items-center bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg group hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold group-hover:bg-primary-700 transition-colors">
        {index + 1}
      </span>
      <p className="text-slate-700 dark:text-slate-300 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
        {text}
      </p>
    </motion.div>
  );
};

export default GoalCard;