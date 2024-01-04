<template>
  <main role="main" class="min-h-screen">
    <!-- {{ story }} -->
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<script setup>
const config = useRuntimeConfig();
const locale = localStorage.getItem("langStore");

const story = await useAsyncStoryblok("home", {
  version: config.public.version,
  language: locale,
  fallback_lang: "de",
});
</script>
