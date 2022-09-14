/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          positive: '60 187 180',
        },
        yellow: {
          negative: '249 173 29',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
