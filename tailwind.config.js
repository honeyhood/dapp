/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#111827',

          secondary: '#D926A9',

          accent: '#1FB2A6',

          neutral: '#111827',

          'base-100': '#e0f2fe',

          info: '#facc15',

          success: '#22c55e',

          warning: '#f97316',

          error: '#dc2626',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
