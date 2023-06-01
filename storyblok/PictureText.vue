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
    <h2 class="mb-4 text-4xl md:mb-20 md:text-5xl">{{ blok.Header }}</h2>
    <div class="relative flex flex-col items-center">
      <div
        class="flex w-full flex-col items-center justify-center gap-x-24 lg:flex-row"
      >
        <!-- Image -->
        <div class="mb-10 flex flex-1 justify-center lg:mb-0">
          <img
            class="max-h-[65vh] rounded-md shadow-lg"
            :src="blok.image[0].filename"
            :alt="blok.image.alt"
          />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <p class="my-4 text-justify lg:text-left">
            {{ blok.text }}
          </p>
        </div>
      </div>
      <!-- Rounded Rectangle -->
    </div>
  </section>
</template>
