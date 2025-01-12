/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    boxShadow: {
      'login-page':'6px 4px 40px 0px rgba(43, 57, 144, 0.46)',
    },
    backgroundImage: {
      'image-1': "url('/src/assets/IMAGEs/bg.webp')",
      'login-bg': "url('/src/assets/IMAGEs/loginbg.png')",
      'lGradient': 'linear-gradient(96deg, #3E4FBB -14.71%, #C32E6B 100%)',
    },
    colors: {
      primary: "#981c51",
      secondary: "#4F4AB0",
      white: "#FFF",
      grey: "#4E4E4E",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    container: {
      center: true,
      padding: '30px',
    },

    gridTemplateColumns: {
      '70': '70% 1fr',
      '300': '300px 1fr',
      '1': '1fr',
      '3fr':"1fr 1fr 1fr"
    },
    extend: {},
  },
  plugins: [],
}