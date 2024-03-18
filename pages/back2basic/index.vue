<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
let locale = "de";
if (typeof window !== "undefined") {
  const locale = localStorage.getItem("langStore");
}

const story = await useAsyncStoryblok(`back2basic`, {
  version: config.public.version,
  language: locale,
  fallback_lang: "de",
});
</script>

<style lang="scss" scoped></style>
