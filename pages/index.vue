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
        <LangSwitcher />
    </main>
</template>


<script setup>
const locale = localStorage.getItem('langStore')

const story = await useAsyncStoryblok(`home?language=${locale}`, { version: "draft" });



</script>





