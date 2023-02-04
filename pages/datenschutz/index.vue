<template>
    <div>

        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>

<script setup>
const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`datenschutz?fallback_lang=de&language=${locale}`, { version: "draft" });
</script>

<style scoped>
p {
    margin-bottom: 16px;
}

h2 {
    font-size: x-large;
}
</style>