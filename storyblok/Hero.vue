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
  <div>
    <div class="min-h-full min-w-screen flex flex-col items-center relative mt-[-80px]">
      <div
        class="absolute bg-primary-white/[.7] p-3 md:p-10 mt-10 md:bottom-[60%] text-secondary-green font-bold tracking-widest">
        <div class="flex flex-col items-center">
          <h1 class="pb-5 font-bold text-3xl md:text-5xl">{{ blok.title }}</h1>
          <div class="text-sm md:text-xl">{{ blok.subtitle }}</div>
        </div>

      </div>
      <img class="max-h-[90vh] w-full" :src="blok.image.filename" />
      <div
        class="animate-bounce absolute shadow-lg mx-auto bottom-10 h-10 w-10 rounded-full bg-primary-green flex items-center justify-center">
        <a href="#welcome">
          <ArrowDownIcon class="h-8 w-8" />
        </a>
      </div>
    </div>

  </div>
</template>
