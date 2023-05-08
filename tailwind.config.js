/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'grey':'#F3F1F5',
      'lavender': '#F0D9FF',
      'purple': '#C9A7EB',
      'charcoal': '#393E46',
      'beige': '#FBF7F0'
    },
    
  },
  plugins: [require('daisyui')],

}
