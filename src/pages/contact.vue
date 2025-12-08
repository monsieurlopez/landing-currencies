<template>
  <v-container max-width="600">
    <div class="text-center mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Contact Us</h1>
      <p class="text-body-1 text-medium-emphasis">
        Have questions about our API? We're here to help. Send us a message and
        we'll get back to you soon.
      </p>
    </div>

    <v-card variant="outlined" class="pa-6">
      <v-form ref="formRef" @submit.prevent="submitForm">
        <v-text-field
          v-model="form.name"
          :rules="nameRules"
          clearable=""
          label="Name"
          required
          variant="outlined"
          class="mb-4"
          validate-on="input"
        />

        <v-text-field
          v-model="form.email"
          :rules="emailRules"
          clearable
          label="Email"
          type="email"
          required
          variant="outlined"
          class="mb-4"
          validate-on="input"
        />

        <v-textarea
          v-model="form.message"
          :rules="messageRules"
          clearable=""
          label="Message"
          variant="outlined"
          rows="6"
          class="mb-4"
          validate-on="input"
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
      </v-form>
    </v-card>

    <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="5000">
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const formRef = ref(null);

const form = ref({
  name: "",
  email: "",
  message: "",
});

const loading = ref(false);
const snackbar = ref(false);
const snackbarText = ref("");
const snackbarColor = ref("");

const nameRules = [
  (v) => !!v || "Name is required",
  (v) => (v && v.length >= 2) || "Name must be at least 2 characters",
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
  const { valid } = await formRef.value.validate();

  if (!valid) return;

  loading.value = true;

  try {
    // Simulación de API
    await new Promise((resolve) => setTimeout(resolve, 2000));

    snackbarText.value = "Message sent successfully!";
    snackbarColor.value = "success";
    snackbar.value = true;

    console.log("Name:", form.value.name);
    console.log("Email:", form.value.email);
    console.log("Message:", form.value.message);

    form.value = { name: "", email: "", message: "" };
    formRef.value.resetValidation();
  } catch (error) {
    snackbarText.value = "Failed to send message. Please try again.";
    snackbarColor.value = "error";
    snackbar.value = true;
  } finally {
    loading.value = false;
  }
};
</script>
