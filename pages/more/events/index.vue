<template>
    <div>

        <Head>
            <Title>Events</Title>
            <Meta name="description" />
        </Head>
        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>


<script setup>

const story = await useAsyncStoryblok("more/events", { version: "draft" });



</script>