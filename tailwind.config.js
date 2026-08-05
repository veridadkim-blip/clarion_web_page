/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        clarion: {
          navy: '#07152B',
          deep: '#0B1F3A',
          blue: '#1265E5',
          cyan: '#37B7FF',
          light: '#F4F8FC',
          white: '#FFFFFF',
          text: '#142033',
          muted: '#68758A',
          line: '#D9E2EC',

          // Compatibility & Token Aliases
          primary: '#1265E5',
          secondary: '#37B7FF',
          darkBg: '#07152B',
          darkSurface: '#0B1F3A',
          background: '#F4F8FC',
          surface: '#FFFFFF',
          textMain: '#142033',
          textSub: '#68758A',
          border: '#D9E2EC',
        },
      },
    },
  },
  plugins: [],
}
