<script setup>
import { ArrowDownIcon } from '@heroicons/vue/24/outline';
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="absolute bg-primary-white/[.7] p-6 md:p-20 mt-10 bottom-[50%] text-secondary-green font-bold tracking-widest z-10 rounded-sm"
      data-aos="fade-up" data-aos-duration="2500" data-aos-delay="500">
      <div class="flex flex-col items-center text-center ">
        <h1 class="pb-5 font-bold text-secondary-green text-4xl md:text-5xl min-w-max">{{ blok.title }}</h1>
        <div class="text-xl">{{ blok.subtitle }}</div>
      </div>

    </div>
    <div
      class="animate-bounce absolute shadow-lg min-w-screen mx-auto bottom-10 h-10 w-10 rounded-full bg-primary-green flex items-center justify-center z-10">
      <a href="#welcome">
        <ArrowDownIcon class="h-8 w-8" />
      </a>
    </div>
  </div>
  <div class="relative max-h-screen  bg-no-repeat bg-cover md:mt-6" style="background-position: 50%; background-image: url('./hero.jpeg');
          height: 100vh;">

  </div>

</template>
