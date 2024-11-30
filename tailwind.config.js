/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Default primary color
        secondary: '#9333EA', // Default secondary color
        accent: '#FBBF24', // Accent color
        neutral: '#1F2937', // Neutral color
        base: '#FFFFFF', // Base (light background)
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'serif'],
      },
      spacing: {
        1: '8px',
        2: '12px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '48px',
      },
    },
  },
  darkMode: 'class', // Enable dark mode using class
  plugins: [], // No additional plugins required
};
