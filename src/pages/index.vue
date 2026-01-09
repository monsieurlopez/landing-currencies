<template>
  <div class="modern-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container max-width="1200">
        <v-row align="center">
          <v-col cols="12" md="6" class="text-start">
            <div
              ref="heroTitleRef"
              class="hero-content"
              :class="{ visible: heroVisible }"
            >
              <h1 class="hero-title mb-6">Real-time Currency Exchange Rates</h1>
              <p class="hero-subtitle mb-8">
                A free, powerful, and reliable REST API for accessing official
                European Central Bank exchange rates. No authentication
                required.
              </p>
              <div class="d-flex gap-3 flex-wrap hero-buttons">
                <v-btn size="large" to="/documentation" class="btn-primary">
                  <v-icon start>mdi-book-open-page-variant</v-icon>
                  Get Started
                </v-btn>
                <v-btn
                  size="large"
                  to="/contact"
                  variant="outlined"
                  class="btn-secondary"
                >
                  <v-icon start>mdi-email-outline</v-icon>
                  Contact
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="text-center">
            <div
              ref="heroImageRef"
              class="hero-image"
              :class="{ visible: heroImageVisible }"
            >
              <v-card elevation="0" class="gradient-card">
                <div class="code-block">
                  <pre><code>// Simple API call
const response = await fetch(
  'https://api.euroratesapi.dev/api/all-currencies'
);
const rates = await response.json();

console.log(rates.rates); ✓</code></pre>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Features Section -->
    <section class="features-section py-12">
      <v-container max-width="1200">
        <div class="section-header">
          <h2 class="section-title">Why Choose Euro Rates API?</h2>
          <p class="section-subtitle">
            Everything you need for currency conversion
          </p>
        </div>

        <v-row class="mt-12">
          <v-col
            v-for="(feature, i) in features"
            :key="i"
            cols="12"
            sm="6"
            md="3"
          >
            <FeatureCard
              :ref="(el) => (featureRefs[i] = el)"
              :feature="feature"
              :index="i"
              :visible="featuresVisible[i]"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- API Endpoints Preview -->
    <section class="endpoints-section py-12">
      <v-container max-width="1200">
        <div class="section-header">
          <h2 class="section-title">Powerful Endpoints</h2>
          <p class="section-subtitle">
            Explore our comprehensive API endpoints
          </p>
        </div>

        <v-row class="mt-12 gap-4">
          <v-col v-for="(endpoint, i) in endpoints" :key="i" cols="12" md="5.8">
            <EndpointCard
              :ref="(el) => (endpointRefs[i] = el)"
              :endpoint="endpoint"
              :visible="endpointsVisible[i]"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py-12">
      <v-container max-width="1200">
        <v-row class="text-center">
          <v-col v-for="(stat, i) in stats" :key="i" cols="12" sm="6" md="3">
            <div
              ref="statRefs"
              class="stat-item"
              :class="{ visible: statsVisible[i] }"
              :style="{ transitionDelay: `${i * 100}ms` }"
            >
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ Section -->
    <FAQSection />

    <!-- CTA Section -->
    <section class="cta-section py-10">
      <v-container max-width="1000">
        <div ref="ctaRef" class="cta-card" :class="{ visible: ctaVisible }">
          <h2 class="text-h4 mb-4 font-weight-bold">Ready to get started?</h2>
          <p class="text-h6 mb-8 text-medium-emphasis">
            Integrate our API in minutes. No credit card required.
          </p>
          <v-btn :size="mdAndUp ? 'x-large' : 'default'" to="/documentation" class="btn-primary">
            View Documentation
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { useTheme, useDisplay } from "vuetify";
import { useScrollAnimation } from "@/composables/useScrollAnimation";
import FeatureCard from "@/components/home/FeatureCard.vue";
import EndpointCard from "@/components/home/EndpointCard.vue";
import FAQSection from "@/components/home/FAQSection.vue";

const theme = useTheme();
const { mdAndUp } = useDisplay();
const isDark = computed(() => theme.global.current.value.dark);

// References
const heroTitleRef = ref(null);
const heroImageRef = ref(null);
const ctaRef = ref(null);
const featureRefs = ref([]);
const endpointRefs = ref([]);
const statRefs = ref([]);

// Visibility states
const heroVisible = ref(false);
const heroImageVisible = ref(false);
const ctaVisible = ref(false);
const featuresVisible = ref([false, false, false, false]);
const endpointsVisible = ref([false, false, false, false, false, false]);
const statsVisible = ref([false, false, false, false]);

// Features data
const features = [
  {
    icon: "mdi-bank",
    title: "Official BCE Data",
    description:
      "Real-time exchange rates directly from the European Central Bank",
  },
  {
    icon: "mdi-currency-eur",
    title: "30+ Currencies",
    description: "Comprehensive coverage of the world's major currencies",
  },
  {
    icon: "mdi-gift-outline",
    title: "Forever Free",
    description: "No costs, no subscriptions, no hidden fees",
  },
  {
    icon: "mdi-history",
    title: "Historical Data",
    description: "Access to historical rates for analysis and backtesting",
  },
];

// Endpoints data
const endpoints = [
  {
    method: "GET",
    endpoint: "/api/all-currencies",
    description: "List all available currencies",
    link: "https://api.euroratesapi.dev/api/all-currencies",
    url: "https://api.euroratesapi.dev/api/all-currencies",
  },
  {
    method: "GET",
    endpoint: "/api/rates",
    description: "Get exchange rates from EUR to one or more currencies",
    url: "https://api.euroratesapi.dev/api/rates?from=EUR&to=HKD,USD,GBP",
  },
  {
    method: "GET",
    endpoint: "/api/history",
    description: "Get historical exchange rates from the ECB",
    url: "https://api.euroratesapi.dev/api/history?from=EUR&to=USD&start=2024-01-01&end=2024-06-01&frequency=D",
  },
  {
    method: "GET",
    endpoint: "/api/all-rates",
    description: "Get all currency cross rates based on a base currency",
    url: "https://api.euroratesapi.dev/api/all-rates?currency=GBP",
  },
];

// Stats data
const stats = [
  { number: "30+", label: "Currencies" },
  { number: "4", label: "Endpoints" },
  { number: "99.9%", label: "Uptime" },
  { number: "15K+", label: "Requests/Month" },
];

// Setup scroll animations
onMounted(() => {
  nextTick(() => {
    // Hero animation
    if (heroTitleRef.value) {
      setTimeout(() => {
        heroVisible.value = true;
      }, 100);
    }
    if (heroImageRef.value) {
      setTimeout(() => {
        heroImageVisible.value = true;
      }, 300);
    }

    // Features animation
    featureRefs.value.forEach((ref, i) => {
      if (ref?.$el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                featuresVisible.value[i] = true;
              }, i * 100);
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.1 },
        );
        observer.observe(ref.$el);
      }
    });

    // Endpoints animation
    endpointRefs.value.forEach((ref, i) => {
      if (ref?.$el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                endpointsVisible.value[i] = true;
              }, i * 100);
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.1 },
        );
        observer.observe(ref.$el);
      }
    });

    // Stats animation
    statRefs.value.forEach((el, i) => {
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                statsVisible.value[i] = true;
              }, i * 100);
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.2 },
        );
        observer.observe(el);
      }
    });

    // CTA animation
    if (ctaRef.value) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ctaVisible.value = true;
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(ctaRef.value);
    }
  });
});
</script>

<style scoped>
.modern-home {
  background: var(--bg-home);
}

:deep(.v-theme--dark) .modern-home {
  --bg-home: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
}

:deep(.v-theme--light) .modern-home {
  --bg-home: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
}

/* ========== Hero Section ========== */
.hero-section {
  min-height: auto;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 90px 0;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 20% 50%,
    rgba(59, 130, 246, 0.1) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.hero-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-size: clamp(2.25rem, 8vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: var(--subtitle-color);
  opacity: 0.8;
}

:deep(.v-theme--dark) .hero-subtitle {
  --subtitle-color: #e5e7eb;
}

:deep(.v-theme--light) .hero-subtitle {
  --subtitle-color: #4b5563;
}

.hero-image {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 0.2s;
  z-index: 1;
}

.hero-image.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.gradient-card {
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(139, 92, 246, 0.1) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 24px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.v-theme--dark) .gradient-card {
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.08) 0%,
    rgba(139, 92, 246, 0.08) 100%
  );
  border-color: rgba(59, 130, 246, 0.15);
}

.code-block {
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  background: var(--code-bg);
  padding: 20px;
}

:deep(.v-theme--dark) .code-block {
  --code-bg: rgba(0, 0, 0, 0.3);
}

:deep(.v-theme--light) .code-block {
  --code-bg: rgba(0, 0, 0, 0.05);
}

.code-block pre {
  margin: 0;
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #3b82f6;
}

:deep(.v-theme--dark) .code-block pre {
  color: #60a5fa;
}

/* ========== Buttons ========== */
.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
  color: white !important;
  border-radius: 8px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(59, 130, 246, 0.4) !important;
}

.btn-secondary {
  border-radius: 8px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  transition: all 0.3s ease;
}

:deep(.v-theme--dark) .btn-secondary {
  border-color: rgba(96, 165, 250, 0.3);
  color: #60a5fa;
}

:deep(.v-theme--light) .btn-secondary {
  border-color: rgba(59, 130, 246, 0.3);
  color: #3b82f6;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2) !important;
}

:deep(.v-theme--dark) .btn-secondary:hover {
  box-shadow: 0 8px 16px rgba(96, 165, 250, 0.15) !important;
}

/* ========== Features Section ========== */
.features-section {
  position: relative;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(59, 130, 246, 0.05) 100%
  );
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.125rem;
  opacity: 0.6;
  max-width: 500px;
  margin: 0 auto;
}

/* ========== Endpoints Section ========== */
.endpoints-section {
  background: linear-gradient(
    180deg,
    rgba(139, 92, 246, 0.05) 0%,
    transparent 100%
  );
}

/* ========== Stats Section ========== */
.stats-section {
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.05) 0%,
    rgba(139, 92, 246, 0.05) 100%
  );
  border-radius: 16px;
}

.stat-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.stat-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-number {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.6;
  margin-top: 0.5rem;
}

/* ========== CTA Section ========== */
.cta-section {
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(139, 92, 246, 0.1) 100%
  );
}

.cta-card {
  background: linear-gradient(135deg, var(--cta-bg-start), var(--cta-bg-end));
  border: 1px solid var(--cta-border);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  backdrop-filter: blur(10px);
}

:deep(.v-theme--dark) .cta-card {
  --cta-bg-start: rgba(59, 130, 246, 0.08);
  --cta-bg-end: rgba(139, 92, 246, 0.08);
  --cta-border: rgba(59, 130, 246, 0.15);
}

:deep(.v-theme--light) .cta-card {
  --cta-bg-start: rgba(59, 130, 246, 0.1);
  --cta-bg-end: rgba(139, 92, 246, 0.1);
  --cta-border: rgba(59, 130, 246, 0.2);
}

.cta-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.cta-card h2 {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .hero-section {
    padding: 45px 0;
  }

  .hero-title {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .hero-subtitle {
    text-align: center;
    margin-bottom: 2rem !important;
  }

  .hero-content {
    text-align: center;
  }

  .hero-buttons :deep(.v-btn) {
    font-size: 0.85rem;
  }

  .d-flex {
    justify-content: center;
  }

  .hero-image {
    margin-top: 2rem;
  }

  .gradient-card {
    min-height: 250px;
    padding: 20px;
  }

  .code-block {
    padding: 16px;
  }

  .code-block pre {
    font-size: 0.75rem;
    line-height: 1.5;
  }

  .cta-card {
    padding: 40px 24px;
  }

  .min-h-screen {
    min-height: auto;
    padding: 40px 0;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 35px 0;
  }

  .hero-title {
    font-size: clamp(2.25rem, 8vw, 3.5rem) !important;
  }

  .hero-subtitle {
    font-size: clamp(0.875rem, 1.5vw, 1rem) !important;
  }

  .hero-buttons :deep(.v-btn) {
    font-size: 0.75rem;
    padding: 6px 12px !important;
  }

  .gradient-card {
    min-height: 200px;
    padding: 16px;
  }

  .code-block {
    padding: 12px;
  }

  .code-block pre {
    font-size: 0.7rem;
    line-height: 1.4;
  }
}

/* ========== Utilities ========== */
.min-h-screen {
  min-height: auto;
}

.gap-3 {
  gap: 1rem;
}

.gap-4 {
  gap: 1.5rem;
}

.py-20 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.py-16 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.py-12 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.py-10 {
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}

@media (max-width: 768px) {
  .py-20 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .py-16 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .py-12 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .py-10 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
}

@media (max-width: 480px) {
  .py-20 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .py-16 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .py-12 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .py-10 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.text-start {
  text-align: start;
}

.text-center {
  text-align: center;
}
</style>
