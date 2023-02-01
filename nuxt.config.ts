// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.weglot.com/weglot.min.js',
          type: 'text/javascript',
          async: true,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        {
          rel: 'alternate',
          hreflang: 'de',
          href: 'https://www.wildbach-camping.de',
        },
        {
          rel: 'alternate',
          hreflang: 'nl',
          href: 'https://nl.wildbach-camping.de',
        },
        {
          rel: 'alternate',
          hreflang: 'en',
          href: 'https://en.wildbach-camping.de',
        },
      ],
    },
  },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],
    // ...
  ],
});
