<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>

    <section class="container  mt-32 flex flex-col items-center">
        <h2 class="text-4xl md:text-5xl mb-4 md:mb-10">{{ blok.title }}</h2>
        <img :src="blok.image[0]?.filename" alt="" class="shadow-md">

        <button type="button" class="rounded-full bg-gray-800/90 px-4 py-1 hover:bg-gray-800/70 duration-300 mt-10"
            v-if="blok.label">
            <NuxtLink class="text-white flex gap-2" :to="blok.pdf?.filename" target="_blank">{{ blok.label }} <img
                    src="@/assets/images/open-outline.svg" class="w-5" alt=""></NuxtLink>
        </button>
    </section>


</template>
