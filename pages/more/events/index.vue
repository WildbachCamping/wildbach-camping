<template>
    <div>

        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>


<script setup>

const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`more/events?fallback_lang=de&language=${locale}`, { version: "draft" });

</script>