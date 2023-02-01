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

const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`termine?fallback_lang=de&language=${locale}`, { version: "draft" });

</script>
