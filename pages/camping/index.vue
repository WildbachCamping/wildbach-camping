<template>
    <main class="">

        <Head>
            <Title>Camping</Title>
            <Meta name="description" />
        </Head>
        <StoryblokComponent v-if="story" :blok="story.content" />

    </main>
</template>


<script setup>

const story = await useAsyncStoryblok("camping", { version: "draft" });



</script>