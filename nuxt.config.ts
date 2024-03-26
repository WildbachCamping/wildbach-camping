// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ["/", "/nl", "/sitemap_index.xml", "/nl-sitemap.xml"],
  //     // ignore: ['/tak', '/konfiguration', '/checkout'],
  //   },
  // },
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
          href: "https://wildbach-camping.de",
        },
        {
          rel: "alternate",
          hreflang: "nl",
          href: "https://wildbach-camping.de/nl",
        },
      ],
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://wildbach-camping.de",
    trailingSlash: true,
  },
  sitemap: {
    // sources: ["/api/__sitemap__/urls"],
    urls: async () => {
      const response = await fetch(
        `https://api.storyblok.com/v2/cdn/links?token=${process.env.STORYBLOK_ACCESS_TOKEN}&version=published`
      );
      const { links } = await response.json();

      const linksArray = Object.values(links).map((link) => link);
      return linksArray.map((link) => ({
        loc: link?.real_path,
        lastmod: new Date(),
        _i18nTransform: true,
      }));
    },
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
        rules: {
          UserAgent: "*",
          Disallow: "/",
          Sitemap: "https://www.wildbach-camping.de/sitemap.xml",
        },
      },
    ],
    "@nuxtjs/sitemap",
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],
  ],
});
