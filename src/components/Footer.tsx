import React from "react";
import { Github, ArrowUp } from "lucide-react";
import { USER_PROFILE } from "../data/portfolioData";
import { seaMistStyles as s } from "../utils/themeStyles";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`border-t py-12 text-xs ${s.subCardBg} ${s.border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${s.border}`}
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C98B80] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-xs">
              RP
            </div>
            <div>
              <span className={`font-bold text-sm block ${s.text}`}>
                {USER_PROFILE.name}
              </span>
              <span className={`text-[11px] ${s.textSubtle}`}>
                IoT Developer • Front-end Web Developer
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 text-xs font-medium ${s.textMuted}`}
          >
            <button
              onClick={() => onNavigate("about")}
              className={`hover:${s.text} transition-colors`}
            >
              Overview
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className={`hover:${s.text} transition-colors`}
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate("education")}
              className={`hover:${s.text} transition-colors`}
            >
              Education
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className={`hover:${s.text} transition-colors`}
            >
              Contact
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className={`p-2.5 rounded-xl border flex items-center gap-1.5 font-semibold text-xs ${s.btnSecondary}`}
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#5B7B75]" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] ${s.textSubtle}`}
        >
          <p>
            © {new Date().getFullYear()} Reashane Paglinawan. All rights
            reserved. BSCA - MSU-IIT.
          </p>
          {/* <div className="flex items-center gap-3">
            <a
              href={USER_PROFILE.portfolioRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:${s.text} flex items-center gap-1 transition-colors`}
            >
              <Github className="w-3.5 h-3.5 text-[#5B7B75]" />
              <span>shane136/portfolio</span>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
