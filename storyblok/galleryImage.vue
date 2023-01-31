<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>


    <div class="pt-20 flex flex-col justify-center items-center">
        <img :src="blok.image[0]?.filename" alt=""
            class="max-h-[60vh] min-h-[60vh] object-cover w-full md:w-5/6 rounded-md shadow-md">
        <p class="mt-4">{{ blok.caption }}</p>
    </div>



</template>
