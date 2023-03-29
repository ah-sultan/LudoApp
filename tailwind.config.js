/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center : true,
    },

    screens : {
      "xl" : '1200px'
    }
    ,
    extend: {
      colors : {
        "primary" :{
          900 : "#fb5d5d "
        },
        'tGreay' : {
          600 : '#4c4c4c'
        }
      },
      spacing : {
        
        "7px" : "7px",
        "21px" : "21px",
        "50px" : "50px"
      },
      lineHeight : {
        "100px" : "100px"
      },
      fontSize : {
        "11px" : "11px",
        "25px" : "25px"
      },
    },
  },
  plugins: [],
}

