export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialBadge?: string;
  focus: string[];
}

export const educationData: EducationItem[] = [
  {
    institution: "Kongu Engineering College (Autonomous)",
    degree: "B.E. Mechatronics Engineering",
    period: "Graduated May 2023",
    location: "Perundurai, Erode, Tamil Nadu",
    grade: "CGPA: 8.85 / 10",
    details: [
      "Rigorous interdisciplinary curriculum combining computer engineering, embedded systems, instrumentation, and control architectures.",
      "High academic distinction graduating with 8.85 CGPA; solid grounding in algorithmic problem solving and systems design."
    ]
  }
];

export const certificationData: CertificationItem[] = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    date: "Sep 2026",
    credentialBadge: "Completion Badge",
    focus: [
      "Foundational Large Language Models (LLMs) architecture",
      "Responsible AI principles and hallucination mitigation",
      "Context window optimization and practical deployment patterns"
    ]
  },
  {
    title: "Python Full-Stack Program",
    issuer: "Besant Technologies",
    date: "May 2025",
    credentialBadge: "Verified Program Completion",
    focus: [
      "Python, Flask framework, and RESTful service development",
      "SQL, PostgreSQL relational schema design and optimization",
      "Modern React frontend integration and state handling",
      "Bengaluru, India"
    ]
  }
];

