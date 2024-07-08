<script setup lang="ts">
const endpoint = `https://wyyk4q3zxh.execute-api.eu-central-1.amazonaws.com/default/SendWildbachEmail`;

const form = reactive({
  senderName: "",
  senderEmail: "",
  senderSubject: "",
  senderMessage: "",
  senderPhone: "",
  senderAddress: {
    street: "",
    postcode: "",
    city: "",
    country: "",
  },
});
const token = ref();

function resetForm() {
  form.senderEmail = "";
  form.senderName = "";
  form.senderSubject = "";
  form.senderMessage = "";
  form.senderPhone = "";
  form.senderAddress.city = "";
  form.senderAddress.street = "";
  form.senderAddress.postcode = "";
  form.senderAddress.country = "";
}
const response = ref("");
async function onSubmit() {
  response.value = await $fetch("/api/submit", {
    method: "POST",
    body: {
      token: token.value,
    },
  });
  if (!response.value.success) {
    alert("You are a bot!");
    return;
  }
  sendMessage();
}

async function sendMessage() {
  $fetch(endpoint, { method: "post", body: form, mode: "no-cors" });
  window.alert("Deine Anfrage wurde versendet.");

  resetForm();
}
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <section class="container">
    <div class="mb-10 grid grid-cols-1 pt-10 md:grid-cols-2">
      <div class="flex flex-col text-justify">
        <h2 class="mb-4">Wildbach Camping</h2>

        <span>{{ blok.telefon }}</span>
        <span>{{ blok.email }}</span>
        <span>{{ blok.website }}</span>
        <br />
        <span>{{ blok.header1 }}:</span>
        <span>{{ blok.strasse }}</span>
        <span>{{ blok.stadt }}</span>
        <span>{{ blok.land }}</span>
        <br />
        <h3>
          {{ blok.header2 }}
        </h3>
        <br />
        <h4 v-if="blok.header3" class="mb-3 text-xl">{{ blok.header3 }}</h4>
        {{ blok.montag }}
        <br />{{ blok.dienstag }} <br />{{ blok.mittwoch }}<br />{{
          blok.donnerstag
        }}
        <br />{{ blok.freitag }}<br />{{ blok.samstag }}<br />{{ blok.sonntag }}
      </div>
      <div class="flex-1 text-justify">
        <h2 class="mb-4 mt-4 text-4xl md:mt-0">{{ blok.header4 }}</h2>
        <h2 class="mb-4 text-2xl">{{ blok.header5 }}</h2>
        <form
          @submit.prevent="onSubmit"
          name="wildbach"
          method="POST"
          class="grid grid-flow-row grid-cols-4 gap-2"
        >
          <input
            v-model="form.senderName"
            type="text"
            name="name"
            :placeholder="blok.name"
            class="col-span-2"
          />
          <input
            v-model="form.senderEmail"
            type="email"
            name="email"
            placeholder="Email*"
            required
            id=""
            class="col-span-2"
          />
          <input
            v-model="form.senderSubject"
            type="text"
            name="subject"
            :placeholder="blok.betreff"
            class="col-span-2"
          />
          <input
            v-model="form.senderPhone"
            type="tel"
            name="phone"
            :placeholder="blok.phone"
            class="col-span-2"
          />
          <input
            v-model="form.senderAddress.street"
            type="text"
            name="street"
            :placeholder="blok.street"
            class="col-span-2"
          />
          <input
            v-model="form.senderAddress.postcode"
            type="text"
            name="postcode"
            :placeholder="blok.postcode"
            class="col-span-2"
          />
          <input
            v-model="form.senderAddress.city"
            type="text"
            name="city"
            :placeholder="blok.city"
            class="col-span-2"
          />
          <input
            v-model="form.senderAddress.country"
            type="text"
            name="country"
            :placeholder="blok.country"
            class="col-span-2"
          />
          <textarea
            v-model="form.senderMessage"
            name="message"
            id=""
            cols="30"
            rows="8"
            class="col-span-4"
          ></textarea>
          <p class="col-span-4 text-sm">* {{ blok.required }}</p>
          <NuxtTurnstile v-model="token" class="col-span-4" />
          <button
            class="h-8 w-24 rounded-full bg-gray-800/90 text-white duration-300 hover:bg-gray-800/70"
          >
            {{ blok.button }}
          </button>
        </form>
        <!-- <pre>{{ token }}</pre> -->
      </div>
    </div>
  </section>
  <section>
    <div
      v-if="cookieConsent"
      class="container mt-4 flex h-[70vh] flex-col items-center"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484774.07098185783!2d6.316412082787486!3d50.49772061126496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x217bbbc74853a7ea!2sWildbach%20Camping%20-%20Dein%20Campingplatz%20in%20der%20Eifel!5e0!3m2!1sde!2sde!4v1675201551599!5m2!1sde!2sde"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="h-full w-full"
      ></iframe>
    </div>
  </section>
</template>
