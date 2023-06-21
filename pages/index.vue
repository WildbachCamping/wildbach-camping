<template>
  <main role="main" class="min-h-screen">
    <!-- {{ story }} -->
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<script setup>
const locale = localStorage.getItem("langStore");

const story = await useAsyncStoryblok("home", {
  version: "draft",
  language: locale,
  fallback_lang: "de",
});
</script>
