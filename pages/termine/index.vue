<template>
    <div class="w-full">

        <Head>
            <Title>Termine</Title>
            <Meta name="description" />
        </Head>
        <section class="container mt-20 ">
            <h1>Termine</h1>
        </section>
        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>

<script setup>
const story = await useAsyncStoryblok("termine", { version: "draft" });
Weglot.initialize({
    api_key: 'wg_2895a86e8d48d5ef2d6baf990e41ea880'
});
</script>
