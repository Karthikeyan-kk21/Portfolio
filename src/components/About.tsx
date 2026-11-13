import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Puzzle, Users, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      title: "Problem Solver",
      description: "I enjoy breaking down complex problems and finding simple, effective solutions.",
      icon: <Puzzle size={18} className="text-[#669B96]" />,
    },
    {
      title: "Team Player",
      description: "I collaborate well and value clear communication.",
      icon: <Users size={18} className="text-[#669B96]" />,
    },
    {
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving my skills.",
      icon: <Sparkles size={18} className="text-[#669B96]" />,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#263536]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-[#669B96] uppercase tracking-wider block">
              03. ABOUT ME
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F1F4F2] leading-tight">
              Turning Ideas into Scalable Solutions
            </h2>
            <p className="text-base sm:text-lg text-[#A5B2AE] leading-relaxed">
              I'm a full-stack developer with a passion for building practical solutions that solve real problems. I enjoy working across the stack, from crafting clean APIs to designing intuitive user interfaces.
            </p>
            <div className="pt-2">
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#669B96] hover:text-[#A4C5C0] transition-colors focus-visible:outline-none focus-visible:underline"
              >
                <span>Learn more about me</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Three Compact Icon-Led Highlights (6 cols) */}
          <div className="lg:col-span-6 space-y-4 pt-4 lg:pt-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#141C1D] border border-[#263536] hover:border-[#669B96]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#192324] border border-[#263536] flex items-center justify-center shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-base font-semibold text-[#F1F4F2]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5B2AE] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
