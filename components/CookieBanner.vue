<template>
    <!-- <div class="flex items-center justify-center">
        <Modal @accept="optIn" @decline="optOut" @close="toggleModal" :modalActive="modalActive">
            <div class="flex flex-col items-center">
                <h2 class="text-2xl font-bold mb-4">Unsere Website verwendet Cookies</h2>
                <p class=" text-justify text-base mb-4">Wir verwenden Cookies, um die Zugriffe auf unsere Website zu
                    analysieren.
                </p>
            </div>
        </Modal>
    </div>
    <button class="fixed left-4 bottom-10" @click="toggleModal">Cookies</button> -->
</template>

<script setup lang="ts">
import { useCookie } from 'vue-cookie-next';
import { useState } from "vue-gtag-next";

const allowCookies = ref<boolean>();
const { isEnabled } = useState();

const cookie = useCookie();

const modalActive = ref(allowCookies.value === undefined ? true : false)

const toggleModal = () => {
    modalActive.value = !modalActive.value
}


// const optIn = () => {
//     isEnabled.value = allowCookies.value = true;
//     modalActive.value = false;
// }
// const optOut = () => {
//     isEnabled.value = allowCookies.value = modalActive.value = false;
// }

//  (cookie.isCookieAvailable('cookie_consent')) {
//     if (cookie.getCookie('cookie_consent') === 'true') {
//         optIn();
//     } else {
//         optOut()
//     }
// } else {
//     allowCookies.value = undefined;
// }

// watcifh(allowCookies, () => {
//     if (allowCookies.value != undefined) {
//         cookie.setCookie('cookie_consent', allowCookies.value.toString(), {
//             expire: '90d',
//         });
//         if (allowCookies.value) {
//             optIn();
//         } else {
//             optOut();
//         }
//     }
// });
// </script>

