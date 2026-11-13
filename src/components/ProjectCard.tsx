import React from 'react';
import { ArrowUpRight, BarChart3, Bot, FileText, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group bg-[#141C1D] border border-[#263536] hover:border-[#669B96]/70 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/40 h-full">
      <div className="space-y-4">
        {/* Project Visual Preview Box */}
        <div className="relative h-44 w-full rounded-xl bg-[#0B1011] border border-[#263536] overflow-hidden p-3 flex flex-col justify-between group-hover:border-[#669B96]/40 transition-colors">
          {project.id === 'fintrack' && <FinTrackCardPreview />}
          {project.id === 'resumeiq' && <ResumeIQCardPreview />}
          {project.id === 'dayflow' && <DayFlowCardPreview />}
        </div>

        {/* Title & Subtitle */}
        <div className="pt-1">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xl font-bold text-[#F1F4F2] group-hover:text-[#669B96] transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-[10px] text-[#669B96] bg-[#669B96]/10 px-2 py-0.5 rounded border border-[#669B96]/20">
              {project.statusTag}
            </span>
          </div>
          <p className="font-mono text-xs text-[#71817D] mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Technology Pills (Max 3) */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded font-mono text-[10px] text-[#A5B2AE] bg-[#192324] border border-[#263536]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#A5B2AE] leading-relaxed min-h-[3.75rem]">
          {project.summary}
        </p>

        {/* Verified Highlights Key Bullet */}
        <div className="pt-2 border-t border-[#263536]/60 text-[11px] font-mono text-[#71817D] space-y-1">
          <div className="flex items-center gap-1.5 text-[#F1F4F2]">
            <CheckCircle2 size={12} className="text-[#669B96] shrink-0" />
            <span className="truncate">{project.metrics[0]?.label}: <strong className="text-[#669B96]">{project.metrics[0]?.value}</strong></span>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="pt-5 mt-4 border-t border-[#263536]/60 flex items-center justify-between">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F1F4F2] group-hover:text-[#669B96] transition-colors focus-visible:outline-none focus-visible:underline"
          >
            <span>View Project</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        ) : project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F1F4F2] group-hover:text-[#669B96] transition-colors focus-visible:outline-none focus-visible:underline"
          >
            <span>View Repository</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        ) : (
          <span className="text-xs font-mono text-[#71817D]">
            Production Pipeline
          </span>
        )}

        {project.githubUrl && project.liveUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-[#71817D] hover:text-[#669B96] transition-colors"
            title="GitHub Repository"
            aria-label={`${project.title} GitHub repository`}
          >
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </article>
  );
};

/* --- Visual Preview 1: FinTrack Dashboard Preview --- */
const FinTrackCardPreview: React.FC = () => (
  <div className="h-full w-full flex flex-col justify-between font-mono text-[10px]">
    <div className="flex items-center justify-between pb-2 border-b border-[#263536]/80 text-[#71817D]">
      <div className="flex items-center gap-1.5 text-[#F1F4F2]">
        <BarChart3 size={12} className="text-[#669B96]" />
        <span className="font-semibold text-[10px]">FINTRACK // ANALYTICS</span>
      </div>
      <span className="text-[#669B96] bg-[#669B96]/10 px-1.5 py-0.5 rounded text-[9px]">&gt;60% Index Boost</span>
    </div>

    {/* Simulated Minimal Chart */}
    <div className="flex items-end justify-between h-16 gap-1 px-1">
      {[
        { h1: 40, h2: 25 },
        { h1: 65, h2: 35 },
        { h1: 50, h2: 30 },
        { h1: 85, h2: 45 },
        { h1: 70, h2: 38 },
        { h1: 95, h2: 52 },
      ].map((bar, i) => (
        <div key={i} className="flex-1 flex items-end justify-center gap-0.5 h-full">
          <div style={{ height: `${bar.h1}%` }} className="w-2 rounded-t-sm bg-[#669B96]" />
          <div style={{ height: `${bar.h2}%` }} className="w-2 rounded-t-sm bg-[#263536]" />
        </div>
      ))}
    </div>

    <div className="flex items-center justify-between pt-1 border-t border-[#263536]/50 text-[9px] text-[#71817D]">
      <span>100K TRANSACTIONS BENCHMARKED</span>
      <span className="text-[#A5B2AE]">28 REST ENDPOINTS</span>
    </div>
  </div>
);

/* --- Visual Preview 2: ResumeIQ Dual Panel Preview --- */
const ResumeIQCardPreview: React.FC = () => (
  <div className="h-full w-full flex flex-col justify-between font-mono text-[10px]">
    <div className="flex items-center justify-between pb-2 border-b border-[#263536]/80 text-[#71817D]">
      <div className="flex items-center gap-1.5 text-[#F1F4F2]">
        <FileText size={12} className="text-[#669B96]" />
        <span className="font-semibold text-[10px]">RESUME.IQ // PARSER</span>
      </div>
      <span className="text-[#669B96] bg-[#669B96]/10 px-1.5 py-0.5 rounded text-[9px]">9.8m → 8.7s Cut</span>
    </div>

    {/* Dual Panel Skill Match Simulation */}
    <div className="grid grid-cols-2 gap-2 my-auto">
      <div className="p-1.5 rounded bg-[#141C1D] border border-[#263536] space-y-1">
        <div className="text-[#669B96] text-[9px] font-semibold">Matched Skills</div>
        <div className="text-[#F1F4F2] text-[8px] leading-tight space-y-0.5">
          <div>✓ Python / Flask</div>
          <div>✓ React / TypeScript</div>
          <div>✓ PostgreSQL</div>
        </div>
      </div>
      <div className="p-1.5 rounded bg-[#141C1D] border border-[#263536] space-y-1">
        <div className="text-[#A5B2AE] text-[9px] font-semibold">Feedback Engine</div>
        <div className="text-[#71817D] text-[8px] leading-tight space-y-0.5">
          <div>• Gemini API Routing</div>
          <div>• Interview Questions</div>
          <div>• 12 Passing Tests</div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between pt-1 border-t border-[#263536]/50 text-[9px] text-[#71817D]">
      <span>PDF / DOCX EXTRACTION</span>
      <span className="text-[#A5B2AE]">~98.5% FASTER</span>
    </div>
  </div>
);

/* --- Visual Preview 3: DayFlow Telegram Assistant Preview --- */
const DayFlowCardPreview: React.FC = () => (
  <div className="h-full w-full flex flex-col justify-between font-mono text-[10px]">
    <div className="flex items-center justify-between pb-2 border-b border-[#263536]/80 text-[#71817D]">
      <div className="flex items-center gap-1.5 text-[#F1F4F2]">
        <Bot size={12} className="text-[#669B96]" />
        <span className="font-semibold text-[10px]">DAYFLOW // BOT API</span>
      </div>
      <span className="text-[#669B96] bg-[#669B96]/10 px-1.5 py-0.5 rounded text-[9px]">n8n Pipeline</span>
    </div>

    {/* Telegram Chat Simulation */}
    <div className="p-2 rounded bg-[#141C1D] border border-[#263536] my-auto space-y-1">
      <div className="text-[8px] text-[#71817D]">// Natural Language Task:</div>
      <div className="text-[9px] text-[#F1F4F2] truncate bg-[#0B1011] px-1.5 py-1 rounded border border-[#263536]/60">
        "Review Razorpay checklist tomorrow at 10am"
      </div>
      <div className="flex gap-1.5 pt-0.5">
        <span className="text-[8px] bg-[#669B96]/20 text-[#669B96] px-1.5 py-0.2 rounded border border-[#669B96]/30">
          ✓ Sync to Sheets
        </span>
        <span className="text-[8px] text-[#71817D] bg-[#0B1011] px-1.5 py-0.2 rounded border border-[#263536]">
          Reminder Set
        </span>
      </div>
    </div>

    <div className="flex items-center justify-between pt-1 border-t border-[#263536]/50 text-[9px] text-[#71817D]">
      <span>NEMOTRON LLM EXTRACTION</span>
      <span className="text-[#A5B2AE]">GOOGLE SHEETS SYNC</span>
    </div>
  </div>
);
