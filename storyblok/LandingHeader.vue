<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div id="welcome" class="mt-[-75px]"></div>
  <section
    class="container mt-20 flex min-h-[60vh] flex-col items-center justify-center pt-10"
    id="welcome"
  >
    <div class="text-center">
      <h2 class="text-3xl font-bold md:mb-4 md:text-4xl">{{ blok.title }}</h2>
    </div>
    <div class="pt-2 text-center md:pt-6">
      <h2 class="mb-4 text-3xl font-bold md:text-4xl">{{ blok.subtitle }}</h2>
    </div>
  </section>
</template>
