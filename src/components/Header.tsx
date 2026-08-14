import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  Menu, 
  X, 
  ExternalLink
} from 'lucide-react';
import { USER_PROFILE } from '../data/portfolioData';
import { seaMistStyles as s } from '../utils/themeStyles';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'Overview' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? `${s.navBg} border-b ${s.border} py-3 shadow-xs` 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <button 
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#C98B80] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:bg-[#B5776C] transition-colors">
              RP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-bold text-base tracking-tight ${s.text}`}>
                  {USER_PROFILE.name}
                </span>
                <span className={`hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border ${s.badgeTeal}`}>
                  IoT &amp; Front-end Dev
                </span>
              </div>
              <span className={`text-xs block -mt-0.5 ${s.textSubtle}`}>
                GitHub: <span className="font-mono font-medium">{USER_PROFILE.username}</span>
              </span>
            </div>
          </button>

          {/* Nav Links */}
          <nav className={`hidden lg:flex items-center gap-1 p-1 rounded-full border ${s.border} bg-[#EFF2F1]/80 backdrop-blur-sm`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#C98B80] text-white shadow-xs'
                      : `${s.textMuted} hover:${s.text} hover:bg-white/60`
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={USER_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${s.btnSecondary}`}
            >
              <Github className="w-3.5 h-3.5 text-[#5B7B75]" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold ${s.btnPrimary}`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${s.btnSecondary}`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b ${s.border} px-4 pt-3 pb-6 mt-3 space-y-3 bg-[#F7F7F5] backdrop-blur-xl animate-in slide-in-from-top-2 duration-200`}>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#C98B80] text-white font-semibold'
                    : `${s.textMuted} hover:${s.text}`
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className={`pt-3 border-t ${s.border} flex items-center justify-between gap-2`}>
            <a
              href={USER_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border ${s.btnSecondary}`}
            >
              <Github className="w-4 h-4 text-[#5B7B75]" />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold ${s.btnPrimary}`}
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
