import { Icon } from '@iconify/vue'

export default defineNuxtPlugin(nuxtApp => {
  const app = nuxtApp.vueApp
  app.component('Icon', Icon)
})
