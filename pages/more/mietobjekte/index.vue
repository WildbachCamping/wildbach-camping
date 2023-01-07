<template>
    <div>

        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>


<script setup>

const story = await useAsyncStoryblok("more/mietobjekte", { version: "draft" });



</script>