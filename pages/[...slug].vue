<template>
  <main role="main" class="min-h-screen">
    <!-- <Dialog /> -->
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<script setup>
const { locale } = useI18n();
const { slug } = useRoute().params;

const story = await useStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "home",
  { version: "draft", language: locale.value }
);
</script>
