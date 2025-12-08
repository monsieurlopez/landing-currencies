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
          primary: "#1976D2",
          secondary: "#424242",
        },
      },
      dark: {
        colors: {
          primary: "#2196F3",
          secondary: "#757575",
        },
      },
    },
  },
  typography: {
    font: {
      family: "monospace",
    },
  },
});
