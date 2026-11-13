import React, { useState } from 'react';
import { Mail, Copy, Check, AlertCircle, ArrowRight, ArrowDownToLine } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(profileData.email);
        setCopyStatus('copied');
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = profileData.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopyStatus('copied');
        } else {
          setCopyStatus('error');
        }
      }
    } catch {
      setCopyStatus('error');
    }

    setTimeout(() => {
      setCopyStatus('idle');
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Wave Linework as in Reference Board */}
      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-20 pointer-events-none -z-10">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <path d="M0,350 Q100,200 200,300 T400,200" stroke="#669B96" strokeWidth="1.5" fill="none"/>
          <path d="M0,370 Q100,220 200,320 T400,220" stroke="#669B96" strokeWidth="1" fill="none"/>
          <path d="M0,390 Q100,240 200,340 T400,240" stroke="#669B96" strokeWidth="0.75" fill="none"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
        <span className="font-mono text-xs text-[#669B96] uppercase tracking-wider block">
          06. CONTACT
        </span>

        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F1F4F2] leading-tight">
          Let's Build Something Great Together
        </h2>

        <p className="text-base sm:text-lg text-[#A5B2AE] max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new opportunities, collaborations or just a good tech chat.
        </p>

        {/* Primary Action Button */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profileData.email}`}
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#669B96] hover:bg-[#7AAEA9] text-[#0B1011] font-semibold text-sm tracking-wide shadow-lg shadow-[#669B96]/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#669B96]"
          >
            <span>Get In Touch</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={profileData.resumeUrl}
            download="Karthikeyan_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141C1D] hover:bg-[#192324] text-[#F1F4F2] border border-[#263536] hover:border-[#669B96] text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
          >
            <span>Download Resume</span>
            <ArrowDownToLine size={15} className="text-[#669B96]" />
          </a>
        </div>

        {/* Social & Email Row with Copy Support */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-[#A5B2AE]">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#141C1D] border border-[#263536] hover:border-[#669B96]/50 transition-colors shadow-sm">
            <Mail size={14} className="text-[#669B96] shrink-0" />
            <a href={`mailto:${profileData.email}`} className="text-[#F1F4F2] hover:text-[#669B96] transition-colors">
              {profileData.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="ml-1 p-1 rounded hover:bg-[#192324] text-[#71817D] hover:text-[#F1F4F2] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
              aria-label="Copy email address"
              title="Copy email to clipboard"
            >
              {copyStatus === 'copied' ? (
                <span className="inline-flex items-center gap-1 text-[11px] text-[#669B96] font-semibold">
                  <Check size={13} />
                  Copied
                </span>
              ) : copyStatus === 'error' ? (
                <AlertCircle size={14} className="text-amber-400" />
              ) : (
                <Copy size={13} />
              )}
            </button>
          </div>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141C1D] border border-[#263536] hover:border-[#669B96] text-[#F1F4F2] hover:text-[#669B96] transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={15} />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141C1D] border border-[#263536] hover:border-[#669B96] text-[#F1F4F2] hover:text-[#669B96] transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={15} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
