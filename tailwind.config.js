/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary greens
        primary: {
          DEFAULT: '#1A3A2A',
          50: '#f0f7f3',
          100: '#dbeddf',
          200: '#b7e4c7',
          300: '#74c69d',
          400: '#40916c',
          500: '#2d6a4f',
          600: '#1a3a2a',
          700: '#142d20',
          800: '#0f2118',
          900: '#0a160f',
        },
        // Emerald accents
        emerald: {
          accent: '#10B981',
        },
        // Secondary / premium
        gold: {
          DEFAULT: '#E9A825',
          light: '#F4C842',
        },
        warning: {
          DEFAULT: '#C1440E',
        },
        // Neutrals
        cream: '#FAF8F3',
        fog: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(26, 58, 42, 0.06), 0 4px 16px -4px rgba(26, 58, 42, 0.08)',
        'soft-lg': '0 8px 32px -8px rgba(26, 58, 42, 0.12), 0 2px 8px -2px rgba(26, 58, 42, 0.08)',
        'soft-xl': '0 16px 48px -12px rgba(26, 58, 42, 0.16), 0 4px 16px -4px rgba(26, 58, 42, 0.10)',
        'soft-2xl': '0 24px 64px -16px rgba(26, 58, 42, 0.20), 0 8px 24px -8px rgba(26, 58, 42, 0.12)',
        'glow': '0 0 0 1px rgba(45, 106, 79, 0.10), 0 8px 24px -4px rgba(16, 185, 129, 0.30)',
        'inner-soft': 'inset 0 1px 2px rgba(26, 58, 42, 0.06)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-down': 'fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulseSoft 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'typing': 'typing 1.4s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          '0%, 60%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '30%': { transform: 'scale(1.2)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
