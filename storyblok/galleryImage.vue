<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    },
    visible: {
        type: Boolean
    }
})
</script>

<template>


    <div class="pt-20 flex flex-col justify-center items-center">
        <img :src="blok.image?.filename" alt=""
            class="max-h-[60vh] min-h-[60vh] object-cover w-full md:w-5/6 rounded-md shadow-md">
        <p v-if="visible == true" class="mt-4">{{ blok.image.title }}</p>
    </div>

</template>
<style scoped>
img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 0.25rem;
}
</style>
