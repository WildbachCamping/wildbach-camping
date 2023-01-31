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
const story = await useAsyncStoryblok("gallerie", { version: "draft" });
</script>
