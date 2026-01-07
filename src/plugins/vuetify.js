/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from "vuetify";
// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: localStorage.getItem("theme") || "system",
    themes: {
      light: {
        colors: {
          primary: "#3b82f6",
          secondary: "#8b5cf6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          info: "#06b6d4",
          background: "#ffffff",
          surface: "#f5f5f5",
        },
      },
      dark: {
        colors: {
          primary: "#60a5fa",
          secondary: "#a78bfa",
          success: "#34d399",
          warning: "#fbbf24",
          error: "#f87171",
          info: "#22d3ee",
          background: "#0a0e27",
          surface: "#141829",
        },
      },
    },
  },
  typography: {
    font: {
      family: "Roboto, sans-serif",
    },
  },
});
