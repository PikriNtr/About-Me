/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'yellow': '#eab308',
        'bg': '#101019',
        'primary': '#2f27ce',
        'secondary': '#dddbff',
        'accent': '#443dff',
      },
      fontFamily: {
        pregular: ['Poppins-Regular', 'sans-serif'],
        pmedium: ['Poppins-Medium', 'sans-serif'],
        psemibold: ['Poppins-SemiBold', 'sans-serif'],
        pbold: ['Poppins-Bold', 'sans-serif'],
        pblack: ['Poppins-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

