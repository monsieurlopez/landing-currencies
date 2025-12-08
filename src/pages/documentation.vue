<template>
  <div id="swagger-ui"></div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const swaggerTheme = computed(() => theme.global.current.value.dark ? "dark" : "light");

onMounted(() => {
  window.SwaggerUIBundle({
    dom_id: "#swagger-ui",
    url: "http://127.0.0.1:8000/docs?api-docs.json",
    theme: swaggerTheme.value,
  });
});
</script>

<style>
#swagger-ui {
  width: 100%;
  height: 100vh;
  overflow: auto;
}

/* Dark mode styles for Swagger UI */
.v-theme--dark #swagger-ui .swagger-ui {
  --swagger-theme-primary-color: #333;
  --swagger-theme-secondary-color: #444;
  --swagger-theme-text-color: #f0f0f0;
  --swagger-theme-border-color: #666;
  --swagger-theme-background-color: #222;
}

/* Additional dark mode overrides */
.v-theme--dark #swagger-ui .swagger-ui .info .title,
.v-theme--dark #swagger-ui .swagger-ui .opblock-summary-method,
.v-theme--dark #swagger-ui .swagger-ui .opblock-summary-path,
.v-theme--dark #swagger-ui .swagger-ui .parameter__name,
.v-theme--dark #swagger-ui .swagger-ui .response-col_status,
.v-theme--dark #swagger-ui .swagger-ui .tab li,
.v-theme--dark #swagger-ui .swagger-ui .info .description,
.v-theme--dark #swagger-ui .swagger-ui .model-title,
.v-theme--dark #swagger-ui .swagger-ui .property.primitive {
  color: #f0f0f0 !important;
}

.v-theme--dark #swagger-ui .swagger-ui .scheme-container {
  background: #444;
  color: #f0f0f0;
}

.v-theme--dark #swagger-ui .swagger-ui .opblock {
  background: #333;
  border-color: #666;
}

.v-theme--dark #swagger-ui .swagger-ui .opblock-summary {
  background: #444;
  color: #f0f0f0;
}

.v-theme--dark #swagger-ui .swagger-ui .parameter {
  background: #444;
  color: #f0f0f0;
}

.v-theme--dark #swagger-ui .swagger-ui .response {
  background: #333;
  color: #f0f0f0;
}

.v-theme--dark #swagger-ui .swagger-ui .model {
  background: #333;
  color: #f0f0f0;
}

.v-theme--dark #swagger-ui .swagger-ui .markdown p,
.v-theme--dark #swagger-ui .swagger-ui .markdown li {
  color: #f0f0f0;
}

/* General text color override */
.v-theme--dark #swagger-ui .swagger-ui {
  color: #f0f0f0;
}

/* Broad text color override for better visibility */
.v-theme--dark #swagger-ui .swagger-ui *,
.v-theme--dark #swagger-ui .swagger-ui .btn,
.v-theme--dark #swagger-ui .swagger-ui .btn:hover,
.v-theme--dark #swagger-ui .swagger-ui input,
.v-theme--dark #swagger-ui .swagger-ui textarea,
.v-theme--dark #swagger-ui .swagger-ui select {
  color: #f0f0f0 !important;
  border-color: #666 !important;
}

/* Ensure buttons and inputs have light text */
.v-theme--dark #swagger-ui .swagger-ui .btn {
  background: #555 !important;
}

.v-theme--dark #swagger-ui .swagger-ui input,
.v-theme--dark #swagger-ui .swagger-ui textarea {
  background: #444 !important;
}

/* Links */
.v-theme--dark #swagger-ui .swagger-ui a {
  color: #add8e6 !important; /* Light blue for links */
}

/* Code blocks */
.v-theme--dark #swagger-ui .swagger-ui code,
.v-theme--dark #swagger-ui .swagger-ui pre {
  background: #333 !important;
  color: #f0f0f0 !important;
}

/* Icons and arrows */
.v-theme--dark #swagger-ui .swagger-ui svg,
.v-theme--dark #swagger-ui .swagger-ui .opblock-summary-control::after,
.v-theme--dark #swagger-ui .swagger-ui .opblock-summary-control::before {
  fill: #f0f0f0 !important;
  color: #f0f0f0 !important;
}

/* Specific for accordion arrows */
.v-theme--dark #swagger-ui .swagger-ui .opblock .opblock-summary .opblock-summary-control svg {
  fill: #f0f0f0 !important;
}
</style>
