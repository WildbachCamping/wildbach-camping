import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide(
    'aos',
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
    })
  );
});
