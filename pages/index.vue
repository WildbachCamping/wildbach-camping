<template>
    <main role="main" class="min-h-screen">

        <Head>
            <Title>Wildbach Camping</Title>
            <Meta name="description" />
        </Head>
        <StoryblokComponent v-if="story" :blok="story.content" />

    </main>
</template>


<script setup>

const story = await useAsyncStoryblok("home", { version: "draft" });



</script>





