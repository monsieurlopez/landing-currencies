<template>
  <section
    ref="sectionRef"
    class="parallax-section"
    :style="parallaxStyle"
  >
    <div class="parallax-content">
      <slot></slot>
    </div>
    <div v-if="backgroundImage" class="parallax-bg">
      <img :src="backgroundImage" :alt="backgroundAlt" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  backgroundImage: String,
  backgroundAlt: {
    type: String,
    default: 'Background'
  },
  parallaxStrength: {
    type: Number,
    default: 0.5
  }
})

const sectionRef = ref(null)
const scrollY = ref(0)

const parallaxStyle = computed(() => {
  if (!props.backgroundImage) return {}

  return {
    '--parallax-offset': `${scrollY.value * props.parallaxStrength}px`
  }
})

const handleScroll = () => {
  if (!sectionRef.value) return

  const rect = sectionRef.value.getBoundingClientRect()
  const sectionTop = rect.top
  const windowHeight = window.innerHeight

  if (sectionTop < windowHeight && sectionTop + rect.height > 0) {
    scrollY.value = Math.abs(sectionTop)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.parallax-section {
  position: relative;
  overflow: hidden;
  min-height: 400px;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  transform: translateY(var(--parallax-offset, 0));
}

.parallax-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.parallax-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}
</style>
