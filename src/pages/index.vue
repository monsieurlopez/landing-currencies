<template>
  <v-container class="fill-height" max-width="900">
    <div class="text-center">
      <h1 class="text-h3 font-weight-bold mb-10 d-flex w-lg-75 w-50 mx-auto">
        <v-img
          src="../assets/logo_eurorates.svg"
          width="100px"
          alt="Logo Euro Rates API"
          aria-label="Logo Euro Rates API"
          :style="{ filter: isDark ? 'invert(1)' : 'none' }"
        ></v-img>
      </h1>

      <!-- Key Highlights Section -->
      <v-card
        variant="outlined"
        class="pa-8 mb-12 highlights-card"
        elevation="1"
      >
        <v-row justify="center">
          <v-col cols="12" sm="6" md="3" class="text-center">
            <v-icon size="56" class="mb-3 primary--text">mdi-bank</v-icon>
            <div class="text-h6 font-weight-bold mb-2">Official BCE Data</div>
            <p class="text-body-2 text-medium-emphasis">
              Real-time exchange rates from the European Central Bank
            </p>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="text-center">
            <v-icon size="56" class="mb-3 secondary--text"
              >mdi-currency-eur</v-icon
            >
            <div class="text-h6 font-weight-bold mb-2">30+ Currencies</div>
            <p class="text-body-2 text-medium-emphasis">
              Comprehensive coverage of official world currencies
            </p>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="text-center">
            <v-icon size="56" class="mb-3 secondary--text"
              >mdi-gift-outline</v-icon
            >
            <div class="text-h6 font-weight-bold mb-2">Free API</div>
            <p class="text-body-2 text-medium-emphasis">
              No costs, unlimited access to exchange rate data
            </p>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="text-center">
            <v-icon size="56" class="mb-3 warning--text">mdi-history</v-icon>
            <div class="text-h6 font-weight-bold mb-2">Historical Data</div>
            <p class="text-body-2 text-medium-emphasis">
              Access to historical exchange rates for analysis
            </p>
          </v-col>
        </v-row>
      </v-card>

      <v-divider class="my-8"></v-divider>

      <div class="text-center mb-12">
        <p class="text-body-1 text-medium-emphasis mb-4">
          Discover our powerful API endpoints designed to streamline your
          development process. Access comprehensive documentation and get in
          touch for support.
        </p>
      </div>

      <v-row justify="center" class="mb-2">
        <v-col cols="10" md="4">
          <v-card
            class="pa-6 modern-card"
            elevation="4"
            height="250"
            hover
            :to="'/documentation'"
          >
            <v-card-title class="text-center">
              <v-icon size="48" class="mb-2 primary--text"
                >mdi-book-open-page-variant</v-icon
              >
              <div class="text-h6 font-weight-bold">Documentation</div>
            </v-card-title>
            <v-card-text class="text-center text-body-1">
              Explore our API endpoints and learn how to integrate them into
              your projects.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="10" md="4">
          <v-card
            class="pa-6 modern-card"
            elevation="4"
            height="250"
            hover
            :to="'/contact'"
          >
            <v-card-title class="text-center">
              <v-icon size="48" class="mb-2 secondary--text"
                >mdi-email-outline</v-icon
              >
              <div class="text-h6 font-weight-bold">Contact Us</div>
            </v-card-title>
            <v-card-text class="text-center text-body-1">
              Have questions? Reach out to our support team for assistance.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify";

const router = useRouter();
const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
</script>

<style scoped>
.modern-card {
  transition: all 0.3s ease;
  border-radius: 12px;
}

.modern-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

/* Highlights card styling */
.highlights-card {
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
}
</style>
