import { onMounted, onUnmounted, ref } from 'vue'

export function useIntersectionObserver(element, options = {}) {
  const isVisible = ref(false)

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    ...options,
  }

  let observer = null

  onMounted(() => {
    if (!element.value) return

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    }, defaultOptions)

    observer.observe(element.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { isVisible }
}
