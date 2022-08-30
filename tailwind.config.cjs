/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          positive: 'rgb(var(--green-positive) / <alpha-value>)',
        },
        yellow: {
          negative: 'rgb(var(--yellow-negative) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
