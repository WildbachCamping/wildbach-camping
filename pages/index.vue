<template>
    <main role="main" class="min-h-screen">

        <Head>
            <Title>Wildbach Camping</Title>
            <Meta
                content="Wildbach Camping in Hellenthal am Nationalpark Eifel I Familienfreundliche und entspannte Atmosphäre I Naturbelassen am Bach mit Feuerstellen I Auszeit und Urlaub in der Natur"
                name="description" />

            <Meta content="Startseite" />


        </Head>
        <StoryblokComponent v-if="story" :blok="story.content" />

    </main>
</template>


<script setup>

const story = await useAsyncStoryblok("home", { version: "draft" });

Weglot.initialize({
    api_key: 'wg_2895a86e8d48d5ef2d6baf990e41ea880'
});

</script>





