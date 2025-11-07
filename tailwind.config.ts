import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d4c7',
          300: '#a0b5a0',
          400: '#8BA888',
          500: '#6B8E6F',
          600: '#567258',
          700: '#455a47',
          800: '#39493a',
          900: '#2f3c30',
        },
        tan: {
          50: '#faf8f5',
          100: '#f4efe6',
          200: '#e8dcc9',
          300: '#D4B896',
          400: '#C9A77C',
          500: '#b8935f',
          600: '#a67f53',
          700: '#896746',
          800: '#70543d',
          900: '#5c4634',
        },
        peach: {
          50: '#fdf8f4',
          100: '#F0B892',
          200: '#E6A574',
          300: '#e39358',
          400: '#df7e38',
          500: '#d96b23',
          600: '#c8571b',
          700: '#a6431a',
          800: '#85381c',
          900: '#6c2f19',
        },
      },
      backgroundImage: {
        'glassmorphic': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glassmorphic-hover': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '12px',
        'glass-md': '16px',
        'glass-lg': '24px',
      },
      borderRadius: {
        'glass': '16px',
        'glass-lg': '24px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.2)',
        'glass-hover': '0 12px 40px 0 rgba(31, 38, 135, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(107, 142, 111, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(107, 142, 111, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

