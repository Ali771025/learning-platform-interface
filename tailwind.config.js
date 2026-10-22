/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        edge: {
          bg: '#0a0a0c',
          'bg-elevated': '#111114',
          'bg-card': '#161619',
          'bg-glass': 'rgba(22, 22, 25, 0.8)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(255, 255, 255, 0.15)',
          indigo: '#6366f1',
          'indigo-glow': '#818cf8',
          teal: '#2dd4bf',
          'teal-glow': '#5eead4',
          purple: '#a855f7',
          'purple-glow': '#c084fc',
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
          muted: '#71717a',
          text: '#fafafa',
          'text-secondary': '#a1a1aa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        DEFAULT: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      boxShadow: {
        'glow-indigo': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-teal': '0 0 20px rgba(45, 212, 191, 0.3)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
