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

      <v-row justify="center" class="mb-12">
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

      <!-- FAQ Section -->
      <v-divider class="my-8"></v-divider>

      <div class="text-center mb-10">
        <h2 class="text-h4 font-weight-bold mb-4">Frequently Asked Questions</h2>
        <p class="text-body-1 text-medium-emphasis">
          Find answers to common questions about Euro Rates API
        </p>
      </div>

      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="10">
          <v-expansion-panels variant="popout" class="faq-accordion">
            <!-- FAQ 1 -->
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-icon class="mr-3">mdi-help-circle</v-icon>
                What is Euro Rates API?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="text-body-2">
                  Euro Rates API is a free, REST-based API service that provides real-time
                  currency exchange rates for the Euro (EUR) and 30+ other major world currencies.
                  All data is sourced directly from the European Central Bank (BCE), ensuring
                  accuracy and reliability. Our API is designed to be simple, fast, and easy to
                  integrate into any application, whether you're building a currency converter,
                  financial dashboard, or e-commerce platform.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- FAQ 2 -->
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-icon class="mr-3">mdi-cash-multiple</v-icon>
                Is Euro Rates API really free? Are there any hidden costs?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="text-body-2">
                  Yes, Euro Rates API is completely free and always will be. There are no hidden
                  costs, no subscription fees, and no API key requirements. We offer a fair rate limit
                  of 30 requests per minute, which is more than sufficient for the vast majority of
                  applications, including production-level integrations. If you have a specific use case
                  that requires a higher rate limit, we'd love to hear about it! Simply
                  <router-link to="/contact" class="primary--text font-weight-bold">
                    contact us
                  </router-link>
                  through our contact form to discuss your needs, and we'll work with you to find a
                  solution. We believe that reliable exchange rate data should be accessible to everyone.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- FAQ 3 -->
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-icon class="mr-3">mdi-clock-outline</v-icon>
                How often are the exchange rates updated?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="text-body-2">
                  Exchange rates are updated daily by the European Central Bank around 16:00 CET
                  (Central European Time). Our API reflects these official updates immediately after
                  publication. The rates you receive through our API are the official, authoritative
                  rates used by central banks and financial institutions across Europe. For historical
                  data, we maintain a complete record of daily rates, allowing you to access rates
                  from any previous date for analysis and backtesting purposes.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- FAQ 4 -->
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-icon class="mr-3">mdi-server-security</v-icon>
                How accurate and reliable is the data?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="text-body-2">
                  Our data comes directly from the European Central Bank, which is the most
                  authoritative source for Euro exchange rates. The rates are official, certified,
                  and used by financial institutions, governments, and businesses worldwide. We don't
                  modify, estimate, or interpolate the data—we provide exactly what the ECB publishes.
                  For critical applications, we recommend using our API in conjunction with your own
                  validation procedures. The reliability of our service is backed by uptime monitoring
                  and continuous infrastructure optimization.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- FAQ 5 -->
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-icon class="mr-3">mdi-rocket-launch</v-icon>
                How do I get started with Euro Rates API?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="text-body-2">
                  Getting started is incredibly simple. Visit our
                  <router-link to="/documentation" class="primary--text font-weight-bold">
                    Documentation page
                  </router-link>
                  where you'll find interactive Swagger UI documentation. You can test all endpoints
                  directly without any setup. Each endpoint includes clear descriptions of parameters,
                  response formats, and example requests. For integration into your project, simply
                  make HTTP requests to our endpoints using your preferred programming language or
                  framework. If you have any questions during integration, feel free to use our
                  <router-link to="/contact" class="primary--text font-weight-bold">
                    Contact form
                  </router-link>
                  to reach out for support.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
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

/* FAQ Accordion styling */
.faq-accordion :deep(.v-expansion-panel) {
  border-radius: 12px !important;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.faq-accordion :deep(.v-expansion-panel-title) {
  font-weight: 600;
  font-size: 16px;
  padding: 16px !important;
}

.faq-accordion :deep(.v-expansion-panel-text__wrapper) {
  padding: 20px 16px !important;
}

.faq-accordion :deep(.v-expansion-panel:hover) {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

/* Dark mode support for FAQ */
.v-theme--dark .faq-accordion :deep(.v-expansion-panel:hover) {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1) !important;
}
</style>
