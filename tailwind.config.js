/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        inkdim: 'rgb(var(--color-inkdim) / <alpha-value>)',
        orange: '#E8551D',
        orangedim: '#F4C9AE',
        rule: 'rgb(var(--color-rule) / <alpha-value>)',
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
