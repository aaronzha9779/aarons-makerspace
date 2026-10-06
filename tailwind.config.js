/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#FFFFFF',
        ink: '#121212',
        inkdim: '#3F3F3B',
        orange: '#E8551D',
        orangedim: '#F4C9AE',
        rule: '#DEDBD3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Georgia', '"Times New Roman"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
