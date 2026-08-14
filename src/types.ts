export interface Project {
  id: string;
  title: string;
  repoName?: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'web' | 'automation' | 'iot' | 'all';
  githubUrl?: string;
  stars?: number;
  featured: boolean;
  keyFeatures: string[];
  updatedAt?: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    icon: string;
    details: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  gradDate: string;
  location: string;
  highlights: string[];
  coursework: string[];
}

export interface VbaSnippet {
  id: string;
  title: string;
  description: string;
  useCase: string;
  code: string;
}

export interface LatexTemplate {
  id: string;
  title: string;
  description: string;
  code: string;
}

export interface SensorDataPoint {
  timestamp: string;
  temperature: number;
  humidity: number;
  pressure: number;
  status: 'optimal' | 'warning' | 'alert';
}
