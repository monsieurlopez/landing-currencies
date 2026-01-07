<template>
  <div
    ref="element"
    class="scroll-reveal"
    :class="[
      { visible: isVisible },
      `reveal-${animation}`,
      `delay-${delay}`
    ]"
    :style="revealStyles"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  animation: {
    type: String,
    default: 'fade-up',
    validator: (value) => ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'scale'].includes(value)
  },
  delay: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 600
  },
  threshold: {
    type: Number,
    default: 0.2
  }
})

const element = ref(null)
const isVisible = ref(false)

const revealStyles = {
  '--animation-duration': `${props.duration}ms`,
  '--animation-delay': `${props.delay}ms`
}

let observer = null

onMounted(() => {
  if (!element.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    {
      threshold: props.threshold,
      rootMargin: '0px 0px -100px 0px'
    }
  )

  observer.observe(element.value)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transition: all var(--animation-duration) cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--animation-delay);
}

.scroll-reveal.visible {
  opacity: 1;
}

/* Animation variants */
.reveal-fade-up {
  transform: translateY(40px);
}

.reveal-fade-up.visible {
  transform: translateY(0);
}

.reveal-fade-down {
  transform: translateY(-40px);
}

.reveal-fade-down.visible {
  transform: translateY(0);
}

.reveal-fade-left {
  transform: translateX(-40px);
}

.reveal-fade-left.visible {
  transform: translateX(0);
}

.reveal-fade-right {
  transform: translateX(40px);
}

.reveal-fade-right.visible {
  transform: translateX(0);
}

.reveal-scale {
  transform: scale(0.9);
}

.reveal-scale.visible {
  transform: scale(1);
}
</style>
