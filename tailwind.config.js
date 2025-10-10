/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/infrastructure/www/views/**/*.ejs",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#164773',
          600: '#0B2B40',
          700: '#1E5959',
          800: '#3B8C6E',
          900: '#89D99D',
        },
        dark: '#0B2B40',
        teal: '#1E5959',
        green: '#3B8C6E',
        lightGreen: '#89D99D',
      },
    },
  },
  plugins: [],
}