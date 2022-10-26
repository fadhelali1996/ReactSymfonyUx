/** @type {import('tailwindcss').Config} */
//content is what the path of files that would be scanned by tailwindcss.......
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./assets/react/controllers/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
