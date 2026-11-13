export interface Profile {
  name: string;
  role: string;
  shortName: string;
  headline: string;
  description: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  status: string;
  about: {
    lead: string;
    paragraphs: string[];
    pillars: {
      title: string;
      description: string;
      tags: string[];
    }[];
  };
}

export const profileData: Profile = {
  name: "Karthikeyan K.",
  role: "Full-Stack Developer",
  shortName: "KK",
  headline: "Building practical digital products through thoughtful engineering.",
  description:
    "Full-Stack Developer working across Python, React and PostgreSQL, with hands-on experience building, integrating and deploying web applications.",
  location: "Bengaluru, India",
  email: "karthikishore21134@gmail.com",
  github: "https://github.com/Karthikeyan-kk21",
  linkedin: "https://www.linkedin.com/in/karthikeyank-profile/",
  resumeUrl: "/KarthikeyanK_Resume.pdf",
  status: "Available for Full-Stack Opportunities",
  about: {
    lead:
      "Full-Stack Developer with 1+ year of professional experience across internship and industry roles, building web and mobile applications with Python, Flask, React, TypeScript, and PostgreSQL.",
    paragraphs: [
      "My engineering approach centers on practical problem solving: designing normalized relational schemas, architecting clean REST APIs, and crafting responsive, accessible user interfaces. I focus on measurable execution—tuning database query latency on high-volume datasets through composite indexing, integrating secure payment checkouts with HMAC verification, and packaging web applications for Android using Capacitor.",
      "Beyond core full-stack systems, I have hands-on experience integrating generative AI APIs (Gemini, OpenRouter, NVIDIA Nemotron) and workflow automation with n8n. By pairing structured prompt engineering with strict schema validation, I develop applications that extract structured task entities and generate tailored resume improvement feedback."
    ],
    pillars: [
      {
        title: "Frontend Engineering",
        description:
          "Developing component-driven applications with React and TypeScript. Focus on state management, responsive design, data visualization with Recharts, and mobile packaging with Capacitor.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Capacitor"]
      },
      {
        title: "Backend & Relational Databases",
        description:
          "Designing modular REST APIs with Python, Flask, and PostgreSQL. Implementing JWT authentication, Bcrypt password hashing, composite database indexing, and automated testing with pytest.",
        tags: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "JWT", "pytest"]
      },
      {
        title: "AI Integration & Workflow Automation",
        description:
          "Integrating LLM APIs for structured JSON responses, document parsing for skill matching, and automating multi-step workflows connecting Telegram bots with Google Sheets via n8n.",
        tags: ["Gemini API", "OpenRouter", "NVIDIA Nemotron", "n8n", "Telegram Bot API"]
      },
      {
        title: "Payment Integration & Cloud Deployment",
        description:
          "Integrating Razorpay checkout with HMAC SHA-256 signature verification, handling vendor KYC document verification workflows, and deploying web applications across Vercel, Render, and Supabase.",
        tags: ["Razorpay API", "HMAC Verification", "Vercel", "Render", "Supabase"]
      }
    ]
  }
};
