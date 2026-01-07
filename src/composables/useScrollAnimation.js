import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation(element, options = {}) {
  const isInView = ref(false)

  const defaultOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
    once: true,
    ...options,
  }

  let observer = null

  onMounted(() => {
    if (!element.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isInView.value = true
          if (defaultOptions.once) {
            observer.unobserve(entry.target)
          }
        } else if (!defaultOptions.once) {
          isInView.value = false
        }
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin,
      }
    )

    observer.observe(element.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { isInView }
}
