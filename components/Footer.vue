<template>
    <div class="mt-40">
        <footer class="bg-[#444] py-8 w-full ">
            <div class="container flex flex-col md:flex-row items-center justify-center">
                <ul class="text-white uppercase gap-4 md:gap-12 text-xs flex flex-col md:flex-row">
                    <li class="cursor-pointer">
                        <NuxtLink
                            class="mx-2 pb-1 transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                            to="/Camping">Camping</NuxtLink>
                    </li>
                    <li class="cursor-pointer">
                        <NuxtLink
                            class="mx-2 pb-1 transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                            to="/umgebung">Umgebung</NuxtLink>
                    </li>
                    <li class="cursor-pointer">
                        <NuxtLink
                            class="mx-2 pb-1 transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                            to="/highlights">Highlights</NuxtLink>
                    </li>
                    <li class="cursor-pointer">
                        <NuxtLink
                            class="mx-2 pb-1 transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                            to="/kontakt">Kontakt</NuxtLink>
                    </li>
                    <li class="cursor-pointer" @click="toggleModal">
                        <NuxtLink
                            class="transition-all duration-500 ease border-b-[2px] border-transparent hover:border-b-white"
                            to="/datenschutz">Cookie-Einstellungen</NuxtLink>
                    </li>

                </ul>
                <div class="flex flex-col md:flex-row items-center justify-center gap-12">
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
    </div>
</template>

<script setup >
import { useCookie } from 'vue-cookie-next';
import { useState } from "vue-gtag-next";

const allowCookies = ref();
const { isEnabled } = useState();

const cookie = useCookie();



const modalActive = ref(allowCookies.value === undefined ? true : false)

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