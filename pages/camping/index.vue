<template>
  <main>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<script setup>
const config = useRuntimeConfig();
const locale = localStorage.getItem("langStore");

const story = await useAsyncStoryblok(`camping`, {
  version: config.public.version,
  language: locale,
  fallback_lang: "de",
});
</script>
