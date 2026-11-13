/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#0B1011',
        },
        surface: {
          DEFAULT: '#141C1D',
          elevated: '#192324',
        },
        border: {
          DEFAULT: '#263536',
          subtle: '#1C2728',
        },
        text: {
          primary: '#F1F4F2',
          secondary: '#A5B2AE',
          muted: '#71817D',
        },
        accent: {
          DEFAULT: '#669B96',
          highlight: '#A4C5C0',
          hover: '#7AAEA9',
          subtle: 'rgba(102, 155, 150, 0.12)',
          border: 'rgba(102, 155, 150, 0.28)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.04em',
        wider: '0.08em',
      },
    },
  },
  plugins: [],
}
