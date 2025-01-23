export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "~/assets/styles/all.scss",
    "animate.css",
    "sweetalert2/dist/sweetalert2.min.css",
  ],

  plugins: ["~/plugins/iconify.js", "~/plugins/loading.client.js"],
  components: {
    dirs: ["~/components"],
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
});
