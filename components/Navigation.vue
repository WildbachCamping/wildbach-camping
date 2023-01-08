<template>
  <header :class="{ 'scrolled-nav': scrolledNav }"
    class="sticky items-center w-full z-40 shadow-bottom bg-primary-green text-white">
    <nav class="flex items-center justify-between md:py-4 py-2 container">
      <div class="branding pl-4 lg:pl-0">
        <NuxtLink to="/">
          <img class="w-60" src="~/assets/images/WBC_white.svg" alt="Wildbach-Logo" />
        </NuxtLink>
      </div>
      <ul v-show="!mobile" class="navigation flex justify-end items-center w-full text-2xl gap-x-3 text-white">
        <li class="">
          <NuxtLink class="border-b-[2px] pb-1 border-b-transparent transition duration-500 hover:border-b-white"
            to="/camping">Camping
          </NuxtLink>
        </li>



        <li class="group relative dropdown ">
          <NuxtLink class="pb-1 flex items-center mt-2 transition duration-500 ease-in-outborder-transparent"
            to="/more/mietobjekte">
            Weitere Angebote
            <ChevronDownIcon class="h-4 w-4 mt-1"></ChevronDownIcon>
          </NuxtLink>

          <ul
            class="w-[200px] p-3 shadow-sm group-hover:block absolute  bg-secondary-green hidden transition duration-700 text-lg rounded-sm mt-[-5px] ">
            <li class="">
              <NuxtLink class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/mietobjekte">
                Mietobjekte
              </NuxtLink>
            </li>
            <li class="pb-1">
              <NuxtLink class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/dauercamping">
                Dauercamping</NuxtLink>
            </li>
            <li class="pb-1">
              <NuxtLink class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/events">
                Events</NuxtLink>
            </li>
            <li class="pb-1">
              <NuxtLink class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/back2basic">
                Back 2 Basic Wiese</NuxtLink>
            </li>

          </ul>
        </li>
        <li>
          <NuxtLink
            class=" pb-1 transition-all duration-500 ease-in-out border-b-[2px] border-transparent hover:border-b-white"
            to="/umgebung">Umgebung</NuxtLink>
        </li>

        <li>
          <NuxtLink
            class="mx-2 pb-1 transition-all duration-500 ease-in-out border-b-[2px] border-transparent hover:border-b-white"
            to="/highlights">Highlights</NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="mx-2 pb-1 transition-all duration-500 ease-in-out border-b-[2px] border-transparent hover:border-b-white"
            to="/termine">Termine</NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="mx-2 pb-1 transition-all duration-500 ease-in-out border-b-[2px] border-transparent bg-secondary-green p-1 rounded-md"
            to="https://wildbach-camping.camping.care/" target="_blank">
            Jetzt buchen</NuxtLink>
        </li>
      </ul>
      <div @click="toggleMobileNav" v-show="mobile" class="cursor-pointer flex justify-center items-center z-40">
        <div
          class="w-10 h-10 relative transition duration-700 ease-[cubic-bezier(.165, .84, .44, 1)] origin-center flex justify-center items-center"
          :class="{ '-rotate-180': mobileNav }">
          <span class="bg-white w-8 h-[2px] absolute origin-center mb-4"
            :class="{ 'rotate-45 mb-0': mobileNav }"></span>
          <span class="bg-white w-8 h-[2px] absolute origin-center" :class="{ 'opacity-0': mobileNav }"></span>
          <span class="bg-white w-8 h-[2px] absolute origin-center mt-4"
            :class="{ '-rotate-45 mt-0': mobileNav }"></span>
        </div>
      </div>
    </nav>

    <transition name="mobile-nav" enter-from-class="translate-x-[-250px]" enter-to-class="translate-x-0"
      leave-to-class="translate-x-[-250px]" enter-active-class="transition-all ease-out duration-500"
      leave-active-class="transition-all ease-out duration-500">
      <ul v-show="mobileNav"
        class="flex gap-3 flex-col w-full max-w-[250px] bg-primary-green top-0 left-0 h-auto z-50 absolute p-5">
        <li class="" @click="toggleMobileNav">
          <NuxtLink class="" to="/">Home</NuxtLink>
        </li>

        <li class="" @click="toggleMobileNav">
          <NuxtLink class="" to="/camping">Camping</NuxtLink>
        </li>
        <li class="group relative dropdown  ">
          <div class="pb-1 flex items-center mt-2 transition duration-500 ease-in-outborder-transparent">
            Weitere Angebote
            <ChevronDownIcon class="h-4 w-4 mt-1"></ChevronDownIcon>
          </div>

          <ul
            class="w-[200px] p-3 shadow-sm group-hover:block absolute  bg-secondary-green hidden transition duration-700 text-lg rounded-sm mt-[-5px] ">
            <li class=" " @click="toggleMobileNav">
              <NuxtLink class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/mietobjekte">
                Mietobjekte
              </NuxtLink>
            </li>
            <li class="pb-1 " @click="toggleMobileNav">
              <NuxtLink class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/dauercamping">
                Dauercamping</NuxtLink>
            </li>
            <li class="pb-1 " @click="toggleMobileNav">
              <NuxtLink class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/events">
                Events</NuxtLink>
            </li>
            <li class="pb-1 " @click="toggleMobileNav">
              <NuxtLink class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/back2basic">
                Back 2 Basic Wiese</NuxtLink>
            </li>

          </ul>
        </li>
        <li class="" @click="toggleMobileNav">
          <NuxtLink class="" to="/umgebung">Umgebung</NuxtLink>
        </li>

        <li class="" @click="toggleMobileNav">
          <NuxtLink class="" to="/highlights">Highlights</NuxtLink>
        </li>
        <li class="" @click="toggleMobileNav">
          <NuxtLink class="" to="/kontakt">Termine</NuxtLink>
        </li>
        <li>
          <NuxtLink
            class=" pb-1 transition-all duration-500 ease-in-out border-b-[2px] border-transparent bg-secondary-green p-1 rounded-md"
            to="https://wildbach-camping.camping.care/" target="_blank">
            Jetzt buchen</NuxtLink>
        </li>
      </ul>
    </transition>
    <div class="backdrop h-screen w-screen bg-transparent absolute top-0 left-0" @click="closeNav" v-show="mobileNav">
    </div>
  </header>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
const scrolledNav = ref(null);
const mobile = ref(null);
const mobileNav = ref(null);
const windowWidth = ref(null);

onBeforeMount(() => {
  window.addEventListener('resize', checkScreen);
  checkScreen();
});

// function updateScroll() {
//     const scrollPosition = window.scrollY
//     if (scrollPosition > 50) {
//         scrolledNav.value = true
//     } else {
//         scrolledNav.value = false
//     }
// }

function toggleMobileNav() {
  mobileNav.value = !mobileNav.value;
}
function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 1005) {
    mobile.value = true;
    return;
  } else {
    mobile.value = false;
    mobileNav.value = false;
  }
}

function closeNav() {
  mobileNav.value = false;
}
</script>

<style scoped>

</style>
