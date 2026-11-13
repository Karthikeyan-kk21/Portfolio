import React, { useState } from 'react';
import { Database, Zap, Bot, ArrowRight, Terminal, BarChart3, CheckCircle2 } from 'lucide-react';

interface ProjectVisualizerProps {
  type: 'fintrack' | 'resumeiq' | 'dayflow';
}

export const ProjectVisualizer: React.FC<ProjectVisualizerProps> = ({ type }) => {
  if (type === 'fintrack') {
    return <FinTrackVisualizer />;
  }
  if (type === 'resumeiq') {
    return <ResumeIQVisualizer />;
  }
  return <DayFlowVisualizer />;
};

/* --- 01. FINTRACK VISUALIZER --- */
const FinTrackVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'benchmark' | 'charts' | 'api'>('benchmark');

  return (
    <div className="rounded border border-[#293238] bg-[#0B0E10] overflow-hidden flex flex-col h-full text-xs font-mono">
      {/* Visualizer Header */}
      <div className="px-4 py-2.5 bg-[#12171A] border-b border-[#293238] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database size={13} className="text-[#9CBDAA]" />
          <span className="text-[#F2F2EC] font-medium tracking-tight text-[11px]">
            FINTRACK ARCHITECTURE & PERFORMANCE
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('benchmark')}
            className={`px-2 py-1 rounded text-[10px] transition-colors ${
              activeTab === 'benchmark'
                ? 'bg-[#192126] text-[#9CBDAA] border border-[#293238]'
                : 'text-[#75827C] hover:text-[#A4AEAA]'
            }`}
          >
            Verified Benchmarks
          </button>
          <button
            onClick={() => setActiveTab('charts')}
            className={`px-2 py-1 rounded text-[10px] transition-colors ${
              activeTab === 'charts'
                ? 'bg-[#192126] text-[#9CBDAA] border border-[#293238]'
                : 'text-[#75827C] hover:text-[#A4AEAA]'
            }`}
          >
            UI Visualizations
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`px-2 py-1 rounded text-[10px] transition-colors ${
              activeTab === 'api'
                ? 'bg-[#192126] text-[#9CBDAA] border border-[#293238]'
                : 'text-[#75827C] hover:text-[#A4AEAA]'
            }`}
          >
            28 REST Endpoints
          </button>
        </div>
      </div>

      {/* Visualizer Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
        {activeTab === 'benchmark' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#293238]/60">
              <span className="text-[#A4AEAA]">Benchmark Dataset: <strong className="text-[#F2F2EC]">100K Transactions</strong></span>
              <span className="text-[#9CBDAA] bg-[#9CBDAA]/10 px-2 py-0.5 rounded border border-[#9CBDAA]/20">
                Composite Index Optimization
              </span>
            </div>

            {/* Metric 1: Dashboard Query Latency */}
            <div className="space-y-2">
              <div className="flex justify-between text-[11px]">
                <span className="text-[#F2F2EC] font-medium">Dashboard Query Latency</span>
                <span className="text-[#9CBDAA] font-semibold">&gt;60% Latency Reduction</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-24 text-[10px] text-[#75827C]">Before Index:</span>
                  <div className="flex-1 bg-[#12171A] h-3.5 rounded overflow-hidden flex items-center">
                    <div className="bg-[#293238] h-full w-[85%] rounded" />
                    <span className="text-[10px] text-[#75827C] pl-2">Baseline</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-24 text-[10px] text-[#9CBDAA]">Tuned Index:</span>
                  <div className="flex-1 bg-[#12171A] h-3.5 rounded overflow-hidden flex items-center">
                    <div className="bg-[#9CBDAA] h-full w-[35%] rounded" />
                    <span className="text-[10px] text-[#9CBDAA] pl-2 font-semibold">&gt;60% faster</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 2: Filtered List Latency */}
            <div className="space-y-2 pt-2 border-t border-[#293238]/40">
              <div className="flex justify-between text-[11px]">
                <span className="text-[#F2F2EC] font-medium">Filtered List Latency (user / type / date)</span>
                <span className="text-[#9CBDAA] font-semibold">&gt;80% Latency Reduction</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-24 text-[10px] text-[#75827C]">Before Index:</span>
                  <div className="flex-1 bg-[#12171A] h-3.5 rounded overflow-hidden flex items-center">
                    <div className="bg-[#293238] h-full w-[95%] rounded" />
                    <span className="text-[10px] text-[#75827C] pl-2">Baseline</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-24 text-[10px] text-[#9CBDAA]">Tuned Index:</span>
                  <div className="flex-1 bg-[#12171A] h-3.5 rounded overflow-hidden flex items-center">
                    <div className="bg-[#9CBDAA] h-full w-[20%] rounded" />
                    <span className="text-[10px] text-[#9CBDAA] pl-2 font-semibold">&gt;80% faster</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[10px] text-[#75827C] flex items-center justify-between">
              <span>Database: PostgreSQL / SQLAlchemy</span>
              <span className="text-[#A4AEAA]">5 Passing Pytest Integration Tests</span>
            </div>
          </div>
        )}

        {activeTab === 'charts' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px] text-[#75827C]">
              <span>3 INTERACTIVE RECHARTS VISUALIZATIONS</span>
              <span className="text-[#9CBDAA]">11 Pages / 21 Components</span>
            </div>

            {/* SVG Simulated Chart with explicit illustrative label */}
            <div className="h-28 w-full bg-[#12171A] rounded p-2 border border-[#293238] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] text-[#75827C] pb-1 border-b border-[#293238]/40">
                <span className="flex items-center gap-1">
                  <BarChart3 size={11} className="text-[#9CBDAA]" />
                  <span>Illustrative Preview: Area & Bar Trends</span>
                </span>
                <span className="text-[#9CBDAA] bg-[#9CBDAA]/10 px-1.5 py-0.2 rounded">Simulated UI</span>
              </div>
              <div className="flex items-end justify-between h-14 gap-1.5 px-2">
                {[
                  { m: 'Jan', h1: 45, h2: 30 },
                  { m: 'Feb', h1: 60, h2: 40 },
                  { m: 'Mar', h1: 52, h2: 35 },
                  { m: 'Apr', h1: 75, h2: 45 },
                  { m: 'May', h1: 68, h2: 42 },
                  { m: 'Jun', h1: 85, h2: 50 },
                  { m: 'Jul', h1: 92, h2: 55 },
                ].map((item) => (
                  <div key={item.m} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <div className="w-full flex items-end justify-center gap-0.5 h-full">
                      <div
                        style={{ height: `${item.h1}%` }}
                        className="w-2.5 bg-[#9CBDAA] rounded-t-sm"
                      />
                      <div
                        style={{ height: `${item.h2}%` }}
                        className="w-2.5 bg-[#293238] rounded-t-sm"
                      />
                    </div>
                    <span className="text-[9px] text-[#75827C]">{item.m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-2 bg-[#12171A] rounded border border-[#293238]">
                <div className="text-[#75827C]">Cash Flow Trends</div>
                <div className="text-[#F2F2EC] font-medium mt-0.5">Area Chart</div>
              </div>
              <div className="p-2 bg-[#12171A] rounded border border-[#293238]">
                <div className="text-[#75827C]">Spending Analysis</div>
                <div className="text-[#F2F2EC] font-medium mt-0.5">Bar Chart</div>
              </div>
              <div className="p-2 bg-[#12171A] rounded border border-[#293238]">
                <div className="text-[#75827C]">Savings Distribution</div>
                <div className="text-[#F2F2EC] font-medium mt-0.5">Pie Chart</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] text-[#75827C]">
              <span>MODULAR REST API // 28 ENDPOINTS ACROSS 7 MODULES</span>
              <span className="text-[#9CBDAA]">Flask + SQLAlchemy</span>
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {[
                { method: 'POST', path: '/api/v1/auth/register', module: 'Auth (Bcrypt)' },
                { method: 'POST', path: '/api/v1/auth/login', module: 'JWT Authentication' },
                { method: 'GET', path: '/api/v1/transactions?user_id=&type=&date=', module: 'Indexed Filter' },
                { method: 'POST', path: '/api/v1/transactions', module: 'CRUD Operations' },
                { method: 'GET', path: '/api/v1/analytics/dashboard', module: 'Dashboard Metrics' },
                { method: 'PUT', path: '/api/v1/budgets/:id', module: 'Budget Calculation' },
              ].map((ep, idx) => (
                <div key={idx} className="flex items-center justify-between p-1.5 rounded bg-[#12171A] border border-[#293238] text-[10px]">
                  <div className="flex items-center gap-2">
                    <span className={`px-1 rounded text-[9px] font-bold ${
                      ep.method === 'POST' ? 'bg-[#9CBDAA]/20 text-[#9CBDAA]' :
                      ep.method === 'GET' ? 'bg-blue-500/20 text-blue-300' : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {ep.method}
                    </span>
                    <span className="text-[#F2F2EC] truncate">{ep.path}</span>
                  </div>
                  <span className="text-[#75827C] text-[9px]">{ep.module}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Visualizer Footer Bar */}
      <div className="px-4 py-2 bg-[#12171A] border-t border-[#293238] flex items-center justify-between text-[10px] text-[#75827C]">
        <span>6 RELATIONAL MODELS</span>
        <span className="text-[#9CBDAA]">VERIFIED RESUME BENCHMARKS</span>
      </div>
    </div>
  );
};

/* --- 02. RESUMEIQ VISUALIZER --- */
const ResumeIQVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'latency' | 'json' | 'matrix'>('latency');

  return (
    <div className="rounded border border-[#293238] bg-[#0B0E10] overflow-hidden flex flex-col h-full text-xs font-mono">
      {/* Visualizer Header */}
      <div className="px-4 py-2.5 bg-[#12171A] border-b border-[#293238] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap size={13} className="text-[#9CBDAA]" />
          <span className="text-[#F2F2EC] font-medium tracking-tight text-[11px]">
            RESUME.IQ // EVALUATION & LATENCY TUNING
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('latency')}
            className={`px-2 py-1 rounded text-[10px] transition-colors ${
              activeTab === 'latency'
                ? 'bg-[#192126] text-[#9CBDAA] border border-[#293238]'
                : 'text-[#75827C] hover:text-[#A4AEAA]'
            }`}
          >
            ~98.5% Latency Cut
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`px-2 py-1 rounded text-[10px] transition-colors ${
              activeTab === 'json'
                ? 'bg-[#192126] text-[#9CBDAA] border border-[#293238]'
                : 'text-[#75827C] hover:text-[#A4AEAA]'
            }`}
          >
            Output Schema
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-2 py-1 rounded text-[10px] transition-colors ${
              activeTab === 'matrix'
                ? 'bg-[#192126] text-[#9CBDAA] border border-[#293238]'
                : 'text-[#75827C] hover:text-[#A4AEAA]'
            }`}
          >
            Skill Mapping
          </button>
        </div>
      </div>

      {/* Visualizer Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
        {activeTab === 'latency' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#293238]/60">
              <span className="text-[#A4AEAA]">Benchmark: <strong className="text-[#F2F2EC]">AI Feedback Generation Time</strong></span>
              <span className="text-[#9CBDAA] bg-[#9CBDAA]/10 px-2 py-0.5 rounded border border-[#9CBDAA]/20">
                Lighter Gemini Model
              </span>
            </div>

            {/* Latency Comparison Bars */}
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#75827C]">Prior Observed Feedback Time</span>
                  <span className="text-[#A4AEAA]">9.8 minutes</span>
                </div>
                <div className="w-full bg-[#12171A] h-4 rounded overflow-hidden flex items-center">
                  <div className="bg-[#293238] h-full w-[96%] rounded" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#9CBDAA] font-semibold">Optimized Lighter Model</span>
                  <span className="text-[#9CBDAA] font-bold">8.7 seconds (~98.5% reduction)</span>
                </div>
                <div className="w-full bg-[#12171A] h-4 rounded overflow-hidden flex items-center">
                  <div className="bg-[#9CBDAA] h-full w-[3%] min-w-[12px] rounded" />
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-[#12171A] border border-[#293238] space-y-1 text-[10px]">
              <div className="text-[#F2F2EC] font-medium flex items-center gap-1.5">
                <Terminal size={11} className="text-[#9CBDAA]" />
                <span>12 Passing Backend Tests</span>
              </div>
              <p className="text-[#A4AEAA]">
                Validated PDF/DOCX text parsing, skill extraction, feedback formatting, and error handling with pytest.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'json' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] text-[#75827C]">
              <span>STRUCTURED FEEDBACK OUTPUT (ILLUSTRATIVE SCHEMA)</span>
              <span className="text-[#9CBDAA]">Gemini API</span>
            </div>
            <pre className="p-3 bg-[#12171A] rounded border border-[#293238] text-[10px] text-[#A4AEAA] overflow-x-auto leading-relaxed max-h-36">
{`{
  "matched_skills": ["Python", "Flask", "React", "PostgreSQL"],
  "missing_skills": ["Docker", "Kubernetes"],
  "improvement_recommendations": "Highlight composite index optimization in database section.",
  "tailored_interview_questions": [
    "How did you implement composite indexing to reduce query latency?",
    "Explain HMAC SHA-256 signature verification in payment gateways."
  ]
}`}
            </pre>
          </div>
        )}

        {activeTab === 'matrix' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] text-[#75827C]">
              <span>RESUME SKILLS VS JOB DESCRIPTION REQUIREMENTS</span>
              <span className="text-[#9CBDAA]">PDF & DOCX Extraction</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2 rounded bg-[#12171A] border border-[#293238]">
                <div className="text-[#9CBDAA] font-semibold mb-1 flex items-center gap-1">
                  <CheckCircle2 size={11} />
                  <span>Matched Skills</span>
                </div>
                <ul className="text-[#A4AEAA] space-y-0.5">
                  <li>• Python / Flask REST APIs</li>
                  <li>• React / TypeScript UI</li>
                  <li>• PostgreSQL Relational Design</li>
                  <li>• JWT Auth & Bcrypt Hashing</li>
                </ul>
              </div>
              <div className="p-2 rounded bg-[#12171A] border border-[#293238]">
                <div className="text-[#F2F2EC] font-semibold mb-1">
                  Missing Requirements
                </div>
                <ul className="text-[#A4AEAA] space-y-0.5">
                  <li>• Containerization (Docker)</li>
                  <li>• Cloud Orchestration (Kubernetes)</li>
                  <li>• Distributed Caching (Redis)</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Visualizer Footer Bar */}
      <div className="px-4 py-2 bg-[#12171A] border-t border-[#293238] flex items-center justify-between text-[10px] text-[#75827C]">
        <span>ENGINE: GEMINI API + FLASK</span>
        <span className="text-[#9CBDAA]">12 PASSING TESTS</span>
      </div>
    </div>
  );
};

/* --- 03. DAYFLOW VISUALIZER --- */
const DayFlowVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'telegram' | 'summary'>('pipeline');

  return (
    <div className="rounded border border-[#293238] bg-[#0B0E10] overflow-hidden flex flex-col h-full text-xs font-mono">
      {/* Visualizer Header */}
      <div className="px-4 py-2.5 bg-[#12171A] border-b border-[#293238] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot size={13} className="text-[#9CBDAA]" />
          <span className="text-[#F2F2EC] font-medium tracking-tight text-[11px]">
            DAYFLOW TASK AUTOMATION PIPELINE
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-2 py-1 rounded text-[10px] transition-colors ${
              activeTab === 'pipeline'
                ? 'bg-[#192126] text-[#9CBDAA] border border-[#293238]'
                : 'text-[#75827C] hover:text-[#A4AEAA]'
            }`}
          >
            Workflow Pipeline
          </button>
          <button
            onClick={() => setActiveTab('telegram')}
            className={`px-2 py-1 rounded text-[10px] transition-colors ${
              activeTab === 'telegram'
                ? 'bg-[#192126] text-[#9CBDAA] border border-[#293238]'
                : 'text-[#75827C] hover:text-[#A4AEAA]'
            }`}
          >
            Telegram Bot
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-2 py-1 rounded text-[10px] transition-colors ${
              activeTab === 'summary'
                ? 'bg-[#192126] text-[#9CBDAA] border border-[#293238]'
                : 'text-[#75827C] hover:text-[#A4AEAA]'
            }`}
          >
            Automated Routines
          </button>
        </div>
      </div>

      {/* Visualizer Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
        {activeTab === 'pipeline' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px] text-[#75827C]">
              <span>TASK EXTRACTION & STORAGE FLOW</span>
              <span className="text-[#9CBDAA]">n8n Automation Engine</span>
            </div>

            {/* Pipeline Flow Steps */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded bg-[#12171A] border border-[#293238] text-[10px]">
                <span className="w-5 h-5 rounded bg-[#192126] flex items-center justify-center text-[#9CBDAA] font-bold">1</span>
                <span className="text-[#F2F2EC] font-medium">Telegram Bot API:</span>
                <span className="text-[#A4AEAA] truncate">Receives natural-language task message</span>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight size={12} className="text-[#9CBDAA] rotate-90" />
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#12171A] border border-[#293238] text-[10px]">
                <span className="w-5 h-5 rounded bg-[#192126] flex items-center justify-center text-[#9CBDAA] font-bold">2</span>
                <span className="text-[#F2F2EC] font-medium">OpenRouter / Nemotron:</span>
                <span className="text-[#A4AEAA] truncate">Extracts title, description, due date & priority</span>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight size={12} className="text-[#9CBDAA] rotate-90" />
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#12171A] border border-[#293238] text-[10px]">
                <span className="w-5 h-5 rounded bg-[#192126] flex items-center justify-center text-[#9CBDAA] font-bold">3</span>
                <span className="text-[#F2F2EC] font-medium">Google Sheets:</span>
                <span className="text-[#A4AEAA] truncate">Stores structured task row & syncs completion</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'telegram' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] text-[#75827C]">
              <span>TELEGRAM BOT INTERACTION // INLINE BUTTONS</span>
              <span className="text-[#9CBDAA]">Status Synchronization</span>
            </div>
            <div className="p-3 rounded bg-[#12171A] border border-[#293238] space-y-2 text-[10px]">
              <div className="text-[#75827C] text-[9px]">// Incoming User Message:</div>
              <div className="p-2 rounded bg-[#0B0E10] text-[#F2F2EC] border border-[#293238]/60">
                "Prepare payment gateway integration test cases tomorrow by 5pm priority high"
              </div>
              <div className="text-[#9CBDAA] text-[9px]">// DayFlow Response:</div>
              <div className="p-2 rounded bg-[#192126] text-[#A4AEAA] space-y-1.5 border border-[#9CBDAA]/30">
                <div className="text-[#F2F2EC] font-medium">Task: Payment Gateway Test Cases</div>
                <div>Due: Tomorrow, 5:00 PM | Priority: HIGH</div>
                <div className="flex gap-2 pt-1">
                  <span className="px-2 py-0.5 rounded bg-[#0B0E10] text-[#9CBDAA] border border-[#293238]">
                    [Mark Done ✓]
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0B0E10] text-[#A4AEAA] border border-[#293238]">
                    [Reschedule]
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'summary' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] text-[#75827C]">
              <span>3 AUTOMATED CORE WORKFLOWS</span>
              <span className="text-[#9CBDAA]">Resume Verified</span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div className="p-2 rounded bg-[#12171A] border border-[#293238]">
                <div className="text-[#F2F2EC] font-medium">1. Natural-Language Task Creation</div>
                <div className="text-[#75827C]">Extracts structured task details and appends to Google Sheets.</div>
              </div>
              <div className="p-2 rounded bg-[#12171A] border border-[#293238]">
                <div className="text-[#F2F2EC] font-medium">2. Scheduled Reminders</div>
                <div className="text-[#75827C]">Notifies user of pending deadlines via Telegram Bot.</div>
              </div>
              <div className="p-2 rounded bg-[#12171A] border border-[#293238]">
                <div className="text-[#F2F2EC] font-medium">3. Daily Pending-Task Summaries</div>
                <div className="text-[#75827C]">Compiles and delivers pending task digests from Google Sheets.</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Visualizer Footer Bar */}
      <div className="px-4 py-2 bg-[#12171A] border-t border-[#293238] flex items-center justify-between text-[10px] text-[#75827C]">
        <span>NVIDIA NEMOTRON + OPENROUTER</span>
        <span className="text-[#9CBDAA]">GOOGLE SHEETS SYNC</span>
      </div>
    </div>
  );
};
