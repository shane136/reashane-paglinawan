import React from 'react';
import { 
  X, 
  Github, 
  Globe, 
  Calendar, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Layers,
  GraduationCap,
  Users,
  Cpu,
  FileText
} from 'lucide-react';
import { Project } from '../types';
import { seaMistStyles as s } from '../utils/themeStyles';

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  if (!isOpen || !project) return null;

  const isThesis = project.id.includes('thesis') || project.category === 'iot';

  return (
    <div 
      id="project-details-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1F2E2B]/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="project-details-modal-card"
        className={`relative w-full max-w-3xl my-8 rounded-3xl border shadow-2xl p-6 sm:p-8 space-y-6 ${s.cardBg} ${s.border} max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#D5DDD9]">
          <div className="flex items-start gap-3.5">
            <div className={`p-3.5 rounded-2xl border shrink-0 ${s.subCardBg} ${isThesis ? 'text-[#5B7B75]' : 'text-[#C98B80]'}`}>
              {isThesis ? <GraduationCap className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${isThesis ? 'bg-teal-50 text-[#5B7B75] border border-teal-200' : project.id === 'smart-blind-stick' ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                  {isThesis ? 'Undergraduate Thesis' : project.id === 'smart-blind-stick' ? 'Capstone Project (BCA188)' : 'Live Web Platform'}
                </span>
                {project.category && (
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${s.badgeTeal}`}>
                    {project.category.toUpperCase()}
                  </span>
                )}
                {project.updatedAt && (
                  <span className={`text-[11px] flex items-center gap-1 ${s.textSubtle}`}>
                    <Calendar className="w-3 h-3" />
                    {project.updatedAt}
                  </span>
                )}
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold ${s.text}`}>{project.title}</h3>
              {project.repoName && (
                <p className="text-xs font-mono text-[#C98B80]">
                  shane136 / {project.repoName}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id="close-details-modal-btn"
              onClick={onClose}
              className={`p-2 rounded-xl border hover:bg-[#EFF2F1] text-[#4E635F] transition-colors`}
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Overview narrative */}
        <div className="space-y-2">
          <h4 className={`text-xs font-bold uppercase tracking-wider ${s.textSubtle}`}>System Architecture &amp; Overview</h4>
          <p className={`text-xs sm:text-sm leading-relaxed p-4 rounded-2xl border ${s.subCardBg} ${s.textMuted}`}>
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="space-y-2.5">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${s.textSubtle}`}>Key Modules &amp; Functional Features</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs ${s.subCardBg} ${s.text}`}>
                  <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className={`text-xs font-bold uppercase tracking-wider ${s.textSubtle}`}>Technologies &amp; Libraries</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className={`px-3 py-1 rounded-xl text-xs font-medium border ${s.badgeBg}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-[#D5DDD9]">
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold ${s.btnPrimary}`}
              >
                {isThesis || project.id === 'smart-blind-stick' ? (
                  <>
                    <FileText className="w-3.5 h-3.5" />
                    <span>Open Google Drive File</span>
                  </>
                ) : (
                  <>
                    <Globe className="w-3.5 h-3.5" />
                    <span>{project.id === 'andam-ai' ? 'Open Live Project (andam-ai.vercel.app)' : 'Open Project Link'}</span>
                  </>
                )}
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border ${s.btnSecondary}`}
              >
                <Github className="w-4 h-4 text-[#5B7B75]" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold border ${s.btnSecondary}`}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
