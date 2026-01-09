<template>
  <div class="contact-page">
    <v-container max-width="700" class="contact-container">
      <!-- Header Section -->
      <div ref="headerRef" class="header-content" :class="{ visible: headerVisible }">
        <div class="text-center mb-6">
          <h1 class="contact-title mb-4">Get in Touch</h1>
          <p class="contact-subtitle">
            Have questions about our API? We'd love to hear from you.
          </p>
        </div>
      </div>

      <!-- Form Card -->
      <div ref="formCardRef" class="form-card-wrapper" :class="{ visible: formCardVisible }">
        <v-card elevation="0" class="contact-card pa-8">
          <form ref="formRef" @submit.prevent="submitForm">
            <v-row class="mb-4">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.name"
                  name="from_name"
                  :rules="nameRules"
                  label="Full Name"
                  required
                  variant="outlined"
                  prepend-inner-icon="mdi-account-outline"
                  class="input-field"
                  density="comfortable"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.email"
                  name="user_email"
                  :rules="emailRules"
                  label="Email Address"
                  type="email"
                  required
                  variant="outlined"
                  prepend-inner-icon="mdi-email-outline"
                  class="input-field"
                  density="comfortable"
                />
              </v-col>
            </v-row>

            <v-textarea
              v-model="form.message"
              name="message"
              :rules="messageRules"
              label="Your Message"
              variant="outlined"
              rows="6"
              prepend-inner-icon="mdi-message-text-outline"
              class="input-field mb-6"
              density="comfortable"
            />

            <!-- Privacy Notice -->
            <div class="privacy-notice mb-6">
              <p class="privacy-text">
                By clicking "Send Message", you agree that your name, email, and message will be used solely to respond to your inquiry. We do not store your personal data for any other purpose. Your information is protected and handled in accordance with data protection regulations.
              </p>
            </div>

            <div class="text-center">
              <v-btn
                type="submit"
                size="large"
                :loading="loading"
                class="btn-primary"
              >
                <v-icon start>mdi-send</v-icon>
                Send Message
              </v-btn>
            </div>
          </form>
        </v-card>
      </div>

      <!-- Success/Error Message -->
      <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="5000">
        {{ snackbarText }}
      </v-snackbar>
    </v-container>
  </div>
</template>

<style scoped>
/* ========== Page Background ========== */
.contact-page {
  background: var(--bg-contact);
  min-height: 100vh;
  padding: 80px 0 60px 0;
}

:deep(.v-theme--dark) .contact-page {
  --bg-contact: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
}

:deep(.v-theme--light) .contact-page {
  --bg-contact: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
}

/* ========== Container ========== */
.contact-container {
  min-height: auto;
}

/* ========== Header ========== */
.header-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.header-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-title {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.contact-subtitle {
  font-size: 1.125rem;
  opacity: 0.6;
  max-width: 500px;
  margin: 0 auto;
}

/* ========== Form Card ========== */
.form-card-wrapper {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 0.2s;
}

.form-card-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-card {
  background: linear-gradient(135deg, var(--card-start), var(--card-end));
  border: 1px solid var(--card-border);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

:deep(.v-theme--dark) .contact-card {
  --card-start: rgba(59, 130, 246, 0.08);
  --card-end: rgba(139, 92, 246, 0.08);
  --card-border: rgba(59, 130, 246, 0.2);
}

:deep(.v-theme--light) .contact-card {
  --card-start: rgba(255, 255, 255, 0.9);
  --card-end: rgba(245, 245, 245, 0.8);
  --card-border: rgba(59, 130, 246, 0.2);
}

/* ========== Form Fields ========== */
.input-field :deep(.v-field) {
  border-radius: 12px;
}

:deep(.v-theme--dark) .input-field {
  --field-border: rgba(59, 130, 246, 0.2);
}

:deep(.v-theme--light) .input-field {
  --field-border: rgba(59, 130, 246, 0.2);
}

/* ========== Privacy Notice ========== */
.privacy-notice {
  padding: 12px 16px;
  border-left: 3px solid #3b82f6;
  border-radius: 8px;
  background: rgba(59, 130, 246, 0.08);
}

:deep(.v-theme--dark) .privacy-notice {
  background: rgba(59, 130, 246, 0.1);
}

:deep(.v-theme--light) .privacy-notice {
  background: rgba(59, 130, 246, 0.08);
}

.privacy-text {
  font-size: 0.875rem;
  opacity: 0.75;
  margin: 0;
  line-height: 1.5;
}

/* ========== Button ========== */
.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
  color: white !important;
  border-radius: 8px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  transition: all 0.3s ease;
  padding: 12px 40px !important;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(59, 130, 246, 0.4) !important;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .contact-page {
    padding: 60px 0 40px 0;
  }

  .contact-card {
    padding: 24px !important;
  }

  .btn-primary {
    font-size: 0.9rem;
    padding: 10px 24px !important;
  }
}

@media (max-width: 480px) {
  .contact-title {
    font-size: clamp(1.75rem, 6vw, 2.25rem);
  }

  .contact-subtitle {
    font-size: 1rem;
  }

  .contact-card {
    padding: 20px !important;
  }

  .btn-primary {
    width: 100%;
    font-size: 0.85rem;
    padding: 8px 16px !important;
  }
}
</style>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const formRef = ref(null);
const headerRef = ref(null);
const formCardRef = ref(null);

const headerVisible = ref(false);
const formCardVisible = ref(false);

const form = ref({
  from_name: "",
  user_email: "",
  message: "",
});

const loading = ref(false);
const snackbar = ref(false);
const snackbarText = ref("");
const snackbarColor = ref("");

const nameRules = [
  (v) => !!v || "Name is required",
  (v) => v.length >= 2 || "Name must be at least 2 characters",
];

const emailRules = [
  (v) => !!v || "Email is required",
  (v) => /.+@.+\..+/.test(v) || "Email must be valid",
];

const messageRules = [
  (v) => !!v || "Message is required",
  (v) => v.length >= 10 || "Message must be at least 10 characters",
];

const submitForm = async () => {
  loading.value = true;

  try {
    emailjs.init(PUBLIC_KEY);

    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.value);

    snackbarText.value = "Message sent successfully!";
    snackbarColor.value = "success";
    snackbar.value = true;

    // Reset
    form.value = { from_name: "", user_email: "", message: "" };
  } catch (error) {
    snackbarText.value = "Failed to send message.";
    snackbarColor.value = "error";
    snackbar.value = true;

    console.error("EmailJS error:", error);
  } finally {
    loading.value = false;
  }
};

// Setup scroll animations
onMounted(() => {
  nextTick(() => {
    // Header animation
    if (headerRef.value) {
      setTimeout(() => {
        headerVisible.value = true;
      }, 100);
    }

    // Form card animation
    if (formCardRef.value) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            formCardVisible.value = true;
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(formCardRef.value);
    }
  });
});
</script>
