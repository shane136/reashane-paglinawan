import React, { useState } from 'react';
import { 
  Github, 
  Mail, 
  GraduationCap, 
  MapPin, 
  Cpu, 
  FileSpreadsheet, 
  Code2, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Zap,
  Layout,
  Compass,
  Lightbulb,
  Check,
  Radio
} from 'lucide-react';
import { USER_PROFILE, WHAT_I_DO_ITEMS, MY_APPROACH } from '../data/portfolioData';
import { seaMistStyles as s } from '../utils/themeStyles';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [imgError, setImgError] = useState(false);

  const getWhatIDoIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-[#C98B80]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#5B7B75]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#C98B80]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#5B7B75]" />;
      case 'Radio': return <Radio className="w-5 h-5 text-[#2F8A5B]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#C98B80]" />;
      default: return <Sparkles className="w-5 h-5 text-[#5B7B75]" />;
    }
  };

  return (
    <section id="about" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Gentle background accent blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#B5C4C0]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* TOP ROW: Profile Intro & Photo */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Narrative (Left 7 Cols) */}
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
              <p className="text-xl sm:text-2xl font-semibold text-[#5B7B75]">
                {USER_PROFILE.title}
              </p>
            </div>

            {/* Structured Intro Paragraphs */}
            <div className={`space-y-3.5 text-base leading-relaxed ${s.textMuted}`}>
              <p>
                {USER_PROFILE.bioParagraph1}
              </p>
              <p className="text-sm sm:text-base">
                {USER_PROFILE.bioParagraph2}
              </p>
              <p className="text-sm sm:text-base">
                {USER_PROFILE.bioParagraph3}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${s.btnPrimary}`}
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all ${s.btnSecondary}`}
              >
                <Mail className="w-4 h-4 text-[#5B7B75]" />
                <span>Contact Channels</span>
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

          {/* Right Profile Card (Photo & Credentials) */}
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

                {/* Quick Info */}
                <div className="text-center space-y-1">
                  <h3 className={`text-xl font-bold ${s.text}`}>{USER_PROFILE.name}</h3>
                  <p className={`text-xs font-mono font-medium ${s.textMuted}`}>@{USER_PROFILE.username} • Developer Profile</p>
                </div>

                {/* Education Badge Card */}
                <div className={`p-3.5 rounded-xl border flex items-start gap-3 text-left ${s.subCardBg} ${s.border}`}>
                  <div className={`p-2 rounded-lg border shrink-0 ${s.badgeTeal}`}>
                    <GraduationCap className="w-5 h-5 text-[#5B7B75]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={`font-bold text-xs ${s.text}`}>{USER_PROFILE.educationDegree}</span>
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-semibold border ${s.badgeBg}`}>
                        {USER_PROFILE.gradYear}
                      </span>
                    </div>
                    <p className={`text-[11px] mt-0.5 flex flex-wrap items-center gap-1 ${s.textMuted}`}>
                      <span>{USER_PROFILE.educationSchool}</span>
                    </p>
                  </div>
                </div>

                {/* Focus Highlights */}
                <div className={`space-y-2 pt-1 border-t text-xs ${s.border} ${s.textMuted}`}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0" />
                    <span>Front-end Web Development (PHP &amp; CodeIgniter 4)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0" />
                    <span>AI-Assisted Development &amp; Workflow Acceleration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0" />
                    <span>IoT Systems &amp; Sensor Monitoring Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0" />
                    <span>Embedded Systems &amp; Microcontroller Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0" />
                    <span>Workflow Automation &amp; Excel VBA Tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0" />
                    <span>Backend &amp; Application Development (PHP / CI4)</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM ROW: "What I Do" and "My Approach" Structured Cards */}
        <div className="space-y-10 pt-4">
          
          {/* SECTION: WHAT I DO */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-teal-50 border border-teal-100 text-[#5B7B75]">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${s.text}`}>
                  What I Do
                </h2>
                <p className={`text-xs sm:text-sm ${s.textMuted}`}>
                  Core capabilities spanning responsive web platforms, AI acceleration, IoT telemetry, embedded hardware, and automation.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHAT_I_DO_ITEMS.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all hover:shadow-md ${s.cardBg} ${s.border} space-y-3 flex flex-col justify-between`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl border bg-[#EFF2F1] border-[#D5DDD9]">
                        {getWhatIDoIcon(item.icon)}
                      </div>
                      <h3 className={`font-bold text-base ${s.text}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${s.textMuted}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: MY APPROACH */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${s.cardBg} ${s.border} shadow-xs`}>
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#C98B80]/30 bg-[#C98B80]/10 text-[#C98B80]">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Philosophy &amp; Mindset</span>
                </div>
                <h3 className={`text-2xl font-extrabold tracking-tight ${s.text}`}>
                  My Approach
                </h3>
                <p className={`text-xs ${s.textMuted} leading-relaxed`}>
                  Turning ideas into simple, reliable, and practical technology solutions across software and hardware.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4 text-sm sm:text-base leading-relaxed text-[#1F2E2B]">
                <div className="p-4 rounded-2xl bg-white/70 border border-gray-200/80 shadow-xs flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[#C98B80] shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    {MY_APPROACH.paragraph1}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-gray-200/80 shadow-xs flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#5B7B75] shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    {MY_APPROACH.paragraph2}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
