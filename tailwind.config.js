/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
        screens: {
      920: '920px',
      // 768: '768px',
      500: '500px'
    },
    backgroundImage: {
      landingPage: 'url("assets/Flowers Illustration.png")'
    }
},
  },
  plugins: [],
}