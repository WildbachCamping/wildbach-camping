<template>
  <header
    :class="{ 'scrolled-nav': scrolledNav }"
    class="fixed z-40 flex w-full items-center justify-center bg-primary-green text-white shadow"
  >
    <nav class="flex w-[90%] items-center justify-between py-2 md:py-4">
      <div class="branding pl-4 lg:pl-0">
        <NuxtLink to="/">
          <img
            class="w-44 md:w-60"
            src="~/assets/images/WBC_white.svg"
            alt="Wildbach-Logo"
          />
        </NuxtLink>
      </div>
      <ul
        v-show="!mobile"
        class="navigation flex w-full items-center justify-end gap-2 text-2xl text-white lg:gap-x-6"
      >
        <li class="">
          <NuxtLink
            class="border-b-[2px] border-b-transparent pb-1 transition duration-500 hover:border-b-white"
            to="/camping"
            >Camping
          </NuxtLink>
        </li>

        <li class="dropdown group relative">
          <div
            class="ease-in-outborder-transparent mt-2 flex items-center pb-1 transition duration-500"
          >
            {{ locale == "nl" ? "Meer offertes" : "Weitere Angebote" }}
            <ChevronDownIcon class="mt-1 h-4 w-4"></ChevronDownIcon>
          </div>

          <ul
            class="absolute mt-[-5px] hidden w-[200px] rounded-sm bg-secondary-green p-3 text-lg shadow-sm transition duration-700 group-hover:block"
          >
            <li class="">
              <NuxtLink
                class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/mietobjekte"
              >
                {{ locale == "nl" ? "Huurwoningen" : "Mietobjekte" }}
              </NuxtLink>
            </li>
            <li class="pb-1">
              <NuxtLink
                class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/dauercamping"
              >
                {{
                  locale == "nl" ? "Permanent kamperen" : "Dauercamping"
                }}</NuxtLink
              >
            </li>
            <li class="pb-1">
              <NuxtLink
                class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/events"
              >
                Events</NuxtLink
              >
            </li>
            <li class="pb-1">
              <NuxtLink
                class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/back2basic"
              >
                {{
                  locale == "nl" ? "Back2Basic Weide" : "Back2Basic Wiese"
                }}</NuxtLink
              >
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink
            class="border-b-[2px] border-transparent pb-1 transition-all duration-500 ease-in-out hover:border-b-white"
            to="/umgebung"
            >{{ locale == "nl" ? "Omgeving" : "Umgebung" }}</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="border-b-[2px] border-transparent pb-1 transition-all duration-500 ease-in-out hover:border-b-white"
            to="/galerie"
            >{{ locale == "nl" ? "Galerie" : "Galerie" }}</NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            class="border-b-[2px] border-transparent pb-1 transition-all duration-500 ease-in-out hover:border-b-white"
            to="/termine"
            >{{ locale == "nl" ? "Data" : "Termine" }}</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="rounded-md border-b-[2px] border-transparent bg-primary-white p-1 px-2 pb-1 font-bold text-secondary-green transition-all duration-500 ease-in-out"
            to="https://wildbach-camping.campalot.de/de"
            target="_blank"
          >
            {{ locale == "nl" ? "Boek nu" : "Jetzt buchen" }}</NuxtLink
          >
        </li>
      </ul>
      <div
        @click="toggleMobileNav"
        v-show="mobile"
        class="z-40 flex cursor-pointer items-center justify-center"
      >
        <div
          class="ease-[cubic-bezier(.165, .84, .44, 1)] relative flex h-10 w-10 origin-center items-center justify-center transition duration-700"
          :class="{ '-rotate-180': mobileNav }"
        >
          <span
            class="absolute mb-4 h-[2px] w-8 origin-center bg-white"
            :class="{ 'absolute mt-4 origin-center rotate-45': mobileNav }"
          ></span>
          <span
            class="absolute h-[2px] w-8 origin-center bg-white"
            :class="{ 'opacity-0': mobileNav }"
          ></span>
          <span
            class="absolute mt-4 h-[2px] w-8 origin-center bg-white"
            :class="{ 'absolute mb-4 origin-center -rotate-45': mobileNav }"
          ></span>
        </div>
      </div>
    </nav>

    <transition
      name="mobile-nav"
      enter-from-class="translate-x-[-250px]"
      enter-to-class="translate-x-0"
      leave-to-class="translate-x-[-250px]"
      enter-active-class="transition-all ease-out duration-500"
      leave-active-class="transition-all ease-out duration-500"
    >
      <ul
        v-show="mobileNav"
        class="absolute left-0 top-0 z-50 flex h-auto w-full max-w-[250px] flex-col gap-3 bg-primary-green p-5"
      >
        <li class="" @click="toggleMobileNav">
          <NuxtLink class="" to="/">Home</NuxtLink>
        </li>

        <li class="" @click="toggleMobileNav">
          <NuxtLink class="" to="/camping">Camping</NuxtLink>
        </li>
        <li class="dropdown group relative">
          <NuxtLink
            to=""
            class="ease-in-outborder-transparent mt-2 flex cursor-pointer select-none items-center pb-1 transition duration-500"
          >
            {{ locale == "nl" ? "Meer offertes" : "Weitere Angebote" }}
            <ChevronDownIcon class="mt-1 h-4 w-4"></ChevronDownIcon>
          </NuxtLink>

          <ul
            class="absolute mt-[-5px] hidden w-[200px] rounded-sm bg-secondary-green p-3 text-lg shadow-sm transition duration-700 group-hover:block"
          >
            <li class=" " @click="toggleMobileNav">
              <NuxtLink
                class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/mietobjekte"
              >
                {{ locale == "nl" ? "Huurwoningen" : "Mietobjekte" }}
              </NuxtLink>
            </li>
            <li class="pb-1" @click="toggleMobileNav">
              <NuxtLink
                class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/dauercamping"
              >
                {{
                  locale == "nl" ? "Permanent kamperen" : "Dauercamping"
                }}</NuxtLink
              >
            </li>
            <li class="pb-1" @click="toggleMobileNav">
              <NuxtLink
                class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/events"
              >
                Events</NuxtLink
              >
            </li>
            <li class="pb-1" @click="toggleMobileNav">
              <NuxtLink
                class="border-b-[1px] border-b-transparent transition duration-500 hover:border-b-white"
                to="/more/back2basic"
              >
                {{
                  locale == "nl" ? "Back2Basic Weide" : "Back2Basic Wiese"
                }}</NuxtLink
              >
            </li>
          </ul>
        </li>
        <li class="" @click="toggleMobileNav">
          <NuxtLink class="" to="/umgebung">{{
            locale == "nl" ? "Omgeving" : "Umgebung"
          }}</NuxtLink>
        </li>
        <li class="" @click="toggleMobileNav">
          <NuxtLink class="" to="/galerie"
            >{{ locale == "nl" ? "Galerie" : "Galerie" }}
          </NuxtLink>
        </li>
        <li class="" @click="toggleMobileNav">
          <NuxtLink class="" to="/termine">{{
            locale == "nl" ? "Data" : "Termine"
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="rounded-md border-b-[2px] border-transparent bg-primary-white p-1 pb-1 font-bold text-secondary-green transition-all duration-500 ease-in-out"
            to="https://wildbach-camping.camping.care/"
            target="_blank"
          >
            {{ locale == "nl" ? "Boek nu" : "Jetzt buchen" }}</NuxtLink
          >
        </li>
      </ul>
    </transition>
    <div
      class="backdrop absolute left-0 top-0 h-screen w-screen bg-transparent"
      @click="closeNav"
      v-show="mobileNav"
    ></div>
  </header>
</template>

<script setup>
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
const scrolledNav = ref(null);
const mobile = ref(null);
const mobileNav = ref(null);
const windowWidth = ref(null);

onBeforeMount(() => {
  window.addEventListener("resize", checkScreen);
  checkScreen();
});

const screen = useState("screen", () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 640) {
    mobile.value = true;
    return true;
  } else {
    mobile.value = false;
    mobileNav.value = false;
  }
  return false;
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
const locale = localStorage.getItem("langStore");
</script>

<style scoped></style>
