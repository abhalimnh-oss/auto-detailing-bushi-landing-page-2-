/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: "#8A5A34",     // primary warm brown (buttons, accents)
          brownDark: "#5A3A22", // dark brown accent
          brownLight: "#B98455",
          cream: "#F7F1E7",     // cream sections
          beige: "#EFE4D3",     // light beige
          warmwhite: "#FBF8F3", // warm white background
          charcoal: "#2A241E",  // dark charcoal text
        },
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(90, 58, 34, 0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
