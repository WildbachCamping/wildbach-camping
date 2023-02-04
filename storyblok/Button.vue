<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="container flex flex-col items-center pt-10">
    <button type="button" class="rounded-full bg-gray-800/90 px-4 py-1 hover:bg-gray-800/70 duration-300 mt-10">
      <NuxtLink class="text-white flex gap-2" :to="blok.pdf?.filename" target="_blank">{{ blok.label }} <img
          src="@/assets/images/open-outline.svg" class="w-5" alt=""></NuxtLink>
    </button>
  </div>
</template>
