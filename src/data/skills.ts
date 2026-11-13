export interface TechSkill {
  name: string;
  category: 'Development' | 'Platforms & AI' | 'Development Tools';
  iconKey: string;
}

export const exactSkills: TechSkill[] = [
  // Development (5)
  { name: "Python", category: "Development", iconKey: "python" },
  { name: "React", category: "Development", iconKey: "react" },
  { name: "JavaScript", category: "Development", iconKey: "javascript" },
  { name: "HTML", category: "Development", iconKey: "html" },
  { name: "CSS", category: "Development", iconKey: "css" },

  // Platforms & AI (4)
  { name: "n8n", category: "Platforms & AI", iconKey: "n8n" },
  { name: "Supabase", category: "Platforms & AI", iconKey: "supabase" },
  { name: "Gemini API", category: "Platforms & AI", iconKey: "gemini" },
  { name: "Shopify", category: "Platforms & AI", iconKey: "shopify" },

  // Development Tools (4)
  { name: "Git", category: "Development Tools", iconKey: "git" },
  { name: "GitHub", category: "Development Tools", iconKey: "github" },
  { name: "Render", category: "Development Tools", iconKey: "render" },
  { name: "Vercel", category: "Development Tools", iconKey: "vercel" },
];
