/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    darkMode: "selector",
    fontFamily: { JetBrains: ['"JetBrains Mono"', "monospace"] },
    extend: {
      colors: {
        primary: "rgb(var(--primary)/<alpha-value>)",
        secondary: "rgb(var(--secondary)/<alpha-value>)",
        accent: "rgb(var(--accent)/<alpha-value>)",
        "accent-btn": "rgb(var(--accent-btn)/<alpha-value>)",
        "bg-secondary": "rgb(var(--bg-secondary)/<alpha-value>)",
        "bg-primary": "rgb(var(--bg-primary)/<alpha-value>)",
      },
    },
  },
  plugins: [],
};
