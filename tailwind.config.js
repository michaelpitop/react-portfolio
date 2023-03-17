/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    screens: {
      'lg': {'max': '1023px'},
      'tl': {'max': '723px'},
      },
    // backgroundSize: {
    //   'auto': 'auto',
    //   'cover': 'cover',
    //   'contain': 'contain',
    //   '50%': '50%',
    //   '16': '4rem',
    //   },

    extend: {
      backgroundImage: {
        // 'back': "url('./src/assets/images/bg.jpg')",
        // 'skills': "url('./src/assets/images/banner-bg.png')"
      }
    },
  },
  plugins: [],


};
