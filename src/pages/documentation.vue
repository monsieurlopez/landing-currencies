<template>
  <div class="swagger-container">
    <div id="swagger-ui"></div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const swaggerTheme = computed(() =>
  theme.global.current.value.dark ? "dark" : "light",
);

onMounted(() => {
  window.SwaggerUIBundle({
    dom_id: "#swagger-ui",
    url: "https://api.euroratesapi.dev/docs?api-docs.json",
    theme: swaggerTheme.value,
  });
});
</script>

<style scoped>
.swagger-container {
  width: 100%;
  height: calc(100vh - 64px);
  overflow: auto;
}

#swagger-ui {
  width: 100%;
  overflow: auto;
}

/* Dark mode background */
.v-theme--dark #swagger-ui {
  background-color: #0f1729 !important;
}

.v-theme--dark #swagger-ui .swagger-ui {
  background-color: #0f1729 !important;
  color: #e0e0e0 !important;
}

/* Main content background */
.v-theme--dark #swagger-ui .topbar {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%);
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
}

.v-theme--dark #swagger-ui .info {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 8px;
  padding: 20px;
}

.v-theme--dark #swagger-ui .info .title {
  color: #3b82f6 !important;
  font-weight: 700;
}

.v-theme--dark #swagger-ui .info .description {
  color: #cbd5e1 !important;
}

/* Operation blocks */
.v-theme--dark #swagger-ui .opblock {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-left: 4px solid rgba(59, 130, 246, 0.5);
  margin: 12px 0;
  border-radius: 6px;
}

.v-theme--dark #swagger-ui .opblock.opblock-get {
  border-left-color: #3b82f6;
}

.v-theme--dark #swagger-ui .opblock.opblock-post {
  border-left-color: #10b981;
}

.v-theme--dark #swagger-ui .opblock.opblock-put {
  border-left-color: #f59e0b;
}

.v-theme--dark #swagger-ui .opblock.opblock-delete {
  border-left-color: #ef4444;
}

.v-theme--dark #swagger-ui .opblock.opblock-patch {
  border-left-color: #8b5cf6;
}

/* Operation summary */
.v-theme--dark #swagger-ui .opblock-summary {
  background: transparent;
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);
  padding: 12px 16px;
}

.v-theme--dark #swagger-ui .opblock-summary:hover {
  background: rgba(59, 130, 246, 0.08);
}

.v-theme--dark #swagger-ui .opblock-summary-method {
  color: #fff !important;
  font-weight: 600 !important;
  background: rgba(59, 130, 246, 0.15) !important;
  border-radius: 4px;
  padding: 4px 8px !important;
}

.v-theme--dark #swagger-ui .opblock-summary-path {
  color: #cbd5e1 !important;
  font-weight: 500;
}

/* Parameters and responses */
.v-theme--dark #swagger-ui .parameter {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 4px;
  margin: 8px 0;
}

.v-theme--dark #swagger-ui .parameter__name {
  color: #60a5fa !important;
  font-weight: 600;
}

.v-theme--dark #swagger-ui .response-col_status {
  color: #60a5fa !important;
  font-weight: 600;
}

.v-theme--dark #swagger-ui .response {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 4px;
  margin: 8px 0;
}

/* Scheme container */
.v-theme--dark #swagger-ui .scheme-container {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 6px;
}

.v-theme--dark #swagger-ui .scheme-container .scheme-container-inner {
  color: #cbd5e1;
}

/* Tables and models */
.v-theme--dark #swagger-ui .model {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 4px;
}

.v-theme--dark #swagger-ui .model-title {
  color: #3b82f6 !important;
  font-weight: 600;
}

.v-theme--dark #swagger-ui .model-box {
  background: transparent;
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 4px;
}

.v-theme--dark #swagger-ui table {
  background: transparent;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.v-theme--dark #swagger-ui table tbody tr {
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);
}

.v-theme--dark #swagger-ui table tbody tr:hover {
  background: rgba(59, 130, 246, 0.08);
}

.v-theme--dark #swagger-ui table tbody tr td {
  color: #cbd5e1;
  border-right: 1px solid rgba(59, 130, 246, 0.08);
}

/* Buttons */
.v-theme--dark #swagger-ui .btn {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #e0e0e0 !important;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.v-theme--dark #swagger-ui .btn:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%);
  border-color: rgba(59, 130, 246, 0.5);
  color: #fff !important;
}

.v-theme--dark #swagger-ui .btn.try-out {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border: none;
  color: #fff !important;
}

/* Input fields */
.v-theme--dark #swagger-ui input,
.v-theme--dark #swagger-ui textarea,
.v-theme--dark #swagger-ui select {
  background: rgba(15, 23, 42, 0.8);
  color: #e0e0e0 !important;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 4px;
}

.v-theme--dark #swagger-ui input:focus,
.v-theme--dark #swagger-ui textarea:focus,
.v-theme--dark #swagger-ui select:focus {
  border-color: #3b82f6;
  background: rgba(15, 23, 42, 0.95);
  outline: none;
}

/* Code blocks */
.v-theme--dark #swagger-ui code,
.v-theme--dark #swagger-ui pre {
  background: rgba(15, 23, 42, 0.8);
  color: #60a5fa !important;
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 4px;
}

/* Links */
.v-theme--dark #swagger-ui a {
  color: #60a5fa !important;
  text-decoration: none;
  transition: all 0.3s ease;
}

.v-theme--dark #swagger-ui a:hover {
  color: #3b82f6 !important;
  text-decoration: underline;
}

/* Tabs */
.v-theme--dark #swagger-ui .tab {
  background: transparent;
  border-bottom: 2px solid rgba(59, 130, 246, 0.1);
}

.v-theme--dark #swagger-ui .tab li {
  border: none;
  color: #cbd5e1;
  background: transparent;
}

.v-theme--dark #swagger-ui .tab li.active {
  color: #3b82f6;
  border-bottom: 3px solid #3b82f6;
  background: transparent;
}

.v-theme--dark #swagger-ui .tab li:hover {
  color: #60a5fa;
  background: rgba(59, 130, 246, 0.1);
}

/* Icons and SVGs */
.v-theme--dark #swagger-ui svg {
  fill: #cbd5e1 !important;
}

.v-theme--dark #swagger-ui .opblock-control__pin svg {
  fill: #cbd5e1 !important;
}

/* Scrollbar */
.v-theme--dark #swagger-ui::-webkit-scrollbar {
  width: 8px;
}

.v-theme--dark #swagger-ui::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
}

.v-theme--dark #swagger-ui::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.4);
  border-radius: 4px;
}

.v-theme--dark #swagger-ui::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.6);
}
</style>
