<template>
    <div class="w-full">

        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>

<script setup>
const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`galerie?fallback_lang=de&language=${locale}`, { version: "draft" });

</script>
