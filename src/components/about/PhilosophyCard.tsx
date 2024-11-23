import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface PhilosophyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="flex gap-4 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-50 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h4>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default PhilosophyCard;