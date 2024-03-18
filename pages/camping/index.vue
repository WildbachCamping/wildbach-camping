<template>
  <main>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<script setup>
const config = useRuntimeConfig();
let locale = "de";
if (typeof window !== "undefined") {
  const locale = localStorage.getItem("langStore");
}
const story = await useAsyncStoryblok(`camping`, {
  version: config.public.version,
  language: locale,
  fallback_lang: "de",
});
</script>
