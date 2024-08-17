// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#a5b4fc',
        background: '#0f172a',
        text: '#e2e8f0',
        accent: '#22d3ee',
        codeBackground: '#1e293b',
        sectionBackground: '#1e293b',
        border: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
