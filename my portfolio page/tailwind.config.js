/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: { JetBrains: ['"JetBrains Mono"', "monospace"] },
    screens: {
      sm: "400px",
      WsmHsm: { raw: "(min-width: 400px) and (min-height: 700px)" },
      WsmHmd: { raw: "(min-width: 400px) and (min-height: 900px)" },
      WsmHlg: { raw: "(min-width: 400px) and (min-height: 1200px)" },

      md: "700px",
      WmdHsm: { raw: "(min-width: 700px) and (min-height: 700px)" },
      WmdHmd: { raw: "(min-width: 700px) and (min-height: 900px)" },
      WmdHlg: { raw: "(min-width: 700px) and (min-height: 1200px)" },

      lg: "900px",
      WlgHsm: { raw: "(min-width: 900px) and (min-height: 700px)" },
      WlgHmd: { raw: "(min-width: 900px) and (min-height: 900px)" },
      WlgHlg: { raw: "(min-width: 900px) and (min-height: 1200px)" },

      xl: "1200px",
      WxlHsm: { raw: "(min-width: 1200px) and (min-height: 700px)" },
      WxlHmd: { raw: "(min-width: 1200px) and (min-height: 900px)" },
      WxlHlg: { raw: "(min-width: 1200px) and (min-height: 1200px)" },

      "2xl": "1400px",
      W2xlHsm: { raw: "(min-width: 1400px) and (min-height: 700px)" },
      W2xlHmd: { raw: "(min-width: 1400px) and (min-height: 900px)" },
      W2xlHlg: { raw: "(min-width: 1400px) and (min-height: 1200px)" },

      "3xl": "2000px",
      W3xlHsm: { raw: "(min-width: 2000px) and (min-height: 700px)" },
      W3xlHmd: { raw: "(min-width: 2000px) and (min-height: 900px)" },
      W3xlHlg: { raw: "(min-width: 2000px) and (min-height: 1200px)" },

      Hsm: { raw: "(min-height: 700px)" },
      Hmd: { raw: "(min-height: 900px)" },
      Hlg: { raw: "(min-height: 1200px)" },
    },

    extend: {
      colors: {
        primary: "",
        secondary: "",
        accent: {
          DEFAULT: "rgb(0, 255, 153)",
        },
      },
      backgroundImage: {
        "cg-default": "linear-gradient(270deg, #df8908 10%, #b415ff 100%)",
        "cg-profile-photo":
          "radial-gradient(circle, rgba(223,137,8,0.1) 51%, rgba(180,21,255,0.1) 95%)",
      },
    },
    plugins: [],
  },
};
