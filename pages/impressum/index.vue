<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>

<script setup>
const locale = localStorage.getItem("langStore");

const story = await useAsyncStoryblok(`impressum`, {
  version: "draft",
  language: locale,
  fallback_lang: "de",
});
</script>
