import React, { useState } from 'react';
import { 
  ExternalLink, 
  Globe, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  GraduationCap, 
  Eye, 
  ZoomIn, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  FileText, 
  FolderOpen, 
  Radio,
  FileSpreadsheet,
  Play
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { seaMistStyles as s } from '../utils/themeStyles';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { SmartBlindStickModal } from './SmartBlindStickModal';
import { PurokVbaModal } from './PurokVbaModal';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedDetailsProject, setSelectedDetailsProject] = useState<Project | null>(null);
  const [isSmartStickModalOpen, setIsSmartStickModalOpen] = useState(false);
  const [isPurokModalOpen, setIsPurokModalOpen] = useState(false);

  const project1 = PROJECTS_DATA.find(p => p.projectNumber === 1) || PROJECTS_DATA[0];
  const project2 = PROJECTS_DATA.find(p => p.projectNumber === 2) || PROJECTS_DATA[1];
  const project3 = PROJECTS_DATA.find(p => p.projectNumber === 3) || PROJECTS_DATA[2];
  const project4 = PROJECTS_DATA.find(p => p.projectNumber === 4) || PROJECTS_DATA[3];

  const handleProjectClick = (project: Project) => {
    if (project.id === 'purok-data-automation') {
      setIsPurokModalOpen(true);
    } else if (project.liveDemoUrl) {
      window.open(project.liveDemoUrl, '_blank', 'noopener,noreferrer');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedDetailsProject(project);
    }
  };

  const renderProjectCard = (project: Project, stepNumber: string) => {
    const isThesis = project.id === 'iot-rainwater-harvesting-thesis';
    const isSmartStick = project.id === 'smart-blind-stick';
    const isPurokVba = project.id === 'purok-data-automation';
    const isDriveFile = isThesis || isSmartStick;
    const linkUrl = project.liveDemoUrl || project.githubUrl || '#';

    return (
      <div 
        key={project.id}
        className={`h-full rounded-3xl border overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${s.cardBg} ${s.border} group`}
      >
        {/* Top Card Header */}
        <div className="px-6 py-3 border-b border-[#D5DDD9] bg-[#EFF2F1]/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-[#1F2E2B] text-white">
              PROJECT {stepNumber}
            </span>
            <span className="text-xs font-semibold text-[#5B7B75]">
              {project.category ? project.category.toUpperCase() : 'PORTFOLIO'}
            </span>
          </div>
          {isDriveFile ? (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[11px] font-mono text-[#5B7B75] hover:text-[#1F2E2B] flex items-center gap-1 hover:underline font-semibold"
            >
              <span>Google Drive Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : isPurokVba ? (
            <button
              onClick={() => setIsPurokModalOpen(true)}
              className="text-[11px] font-mono text-[#5B7B75] hover:text-[#1F2E2B] flex items-center gap-1 hover:underline font-semibold"
            >
              <span>Interactive Simulator</span>
              <Play className="w-3 h-3 text-[#C98B80]" />
            </button>
          ) : (
            <span className="text-[11px] font-mono text-gray-500">
              {project.status === 'live' ? '● Live' : '● Completed'}
            </span>
          )}
        </div>

        {/* 1. THUMBNAIL / BANNER + 2. WATERMARK + 3. CLICK TO PROJECT LINK */}
        <div 
          onClick={() => handleProjectClick(project)}
          className="relative aspect-video w-full overflow-hidden bg-[#182421] border-b border-[#D5DDD9] cursor-pointer flex items-center justify-center shrink-0"
          title={`Click to open ${project.title}`}
        >
          {/* THUMBNAIL RENDERING */}
          {isThesis ? (
            /* Clean, High-Contrast Google Drive Document Banner for Project 2 */
            <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#1F2E2B] via-[#152320] to-[#0D1815] text-white relative">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-[#C98B80]">
                  <FileText className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#C98B80]/20 border border-[#C98B80]/40 text-[#C98B80]">
                  GOOGLE DRIVE FILE
                </span>
              </div>

              <div className="space-y-1 z-10">
                <div className="text-[11px] font-mono text-gray-300">
                  MSU-IIT Undergraduate Thesis
                </div>
                <div className="text-sm sm:text-base font-bold text-white line-clamp-2">
                  IoT-Based Smart Rainwater Harvesting System
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-white/80">
                <FolderOpen className="w-3.5 h-3.5 text-[#C98B80]" />
                <span className="truncate">drive.google.com/file/d/1LFj46eiEwWgFcoYlPs7mcm45rPJvRGM6</span>
              </div>
            </div>
          ) : isSmartStick ? (
            /* Clean, High-Contrast Google Drive Document Banner for Project 3 */
            <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0C1F17] via-[#0F2820] to-[#06140E] text-[#F3EDE1] relative border-t-2 border-t-[#2F8A5B]/50">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-[#2F8A5B]">
                  <Radio className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#2F8A5B]/20 border border-[#2F8A5B]/40 text-[#2F8A5B]">
                  GOOGLE DRIVE FILE
                </span>
              </div>

              <div className="space-y-1 z-10">
                <div className="text-[11px] font-mono text-[#86A396]">
                  BCA188 • Capstone Project (Embedded Systems)
                </div>
                <div className="text-sm sm:text-base font-bold text-[#F3EDE1] line-clamp-2">
                  Smart Blind Stick with Arduino Uno
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-[#86A396]">
                <FolderOpen className="w-3.5 h-3.5 text-[#2F8A5B]" />
                <span className="truncate">drive.google.com/file/d/1q0O2CSbukqFi9krv4dNYKIT05aR94OEh</span>
              </div>
            </div>
          ) : isPurokVba ? (
            /* Authentic Excel VBA UserForm Visual Preview Banner for Project 4 */
            <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#13241F] via-[#1A2E28] to-[#0E1C17] text-white relative border-t-2 border-t-[#5B7B75]/50">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-[#5B7B75]">
                  <FileSpreadsheet className="w-7 h-7 text-[#FFF275]" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>EXCEL VBA USERFORM</span>
                </span>
              </div>

              <div className="space-y-2 z-10">
                <div className="text-[11px] font-mono text-gray-300">
                  UserForm1 • Dual-Tab Windows Interface
                </div>
                <div className="text-sm sm:text-base font-bold text-white line-clamp-2">
                  Purok Data Automation &amp; Clearance System
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono pt-0.5">
                  <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10 text-yellow-300">POPULATION: 10</span>
                  <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10 text-cyan-300">CLEARANCES: 36</span>
                  <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10 text-emerald-300">CRUD LEDGER</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-gray-300">
                <Play className="w-3.5 h-3.5 text-[#FFF275]" />
                <span>Click to launch interactive UserForm simulation</span>
              </div>
            </div>
          ) : project.thumbnailUrl ? (
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/50 text-xs font-mono">
              [ Project Ready ]
            </div>
          )}

          {/* WATERMARK BADGE (Always visible) */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#1F2E2B]/85 text-white backdrop-blur-xs border border-white/20 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C98B80]" />
              <span>{project.watermarkLabel || `PROJECT ${stepNumber}`}</span>
            </span>
          </div>

          {/* HOVER WATERMARK OVERLAY (Activates on hover / click indicator) */}
          <div className="absolute inset-0 bg-[#1F2E2B]/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
            <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-white mb-2 transform group-hover:scale-110 transition-transform">
              {isDriveFile ? (
                <ExternalLink className="w-6 h-6 text-[#C98B80]" />
              ) : isPurokVba ? (
                <Play className="w-6 h-6 text-[#FFF275]" />
              ) : (
                <Globe className="w-6 h-6 text-[#C98B80]" />
              )}
            </div>
            <span className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#1F2E2B] shadow-xl flex items-center gap-1.5">
              <span>
                {isDriveFile 
                  ? 'Click to Open Google Drive File' 
                  : isPurokVba
                  ? 'Launch Interactive UserForm Simulator'
                  : 'Click to Open Project Link'}
              </span>
              {isPurokVba ? <Play className="w-3.5 h-3.5 text-[#1F2E2B]" /> : <ExternalLink className="w-3.5 h-3.5" />}
            </span>
            <span className="text-[11px] text-white/80 font-mono mt-1.5 max-w-xs truncate">
              {isThesis 
                ? 'drive.google.com/file/d/1LFj46eiEwWgFcoYlPs7mcm45rPJvRGM6' 
                : isSmartStick 
                ? 'drive.google.com/file/d/1q0O2CSbukqFi9krv4dNYKIT05aR94OEh' 
                : isPurokVba
                ? 'Interactive Excel VBA UserForm Simulation'
                : linkUrl.replace('https://', '')}
            </span>
          </div>
        </div>

        {/* PROJECT CONTENT DETAILS */}
        <div className="p-6 space-y-3.5 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#5B7B75]">
              {isThesis ? (
                <>
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>MSU-IIT • Thesis Research</span>
                </>
              ) : isSmartStick ? (
                <>
                  <Cpu className="w-3.5 h-3.5 text-[#2F8A5B]" />
                  <span>BCA188 • Capstone Project</span>
                </>
              ) : isPurokVba ? (
                <>
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#5B7B75]" />
                  <span>Excel VBA • Desktop Automation</span>
                </>
              ) : (
                <>
                  <Globe className="w-3.5 h-3.5" />
                  <span>{linkUrl.replace('https://', '').replace('/', '')}</span>
                </>
              )}
            </div>
            
            {/* Standardized Title Box */}
            <h3 className={`text-lg sm:text-xl font-bold line-clamp-2 min-h-[3.5rem] flex items-start ${s.text}`}>
              {project.title}
            </h3>

            {/* Standardized Description Box */}
            <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 min-h-[4rem] ${s.textMuted}`}>
              {project.description}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-[#EFF2F1] border border-[#D5DDD9] text-[#1F2E2B]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 rounded-lg text-xs font-medium bg-[#EFF2F1] text-[#5B7B75]">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* CARD FOOTER ACTIONS */}
        <div className="p-6 py-4 border-t border-[#D5DDD9]/70 bg-[#EFF2F1]/30 flex items-center justify-between gap-3 mt-auto shrink-0">
          {isDriveFile ? (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all ${s.btnPrimary} whitespace-nowrap`}
            >
              <FileText className="w-4 h-4" />
              <span>Open Google Drive File</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : isPurokVba ? (
            <button
              onClick={() => setIsPurokModalOpen(true)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all ${s.btnPrimary} whitespace-nowrap`}
            >
              <Play className="w-4 h-4 text-[#FFF275]" />
              <span>Try Simulator</span>
            </button>
          ) : (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all ${s.btnPrimary} whitespace-nowrap`}
            >
              <Globe className="w-4 h-4" />
              <span>Open Project Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <button
            onClick={() => setSelectedDetailsProject(project)}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#5B7B75] hover:text-[#1F2E2B] transition-colors whitespace-nowrap`}
          >
            <Layers className="w-4 h-4" />
            <span>Specifications</span>
          </button>
        </div>

      </div>
    );
  };

  return (
    <section id="projects" className={`py-20 relative border-b ${s.border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${s.badgeTeal}`}>
            <Sparkles className="w-3.5 h-3.5 text-[#5B7B75]" />
            <span>Featured Work &amp; Research</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${s.text}`}>
            Featured Projects &amp; Systems
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${s.textMuted}`}>
            Interactive showcase of software, embedded hardware, research publications, and desktop automation systems.
          </p>
        </div>

        {/* 4-Project Responsive Grid: 2x2 on medium/large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto items-stretch">
          {project1 && renderProjectCard(project1, "01")}
          {project2 && renderProjectCard(project2, "02")}
          {project3 && renderProjectCard(project3, "03")}
          {project4 && renderProjectCard(project4, "04")}
        </div>

        {/* Project Details Modal */}
        <ProjectDetailsModal
          project={selectedDetailsProject}
          isOpen={!!selectedDetailsProject}
          onClose={() => setSelectedDetailsProject(null)}
        />

        {/* Smart Blind Stick Capstone Full Poster View Modal */}
        <SmartBlindStickModal
          isOpen={isSmartStickModalOpen}
          onClose={() => setIsSmartStickModalOpen(false)}
          project={project3}
        />

        {/* Project 4: Excel VBA UserForm Interactive Simulator Modal */}
        <PurokVbaModal
          isOpen={isPurokModalOpen}
          onClose={() => setIsPurokModalOpen(false)}
          project={project4}
        />

      </div>
    </section>
  );
};

