<template>
    <div>

        <Head>
            <Title>Dauercamping</Title>
            <Meta name="description" />
        </Head>
        <section class="container flex flex-col items-center">
            <div class="text-justify">
                <h1 class="text-4xl md:text-5xl mb-4">Dauercamping</h1>
                <p class="text-lg">Willkommen in der kleinen, eingeschworenen Gemeinschaft unserer festen Camper. Bitte
                    sprich uns einfach an, wenn du dich für einen dauerhaften Stellplatz interessierst.</p>
            </div>
        </section>
        <section class="container flex flex-col items-center mt-20">
            <div class="grid grid-cols-12 grid-row-11 gap-1 sm:gap-2 md:gap-3 ld:gap-4">
                <img src="@/assets/images/dauercamping/dauercamping-1.jpeg" alt=""
                    class="col-span-7 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/dauercamping/dauercamping-2.jpeg" alt=""
                    class="col-span-5 row-span-2 object-cover h-full rounded-sm shadow-md">
                <img src="@/assets/images/dauercamping/dauercamping-3.jpeg" alt=""
                    class="col-span-6 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/dauercamping/dauercamping-4.jpeg" alt=""
                    class="col-span-6 row-span-1 w-full h-full  object-cover rounded-sm shadow-md">

            </div>
        </section>
        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>


<script setup>

const story = await useAsyncStoryblok("more/dauercamping", { version: "draft" });



</script>


<style scoped>
img {
    max-height: 40vh;
}
</style>