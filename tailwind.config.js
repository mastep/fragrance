/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      './src/**/*.{html,js}',
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      './node_modules/tw-elements/dist/js/**/*.js',
      './public/**/*.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tw-elements/dist/plugin')
  ],
}