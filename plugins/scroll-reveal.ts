// Server-side stub for v-reveal directive (no-op for SSR)
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {}
    },
  })
})
