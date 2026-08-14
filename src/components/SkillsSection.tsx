import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Zap, 
  DatabaseZap, 
  Cpu, 
  Activity, 
  Workflow, 
  FileText, 
  BookOpen, 
  Code2, 
  Layout, 
  Database,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { seaMistStyles as s } from '../utils/themeStyles';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-[#5B7B75]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#C98B80]" />;
      case 'DatabaseZap': return <DatabaseZap className="w-5 h-5 text-[#5B7B75]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#C98B80]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#5B7B75]" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-[#C98B80]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#5B7B75]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#C98B80]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#5B7B75]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#C98B80]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#5B7B75]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C98B80]" />;
    }
  };

  return (
    <section id="skills" className={`py-20 relative border-y ${s.border} bg-[#EFF2F1]/50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${s.badgeTeal}`}>
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${s.text}`}>
            Focused Skills Matrix
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${s.textMuted}`}>
            Core proficiency in IoT systems, Front-end Web Development with PHP &amp; CodeIgniter 4, Excel VBA Automation, and LaTeX scientific typesetting.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === idx
                  ? 'bg-[#C98B80] text-white border-[#C98B80] shadow-xs'
                  : `${s.cardBg} ${s.textMuted} ${s.border} hover:${s.text}`
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Skill Category Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
            <div 
              key={skill.name}
              className={`p-6 rounded-2xl border transition-all duration-200 shadow-xs ${s.cardBg} ${s.border} ${s.cardHover}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${s.subCardBg}`}>
                    {getIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${s.text}`}>{skill.name}</h3>
                    <span className={`text-xs font-mono font-semibold text-[#C98B80]`}>
                      {skill.level}% Proficiency
                    </span>
                  </div>
                </div>
              </div>

              {/* Skill Meter Bar */}
              <div className={`w-full h-2 rounded-full border overflow-hidden mb-4 ${s.subCardBg}`}>
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-[#5B7B75] to-[#C98B80]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Details & Applications */}
              <p className={`text-xs leading-relaxed p-3 rounded-xl border ${s.subCardBg} ${s.textMuted}`}>
                {skill.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
