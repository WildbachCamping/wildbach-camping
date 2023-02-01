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
const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`camping?fallback_lang=de&language=${locale}`, { version: "draft" });

</script>
