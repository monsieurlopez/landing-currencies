import { useHead } from '@unhead/vue'

export function useSeo(title, description, ogImage = null) {
  useHead({
    title: `${title} - Euro Rates`,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:title',
        content: `${title} - Euro Rates`
      },
      {
        property: 'og:description',
        content: description
      },
      ...(ogImage ? [{
        property: 'og:image',
        content: ogImage
      }] : []),
      {
        name: 'twitter:title',
        content: `${title} - Euro Rates`
      },
      {
        name: 'twitter:description',
        content: description
      }
    ]
  })
}
