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
        {
          rel: "alternate",
          hreflang: "nl",
          href: "https://www.wildbach-camping.de/nl",
        },
      ],
    },
  },
  site: {
    name: "Wildbach Camping",
    description:
      "Wildbach Camping in Hellenthal am Nationalpark Eifel I Familienfreundliche und entspannte Atmosphäre I Naturbelassen am Bach mit Feuerstellen I Auszeit und Urlaub in der Natur",
    url: "https://www.wildbach-camping.de",
    trailingSlash: true,
  },
  ssr: true,

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
      { provider: "cookiebot", cbid: process.env.COOKIEBOT_ID, dev: true },
    ],
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix_except_default",
        locales: ["de", "nl"],
        defaultLocale: "de",
        vueI18n: "./i18n.config.ts", // if you are using custom path, default
      },
    ],
    [
      "nuxt-gtag",
      {
        id: process.env.GOOGLE_TAG_ID,
        initCommands: [
          // Setup up consent mode
          [
            "consent",
            "default",
            {
              ad_user_data: "denied",
              ad_personalization: "denied",
              ad_storage: "denied",
              analytics_storage: "denied",
              wait_for_update: 500,
            },
          ],
        ],
      },
    ],
    "@vueuse/nuxt",
    [
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Disallow: "/",
        Sitemap: "https://www.wildbach-camping.de/sitemap.xml",
      },
    ],
    "@nuxtjs/sitemap",
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],
  ],
});
