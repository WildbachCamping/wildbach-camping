import VueGtag from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-44HBJGVPBG',
    },
    config: {
      params: {
        anonymize_ip: true,
      },
    },
    isEnabled: false,
  });
});
