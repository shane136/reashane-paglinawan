export interface ProjectAttachment {
  id: string;
  name: string;
  size: number; // in bytes
  type: string; // mime or extension
  uploadedAt: string;
  dataUrl?: string; // base64 or blob url for client-side download/preview
  isSample?: boolean;
}

export interface Project {
  id: string;
  title: string;
  repoName?: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'web' | 'automation' | 'iot' | 'document' | 'other' | string;
  githubUrl?: string;
  liveDemoUrl?: string;
  status?: 'completed' | 'in-progress' | 'live' | 'archived';
  stars?: number;
  featured: boolean;
  keyFeatures: string[];
  updatedAt?: string;
  iconName: string;
  thumbnailUrl?: string;
  watermarkLabel?: string;
  projectNumber?: number;
  attachments?: ProjectAttachment[];
  isUserUploaded?: boolean;
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

export interface ExperienceItem {
  role: string;
  period: string;
  department: string;
  institution?: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  gradDate: string;
  location: string;
  internship?: ExperienceItem;
  coursework?: string[];
  highlights?: string[];
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
