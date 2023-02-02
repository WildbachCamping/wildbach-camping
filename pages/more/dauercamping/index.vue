<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>


<script setup>
const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`more/dauercamping?fallback_lang=de&language=${locale}`, { version: "draft" });



</script>


<style scoped>
img {
    max-height: 40vh;
}
</style>