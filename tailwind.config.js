/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A0A0A',
          DEFAULT: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#FFFFFF',
          muted: '#A3A3A3',
        },
        text: {
          light: '#FFFFFF',
          muted: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'DEFAULT': '8px',
        'button': '4px',
      },
    },
  },
  plugins: [],
}
