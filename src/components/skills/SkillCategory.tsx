import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import SkillCard from './SkillCard';

interface Skill {
  name: string;
  level: string;
  description: string;
}

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon: Icon, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-100 dark:border-slate-700 group hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <SkillCard
            key={`${title}-${skill.name}`}
            icon={Icon}
            {...skill}
            delay={skillIndex * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;