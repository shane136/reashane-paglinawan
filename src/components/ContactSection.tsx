import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin,
  Copy, 
  Check, 
  MapPin, 
  ExternalLink,
  Send
} from 'lucide-react';
import { USER_PROFILE } from '../data/portfolioData';
import { seaMistStyles as s } from '../utils/themeStyles';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent('Project Inquiry / Collaboration');
    const body = encodeURIComponent('Hi Reashane,\n\nI would like to connect with you regarding...');
    const isMobile = /Android|iPhone|iPad|iPod/i.test(
      typeof navigator !== 'undefined' ? navigator.userAgent : ''
    );

    if (isMobile) {
      window.location.href = `mailto:${USER_PROFILE.email}?subject=${subject}&body=${body}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${USER_PROFILE.email}&su=${subject}&body=${body}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <section id="contact" className={`py-20 border-t ${s.border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${s.badgeTeal}`}>
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${s.text}`}>
            Let's Build Something Together
          </h2>
          <div className={`text-sm sm:text-base leading-relaxed space-y-3 ${s.textMuted}`}>
            <p>
              Interested in Web Development, AI-assisted development, IoT, Embedded Systems, or workflow automation? I'm always open to connecting, sharing ideas, and collaborating on practical technology projects.
            </p>
            <p>
              Whether you're looking to build a website, web application, IoT system, embedded project, or automation solution, feel free to reach out and let's explore what we can create together.
            </p>
          </div>
        </div>

        {/* Centered Contact Channels Card */}
        <div className="max-w-2xl mx-auto">
          <div className={`p-8 sm:p-10 rounded-3xl border space-y-6 shadow-xs ${s.cardBg} ${s.border}`}>
            
            <div className="space-y-4 text-xs sm:text-sm">
              
              {/* Primary Email Box */}
              <div className={`p-5 rounded-2xl border space-y-2.5 ${s.subCardBg}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${s.textSubtle}`}>
                    Primary Email
                  </span>
                  {copiedEmail && (
                    <span className="text-[11px] font-mono text-[#5B7B75] font-semibold animate-pulse">
                      Copied to clipboard!
                    </span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <a 
                    href={`mailto:${USER_PROFILE.email}`}
                    className="font-bold hover:underline break-all text-xs sm:text-base text-[#5B7B75]"
                  >
                    {USER_PROFILE.email}
                  </a>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleCopyEmail}
                      className={`p-2.5 rounded-xl border flex items-center gap-1.5 font-semibold text-xs transition-all shrink-0 ${s.btnSecondary}`}
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-4 h-4 text-[#5B7B75]" />
                          <span className="hidden sm:inline">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#5B7B75]" />
                          <span className="hidden sm:inline">Copy</span>
                        </>
                      )}
                    </button>
                    
                      href={`mailto:${USER_PROFILE.email}?subject=${encodeURIComponent('Project Inquiry / Collaboration')}&body=${encodeURIComponent('Hi Reashane,\n\nI would like to connect with you regarding...')}`}
                      onClick={handleSendEmail}
                      className={`flex-1 sm:flex-none px-3 py-2.5 rounded-xl border flex items-center justify-center gap-1.5 font-bold text-xs shadow-xs transition-all whitespace-nowrap ${s.btnPrimary}`}
                      title="Compose email to reashane136@gmail.com"
                    >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                    </a>
                  </div>
                </div>
              </div>

                            {/* GitHub Profile Box */}
              <div className={`p-5 rounded-2xl border space-y-2 ${s.subCardBg}`}>
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${s.textSubtle}`}>
                  GitHub Profile
                </span>
                <a 
                  href={USER_PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between font-bold transition-colors text-sm sm:text-base ${s.text} hover:text-[#5B7B75] group`}
                >
                  <span className="flex items-center gap-2.5">
                    <Github className="w-5 h-5 text-[#5B7B75]" />
                    <span>github.com/{USER_PROFILE.username}</span>
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#5B7B75] group-hover:underline">
                    <span>Visit profile</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>

              {/* LinkedIn Profile Box */}
              <div className={`p-5 rounded-2xl border space-y-2 ${s.subCardBg}`}>
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${s.textSubtle}`}>
                  LinkedIn Profile
                </span>
                <a 
                  href="https://www.linkedin.com/in/reashane-paglinawan-003138244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between font-bold transition-colors text-sm sm:text-base ${s.text} hover:text-[#5B7B75] group`}
                >
                  <span className="flex items-center gap-2.5">
                    <Linkedin className="w-5 h-5 text-[#5B7B75]" />
                    <span>linkedin.com/in/reashane-paglinawan</span>
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#5B7B75] group-hover:underline">
                    <span>Visit profile</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>

              {/* Location Box */}
              <div className={`p-5 rounded-2xl border space-y-1.5 ${s.subCardBg}`}>
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${s.textSubtle}`}>
                  Location
                </span>
                <div className={`flex items-center gap-2.5 font-semibold text-sm sm:text-base ${s.text}`}>
                  <MapPin className="w-5 h-5 text-[#C98B80]" />
                  <span>{USER_PROFILE.location}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};