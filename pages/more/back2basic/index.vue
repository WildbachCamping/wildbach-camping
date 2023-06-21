<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>

<script setup>
const locale = localStorage.getItem("langStore");

const story = await useAsyncStoryblok(`more/back2basic`, {
  version: "draft",
  language: locale,
  fallback_lang: "de",
});
</script>

<style lang="scss" scoped></style>
