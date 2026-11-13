export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  category: 'software' | 'engineering-foundations';
  isCurrentOrRecent?: boolean;
  summary?: string;
  achievements: string[];
  technologies?: string[];
  associatedProject?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "arshith",
    role: "Web Developer",
    company: "Arshith Fresh India Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    period: "Feb 2026 – Sep 2026",
    category: "software",
    isCurrentOrRecent: true,
    summary:
      "Core full-stack web and mobile application engineering, driving secure payment processing, relational schema migration, cross-platform Android builds, and vendor onboarding compliance.",
    achievements: [
      "Integrated Razorpay checkout with secure server-side order creation and HMAC SHA-256 signature verification, validating the end-to-end payment flow through 20+ test transactions.",
      "Migrated critical application datasets to cloud-hosted PostgreSQL across 6+ distinct modules (users, bookings, documents, payments, vendors, vendor packages), enforcing role-based permissions for admin, vendor, and customer roles.",
      "Packaged the React/TypeScript web application for Android using Capacitor, implementing custom hardware back-button navigation and eliminating mobile-specific viewport and touch layout defects.",
      "Engineered and debugged the vendor KYC verification pipeline, covering multi-file document upload, cloud storage handling, verification workflows, and real-time synchronization with the admin review dashboard."
    ],
    technologies: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Capacitor",
      "Razorpay API",
      "HMAC Verification",
      "Android Packaging"
    ]
  },
  {
    id: "bdreamz",
    role: "Python Full Stack Developer Intern",
    company: "BDreamz Global Solutions Pvt. Ltd.",
    location: "Bengaluru, India",
    period: "Jul 2025 – Dec 2025",
    category: "software",
    associatedProject: "FinTrack – Personal Finance & Expense Tracker",
    summary:
      "Engineered FinTrack, an enterprise-grade financial management platform with rigorous performance optimization, relational data integrity, and interactive financial telemetry.",
    achievements: [
      "Architected backend with Python, Flask, and SQLAlchemy, constructing 28 REST API endpoints across 7 service modules backed by 6 normalized PostgreSQL relational models.",
      "Benchmarked system performance on 100K synthetic transactions; designed composite index (user_id, transaction_type, transaction_date), reducing dashboard query latency by >60% and filtered list latency by >80%.",
      "Implemented JWT authentication with Bcrypt password hashing, route guards, full CRUD capabilities, pagination, and multi-field search/sorting/filtering.",
      "Authored 5 passing pytest integration suites validating authentication lifecycles, ledger updates, budget computation, and savings calculations.",
      "Engineered an 11-page React/TypeScript user interface featuring 21 modular components and 3 interactive financial telemetry charts (area, bar, pie) using Recharts.",
      "Orchestrated continuous deployment pipeline across Vercel (client), Render (REST API), and Supabase (managed PostgreSQL database)."
    ],
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "React",
      "TypeScript",
      "JWT",
      "pytest",
      "Supabase",
      "Render",
      "Vercel"
    ]
  },
  {
    id: "zf",
    role: "Quality Assurance",
    company: "ZF Commercial Vehicle Control System",
    location: "Chennai, Tamil Nadu",
    period: "Jun 2024 – Oct 2024",
    category: "engineering-foundations",
    summary:
      "Pre-software industrial engineering role focused on high-precision metrology, statistical deviation analysis, and rigorous quality verification for mission-critical automotive systems.",
    achievements: [
      "Inspected 50+ high-precision components per shift across 2 distinct part models utilizing pneumatic air gauges and Coordinate Measuring Machines (CMM).",
      "Detected micro-deviations before out-of-tolerance propagation, preventing defective hardware from continuing downstream.",
      "Identified measurement anomalies during active production lines and instituted rapid corrective protocols, preserving scheduled delivery milestones."
    ],
    technologies: [
      "Precision Metrology",
      "CMM Inspection",
      "Statistical Quality Control",
      "Deviation Analysis"
    ]
  }
];

