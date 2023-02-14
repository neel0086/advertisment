
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        maxWidth: {
          container: "1440px",
        },
        screens: {
          xs: "320px",
          sm: "375px",
          sml: "500px",
          md: "667px",
          mdl: "768px",
          lg: "960px",
          lgl: "1024px",
          xl: "1280px",
        
        },
        height:{
          xvh:'90vh'
        },
        fontFamily: {
          titleFont: "Roboto",
          audiowide:'Audiowide',
          bodyFont: "Poppins",
        },
        colors: {
          whitesmoke:"#f5f5f5",
          black:"#000000",
          nav_white:"#ffffff",
          amazon_blue: "#131921",
          amazon_light: "#232F3E",
          amazon_yellow: "#febd69",
          whiteText: "#ffffff",
          lightText: "#ccc",
          quantity_box: "#F0F2F2",
          footerBottom: "#131A22",
        },
        invert:{
          25:'.25',
          50:'.50',
          60:'0.6',
          75:'.75'
        },
        boxShadow: {
          testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
          amazonInput: "0 0 3px 2px rgb(228 121 17 / 50%)",
        },
      },
    },
    plugins: [],
  };
  