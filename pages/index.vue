<template>
    <main role="main" class="min-h-screen">


        <StoryblokComponent v-if="story" :blok="story.content" />

    </main>
</template>


<script setup>
const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`home?fallback_lang=de&language=${locale}`, { version: "draft" });



</script>





