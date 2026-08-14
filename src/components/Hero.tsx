import React, { useState } from 'react';
import { 
  Github, 
  Mail, 
  GraduationCap, 
  MapPin, 
  Cpu, 
  FileSpreadsheet, 
  Code2, 
  Terminal,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { USER_PROFILE } from '../data/portfolioData';
import { seaMistStyles as s } from '../utils/themeStyles';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Gentle background accent blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#B5C4C0]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Text (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border shadow-xs ${s.badgeAccent}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C98B80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C98B80]"></span>
              </span>
              <span>{USER_PROFILE.statusMessage}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none ${s.text}`}>
                Reashane <span className="text-[#C98B80] border-b-4 border-[#C98B80]/40 pb-1">Paglinawan</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#5B7B75] flex items-center justify-center lg:justify-start gap-2">
                {USER_PROFILE.title}
              </p>
            </div>

            {/* Sub-headline */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${s.textMuted}`}>
              {USER_PROFILE.subTitle}. Building reliable front-end web platforms with PHP &amp; CodeIgniter 4, automated spreadsheet workflows with Excel VBA, IoT sensor systems, and precision LaTeX publications.
            </p>

            {/* Education Badge */}
            <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center lg:items-start gap-3 text-left ${s.cardBg} ${s.border}`}>
              <div className={`p-2.5 rounded-xl border shrink-0 ${s.badgeTeal}`}>
                <GraduationCap className="w-6 h-6 text-[#5B7B75]" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`font-bold text-sm ${s.text}`}>{USER_PROFILE.educationDegree}</span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${s.badgeBg}`}>
                    {USER_PROFILE.gradYear}
                  </span>
                </div>
                <p className={`text-xs mt-1 flex flex-wrap items-center gap-1.5 ${s.textMuted}`}>
                  <span>{USER_PROFILE.educationSchool}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C98B80]" />
                    {USER_PROFILE.location}
                  </span>
                </p>
              </div>
            </div>

            {/* Core Competencies Quick Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border ${s.badgeBg}`}>
                <Code2 className="w-3.5 h-3.5 text-[#C98B80]" /> PHP &amp; CodeIgniter 4
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border ${s.badgeBg}`}>
                <Cpu className="w-3.5 h-3.5 text-[#5B7B75]" /> IoT Developer
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border ${s.badgeBg}`}>
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#C98B80]" /> Excel VBA Automation
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border ${s.badgeBg}`}>
                <Terminal className="w-3.5 h-3.5 text-[#5B7B75]" /> LaTeX Typesetting
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onNavigate('skills')}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${s.btnPrimary}`}
              >
                <span>Explore Technical Skills</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all ${s.btnSecondary}`}
              >
                <Mail className="w-4 h-4 text-[#5B7B75]" />
                <span>Get in Touch</span>
              </button>

              <a
                href={USER_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm ${s.textMuted} hover:${s.text}`}
              >
                <Github className="w-4 h-4 text-[#5B7B75]" />
                <span className="underline underline-offset-4 font-mono">{USER_PROFILE.username}</span>
              </a>
            </div>

          </div>

          {/* Right Profile Card (Photo & Stats) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              <div className={`relative border rounded-3xl p-6 shadow-sm space-y-6 ${s.cardBg} ${s.border}`}>
                
                {/* Profile Image */}
                <div className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border p-1 shadow-inner group border-[#D5DDD9] bg-[#EFF2F1]">
                  <img
                    src={imgError ? USER_PROFILE.fallbackAvatarUrl : USER_PROFILE.avatarUrl}
                    onError={() => setImgError(true)}
                    alt={USER_PROFILE.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute bottom-2 right-2 p-1.5 rounded-lg border text-[#5B7B75] shadow-xs ${s.cardBg} ${s.border}`}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                {/* Quick Info & Stats */}
                <div className="text-center space-y-1">
                  <h3 className={`text-xl font-bold ${s.text}`}>{USER_PROFILE.name}</h3>
                  <p className={`text-xs font-mono font-medium ${s.textMuted}`}>@{USER_PROFILE.username} • GitHub Developer</p>
                </div>

                {/* Live Stats Box */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className={`p-3 rounded-xl border text-center ${s.subCardBg}`}>
                    <span className={`block text-xl font-extrabold ${s.text}`}>4+</span>
                    <span className={`text-[11px] ${s.textSubtle}`}>Public GitHub Repos</span>
                  </div>
                  <div className={`p-3 rounded-xl border text-center ${s.subCardBg}`}>
                    <span className={`block text-xl font-extrabold ${s.text}`}>2022</span>
                    <span className={`text-[11px] ${s.textSubtle}`}>MSU-IIT BSCA Graduate</span>
                  </div>
                </div>

                {/* Specialization Checkmarks */}
                <div className={`space-y-2 pt-2 border-t text-xs ${s.border} ${s.textMuted}`}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0" />
                    <span>IoT Sensor Telemetry &amp; Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0" />
                    <span>PHP &amp; CodeIgniter 4 Web Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0" />
                    <span>Excel VBA Automation &amp; Macro Logic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0" />
                    <span>LaTeX Scientific Document Formatting</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
