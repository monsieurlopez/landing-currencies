<template>
  <v-container max-width="700" class="contact-container">
    <div class="text-center mb-12">
      <h1 class="text-h3 font-weight-bold mb-4">Contact Us</h1>
      <p class="text-body-1 text-medium-emphasis">
        Have questions about our API? We're here to help.
      </p>
    </div>

    <v-card elevation="8" class="contact-card pa-8 rounded-xl">
      <form ref="formRef" @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.name"
              name="from_name"
              :rules="nameRules"
              label="Name"
              required
              variant="filled"
              prepend-inner-icon="mdi-account"
              class="mb-6"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.email"
              name="user_email"
              :rules="emailRules"
              label="Email"
              type="email"
              required
              variant="filled"
              prepend-inner-icon="mdi-email"
              class="mb-6"
            />
          </v-col>
        </v-row>

        <v-textarea
          v-model="form.message"
          name="message"
          :rules="messageRules"
          clearable
          label="Message"
          variant="filled"
          rows="5"
          prepend-inner-icon="mdi-message-text"
          class="mb-8"
        />

        <div class="text-center">
          <v-btn
            type="submit"
            color="primary"
            size="default"
            :loading="loading"
            class="px-12 rounded-pill"
            elevation="4"
          >
            <v-icon left>mdi-send</v-icon>
            Send Message
          </v-btn>
        </div>
      </form>
    </v-card>

    <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="5000">
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<style scoped>
.contact-container {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-card {
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(248, 250, 252, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Dark mode styles */
.v-theme--dark .contact-card {
  background: linear-gradient(
    145deg,
    rgba(33, 33, 33, 0.95) 0%,
    rgba(45, 45, 45, 0.95) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.v-text-field--filled .v-field {
  border-radius: 12px !important;
}

.v-textarea--filled .v-field {
  border-radius: 12px !important;
}
</style>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const formRef = ref(null);

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
</script>
