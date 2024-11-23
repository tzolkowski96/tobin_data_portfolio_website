import React from 'react';
import { motion } from 'framer-motion';

interface DevelopmentCardProps {
  icon: React.ReactNode;
  text: string;
  index: number;
}

const DevelopmentCard: React.FC<DevelopmentCardProps> = ({ icon, text, index }) => {
  return (
    <motion.div
      className="flex gap-4 items-start group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-50 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
        {icon}
      </div>
      <p className="text-slate-700 dark:text-slate-300 flex-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {text}
      </p>
    </motion.div>
  );
};

export default DevelopmentCard;