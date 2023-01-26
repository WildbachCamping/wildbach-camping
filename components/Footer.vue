<template>
    <footer class="bg-[#444] py-8 w-full mt-40">
        <div class="flex flex-col items-center gap-4 py-10">

            <ul
                class="text-white flex flex-col md:flex-row justify-start  md:gap-x-8 gap-2 items-start md:items-center md:mb-8">
                <li class="cursor-pointer">
                    <NuxtLink
                        class="transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                        to="/kontakt">Kontakt</NuxtLink>
                </li>


                <li class="cursor-pointer">
                    <NuxtLink
                        class="transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                        to="/impressum">Impressum</NuxtLink>
                </li>
                <li class="cursor-pointer">
                    <NuxtLink
                        class="transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                        to="/datenschutz">Datenschutz</NuxtLink>
                </li>
                <li class="cursor-pointer" @click="toggleModal">
                    <NuxtLink
                        class="transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                        to="/datenschutz">Cookie-Einstellungen</NuxtLink>
                </li>
                <li class="flex my-1">
                    <NuxtLink
                        class="transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                        to="https://www.facebook.com/people/Wildbach-Camping/100064720399133/">Facebook
                    </NuxtLink><img src="@/assets/images/logo-facebook.svg" alt="Facebook" class="w-6 h-6 ml-2">

                </li>
                <li class="flex my-1">
                    <NuxtLink
                        class="transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                        to="https://www.instagram.com/wildbachcamping/?igshid=wbbdewqhox3r">Instagram
                    </NuxtLink><img src="@/assets/images/logo-instagram.svg" alt="Facebook" class="w-6 h-6 ml-2">

                </li>

        </div>
        </ul>
        <ul class="text-white font-Cormorant mb-4 flex flex-col font-thin min-w-min">
            <h2 class="text-2xl font-semibold text-white">Kontakt</h2>
            <div class=" flex-1 flex  flex-col">
                <span>Platiß 1</span>
                <span class="mb-1">53940 Hellenthal</span>
                <span>Telefon: +49 2482 1500</span>
                <span>Mail: info@wildbach-camping.de</span>
                <span class="flex my-1"><img src="@/assets/images/logo-facebook.svg" alt="Facebook"
                        class="w-6 h-6 mr-1">
                    <NuxtLink to="https://www.facebook.com/people/Wildbach-Camping/100064720399133/">Facebook
                    </NuxtLink>
                </span>
                <span class="flex my-1"><img src="@/assets/images/logo-instagram.svg" alt="Facebook"
                        class="w-6 h-6 mr-1">
                    <NuxtLink to="https://www.instagram.com/wildbachcamping/?igshid=wbbdewqhox3r">Instagram
                    </NuxtLink>
                </span>
            </div>
        </ul>
        <div class="flex sm:justify-center items-center mt-8 sm:mt-0"><a
                href="https://www.beyondcamping.de/camping/campingplaetze/" target="_blank" rel="noopener"><img
                    src="https://www.beyondcamping.de/wp-content/uploads/award-campingplatz-beyondcamping-2022-rot.png"
                    alt="BeyondCamping Campingplatz Auszeichnung" width="140" height="140" border="0"
                    style="border-style:none;"></a></div>
        </div>
        </div>
        <Teleport to="body" class="flex items-center justify-center">
            <Modal @accept="optIn" @decline="optOut" @close="toggleModal" :modalActive="modalActive">
                <div class="flex flex-col items-center z-10">
                    <h2 class="text-2xl font-bold mb-4">Unsere Website verwendet Cookies</h2>
                    <p class=" text-justify text-base mb-4">Wir verwenden Cookies, um die Zugriffe auf unsere
                        Website zu
                        analysieren.
                    </p>
                </div>
            </Modal>
        </Teleport>
    </footer>

</template>

<script setup >
import { useCookie } from 'vue-cookie-next';
import { useState } from "vue-gtag-next";

const allowCookies = ref();
const { isEnabled } = useState();

const cookie = useCookie();



const modalActive = ref(false)
// uncomment when going live
// const modalActive = ref(allowCookies.value === undefined ? true : false)

const toggleModal = () => {
    modalActive.value = !modalActive.value
}


const optIn = () => {
    isEnabled.value = allowCookies.value = true;
    modalActive.value = false;
}
const optOut = () => {
    isEnabled.value = allowCookies.value = modalActive.value = false;
}

if (cookie.isCookieAvailable('cookie_consent')) {
    if (cookie.getCookie('cookie_consent') === 'true') {
        optIn();
    } else {
        optOut()
    }
} else {
    allowCookies.value = undefined;
}

watch(allowCookies, () => {
    if (allowCookies.value != undefined) {
        cookie.setCookie('cookie_consent', allowCookies.value.toString(), {
            expire: '90d',
        });
        if (allowCookies.value) {
            optIn();
        } else {
            optOut();
        }
    }
});
</script>