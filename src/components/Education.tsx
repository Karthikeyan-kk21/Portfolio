import React from 'react';
import { motion } from 'framer-motion';
import { educationData, certificationData } from '../data/education';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 border-b border-[#293238]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#293238]">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#9CBDAA] uppercase tracking-wider">
              05 // Credentials & Academics
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F2F2EC]">
              Education & Certifications
            </h2>
          </div>
          <p className="text-sm font-mono text-[#75827C] max-w-md">
            Academic foundation in mechatronics engineering combined with targeted specializations in full-stack engineering and generative AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Formal Degree (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#9CBDAA] uppercase tracking-wider">
              <GraduationCap size={15} />
              <span>Undergraduate Degree</span>
            </div>

            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-7 rounded-lg bg-[#12171A] border border-[#293238] space-y-4"
              >
                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#9CBDAA] bg-[#9CBDAA]/10 px-2 py-0.5 rounded border border-[#9CBDAA]/20 inline-block mb-2">
                    {edu.grade}
                  </span>
                  <h3 className="text-xl font-semibold text-[#F2F2EC] tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-base text-[#A4AEAA] font-medium">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 font-mono text-xs text-[#75827C] py-2 border-y border-[#293238]">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#9CBDAA]" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#9CBDAA]" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-[#A4AEAA] pt-1">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-[#9CBDAA] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Professional Certifications (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#9CBDAA] uppercase tracking-wider">
              <Award size={15} />
              <span>Specialized Certifications</span>
            </div>

            <div className="space-y-4">
              {certificationData.map((cert, cIdx) => (
                <motion.div
                  key={cIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: cIdx * 0.1 }}
                  className="p-6 rounded-lg bg-[#12171A] border border-[#293238] space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-semibold text-[#F2F2EC]">
                        {cert.title}
                      </h4>
                      <p className="text-sm font-medium text-[#A4AEAA]">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#75827C] shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  {cert.credentialBadge && (
                    <span className="inline-block font-mono text-[11px] text-[#9CBDAA] bg-[#0B0E10] px-2.5 py-0.5 rounded border border-[#293238]">
                      {cert.credentialBadge}
                    </span>
                  )}

                  <ul className="space-y-1.5 text-xs text-[#A4AEAA] pt-2 border-t border-[#293238]/60">
                    {cert.focus.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[#9CBDAA] font-mono">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

