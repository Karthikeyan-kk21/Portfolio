import React from 'react';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Arshith Fresh India Pvt. Ltd.",
      role: "Web Developer",
      period: "Feb 2026 – Sep 2026",
    },
    {
      company: "BDreamz Global Solutions Pvt. Ltd.",
      role: "Python Full Stack Developer Intern",
      period: "Jul 2025 – Dec 2025",
    },
    {
      company: "ZF Commercial Vehicle Control System",
      role: "Quality Assurance",
      period: "Jun 2024 – Oct 2024",
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-[#263536]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-2 mb-12 pb-6 border-b border-[#263536]">
          <span className="font-mono text-xs text-[#669B96] uppercase tracking-wider block">
            04. EXPERIENCE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F1F4F2]">
            My Journey
          </h2>
        </div>

        {/* Timeline Structure as in Reference */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-2.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#263536]">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#0B1011] border-2 border-[#669B96] group-hover:scale-125 transition-transform" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-xl bg-[#141C1D] border border-[#263536] hover:border-[#669B96]/50 transition-colors shadow-sm">
                <div className="space-y-1">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#F1F4F2]">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-[#669B96] font-medium">
                    {exp.role}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#192324] border border-[#263536] group-hover:border-[#669B96]/40 font-mono text-xs text-[#A4C5C0] font-medium tracking-tight whitespace-nowrap shrink-0 self-start sm:self-auto shadow-sm transition-colors">
                  {exp.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
