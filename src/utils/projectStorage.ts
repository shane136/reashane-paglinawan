import { Project, ProjectAttachment } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

const STORAGE_KEY = 'reashane_portfolio_projects_v3';

export const getStoredProjects = (): Project[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Find any user-uploaded projects from previous session
        const customUploads = parsed.filter(p => p.isUserUploaded);
        // Map predefined projects with any local edits
        const predefinedMap = new Map(PROJECTS_DATA.map(p => [p.id, p]));
        parsed.forEach(p => {
          if (!p.isUserUploaded && predefinedMap.has(p.id)) {
            // Keep updated fields
            predefinedMap.set(p.id, { ...predefinedMap.get(p.id)!, ...p });
          }
        });
        
        const combined = [...Array.from(predefinedMap.values()), ...customUploads];
        return combined;
      }
    }
  } catch (err) {
    console.error('Failed to load projects from localStorage:', err);
  }
  return PROJECTS_DATA;
};

export const saveProjectsToStorage = (projects: Project[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (err) {
    console.error('Failed to save projects to localStorage:', err);
  }
};

export const formatFileSize = (bytes: number): string => {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};

export const downloadAttachment = (attachment: ProjectAttachment): void => {
  try {
    if (attachment.dataUrl) {
      const link = document.createElement('a');
      link.href = attachment.dataUrl;
      link.download = attachment.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Create a text file or generic blob if no dataUrl
      const blob = new Blob([`// Project file: ${attachment.name}\n// Attached to Reashane Paglinawan's Portfolio Project\n// Upload Date: ${attachment.uploadedAt}\n`], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = attachment.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  } catch (err) {
    console.error('Failed to download attachment:', err);
  }
};

export const readFileAsDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
};
