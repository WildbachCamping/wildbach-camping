<template>
    <div>

        <Head>
            <Title>Back2Basic</Title>
            <Meta name="description" />
        </Head>

        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
const story = await useAsyncStoryblok("more/back2basic", { version: "draft" });
Weglot.initialize({
    api_key: 'wg_2895a86e8d48d5ef2d6baf990e41ea880'
});
</script>

<style lang="scss" scoped>

</style>