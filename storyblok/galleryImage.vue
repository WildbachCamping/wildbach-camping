<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    },
    visible: Boolean

    ,
    thumbnail: Boolean
})
</script>

<template>


    <div class="pt-20 flex flex-col justify-center items-center">
        <img :src="blok.image?.filename" alt=""
            :class="['object-cover w-full rounded-md shadow-md min-h-[40vh] max-h-[40vh] md:max-h-[75vh]', thumbnail ? 'max-h-[10vh] md:max-h-[25vh]  md:min-h-[25vh]' : '']">
        <p v-if="visible == true" class="mt-4">{{ blok.image.title }}</p>
    </div>

</template>
<style scoped>

</style>
