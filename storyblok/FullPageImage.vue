<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <section class="container mt-32 flex flex-col items-center">
    <h2 class="mb-4 text-4xl md:mb-10 md:text-5xl">{{ blok.title }}</h2>
    <img :src="blok.image[0]?.filename" alt="" class="shadow-md" />

    <button
      type="button"
      class="mt-10 rounded-full bg-gray-800/90 px-4 py-1 duration-300 hover:bg-gray-800/70"
      v-if="blok.label"
    >
      <NuxtLink
        class="flex gap-2 text-white"
        :to="blok.pdf?.filename"
        target="_blank"
        >{{ blok.label }}
        <img src="@/assets/images/open-outline.svg" class="w-5" alt=""
      /></NuxtLink>
    </button>
  </section>
</template>
