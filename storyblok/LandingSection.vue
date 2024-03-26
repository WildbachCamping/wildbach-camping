<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="container">
    <section class="my-10 flex flex-col justify-center md:my-20" id="welcome">
      <div class="relative mt-20 flex flex-col items-center">
        <div
          class="flex w-full flex-col-reverse items-center justify-center gap-x-24"
          :class="blok.type === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'"
        >
          <!-- Image -->
          <div class="mb-10 flex flex-1 justify-center lg:mb-0">
            <img
              class="rounded-md shadow-lg"
              :src="blok.image.filename"
              :alt="blok.image.alt"
            />
          </div>
          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-center text-3xl">{{ blok.title }}</h2>
            <p class="my-4 text-justify lg:text-left" v-if="blok.subtitle">
              {{ blok.subtitle }}
            </p>
            <p class="my-4 text-justify lg:text-left">
              {{ blok.text }}
            </p>
          </div>
        </div>
        <!-- Rounded Rectangle -->
      </div>
    </section>
  </div>
</template>
