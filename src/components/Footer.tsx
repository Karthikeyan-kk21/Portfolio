import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#263536] bg-[#0B1011] py-8 text-xs font-mono text-[#71817D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="text-center sm:text-left text-[#A5B2AE]">
          © {new Date().getFullYear()} Karthikeyan K. All rights reserved.
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-1.5 text-xs text-[#A5B2AE] hover:text-[#669B96] transition-colors focus-visible:outline-none focus-visible:underline"
        >
          <span>Back to top</span>
          <ArrowUp size={13} className="text-[#669B96] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
