<template>
  <section class="faq-section py-20">
    <v-container max-width="1000">
      <div class="section-header">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">Everything you need to know about our API</p>
      </div>

      <v-expansion-panels class="faq-panels mt-12">
        <v-expansion-panel
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
        >
          <template #title>
            <div class="faq-question">
              <v-icon class="mr-3">{{ faq.icon }}</v-icon>
              <span class="question-text">{{ faq.question }}</span>
            </div>
          </template>
          <template #text>
            <div class="faq-answer">
              <p v-for="(line, i) in faq.answer" :key="i">
                {{ line }}
              </p>
              <div v-if="faq.code" class="code-example">
                <pre><code>{{ faq.code }}</code></pre>
              </div>
            </div>
          </template>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </section>
</template>

<script setup>
const faqs = [
  {
    icon: 'mdi-lock-open',
    question: 'Do I need authentication to use the API?',
    answer: [
      'No! Our API is completely free and open to everyone. You don\'t need to register or provide any credentials. Simply make HTTP requests to our endpoints and you\'ll get instant responses with real-time exchange rates.'
    ]
  },
  {
    icon: 'mdi-lightning-bolt',
    question: 'What is the response time and uptime guarantee?',
    answer: [
      'Our API is designed for high performance and reliability. We guarantee:',
      '• Average response time: < 1700ms',
      '• Uptime: 99.9% SLA',
      '• Distributed infrastructure to ensure fast global access'
    ]
  },
  {
    icon: 'mdi-database',
    question: 'Where does the data come from?',
    answer: [
      'We source all exchange rate data directly from the European Central Bank (ECB). The data is updated daily and represents official rates used across the Eurozone and international markets.'
    ]
  },
  /*
  {
    icon: 'mdi-calendar-range',
    question: 'How far back can I access historical rates?',
    answer: [
      'You can access historical exchange rates going back several years. Our historical data endpoint provides rates for any specific date you need, making it perfect for financial analysis, backtesting, and reporting.',
      'This is ideal for applications that need to analyze trends or reconcile transactions from past dates.'
    ]
  },
  */
  {
    icon: 'mdi-chart-line',
    question: 'Can I convert between non-EUR currencies?',
    answer: [
      'Yes! Our `/api/all-rates` endpoint allows you to convert between any two supported currencies. While our primary data is EUR-based, the conversion engine handles cross-rate calculations seamlessly.',
      'You can request conversion from USD to GBP, JPY to CHF, or any other supported currency combination.'
    ],
    code: 'GET /api/all-rates?currency=GBP'
  },
  {
    icon: 'mdi-server-network',
    question: 'Is there a rate limit on API requests?',
    answer: [
      'We believe in generous access for developers. Our free tier supports reasonable usage without strict rate limits. If you have extremely high-volume requirements, please contact us to discuss your specific needs.',
      'For most applications, you\'ll never hit any limitations.'
    ]
  },
  {
    icon: 'mdi-file-code',
    question: 'What response formats are supported?',
    answer: [
      'All responses are returned in JSON format, which is easy to parse in virtually every programming language. The consistent response structure makes it simple to integrate the API into your applications.'
    ],
    code: '{\n  "base": "EUR",\n  "date": "2024-01-07",\n  "rates": {\n    "USD": 1.1234,\n    "GBP": 0.8765,\n    "JPY": 156.789\n  }\n}'
  },
  {
    icon: 'mdi-connection',
    question: 'Can I use this API in commercial projects?',
    answer: [
      'Absolutely! The API is completely free for both personal and commercial use. No attribution required, though we always appreciate when users mention us. Use it to build applications, integrate into services, or power your business logic.'
    ]
  }
]
</script>

<style scoped>
.faq-section {
  position: relative;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(59, 130, 246, 0.03) 100%
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
  background: linear-gradient(
    135deg,
    #3b82f6 0%,
    #8b5cf6 100%
  );
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

.faq-panels {
  background: transparent !important;
  border: none !important;
}

.faq-item {
  background: rgba(59, 130, 246, 0.05) !important;
  border: 1px solid rgba(59, 130, 246, 0.15) !important;
  border-radius: 12px !important;
  margin-bottom: 12px !important;
  transition: all 0.3s ease;
}

:deep(.v-theme--dark) .faq-item {
  background: rgba(59, 130, 246, 0.08) !important;
}

:deep(.v-theme--light) .faq-item {
  background: rgba(59, 130, 246, 0.03) !important;
}

.faq-item:hover {
  background: rgba(59, 130, 246, 0.1) !important;
  border-color: rgba(59, 130, 246, 0.4) !important;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
  transform: translateY(-2px);
}

:deep(.v-theme--dark) .faq-item:hover {
  background: rgba(59, 130, 246, 0.12) !important;
}

.faq-question {
  display: flex;
  align-items: center;
  font-weight: 700;
  color: inherit;
  padding: 8px 0;
  gap: 12px;
}

.faq-question :deep(.v-icon) {
  color: #3b82f6 !important;
  transition: all 0.3s ease;
}

:deep(.v-theme--dark) .faq-question :deep(.v-icon) {
  color: #60a5fa !important;
}

.faq-item:hover .faq-question :deep(.v-icon) {
  color: #8b5cf6 !important;
  transform: scale(1.1);
}

.question-text {
  font-size: 1.05rem;
  letter-spacing: 0.3px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq-answer {
  padding: 20px 16px;
  line-height: 1.8;
  opacity: 0.85;
}

.faq-answer p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

.faq-answer p:last-child {
  margin-bottom: 0;
}

.code-example {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  overflow-x: auto;
}

:deep(.v-theme--dark) .code-example {
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.25);
}

:deep(.v-theme--light) .code-example {
  background: rgba(59, 130, 246, 0.05);
  border-color: rgba(59, 130, 246, 0.15);
}

.code-example pre {
  margin: 0;
  font-family: 'Fira Code', 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
}

:deep(.v-theme--dark) .code-example pre {
  color: #60a5fa;
}

:deep(.v-theme--light) .code-example pre {
  color: #3b82f6;
}

:deep(.v-expansion-panel__header) {
  padding: 16px 20px !important;
  transition: all 0.3s ease;
}

:deep(.v-expansion-panel__header:hover) {
  background: rgba(59, 130, 246, 0.05);
}

:deep(.v-expansion-panel__header.v-expansion-panel-header--active) {
  background: rgba(59, 130, 246, 0.08);
}

:deep(.v-expansion-panel__content) {
  padding: 0 20px 20px 20px !important;
}

:deep(.v-theme--dark) .faq-item {
  border-color: rgba(59, 130, 246, 0.15) !important;
}

:deep(.v-theme--dark) .faq-item:hover {
  border-color: rgba(59, 130, 246, 0.3) !important;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }

  :deep(.v-expansion-panel__header) {
    padding: 12px 16px !important;
  }

  .question-text {
    font-size: 1rem;
  }
}
</style>
