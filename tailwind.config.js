/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts.tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-yellow": '#ffc727',
        "theme-yellow-dark": '#580066',
        "theme-dark": '#37474f',
      },
      height: {
        'screen-75': '90vh',
        'screen-50': '50vh'
      },
      fontFamily: {
        'main': ['"Open Sans"']
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
