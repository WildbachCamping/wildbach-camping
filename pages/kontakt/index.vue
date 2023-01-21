<template>
  <div>

    <Head>
      <Title>Kontakt</Title>
      <Meta name="description" />
    </Head>
    <section class="container">
      <h1 class="text-5xl mb-10">Kontakt</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 pt-10 mb-10">
        <div class="text-justify flex flex-col">
          <h2 class="mb-4">Wildbach Camping</h2>
          <span>Mobil: +49 171 4155489</span>
          <span>Telefon: +49 2482 1500</span>
          <span>Mail: info@wildbach-camping.de</span>
          <span>Web: www.wildbach-camping.de</span>
          <br />
          <span>Adresse:</span>
          <span>Platiß 1</span>
          <span>53940 Hellenthal</span>
          <span>Deutschland</span>
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
          <h2 class="text-4xl mt-4 md:mt-0 mb-4">Schreibt uns</h2>
          <h2 class="mb-4 text-2xl">Kontaktformular</h2>
          <form @submit.prevent="sendMessage" name="wildbach" class="grid grid-cols-4 grid-flow-row gap-2">
            <input v-model="form.senderName" type="text" name="name" placeholder="Name" class="col-span-2" />
            <input v-model="form.senderEmail" type="email" name="email" placeholder="Email" id="" required
              class="col-span-2" />
            <input v-model="form.senderSubject" type="text" name="subject" placeholder="Betreff" class="col-span-2" />
            <input v-model="form.senderPhone" type="tel" name="phone" placeholder="Phone" class="col-span-2" />
            <input v-model="form.senderAddress.street" type="text" name="street" placeholder="Straße"
              class="col-span-2" />
            <input v-model="form.senderAddress.postcode" type="text" name="postcode" placeholder="PLZ"
              class="col-span-2" />
            <input v-model="form.senderAddress.city" type="text" name="city" placeholder="Stadt" class="col-span-2" />
            <input v-model="form.senderAddress.country" type="text" name="country" placeholder="Land"
              class="col-span-2" />
            <textarea v-model="form.senderMessage" name="message" id="" cols="30" rows="8"
              class="col-span-4"></textarea>
            <button type="submit"
              class="bg-gray-800/90 rounded-full w-24 h-8 hover:bg-gray-800/70 duration-300 text-white">
              Senden
            </button>
          </form>
        </div>
      </div>

    </section>
    <section>
      <div v-if="cookieConsent" class="flex mt-4  container flex-col items-center h-[70vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.950244838946!2d6.426861316024899!3d50.47926997947929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf9da2e7b5b23d%3A0x217bbbc74853a7ea!2sWildbach%20Camping%20-%20Dein%20Campingplatz%20in%20der%20Eifel!5e0!3m2!1sde!2sde!4v1667240703685!5m2!1sde!2sde"
          style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          class="w-full h-full"></iframe>
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
  senderPhone: '',
  senderAddress: {
    street: '',
    postcode: '',
    city: '',
    country: ''
  }
});

function resetForm() {
  form.senderEmail = '';
  form.senderName = '';
  form.senderSubject = '';
  form.senderMessage = '';
  form.senderPhone = '';
  form.senderAddress.city = '';
  form.senderAddress.street = '';
  form.senderAddress.postcode = '';
  form.senderAddress.country = '';
}
async function sendMessage() {
  // useFetch(endpoint, { method: 'post', body: form, mode: 'no-cors' });
  resetForm();
}
</script>
