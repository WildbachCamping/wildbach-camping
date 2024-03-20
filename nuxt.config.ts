// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Wildbach Camping in der Eifel",
      meta: [
        {
          name: "description",
          content:
            " Wildbach Camping in Hellenthal am Nationalpark Eifel I Familienfreundliche und entspannte Atmosphäre I Naturbelassen am Bach mit Feuerstellen I Auszeit und Urlaub in der Natur",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "alternate",
          hreflang: "de",
          href: "https://www.wildbach-camping.de",
        },
      ],
    },
  },
  // sitemap: {
  //   hostname: "https://wildbach-camping.de",
  // },
  ssr: true,

  devtools: {
    // Enable devtools (default: true)
    enabled: false,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
  build: {
    transpile: ["fsevents"],
  },
  runtimeConfig: {
    public: {
      version: process.env.VERSION,
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    [
      "@weareheavy/nuxt-cookie-consent",
      { provider: "cookiebot", cbid: process.env.COOKIE_PROVIDER },
    ],
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix_except_default",
        locales: ["de", "nl"],
        defaultLocale: "de",
      },
    ],
    ["nuxt-gtag", { id: process.env.GOOGLE_ANALYTICS_ID }],
    "@vueuse/nuxt",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],

    // ...
  ],
});
