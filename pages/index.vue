<template>
    <main role="main" class="min-h-screen">

        <Head>
            <Title>Wildbach Camping</Title>
            <Meta name="description" />
        </Head>
        <StoryblokComponent v-if="story" :blok="story.content" />
        <div class="container flex flex-col justify-center gap-6 items-center mt-28">
            <h1>Möchtest du mehr erfahren?</h1>
            <div class="container flex flex-col lg:flex-row justify-center gap-6 items-center mt-28">
                <div class="flex flex-col items-center">
                    <h2>Camping</h2>
                    <img src="@/assets/images/home/camping.jpeg" class="h-80 rounded-md object-cover w-full md:w-80"
                        alt="">
                    <button type="button"
                        class="rounded-lg w-1/2 mt-6 bg-gray-800/90 px-4 py-1 hover:bg-gray-800/70 duration-300">
                        <NuxtLink class="text-white" to="/camping">
                            Mehr Infos
                        </NuxtLink>
                    </button>
                </div>
                <div class="flex flex-col items-center">
                    <h2>Mietobjekte</h2>
                    <img src="@/assets/images/home/mietobjekt.jpeg" class="h-80 rounded-md object-cover w-full md:w-80"
                        alt="">
                    <button type="button"
                        class="rounded-lg w-1/2 mt-6 bg-gray-800/90 px-4 py-1 hover:bg-gray-800/70 duration-300">
                        <NuxtLink class="text-white" to="more/mietobjekte">
                            Mehr Infos
                        </NuxtLink>
                    </button>
                </div>
                <div class="flex flex-col items-center">
                    <h2>Dauercamping</h2>
                    <img src="@/assets/images/home/dauercamping.jpeg"
                        class="h-80 rounded-md object-cover w-full md:w-80" alt="">
                    <button type="button"
                        class="rounded-lg w-1/2 mt-6 bg-gray-800/90 px-4 py-1 hover:bg-gray-800/70 duration-300">
                        <NuxtLink class="text-white" to="more/dauercamping">
                            Mehr Infos
                        </NuxtLink>
                    </button>
                </div>
            </div>
        </div>
        <div class="container mt-20 flex justify-center">
            <button type="button"
                class="rounded-md w-7/8 md:w-1/2 h-20 bg-secondary-green px-4 py-1 hover:bg-gray-800/70 duration-300">
                <NuxtLink class="text-white text-3xl" to="https://wildbach-camping.camping.care/" target="_blank">Zum
                    Buchungsportal</NuxtLink>
            </button>
        </div>
    </main>
</template>


<script setup>

const story = await useAsyncStoryblok("home", { version: "draft" });



</script>





