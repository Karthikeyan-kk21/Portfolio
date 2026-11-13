import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* --- Technology Logos (Simple Icons / Devicon compliant vectors) --- */

export const ReactIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#3178C6"/>
    <path d="M11.5 15.8h-1.8v-6h-2.4V8.5h6.6v1.3H11.5v6zm3.3 0c-.8 0-1.4-.2-1.9-.6l.6-1.2c.4.3.9.5 1.4.5.6 0 .9-.3.9-.7 0-.9-2.6-.5-2.6-2.4 0-.9.7-1.6 2-1.6.6 0 1.2.2 1.6.4l-.5 1.2c-.4-.2-.8-.4-1.2-.4-.6 0-.8.3-.8.6 0 .9 2.6.5 2.6 2.4 0 1.1-.8 1.8-2.1 1.8z" fill="#FFFFFF"/>
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M7.5 17.5c.7.4 1.5.7 2.3.7 1.3 0 2.1-.6 2.1-2.1v-6.3h-1.8v6.2c0 .6-.3.9-.9.9-.4 0-.9-.1-1.2-.3l-.5 1.6zm8.8.2c1.4 0 2.4-.7 2.4-2 0-1.7-2.3-1.6-2.3-2.5 0-.5.4-.7 1-.7.5 0 1 .2 1.4.4l.6-1.5c-.6-.4-1.3-.5-2-.5-1.5 0-2.5.8-2.5 2.1 0 1.8 2.3 1.6 2.3 2.5 0 .6-.5.8-1.1.8-.6 0-1.2-.2-1.7-.5l-.6 1.6c.7.4 1.6.7 2.5.7z" fill="#000000"/>
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M11.87 2c-3.1 0-5.06.3-5.06 1.96v2.22h5.16v.74H4.72C2.93 6.92 2 7.9 2 10.15c0 2.22 1.35 3.32 3.14 3.32h1.23v-1.66c0-1.9 1.65-3.41 3.55-3.41h5.16c1.6 0 2.92-1.29 2.92-2.88V3.96C18 2.3 15 2 11.87 2zM9.04 3.48a.92.92 0 110 1.84.92.92 0 010-1.84z" fill="#3776AB"/>
    <path d="M12.13 22c3.1 0 5.06-.3 5.06-1.96v-2.22h-5.16v-.74h7.25c1.79 0 2.72-.98 2.72-3.23 0-2.22-1.35-3.32-3.14-3.32h-1.23v1.66c0 1.9-1.65 3.41-3.55 3.41H8.87c-1.6 0-2.92 1.29-2.92 2.88v1.56C5.95 21.7 8.95 22 12.13 22zm2.83-1.48a.92.92 0 110-1.84.92.92 0 010-1.84z" fill="#FFD43B"/>
  </svg>
);

export const FlaskIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F1F4F2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 2v7.5L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V2" />
    <path d="M8.5 2h7" />
    <path d="M7 16h10" />
  </svg>
);

export const PostgresIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#336791"/>
    <path d="M17.2 12.5c-.2-.7-.6-1.3-1.1-1.7-.5-.4-1.2-.6-1.9-.6h-3.4v6.2h1.6v-2.3h1.7c.7 0 1.4-.2 1.9-.6.5-.4.9-1 1.2-1.7zm-2.1.8c-.3.4-.8.6-1.5.6h-1.2v-2.1h1.2c.6 0 1.1.2 1.5.6.3.3.4.6.4.9 0 .4-.1.7-.4 1z" fill="#FFFFFF"/>
  </svg>
);

export const SupabaseIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12.9 2.5a.8.8 0 0 0-1.4.6v8.4H3.4a.8.8 0 0 0-.6 1.4l8.3 8.6a.8.8 0 0 0 1.4-.6v-8.4h8.1a.8.8 0 0 0 .6-1.4l-8.3-8.6z" fill="#3ECF8E"/>
  </svg>
);

export const GeminiIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C12 7.52 7.52 12 2 12c5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z" fill="url(#geminiGradient)"/>
    <defs>
      <linearGradient id="geminiGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#669B96"/>
        <stop offset="1" stopColor="#A4C5C0"/>
      </linearGradient>
    </defs>
  </svg>
);

export const OpenRouterIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#669B96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
  </svg>
);

export const N8nIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#EA4B71"/>
    <path d="M7 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm7 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" fill="#FFFFFF"/>
    <circle cx="5" cy="12" r="1.5" fill="#FFFFFF"/>
  </svg>
);

export const TelegramIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="#2AABEE"/>
    <path d="M17.5 7.5L6.5 12l3.5 1.5L14 9l-3 4.5v3l2-2 3.5 2 1-9z" fill="#FFFFFF"/>
  </svg>
);

export const GoogleSheetsIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="18" height="20" x="3" y="2" rx="2" fill="#0F9D58"/>
    <path d="M7 8h10M7 12h10M7 16h10" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 6v12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8"/>
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21.6 10.9L13.1 2.4a1.7 1.7 0 0 0-2.4 0L8.3 4.8l3 3a1.8 1.8 0 0 1 2.3 2.3l2.9 2.9a1.8 1.8 0 1 1-1.2 1.2l-2.8-2.8v4.4a1.8 1.8 0 1 1-1.7 0v-4.4a1.8 1.8 0 0 1-1-2.4L7.1 6.3 2.4 11a1.7 1.7 0 0 0 0 2.4l8.5 8.5a1.7 1.7 0 0 0 2.4 0l8.3-8.5a1.7 1.7 0 0 0 0-2.5z" fill="#F05032"/>
  </svg>
);

export const VercelIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L23 21H1L12 2Z" fill="#F1F4F2"/>
  </svg>
);

export const RenderIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#141C1D" stroke="#263536" strokeWidth="1.5"/>
    <path d="M7 6h5a5 5 0 0 1 0 10H7V6zM7 16l6 4" stroke="#669B96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CapacitorIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#119EFF"/>
    <path d="M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" fill="#FFFFFF"/>
    <circle cx="12" cy="12" r="3" fill="#119EFF"/>
  </svg>
);

export const RazorpayIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 19.5L14.5 4H10L2 19.5h2zm7.5 0L22 4h-4.5L10 19.5h1.5z" fill="#0C2340"/>
    <path d="M6 19.5L16.5 4H13L5 19.5h1z" fill="#528FF0"/>
  </svg>
);

export const NodeIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z" fill="#339933"/>
    <path d="M12 6.5l5.5 3.2v6.4L12 19.3l-5.5-3.2V9.7L12 6.5z" fill="#0B1011"/>
    <path d="M12 9l3 1.7v3.5L12 16l-3-1.8v-3.5L12 9z" fill="#339933"/>
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M22.5 11.2c-.4-.3-1.1-.4-1.8-.3-.2-.5-.6-1-1.1-1.3l-.6-.3-.3.6c-.3.7-.3 1.5 0 2.2-.4.2-1 .4-1.8.4H2.4c-.2 1.3.2 2.6 1 3.7 1.4 1.8 3.8 2.8 7.2 2.8 5.6 0 9.8-3.3 11-8.3.4.1.7.3.9.5zm-14.7-1H9v1.2H7.8v-1.2zm1.6 0h1.2v1.2H9.4v-1.2zm1.6 0h1.2v1.2H11v-1.2zm1.6 0h1.2v1.2h-1.2v-1.2z" fill="#2496ED"/>
  </svg>
);

export const HtmlIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3z" fill="#E34F26"/>
    <path d="M12 4v16.2l5.7-2 1.5-14.2H12z" fill="#EF652A"/>
    <path d="M7 7.5h10l-.2 2H9.2l.2 2h7.4l-.5 5.5-4.3 1.2-4.3-1.2-.3-3.5h1.9l.2 1.8 2.5.7 2.5-.7.2-2.1H7.3L7 7.5z" fill="#FFFFFF"/>
  </svg>
);

export const CssIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3z" fill="#1572B6"/>
    <path d="M12 4v16.2l5.7-2 1.5-14.2H12z" fill="#33A9DC"/>
    <path d="M7 7.5h10l-.2 2H9.2l.2 2h7.4l-.5 5.5-4.3 1.2-4.3-1.2-.3-3.5h1.9l.2 1.8 2.5.7 2.5-.7.2-2.1H7.3L7 7.5z" fill="#FFFFFF"/>
  </svg>
);

export const ApiIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#669B96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 14h6m-3-3v6" />
    <path d="M14 10h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4v4" />
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="6" r="2" />
  </svg>
);

export const DatabaseIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#669B96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

export const ShopifyIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18.8 6.4c-.1-.1-.3-.1-.5 0-.2.1-4.7 3.3-4.7 3.3l-2.4-5.3c-.1-.2-.3-.3-.6-.3h-.1c-.2.1-.4.2-.4.4l-3 15.1c0 .2 0 .4.2.5.1.1.3.1.5.1h10c.2 0 .4-.1.5-.3l2.8-13.3c.1-.1 0-.3-.1-.4-.2-.1-2.1-.1-2.3-.1z" fill="#95BF47"/>
  </svg>
);

export const NemotronIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#141C1D" stroke="#76B900" strokeWidth="1.5"/>
    <path d="M6 15c2.5-3 5.5-3 8-1v-4c-2.5-2-5.5-2-8 1v4z" fill="#76B900"/>
    <circle cx="17" cy="12" r="2" fill="#76B900"/>
  </svg>
);
