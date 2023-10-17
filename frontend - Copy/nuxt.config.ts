export default defineNuxtConfig({
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/css/main.css",
    "quill/dist/quill.snow.css",
    "quill/dist/quill.bubble.css",
    "quill/dist/quill.core.css",
  ],

  modules: ["@nuxtjs/strapi"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  strapi: {
    // url: "http://localhost:1337",
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },

  plugins: [
    { src: "~/plugins/fontawesome.js", ssr: false },
    {
      src: "~/plugins/vue-quill-editor",
      ssr: false,
      mode: "client",
    },
  ],
});
