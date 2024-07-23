/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlack: "#141414",
        primaryWhite: "#f7f7f7",
        primaryLightPurple:"#caccfd",
        primarySolidPurple:"#9998fe",
        primaryBlue:"#0000fe"
      },
      padding:{
        sm:"15px",
      }
    },
  },
  plugins: [],
}

