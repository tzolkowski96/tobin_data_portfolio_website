import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  degree: string;
  school: string;
  year: string;
  gpa: string;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ degree, school, year, gpa, index }) => {
  return (
    <motion.div
      className="relative pl-12"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="absolute left-0 top-1">
        <GraduationCap className="w-6 h-6 text-primary-600" />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{degree}</h4>
        <p className="text-slate-600 dark:text-slate-400">{school} ({year})</p>
        <div className="flex items-center gap-2">
          <span className="text-slate-600 dark:text-slate-400">GPA:</span>
          <span className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-md text-sm font-medium">
            {gpa}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;