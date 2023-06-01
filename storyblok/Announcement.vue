<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div>
    <section class="container mt-6 h-full px-5 pt-10 md:px-10">
      <div>
        <h2 class="my-5 text-4xl font-bold">{{ blok.title }}</h2>
        <p class="text-2xl">{{ blok.text }}</p>
      </div>

      <p class="mt-4 text-2xl font-extrabold" v-if="blok.text2">
        {{ blok.text2 }}
      </p>
    </section>
  </div>
</template>
