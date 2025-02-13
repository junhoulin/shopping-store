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
  app: {
    head: {
      title: "yushinshop - 各式服飾物品販售", // 設置網站的 title
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        {
          name: "description",
          content: "yushinshop 提供各式服飾物品販售，滿足您不同的需求。", // 描述文字
        },
        // 可以在這裡繼續添加其他的 meta 標籤
      ],
    },
  },
  modules: ["@pinia/nuxt", "@vee-validate/nuxt"],
  veeValidate: {
    // 修改 VeeValidate 元件的名稱
    componentNames: {
      Form: "VForm",
      Field: "VField",
      ErrorMessage: "VErrorMessage",
    },
  },
});
