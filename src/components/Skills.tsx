import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { exactSkills, TechSkill } from '../data/skills';
import {
  PythonIcon,
  ReactIcon,
  JavaScriptIcon,
  HtmlIcon,
  CssIcon,
  N8nIcon,
  SupabaseIcon,
  GeminiIcon,
  ShopifyIcon,
  GitIcon,
  GithubIcon,
  RenderIcon,
  VercelIcon,
} from './Icons';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Development', 'Platforms & AI', 'Development Tools'];

  const filteredSkills = activeCategory === 'All'
    ? exactSkills
    : exactSkills.filter((s) => s.category === activeCategory);

  const getTechIcon = (key: string) => {
    switch (key) {
      case 'python':
        return <PythonIcon size={22} />;
      case 'react':
        return <ReactIcon size={22} />;
      case 'javascript':
        return <JavaScriptIcon size={22} />;
      case 'html':
        return <HtmlIcon size={22} />;
      case 'css':
        return <CssIcon size={22} />;
      case 'n8n':
        return <N8nIcon size={22} />;
      case 'supabase':
        return <SupabaseIcon size={22} />;
      case 'gemini':
        return <GeminiIcon size={22} />;
      case 'shopify':
        return <ShopifyIcon size={22} />;
      case 'git':
        return <GitIcon size={22} />;
      case 'github':
        return <GithubIcon size={22} className="text-[#F1F4F2]" />;
      case 'render':
        return <RenderIcon size={22} />;
      case 'vercel':
        return <VercelIcon size={22} />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-[#263536]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#263536]">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#669B96] uppercase tracking-wider block">
              05. SKILLS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F1F4F2]">
              Tech Stack
            </h2>
            <p className="text-xs sm:text-sm text-[#71817D]">
              Key technologies and developer tools used across production projects.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-[#141C1D] border border-[#263536]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#669B96] text-[#0B1011] font-semibold shadow-sm'
                    : 'text-[#A5B2AE] hover:text-[#F1F4F2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 13 Technology Icon Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill: TechSkill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl bg-[#141C1D] border border-[#263536] hover:border-[#669B96] hover:bg-[#192324] transition-all duration-200 cursor-default shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B1011] border border-[#263536]/80 flex items-center justify-center group-hover:border-[#669B96]/40 transition-colors">
                  {getTechIcon(skill.iconKey)}
                </div>
                <span className="font-heading text-xs font-medium text-[#F1F4F2] group-hover:text-[#669B96] transition-colors text-center truncate w-full">
                  {skill.name}
                </span>
                <span className="font-mono text-[9px] text-[#71817D] group-hover:text-[#A5B2AE] transition-colors text-center truncate w-full">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
