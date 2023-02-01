<template>
    <div>

        <Head>
            <Title>Mietobjekte</Title>
            <Meta name="description" />
        </Head>
        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>


<script setup>
const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`more/mietobjekte?fallback_lang=de&language=${locale}`, { version: "draft" });

</script>