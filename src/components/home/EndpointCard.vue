<template>
  <div class="endpoint-card-wrapper" :class="{ visible }">
    <v-card elevation="0" class="endpoint-card" hover>
      <v-card-text class="pa-6">
        <div class="endpoint-header">
          <v-chip
            class="method-chip"
            :class="`method-${endpoint.method.toLowerCase()}`"
            label
            small
          >
            {{ endpoint.method }}
          </v-chip>
        </div>

        <div class="endpoint-path">
          {{ endpoint.endpoint }}
        </div>

        <p class="endpoint-description">
          {{ endpoint.description }}
        </p>

        <v-divider class="my-4"></v-divider>

        <div class="url-section">
          <div class="url-chip" :class="{ copied: isCopied }">
            <span class="url-text">{{ endpoint.url }}</span>
            <v-icon size="small" class="copy-icon" @click="copyUrl">
              {{ isCopied ? "mdi-check" : "mdi-content-copy" }}
            </v-icon>
          </div>
        </div>

        <v-btn @click="openJsonModal" class="endpoint-link">
          Try it now
          <v-icon class="ml-2">mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </div>

  <!-- JSON Modal -->
  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">API Response</h3>
        <div class="modal-info">
          <span class="response-size">{{ formatSize(jsonData.length) }}</span>
          <v-icon class="close-btn" @click="closeModal">mdi-close</v-icon>
        </div>
      </div>

      <div class="modal-body">
        <pre class="json-code"><code>{{ formattedJson }}</code></pre>
      </div>

      <div class="modal-footer">
        <v-btn
          @click="copyJson"
          size="small"
          :color="jsonCopied ? 'success' : 'primary'"
          variant="outlined"
        >
          <v-icon start>{{
            jsonCopied ? "mdi-check" : "mdi-content-copy"
          }}</v-icon>
          {{ jsonCopied ? "Copied!" : "Copy JSON" }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  endpoint: {
    type: Object,
    required: true,
  },
  visible: {
    type: Boolean,
    default: false,
  },
});

const isCopied = ref(false);
const showModal = ref(false);
const jsonData = ref("");
const jsonCopied = ref(false);

const formattedJson = computed(() => {
  try {
    return JSON.stringify(JSON.parse(jsonData.value), null, 2);
  } catch {
    return jsonData.value;
  }
});

const formatSize = (bytes) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

const openJsonModal = async () => {
  try {
    const response = await fetch(props.endpoint.url);
    jsonData.value = await response.text();
    showModal.value = true;
    document.body.style.overflow = "hidden";
  } catch (error) {
    console.error("Error fetching data:", error);
    jsonData.value = JSON.stringify({ error: "Failed to fetch data" });
    showModal.value = true;
  }
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = "auto";
};

const copyUrl = () => {
  navigator.clipboard.writeText(props.endpoint.url);
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
};

const copyJson = () => {
  navigator.clipboard.writeText(formattedJson.value);
  jsonCopied.value = true;
  setTimeout(() => {
    jsonCopied.value = false;
  }, 2000);
};
</script>

<style scoped>
.endpoint-card-wrapper {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.endpoint-card-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

.endpoint-card {
  background: linear-gradient(135deg, var(--card-start), var(--card-end));
  border: 1px solid var(--card-border);
  border-radius: 16px;
  height: 100%;
  backdrop-filter: blur(10px);
}

:deep(.v-theme--dark) .endpoint-card {
  --card-start: rgba(59, 130, 246, 0.08);
  --card-end: rgba(139, 92, 246, 0.08);
  --card-border: rgba(139, 92, 246, 0.2);
}

:deep(.v-theme--light) .endpoint-card {
  --card-start: rgba(255, 255, 255, 0.9);
  --card-end: rgba(245, 245, 245, 0.8);
  --card-border: rgba(139, 92, 246, 0.2);
}

.endpoint-header {
  margin-bottom: 1rem;
}

.method-chip {
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}

.method-get {
  background: linear-gradient(135deg, #3b82f6, #60a5fa) !important;
  color: white !important;
}

.method-post {
  background: linear-gradient(135deg, #10b981, #34d399) !important;
  color: white !important;
}

.method-put {
  background: linear-gradient(135deg, #f59e0b, #fbbf24) !important;
  color: white !important;
}

.method-delete {
  background: linear-gradient(135deg, #ef4444, #f87171) !important;
  color: white !important;
}

.endpoint-path {
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.95rem;
  font-weight: 600;
  background: var(--path-bg);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  word-break: break-all;
  color: #3b82f6;
}

:deep(.v-theme--dark) .endpoint-path {
  --path-bg: rgba(0, 0, 0, 0.3);
  color: #60a5fa;
}

:deep(.v-theme--light) .endpoint-path {
  --path-bg: rgba(0, 0, 0, 0.05);
  color: #3b82f6;
}

.endpoint-description {
  font-size: 0.95rem;
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 0;
}

.url-section {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
}

.url-chip {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #3b82f6;
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.85rem;
  padding: 8px 12px;
  width: 100%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
}

.url-text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.copy-icon {
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .url-chip {
    gap: 8px;
  }
}

:deep(.v-theme--dark) .url-chip {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
  color: #60a5fa;
}

.url-chip:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.5);
}

:deep(.v-theme--dark) .url-chip:hover {
  background: rgba(59, 130, 246, 0.25);
  border-color: rgba(59, 130, 246, 0.6);
}

.url-chip.copied {
  background: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.4);
  color: #10b981;
}

:deep(.v-theme--dark) .url-chip.copied {
  background: rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.5);
  color: #34d399;
}

.copy-icon {
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 0.5rem;
}

.copy-icon:hover {
  transform: scale(1.2);
}

.endpoint-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .endpoint-link {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
}

@media (max-width: 480px) {
  .endpoint-link {
    font-size: 0.7rem;
    padding: 6px 10px;
  }
}

:deep(.v-theme--dark) .endpoint-link {
  color: #fff;
}

.endpoint-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
}

.endpoint-link:active {
  transform: translateY(0);
}

.ml-2 {
  margin-left: 0.5rem;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

/* ========== Modal Styles ========== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: var(--modal-bg);
  border: 1px solid var(--modal-border);
  border-radius: 16px;
  width: 70%;
  max-width: 1000px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.v-theme--dark .modal-content {
  --modal-bg: #000000;
  --modal-border: #ffffff;
  color: #ffffff;
}

.v-theme--light .modal-content {
  --modal-bg: #ffffff;
  --modal-border: #000000;
  color: #000000;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid var(--modal-border);
  background: var(--header-bg);
  border-radius: 16px 16px 0 0;
}

.v-theme--dark .modal-header {
  --header-bg: rgba(0, 0, 0, 0.3);
}

.v-theme--light .modal-header {
  --header-bg: #f5f5f5;
}

.modal-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modal-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.response-size {
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Fira Code", monospace;
  color: inherit;
}

.v-theme--dark .response-size {
  color: #ffffff !important;
  opacity: 0.85 !important;
}

.v-theme--light .response-size {
  color: #000000 !important;
  opacity: 0.8 !important;
}

.close-btn {
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1.5rem;
}

.v-theme--dark .close-btn {
  color: #ffffff !important;
  opacity: 0.8 !important;
}

.v-theme--light .close-btn {
  color: #000000 !important;
  opacity: 0.8 !important;
}

.close-btn:hover {
  opacity: 1;
  transform: scale(1.1);
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  background: var(--code-bg);
}

.v-theme--dark .modal-body {
  --code-bg: rgba(0, 0, 0, 0.4);
}

.v-theme--light .modal-body {
  --code-bg: #f9f9f9;
}

.json-code {
  margin: 0;
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  background: transparent;
  color: inherit;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 0;
}

.v-theme--dark .json-code {
  color: #ffffff !important;
}

.v-theme--light .json-code {
  color: #000000 !important;
}

.modal-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--modal-border);
  display: flex;
  justify-content: flex-end;
  background: var(--footer-bg);
  border-radius: 0 0 16px 16px;
}

.v-theme--dark .modal-footer {
  --footer-bg: rgba(0, 0, 0, 0.2);
}

.v-theme--light .modal-footer {
  --footer-bg: #f5f5f5;
}

/* Responsive */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    max-height: 90vh;
  }

  .modal-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .modal-info {
    width: 100%;
    justify-content: space-between;
  }

  .json-code {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .modal-content {
    width: 98%;
    border-radius: 12px;
  }

  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 16px;
  }

  .modal-title {
    font-size: 1.1rem;
  }

  .json-code {
    font-size: 0.75rem;
  }
}
</style>
