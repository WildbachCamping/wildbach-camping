<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <section class="container mt-32 flex">
    <div class="w-full text-center">
      <h2 class="mb-4 text-3xl">{{ blok.title }}</h2>
    </div>
    <div v-if="blok.subtitle" class="pt-6 text-center">
      <h2 class="mb-4 text-5xl">{{ blok.subtitle }}</h2>
    </div>
  </section>
</template>
