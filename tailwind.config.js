module.exports = {
  content: [
    'pages/**/*.{js,ts,jsx,tsx}', 'components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    boxShadow: {
      "custom-light": "5px 5px 5px #00c3ff , -10px -10px 10px #00c3ff",
      "custom-dark": "5px 5px 5px #008cff , -10px -10px 10px #008cff",
    },

    extend: {
      colors: {
        blue: {
          DEFAULT: "#c800ff",
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