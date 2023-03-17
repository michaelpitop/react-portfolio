/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',

      'lg': {'max': '1024px'},
      'xl': '1280px',
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
        // 'home': "url('/home/michaelpitop/code/michaelpitop/react-portfolio/src/assets/pictures/leuka_ori.jpg')",
        // 'skills': "url('./src/assets/images/banner-bg.png')"
      }
    },
  },
  plugins: [],


};
