/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui"],
        mono: ["Iosevka", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        bg: "#100c08",
        bg2: "#353839",
        fg: "#f5f5f5",
        fg2: "#e5e4e2",
        fg3: "#778899",
        blue1: "#6082b6",
        blue2: "#a2add0",
        black1: "#090909",
        black2: "#36454f",
        black3: "#242124",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
