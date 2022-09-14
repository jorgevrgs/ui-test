/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        positive: 'rgb(60, 187, 180)',
        negative: 'rgb(249, 173, 29)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
