<template>

    <Head>
        <Title>Gallerie</Title>
        <Meta name="description" />
    </Head>
    <div class="w-full">


        <section class="container mt-20 ">
            <h1>Gallerie</h1>
        </section>
        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>

<script setup>
const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`gallerie?fallback_lang=de&language=${locale}`, { version: "draft" });

</script>
