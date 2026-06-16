/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#0F172A',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        background: '#F8FAFC',
        'card-bg': '#FFFFFF',
        'dark-mode': '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'avenir', 'helvetica', 'arial', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        btn: '12px',
        input: '12px',
      },
      spacing: {
        0: '0px',
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.3s ease-in-out',
        slideDown: 'slideDown 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
