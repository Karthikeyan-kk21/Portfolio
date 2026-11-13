import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-[#263536]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#263536]">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#669B96] uppercase tracking-wider block">
              02. PROJECTS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F1F4F2]">
              Featured Projects
            </h2>
            <p className="text-sm text-[#A5B2AE] max-w-xl">
              A few selected projects that showcase my skills and problem-solving approach.
            </p>
          </div>

          {/* Navigation Arrows as in Reference */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => handleScroll('left')}
              className="w-9 h-9 rounded-full border border-[#263536] hover:border-[#669B96] text-[#A5B2AE] hover:text-[#669B96] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-9 h-9 rounded-full border border-[#263536] hover:border-[#669B96] text-[#A5B2AE] hover:text-[#669B96] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#669B96]"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 Horizontally Aligned Project Cards */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
