<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>


    <div class="pt-20 flex flex-col justify-center items-center mb-20">


        <picture class="min-h-[500px]">
            <img :src="blok.image[0]?.filename" alt="" class="h-full bg-cover max-h-[50vh] rounded-md shadow-md">
        </picture>
        <p class="mt-4">{{ blok.caption }}</p>



    </div>



</template>
