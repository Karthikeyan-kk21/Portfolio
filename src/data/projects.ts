export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  contribution: string;
  technologies: string[];
  metrics: ProjectMetric[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  statusTag: string;
  previewType: 'fintrack' | 'resumeiq' | 'dayflow';
}

export const projectsData: Project[] = [
  {
    id: "fintrack",
    index: "01",
    title: "FinTrack",
    subtitle: "Personal Finance & Expense Tracker",
    summary:
      "A full-stack finance management platform with real-time analytics, composite index query optimization on 100K transactions, and secure JWT authentication.",
    problem:
      "Tracking long-term transactions across diverse spending categories can lead to sluggish queries and slow dashboard rendering as records accumulate.",
    contribution:
      "Architected the complete full-stack system: built 28 REST API endpoints across 7 modules with Flask and SQLAlchemy backed by 6 relational models, benchmarked query execution on 100K transactions to tune composite indices, and developed an 11-page React frontend with 21 reusable components.",
    technologies: [
      "React",
      "Flask",
      "PostgreSQL"
    ],
    metrics: [
      {
        label: "Dashboard Query Latency",
        value: "> 60%",
        detail: "Improvement via composite indexing"
      },
      {
        label: "Filtered List Latency",
        value: "> 80%",
        detail: "Improvement on composite user/type/date index"
      },
      {
        label: "REST API Endpoints",
        value: "28",
        detail: "Across 7 application modules"
      },
      {
        label: "Relational Models & Tests",
        value: "6 Models / 5 Tests",
        detail: "Backed by 5 passing pytest integration suites"
      }
    ],
    highlights: [
      "Built 28 REST API endpoints across 7 modules backed by 6 relational models in PostgreSQL",
      "Benchmarked application performance on 100K transactions and tuned composite indexing",
      "Improved dashboard query latency by over 60% and filtered list latency by over 80%",
      "Developed an 11-page React frontend with 21 reusable components and 3 interactive visualizations",
      "5 passing pytest integration tests covering auth, CRUD, and budget calculations"
    ],
    githubUrl: "https://github.com/Karthikeyan-kk21/FinTrack-Expense-Tracker",
    liveUrl: "https://fin-track-expense-tracker-beta.vercel.app/",
    statusTag: "Production Deployed",
    previewType: "fintrack"
  },
  {
    id: "resumeiq",
    index: "02",
    title: "ResumeIQ",
    subtitle: "AI-Powered Resume & Job Match Analyzer",
    summary:
      "Analyzes resumes, matches candidate skills against job requirements, and generates tailored technical interview questions with 98.5% reduced generation time.",
    problem:
      "Evaluating resume alignment against detailed job descriptions is time-consuming, while heavy LLM pipelines can suffer from high latency and unstructured output formats.",
    contribution:
      "Developed a Python/Flask parsing pipeline that extracts candidate skills from PDF and DOCX files. Integrated Gemini API with prompt engineering for structured JSON output, reduced AI response latency by ~98.5% by routing to a lighter model, and implemented 12 automated backend tests.",
    technologies: [
      "Python",
      "Flask",
      "Gemini API"
    ],
    metrics: [
      {
        label: "AI Generation Latency",
        value: "9.8m → 8.7s",
        detail: "~98.5% reduction via lighter Gemini model"
      },
      {
        label: "Automated Backend Tests",
        value: "12 Passing",
        detail: "Pytest validation for core application logic"
      },
      {
        label: "Document Support",
        value: "PDF / DOCX",
        detail: "Extracts text and candidate skill sets"
      },
      {
        label: "Evaluation Output",
        value: "Structured JSON",
        detail: "Targeted feedback and tailored interview questions"
      }
    ],
    highlights: [
      "Developed a full-stack application that parses PDF/DOCX resumes and maps candidate skills to job descriptions",
      "Identifies matched and missing skills directly against target job specifications",
      "Reduced observed AI feedback generation time from 9.8 minutes to 8.7 seconds (~98.5% reduction)",
      "Implemented automated backend tests with 12 passing tests to validate core application functionality"
    ],
    githubUrl: "https://github.com/Karthikeyan-kk21/AI-resume-job-matcher",
    statusTag: "Verified Prototype",
    previewType: "resumeiq"
  },
  {
    id: "dayflow",
    index: "03",
    title: "DayFlow",
    subtitle: "AI Daily Workflow Assistant",
    summary:
      "Converts natural-language Telegram messages into structured tasks, sets scheduled reminders, and manages daily workflows stored in Google Sheets.",
    problem:
      "Quickly logging and categorizing daily tasks while on the go requires excessive manual form-filling across task apps and spreadsheets.",
    contribution:
      "Constructed an n8n workflow pipeline integrated with OpenRouter and NVIDIA Nemotron LLM. Formatted structured task extraction payloads, connected the Telegram Bot API with inline action buttons, and synced real-time task statuses directly with Google Sheets.",
    technologies: [
      "n8n",
      "OpenRouter",
      "Telegram"
    ],
    metrics: [
      {
        label: "Automated Workflows",
        value: "3 Core",
        detail: "Task creation, reminders & daily summaries"
      },
      {
        label: "Sheet Integration",
        value: "Automated",
        detail: "Stores extracted tasks in Google Sheets"
      },
      {
        label: "Interaction",
        value: "Inline Buttons",
        detail: "Telegram callbacks for task status update"
      },
      {
        label: "Extraction Engine",
        value: "Nemotron / OpenRouter",
        detail: "Extracts title, description, due date & priority"
      }
    ],
    highlights: [
      "Converts natural-language requests into structured tasks with titles, descriptions, due dates, and priority levels",
      "Integrated OpenRouter LLM APIs with n8n to generate structured JSON responses stored in Google Sheets",
      "Interactive task listing and completion buttons using Telegram callbacks with real-time status synchronization",
      "Automated 3 core workflows: task creation, scheduled reminders, and daily pending-task summaries"
    ],
    statusTag: "Live Bot Pipeline",
    previewType: "dayflow"
  }
];
