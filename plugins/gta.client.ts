import VueGtag from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-5F0MWSF5C5',
    },
    config: {
      params: {
        anonymize_ip: true,
      },
    },
    isEnabled: false,
  });
});
