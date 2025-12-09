<template>
  <v-container max-width="600">
    <div class="text-center mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Contact Us</h1>
      <p class="text-body-1 text-medium-emphasis">
        Have questions about our API? We're here to help.
      </p>
    </div>

    <v-card variant="outlined" class="pa-6">
      <!-- DEBE SER UN FORM HTML REAL PARA EMAILJS -->
      <form ref="formRef" @submit.prevent="submitForm">
        <v-text-field
          v-model="form.name"
          name="from_name"
          :rules="nameRules"
          clearable
          label="Name"
          required
          variant="outlined"
          class="mb-4"
        />

        <v-text-field
          v-model="form.email"
          name="user_email"
          :rules="emailRules"
          clearable
          label="Email"
          type="email"
          required
          variant="outlined"
          class="mb-4"
        />

        <v-textarea
          v-model="form.message"
          name="message"
          :rules="messageRules"
          clearable
          label="Message"
          variant="outlined"
          rows="6"
          class="mb-4"
        />

        <v-btn
          type="submit"
          color="primary"
          size="large"
          :loading="loading"
          block
        >
          Send Message
        </v-btn>
      </form>
    </v-card>

    <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="5000">
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

console.log("SERVICE_ID:", SERVICE_ID);
console.log("TEMPLATE_ID:", TEMPLATE_ID);
console.log("PUBLIC_KEY:", PUBLIC_KEY);

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
