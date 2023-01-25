<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>


    <div class="container flex flex-col justify-center gap-6 items-center mt-28">
        <h2 class="text-3xl text-center">Möchtest du mehr erfahren?</h2>
        <div class="container flex flex-col lg:flex-row justify-center gap-6 items-center mt-8">
            <div class="flex flex-col items-center md:pt-12">
                <h2>Camping</h2>
                <img :src="blok.image1.filename" class="h-80 rounded-md object-cover w-full md:w-80 mt-4" alt="">
                <button type="button"
                    class="rounded-lg w-1/2 mt-6 bg-secondary-green/90 px-4 py-1 hover:bg-secondary-green/70 duration-300">
                    <NuxtLink class="text-white" to="/camping">
                        Mehr Infos
                    </NuxtLink>
                </button>
            </div>
            <div class="flex flex-col items-center pt-12">
                <h2>Mietobjekte</h2>
                <img :src="blok.image2.filename" class="h-80 rounded-md object-cover w-full md:w-80 mt-4" alt="">
                <button type="button"
                    class="rounded-lg w-1/2 mt-6 bg-secondary-green/90 px-4 py-1 hover:bg-secondary-green/70 duration-300">
                    <NuxtLink class="text-white" to="more/mietobjekte">
                        Mehr Infos
                    </NuxtLink>
                </button>
            </div>
            <div class="flex flex-col items-center  pt-12">
                <h2>Dauercamping</h2>
                <img :src="blok.image3.filename" class="h-80 rounded-md object-cover w-full md:w-80 mt-4" alt="">
                <button type="button"
                    class="rounded-lg w-1/2 mt-6 bg-secondary-green/90 px-4 py-1 hover:bg-secondary-green/70 duration-300">
                    <NuxtLink class="text-white" to="more/dauercamping">
                        Mehr Infos
                    </NuxtLink>
                </button>
            </div>
        </div>
    </div>
    <div class="container my-40 flex justify-center">
        <button type="button"
            class="rounded-md w-7/8 md:w-1/2 h-20 bg-primary-green px-4 py-1 hover:bg-secondary-green/70 duration-300">
            <NuxtLink class="text-white text-3xl" to="https://wildbach-camping.camping.care/" target="_blank">Zum
                Buchungsportal</NuxtLink>
        </button>
    </div>


</template>
