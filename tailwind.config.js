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
    container: {
      center: true,
      padding: "15px"
    },

    screens: {
      "xl": '1200px'
    }
    ,
    extend: {
      colors: {
        "primary": {
          900: "#fb5d5d",
          200: "#CEBDB5",
          100: "#FCF6F6"
        },
        'tGreay': {
          700: '#393939',
          650: '#2f2f2f',
          600: '#4c4c4c',
          500: "#3c3c3c"

        },

      },
      spacing: {
        "3px": "3px",
        "7px": "7px",
        "15px": "15px",
        "21px": "21px",
        "25px": "25px",
        "30px": "30px",
        "47px": "47px",
        "50px": "50px"
      },
      lineHeight: {
        '1.2': "1.2",
        "100px": "100px"
      },
      fontSize: {
        "11px": "11px",
        "15px": "15px",
        "21px": "21px",
        "25px": "25px"
      },
    },
  },
  plugins: [],
}

