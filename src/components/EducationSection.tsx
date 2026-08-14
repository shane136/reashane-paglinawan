import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2, Award, Landmark } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { seaMistStyles as s } from '../utils/themeStyles';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className={`py-20 border-t ${s.border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${s.badgeTeal}`}>
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${s.text}`}>
            Education & Academic Foundation
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${s.textMuted}`}>
            Undergraduate computer science and application training at Mindanao State University - Iligan Institute of Technology.
          </p>
        </div>

        {/* Education Card */}
        <div className={`max-w-4xl mx-auto border rounded-3xl p-8 sm:p-10 shadow-xs space-y-8 relative overflow-hidden ${s.cardBg} ${s.border}`}>
          
          <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b ${s.border}`}>
            <div className="flex items-start gap-4">
              <div className={`p-4 rounded-2xl border shrink-0 ${s.badgeTeal}`}>
                <Landmark className="w-8 h-8 text-[#5B7B75]" />
              </div>
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold ${s.text}`}>
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-sm font-semibold mt-1 text-[#C98B80]">
                  {EDUCATION_DATA.institution}
                </p>
                <div className={`flex flex-wrap items-center gap-3 text-xs mt-2 ${s.textMuted}`}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#5B7B75]" />
                    {EDUCATION_DATA.gradDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C98B80]" />
                    {EDUCATION_DATA.location}
                  </span>
                </div>
              </div>
            </div>

            <span className={`self-start md:self-center px-4 py-2 rounded-2xl border font-bold text-xs uppercase tracking-wider ${s.badgeTeal}`}>
              Graduated
            </span>
          </div>

          <div className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${s.textSubtle}`}>
              <Award className="w-4 h-4 text-[#C98B80]" /> Program Focus & Accomplishments
            </h4>
            <div className="space-y-2">
              {EDUCATION_DATA.highlights.map((highlight, idx) => (
                <div key={idx} className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs sm:text-sm ${s.subCardBg} ${s.textMuted}`}>
                  <CheckCircle2 className="w-4 h-4 text-[#C98B80] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${s.textSubtle}`}>
              <BookOpen className="w-4 h-4 text-[#5B7B75]" /> Key Coursework & Specializations
            </h4>
            <div className="flex flex-wrap gap-2">
              {EDUCATION_DATA.coursework.map((course) => (
                <span 
                  key={course}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border ${s.badgeBg}`}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
