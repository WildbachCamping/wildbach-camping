<template>
  <div>


    <StoryblokComponent v-if="story" :blok="story.content" />

  </div>
</template>

<script setup>
const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`kontakt?fallback_lang=de&language=${locale}`, { version: "draft" });

</script>
