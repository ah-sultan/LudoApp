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
          200: "#fcf6f6",
          100: "#FCF6F6"
        },

        "light": {
          700: "#f4f4f4",
          600: "#f8f8f8",

        },
        'tGreay': {
          900: "#a7a7a7",
          850: '#2e2e2e',
          800: '#323232',
          750: '#575656',
          700: '#393939',
          650: '#2f2f2f',
          600: '#4c4c4c',
          550: "#848484",
          500: "#3c3c3c",
          300: "#6c7886",
          250: "#afafaf",
          200: "#5f5f5f",
          150: "#9f9e9e",
          100: "#e8e8e8",
          50: "#e4e4e4",

        },

        "dark": {
          900: '#161616',
          950: '#1d1d1d',
          650: '#2d2d2d',
          700: "#474747",
          600: "#303030",
          500: '#505050',
          400: '#3d3d3d',
          300: "#525252"
        },

        "accent": {
          900: "#ffde00"
        }
      },
      spacing: {
        "3px": "3px",
        "7px": "7px",
        "9px": "9px",
        "11px": "11px",
        "15px": "15px",
        "18px": "18px",
        "19px": "19px",
        "21px": "21px",
        "23px": "23px",
        "25px": "25px",
        "27px": "27px",
        "30px": "30px",
        "35px": "35px",
        "47px": "47px",
        "45px": "45px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "100px": "100px"
      },
      lineHeight: {
        '1.2': "1.2",
        "100px": "100px"
      },
      fontSize: {
        "11px": "11px",
        "15px": "15px",
        "21px": "21px",
        "22px": "22px",
        "25px": "25px",
        "30px": "30px",
      },
    },
  },
  plugins: [],
}

