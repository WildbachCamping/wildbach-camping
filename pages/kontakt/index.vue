<template>
  <div>
    <Head>
      <Title>Kontakt</Title>
      <Meta name="description" />
    </Head>
    <section
      class="container grid grid-cols-1 md:grid-cols-2 pt-10 px-5 md:px-10 min-h-[90vh] pb-80"
    >
      <div class="text-justify flex-1 flex flex-col">
        <h1 class="text-5xl mb-4">Kontakt</h1>
        <h2 class="mb-4">Wildbach Camping</h2>
        <span>Mobil: +49 171 4155489</span>
        <span>Telefon: +49 2482 1500</span>
        <span>Mail: info@wildbach-camping.de</span>
        <span>Web: www.wildbach-camping.de</span>
        <br />
        <span>Adresse:</span>
        <span>Platiß 1</span>
        <span>53940 Hellenthal</span>
        <span>Germany</span>
        <br />
        <p>
          Öffnungszeiten Rezeption:<br />Montag:&nbsp;10 - 12 und 14 - 17
          <br />Dienstag:&nbsp;10 - 12 und 14 - 17 <br />Mittwoch:&nbsp;10 - 12
          und 14 - 17 <br />Donnerstag:&nbsp;10 - 12 und 14 - 17
          <br />Freitag:&nbsp;10 - 12 und 14 - 18 <br />Samstag:&nbsp;10 - 12
          und 14 - 18 <br />Sonntag:&nbsp;10 - 12 und 14 - 17
        </p>
      </div>
      <div class="text-justify flex-1">
        <h2 class="text-5xl mt-4 md:mt-0 mb-4">Schreibt uns</h2>
        <div class="text-justify flex-1 min-w-[350px]">
          <h2 class="mb-4 text-2xl">Kontaktformular</h2>
          <form
            @submit.prevent="sendMessage"
            name="wildbach"
            class="flex flex-col gap-4"
          >
            <input
              v-model="form.senderName"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              v-model="form.senderEmail"
              type="email"
              name="email"
              placeholder="Email"
              id=""
              required
            />
            <input
              v-model="form.senderSubject"
              type="text"
              name="subject"
              placeholder="Betreff"
            />
            <textarea
              v-model="form.senderMessage"
              name="message"
              id=""
              cols="30"
              rows="8"
            ></textarea>
            <button
              type="submit"
              class="bg-gray-800/90 rounded-full w-24 h-8 hover:bg-gray-800/70 duration-300 text-white"
            >
              Senden
            </button>
          </form>
        </div>
      </div>
      <div
        class="container flex flex-col md:flex-row px-5 md:px-10 mb-32 justify-center items-center md:items-start"
      >
        <div v-if="cookieConsent" class="flex mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.950244838946!2d6.426861316024899!3d50.47926997947929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf9da2e7b5b23d%3A0x217bbbc74853a7ea!2sWildbach%20Camping%20-%20Dein%20Campingplatz%20in%20der%20Eifel!5e0!3m2!1sde!2sde!4v1667240703685!5m2!1sde!2sde"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="sm:min-h-[400px] min-h-[350px] sm:min-w-[500px] min-w-[360px] px-5"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCookie } from 'vue-cookie-next';

const cookie = useCookie();

const cookieConsent = computed(() => {
    return cookie.getCookie('cookie_consent') === 'true';
});

const endpoint = ``;

const form = reactive({
    senderName: '',
    senderEmail: '',
    senderSubject: '',
    senderMessage: '',
});

function resetForm() {
    form.senderEmail = '';
    form.senderName = '';
    form.senderSubject = '';
    form.senderMessage = '';
}
async function sendMessage() {
    useFetch(endpoint, { method: 'post', body: form, mode: 'no-cors' });
    resetForm();
}
</script>
