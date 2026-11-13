import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowDownToLine } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B1011]/95 backdrop-blur-md border-b border-[#263536] py-3.5 shadow-lg shadow-black/50'
            : 'bg-[#0B1011]/80 backdrop-blur-sm border-b border-[#263536]/60 py-4 sm:py-5'
        }`}
      >
        {/* Subtle scroll progress bar in muted teal */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#669B96] origin-left z-50"
          style={{ scaleX }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Lettermark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96] rounded"
            aria-label="Karthikeyan K. - Return to top"
          >
            <span className="font-heading text-lg font-bold tracking-tight text-[#F1F4F2]">
              KK
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#F1F4F2]'
                      : 'text-[#A5B2AE] hover:text-[#F1F4F2]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#669B96] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Resume CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.resumeUrl}
              download="Karthikeyan_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-[#F1F4F2] bg-transparent hover:bg-[#141C1D] border border-[#263536] hover:border-[#669B96] rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
              aria-label="Download Resume PDF"
            >
              <span>Resume</span>
              <ArrowDownToLine size={13} className="text-[#669B96]" />
            </a>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded border border-[#263536] bg-[#141C1D] text-[#A5B2AE] hover:text-[#F1F4F2] hover:border-[#669B96] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#0B1011]/98 backdrop-blur-lg border-b border-[#263536] px-6 py-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#71817D] px-3 pb-1">
                Portfolio Sections
              </span>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#141C1D] text-[#669B96] border border-[#263536]'
                        : 'text-[#A5B2AE] hover:text-[#F1F4F2] hover:bg-[#141C1D]/50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="font-mono text-xs text-[#669B96]">●</span>
                    )}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#263536]">
                <a
                  href={profileData.resumeUrl}
                  download="Karthikeyan_K_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs text-[#F1F4F2] bg-[#141C1D] border border-[#263536] rounded-full hover:border-[#669B96] transition-colors"
                >
                  <span>Download Resume</span>
                  <ArrowDownToLine size={14} className="text-[#669B96]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
