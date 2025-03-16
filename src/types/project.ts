export type ProjectCategory = 'all' | 'data-analysis' | 'web-development' | 'python' | 'sql' | 'machine-learning';

export interface Project {
  id: number;
  title: string;
  description: string;
  objective: string;
  technologies: string[];
  highlights: string[];
  role: string;
  category: ProjectCategory[];
  image: string;
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}