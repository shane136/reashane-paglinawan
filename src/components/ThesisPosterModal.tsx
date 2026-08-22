import React from 'react';
import { X, ZoomIn, Download, ExternalLink, GraduationCap, Users, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { seaMistStyles as s } from '../utils/themeStyles';

interface ThesisPosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  posterUrl: string;
}

export const ThesisPosterModal: React.FC<ThesisPosterModalProps> = ({
  isOpen,
  onClose,
  posterUrl
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1F2E2B]/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${s.cardBg} ${s.border}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D5DDD9] bg-[#EFF2F1]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-teal-50 border border-teal-100 text-[#5B7B75]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-bold text-sm sm:text-base ${s.text}`}>
                Undergraduate Thesis Research Poster
              </h3>
              <p className={`text-xs ${s.textMuted}`}>
                Mindanao State University - Iligan Institute of Technology (MSU-IIT)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/drive/u/2/search?q=poster"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 px-3 rounded-xl border bg-white hover:bg-teal-50 text-[#1F2E2B] text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
              title="Open Google Drive link"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#5B7B75]" />
              <span>Google Drive Link</span>
            </a>
            <a
              href={posterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border hover:bg-white text-[#4E635F] text-xs font-semibold flex items-center gap-1.5 transition-colors`}
              title="Open full resolution image in new tab"
            >
              <ZoomIn className="w-4 h-4" />
              <span className="hidden sm:inline">Open Image</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl border hover:bg-white text-[#4E635F] transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Poster Viewer Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#182421]/90 flex flex-col items-center justify-center min-h-[400px]">
          <div className="relative max-w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white">
            <img
              src={posterUrl}
              alt="IoT-Based Smart Rainwater Harvesting with Monitoring and Filtration System - Research Poster"
              className="w-full max-h-[72vh] object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Quick Footer Summary */}
        <div className="px-6 py-3.5 border-t border-[#D5DDD9] bg-[#EFF2F1] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-gray-700 font-semibold">
            Mindanao State University - Iligan Institute of Technology
          </div>
          <div className="text-gray-500 font-mono text-[11px]">
            College of Computer Studies • Department of Computer Applications
          </div>
        </div>

      </div>
    </div>
  );
};
