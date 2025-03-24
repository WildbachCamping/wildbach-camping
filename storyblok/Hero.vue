<script setup>
import { ArrowDownIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="relative">
    <div class="mx-auto max-w-7xl">
      <div class="relative pt-14 lg:w-full lg:max-w-2xl">
        <svg
          class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>

        <div
          class="relative px-6 py-10 sm:py-20 md:py-40 lg:px-8 lg:py-56 lg:pr-0"
        >
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h1
              class="text-4xl font-bold tracking-tight text-primary-grey sm:text-6xl"
            >
              {{ blok.title }}
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ blok.subtitle }}
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <NuxtLink
                to="https://wildbach-camping.campalot.de/de"
                target="_blank"
                class="rounded-md bg-secondary-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-green"
                >{{ $t("bookNow") }}</NuxtLink
              >
              <NuxtLink
                to="#welcome"
                class="text-sm font-semibold leading-6 text-gray-900"
                >{{ $t("learnMore") }}
                <span aria-hidden="true">→</span></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
        :src="blok.image.filename"
        alt=""
      />
    </div>
     <!-- <Dialog /> -->
  </div>
</template>
