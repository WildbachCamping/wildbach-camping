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

</script>

<style lang="scss" scoped>

</style>