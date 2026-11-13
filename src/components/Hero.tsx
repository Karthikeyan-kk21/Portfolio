import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ArrowDownToLine, Mail } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 border-b border-[#263536]/60 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Editorial Positioning & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7 z-10">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="text-sm font-medium text-[#A5B2AE]">
              Hi, I'm
            </motion.div>

            {/* Title & Role */}
            <motion.div variants={itemVariants} className="space-y-1.5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-[#F1F4F2] tracking-tight leading-[1.05]">
                {profileData.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium text-[#669B96] tracking-tight">
                {profileData.role}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-[#A5B2AE] leading-relaxed max-w-xl">
                I build modern web applications with a focus on clean code, scalable architecture and great user experiences.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#669B96] hover:bg-[#7AAEA9] text-[#0B1011] font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#669B96]/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#669B96]"
              >
                <span>View My Projects</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>

              <a
                href={profileData.resumeUrl}
                download="Karthikeyan_K_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-[#141C1D] text-[#F1F4F2] border border-[#263536] hover:border-[#669B96] text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
              >
                <span>Download Resume</span>
                <ArrowDownToLine size={15} className="text-[#669B96]" />
              </a>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div variants={itemVariants} className="pt-2 flex items-center gap-4 text-[#A5B2AE]">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-[#669B96] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-[#669B96] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-full hover:text-[#669B96] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
                aria-label="Email Karthikeyan K."
                title="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Prominent Portrait & Architectural Lighting (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0"
          >
            {/* Concentric Architectural Rings / Glow */}
            <div className="relative w-[300px] h-[340px] sm:w-[380px] sm:h-[420px] flex items-center justify-center">
              {/* Soft Teal Light Aura behind head */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#669B96]/20 via-[#669B96]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

              {/* Architectural Concentric Circle */}
              <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-[#263536]/80 -z-10 pointer-events-none" />
              <div className="absolute w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] rounded-full border border-[#669B96]/30 -z-10 pointer-events-none" />

              {/* Fine Circular Linework Arc */}
              <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-40" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="170" stroke="#669B96" strokeWidth="1" strokeDasharray="6 6"/>
                <path d="M 50,200 A 150,150 0 0,1 350,200" stroke="#A4C5C0" strokeWidth="1" strokeOpacity="0.4"/>
              </svg>

              {/* Portrait Frame */}
              <div className="relative w-[270px] h-[330px] sm:w-[320px] sm:h-[390px] rounded-2xl overflow-hidden border border-[#263536] bg-[#141C1D] shadow-2xl">
                <img
                  src="/images/profile_pic.png"
                  alt="Karthikeyan K. — Full-Stack Developer"
                  className="w-full h-full object-cover object-[center_15%] hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('portrait.jpg') === -1) {
                      target.src = '/images/portrait.jpg';
                    }
                  }}
                />
                {/* Soft gradient vignette at base */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#141C1D] via-[#141C1D]/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
