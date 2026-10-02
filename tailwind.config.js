module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#06070b',
        elevated: '#0c0e14',
        panel: '#11141c',
        ink: '#06070b',
        line: '#1e2430',
        muted: '#7a8494',
        subtle: '#a8b0bd',
        accent: '#b6f36b',
        ai: '#818cf8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 100px rgba(182, 243, 107, 0.1)',
        'glow-sm': '0 0 40px rgba(182, 243, 107, 0.08)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
};
