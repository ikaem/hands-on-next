/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./pages/**/*.{ts, tsx}', './components/**/*.{ts, tsx}'],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],

  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  darkMode: 'class',
  // content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  // variants: {
  //   extend: {},
  // },
};
