<template>
    <div>

        <Head>
            <Title>Angebote</Title>
            <Meta name="description" />
        </Head>
        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>


<script setup>

const story = await useAsyncStoryblok("more", { version: "draft" });



</script>