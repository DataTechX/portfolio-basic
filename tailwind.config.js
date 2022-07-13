module.exports = {
  content: [
    'pages/**/*.{js,ts,jsx,tsx}', 'components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    boxShadow: {
      "custom-light": " 0 0 10px #0011ff",
      "custom-dark": "5px 5px 10px #a651f5 , -5px -5px 10px #a651f5",
    },

    extend: {
      colors: {
        bule: {
          DEFAULT: "#0034f2",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        }
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
}