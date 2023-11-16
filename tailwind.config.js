/** @type {import('tailwindcss').Config} */
export default {
  content: ['.index.html', './src/**/*.{js,html,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        header: 'IBM Plex Sans Condensed, sans-serif',
        mainText: 'IBM Plex Sans, sans-serif',
        sectionHeader: 'Playfair Display, serif'
      }
    },
  },
  plugins: [],
}

