import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Sparkles, 
  ExternalLink,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { USER_PROFILE } from '../data/portfolioData';
import { seaMistStyles as s } from '../utils/themeStyles';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [inquiryType, setInquiryType] = useState<string>('Automation & VBA');
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const formattedMailto = `mailto:${USER_PROFILE.email}?subject=${encodeURIComponent(`[Inquiry] ${inquiryType} - ${senderName || 'Visitor'}`)}&body=${encodeURIComponent(
    `Hello Reashane,\n\nName: ${senderName}\nEmail: ${senderEmail}\nInquiry Category: ${inquiryType}\n\nMessage:\n${message}\n\nBest regards,\n${senderName || 'Visitor'}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = formattedMailto;
    }, 400);
  };

  return (
    <section id="contact" className={`py-20 border-t ${s.border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${s.badgeTeal}`}>
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${s.text}`}>
            Get in Touch
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${s.textMuted}`}>
            Interested in IoT systems, Front-end Web Development with PHP &amp; CodeIgniter 4, Excel VBA automation macros, or LaTeX scientific formatting? Reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 rounded-3xl border space-y-6 shadow-xs ${s.cardBg} ${s.border}`}>
              <h3 className={`text-lg font-bold flex items-center gap-2 ${s.text}`}>
                <Sparkles className="w-5 h-5 text-[#C98B80]" /> Contact Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email Box */}
                <div className={`p-4 rounded-2xl border space-y-2 ${s.subCardBg}`}>
                  <span className={`text-xs block font-mono ${s.textSubtle}`}>PRIMARY EMAIL</span>
                  <div className="flex items-center justify-between gap-2">
                    <a 
                      href={`mailto:${USER_PROFILE.email}`}
                      className="font-bold hover:underline break-all text-sm text-[#C98B80]"
                    >
                      {USER_PROFILE.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className={`p-2 rounded-xl border shrink-0 ${s.btnSecondary}`}
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-[#C98B80]" /> : <Copy className="w-4 h-4 text-[#5B7B75]" />}
                    </button>
                  </div>
                </div>

                {/* GitHub Box */}
                <div className={`p-4 rounded-2xl border space-y-2 ${s.subCardBg}`}>
                  <span className={`text-xs block font-mono ${s.textSubtle}`}>GITHUB PROFILE</span>
                  <a 
                    href={USER_PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between font-bold transition-colors ${s.text} hover:text-[#C98B80]`}
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-[#5B7B75]" />
                      github.com/{USER_PROFILE.username}
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-60" />
                  </a>
                </div>

                {/* Location Box */}
                <div className={`p-4 rounded-2xl border space-y-1 ${s.subCardBg}`}>
                  <span className={`text-xs block font-mono ${s.textSubtle}`}>LOCATION</span>
                  <div className={`flex items-center gap-2 font-semibold ${s.text}`}>
                    <MapPin className="w-4 h-4 text-[#C98B80]" />
                    <span>{USER_PROFILE.location}</span>
                  </div>
                </div>

              </div>

              {/* Status Box */}
              <div className={`p-4 rounded-2xl border text-xs space-y-1 ${s.badgeBg}`}>
                <div className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#5B7B75]" /> Response Time
                </div>
                <p className={`leading-relaxed ${s.textMuted}`}>
                  Typically responds within 24 hours for project inquiries, process automation tasks, or engineering roles.
                </p>
              </div>

            </div>

          </div>

          {/* Right Form Column */}
          <div className={`lg:col-span-7 border p-6 sm:p-8 rounded-3xl shadow-xs space-y-6 ${s.cardBg} ${s.border}`}>
            
            <div>
              <h3 className={`text-xl font-bold ${s.text}`}>Send an Inquiry</h3>
              <p className={`text-xs mt-1 ${s.textMuted}`}>Select your project category to auto-format your email request.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category Pills */}
              <div className="space-y-1.5">
                <label className={`text-xs font-bold ${s.text}`}>Project Specialty</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Automation & VBA',
                    'IoT & Hardware Telemetry',
                    'Web Application (CodeIgniter)',
                    'LaTeX Document Formatting',
                    'General Inquiry'
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setInquiryType(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        inquiryType === cat
                          ? 'bg-[#C98B80] text-white font-semibold'
                          : `${s.subCardBg} ${s.textMuted} border ${s.border}`
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Inputs */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className={`text-xs font-bold ${s.text}`}>Your Name</label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full border rounded-xl px-3.5 py-2.5 text-xs focus:outline-none ${s.inputBg}`}
                  />
                </div>

                <div className="space-y-1">
                  <label className={`text-xs font-bold ${s.text}`}>Your Email</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. alex@example.com"
                    className={`w-full border rounded-xl px-3.5 py-2.5 text-xs focus:outline-none ${s.inputBg}`}
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-1">
                <label className={`text-xs font-bold ${s.text}`}>Project Details or Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project requirements..."
                  className={`w-full border rounded-xl px-3.5 py-2.5 text-xs focus:outline-none leading-relaxed ${s.inputBg}`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-bold ${s.btnPrimary}`}
              >
                <Send className="w-4 h-4" />
                <span>Launch Mail App to Send Message</span>
              </button>

              {submitted && (
                <p className="text-xs text-[#C98B80] font-semibold text-center flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Redirecting to your email client...
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
