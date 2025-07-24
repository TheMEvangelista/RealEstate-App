import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import plugin from "tailwindcss/plugin";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

// /** @type {import('tailwindcss').Config} */

// export const content = ["./src/**/*.{js,jsx,ts,tsx}"];

// export const theme = {
//   screens: {
//     sm: "600px",
//     md: "900px",
//     lg: "1024px",
//     xl: "1280px",
//     "2xl": "1536px",
//   },
//   extend: {
//     fontFamily: {
//       poppins: "poppins",
//       questrial: "Questrial",
//     },
//     colors: {
//       primary: "#edf1c9",
//       secondary: "#8ac243",
//       tertiary: "#222222",
//       secondaryRed: "#f42c37",
//       sencondarYellow: "#f2c94c",
//       secondaryBlue: "#1376f4",
//       secondaryGreen: "#2dcc6f",
//       secondaryWhite: "#eeeeee",
//       gray: {
//         10: "#eeeeee",
//         20: "#a2a2a2",
//         30: "#7b7b7b",
//         50: "#585858",
//         90: "#141414",
//       },
//     },
//     screens: {
//       xs: "400px",
//     },
//     backgroundImage: {
//       hero: "url('/src/assets/images/bg.png')",
//     },
//   },
// };
// export const plugins = [
//   plugin(({ addUtilities }) => {
//     const newUtilities = {
//       ".text-muted": {
//         opacity: 0.8,
//       },
//       ".transition-a": {
//         transition: "all 0.3s ease-in-out",
//       },
//       ".card-shadow": {
//         boxShadow: " 0 0 0.8rem 0.25rem rgba(0, 0, 0, 0.1)",
//       },
//       ".shadow-light": {
//         boxShadow: "0.1rem 0.1rem 0.3rem .1rem rgba(0, 0, 0, 0.05)",
//       },
//       ".border-light": {
//         border: "1px solid rgba(46, 46, 46, 0.1)",
//       },
//       ".input-shadow": {
//         boxShadow: "0 0 0 1000px #f5f5f9 inset !important",
//       },
//       ".input-dark-shadow": {
//         boxShadow: "0 0 0 1000px #13131A inset !important",
//       },
//       ".inputAutofillColor": {
//         "-webkit-text-fill-color": "#ccc",
//       },
//       ".flex-center-center": {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       },
//       ".flex-center-between": {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//       },
//       ".flex-align-center": {
//         display: "flex",
//         alignItems: "center",
//       },
//     };
//     addUtilities(newUtilities);
//   }),
// ];
