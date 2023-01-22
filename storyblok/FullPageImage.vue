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





    </section>


</template>
