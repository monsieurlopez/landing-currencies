<template>
  <div class="feature-card-wrapper" :class="{ visible }">
    <v-card
      elevation="0"
      class="feature-card"
    >
      <v-card-text class="pa-6">
        <div class="feature-icon">
          <v-icon size="48">{{ feature.icon }}</v-icon>
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
defineProps({
  feature: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  },
  visible: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.feature-card-wrapper {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.feature-card-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

.feature-card {
  background: linear-gradient(
    135deg,
    var(--card-start),
    var(--card-end)
  );
  border: 1px solid var(--card-border);
  border-radius: 16px;
  height: 100%;
  backdrop-filter: blur(10px);
}

:deep(.v-theme--dark) .feature-card {
  --card-start: rgba(59, 130, 246, 0.08);
  --card-end: rgba(139, 92, 246, 0.08);
  --card-border: rgba(59, 130, 246, 0.2);
}

:deep(.v-theme--light) .feature-card {
  --card-start: rgba(255, 255, 255, 0.9);
  --card-end: rgba(245, 245, 245, 0.8);
  --card-border: rgba(59, 130, 246, 0.2);
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #3b82f6;
}

:deep(.v-theme--dark) .feature-icon {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15));
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: inherit;
}

.feature-description {
  font-size: 0.95rem;
  opacity: 0.7;
  line-height: 1.6;
  margin: 0;
}
</style>
