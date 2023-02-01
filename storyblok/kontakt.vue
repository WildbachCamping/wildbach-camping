<script setup>
import { useCookie } from 'vue-cookie-next';

const cookie = useCookie();

const cookieConsent = computed(() => {
    return cookie.getCookie('cookie_consent') === 'true';
});

const endpoint = `https://wyyk4q3zxh.execute-api.eu-central-1.amazonaws.com/default/SendWildbachEmail`;

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
    $fetch(endpoint, { method: 'post', body: form, mode: 'no-cors' })
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
        <div class="grid grid-cols-1 md:grid-cols-2 pt-10 mb-10">
            <div class="text-justify flex flex-col">
                <h2 class="mb-4">Wildbach Camping</h2>

                <span>{{ blok.telefon }}</span>
                <span>{{ blok.email }}</span>
                <span>{{ blok.website }}</span>
                <br />
                <span>Adresse:</span>
                <span>{{ blok.strasse }}</span>
                <span>{{ blok.stadt }}</span>
                <span>{{ blok.land }}</span>
                <br />
                <h3>
                    Rezeption:
                </h3>
                <br>
                <h4 v-if="blok.header" class="text-xl mb-3">{{ blok.header }}</h4>
                {{ blok.montag }}
                <br />{{ blok.dienstag }} <br />{{ blok.mittwoch }}<br />{{ blok.donnerstag }}
                <br />{{ blok.freitag }}<br />{{ blok.samstag }}<br />{{ blok.sonntag }}
            </div>
            <div class="text-justify flex-1">
                <h2 class="text-4xl mt-4 md:mt-0 mb-4">Schreibt uns</h2>
                <h2 class="mb-4 text-2xl">Kontaktformular</h2>
                <form @submit.prevent="sendMessage" name="wildbach" method="POST"
                    class="grid grid-cols-4 grid-flow-row gap-2">
                    <input v-model="form.senderName" type="text" name="name" placeholder="Name" class="col-span-2" />
                    <input v-model="form.senderEmail" type="email" name="email" placeholder="Email*" id=""
                        class="col-span-2" />
                    <input v-model="form.senderSubject" type="text" name="subject" placeholder="Betreff"
                        class="col-span-2" />
                    <input v-model="form.senderPhone" type="tel" name="phone" placeholder="Telefon"
                        class="col-span-2" />
                    <input v-model="form.senderAddress.street" type="text" name="street" placeholder="Straße, Nr"
                        class="col-span-2" />
                    <input v-model="form.senderAddress.postcode" type="text" name="postcode" placeholder="PLZ"
                        class="col-span-2" />
                    <input v-model="form.senderAddress.city" type="text" name="city" placeholder="Stadt"
                        class="col-span-2" />
                    <input v-model="form.senderAddress.country" type="text" name="country" placeholder="Land"
                        class="col-span-2" />
                    <textarea v-model="form.senderMessage" name="message" id="" cols="30" rows="8"
                        class="col-span-4"></textarea>
                    <p class="col-span-4 text-sm">* Pflichtfeld</p>
                    <button class="bg-gray-800/90 rounded-full w-24 h-8 hover:bg-gray-800/70 duration-300 text-white">
                        Senden
                    </button>
                </form>
            </div>
        </div>

    </section>
    <section>
        <div v-if="cookieConsent" class="flex mt-4  container flex-col items-center h-[70vh]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484774.07098185783!2d6.316412082787486!3d50.49772061126496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x217bbbc74853a7ea!2sWildbach%20Camping%20-%20Dein%20Campingplatz%20in%20der%20Eifel!5e0!3m2!1sde!2sde!4v1675201551599!5m2!1sde!2sde"
                style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"></iframe>
        </div>

    </section>
</template>