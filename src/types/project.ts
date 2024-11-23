import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: JSX.Element;
  category: string;
  highlights: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export interface ProjectsData {
  [key: string]: Project[];
}