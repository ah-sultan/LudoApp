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
      padding: '12px'
    },

    screens: {
      'xs': '479px',
      // => @media (min-width: 479px) { ... }

      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '960px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1200px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'player1': '#f9c8c8',
        'player2': '#b5f3b5',
        'player3': '#BABAF7',
        'player4': '#ddd',
        'primary': 'var(--primary-color)'
      },
      boxShadow: {
        '20px': '0,0, 20px rgba(0,0,0,0.2)'
      },
      keyframes: {
        'diceReady': {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(1turn)" },
        },

        "shuffleRotate": {
          "0%": { transform: "scale(0) rotate(0)" },
          "100%": { transform: "scale(1) rotate(1turn)" },
        }
      },
      animation: {
        diceReady: "diceReady 1s linear infinite ",
        shuffleRotate: "shuffleRotate .2s ease-in-out ",
      }
    }
  },
  plugins: [
  ],
}

