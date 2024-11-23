import React from 'react';
import { motion } from 'framer-motion';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-12 overflow-x-auto">
      <div className="flex justify-center min-w-max px-4 py-2 space-x-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`relative px-6 py-3 rounded-lg transition-colors text-base ${
              activeCategory === category
                ? 'text-white'
                : 'text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeCategory === category && (
              <motion.div
                className="absolute inset-0 bg-primary-600 rounded-lg"
                layoutId="activeTab"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;