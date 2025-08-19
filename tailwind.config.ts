import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          blue: '#0071C5',
          green: '#00C389'
        }
      },
      backgroundImage: {
        'grid-dark': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
        'radial-glow': 'radial-gradient(800px 400px at 50% 0%, rgba(0,195,137,0.2), transparent)',
        'radial-blue': 'radial-gradient(800px 400px at 50% 100%, rgba(0,113,197,0.18), transparent)'
      }
    }
  },
  plugins: []
} satisfies Config
