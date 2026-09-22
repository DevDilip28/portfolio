module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#10130f',
        surface: '#111512',
        panel: '#151a16',
        line: '#252c27',
        muted: '#89928b',
        accent: '#b6f36b',
        violet: '#9b8cff',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(182, 243, 107, 0.08)',
      },
    },
  },
  plugins: [],
}