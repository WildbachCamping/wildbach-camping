<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <Head>
    <Title>{{ blok.title }}</Title>
    <Meta :content="blok.meta" name="description" />
  </Head>
  <section class="container mt-20">
    <div class="text-justify">
      <h1>{{ blok.title }}</h1>
      <h2 v-if="!blok.subtitle == ''" class="mb-4">{{ blok.subtitle }}</h2>
      <p class="text-base sm:text-lg">{{ blok.text }}</p>
      <p v-if="!blok.subtext == ''" class="mt-4 text-lg">{{ blok.subtext }}</p>
    </div>
  </section>
</template>
