<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const locale = localStorage.getItem("langStore");

const story = await useAsyncStoryblok(`dauercamping`, {
  version: config.public.version,
  language: locale,
  fallback_lang: "de",
});
</script>

<style scoped>
img {
  max-height: 40vh;
}
</style>
