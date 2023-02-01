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
            :class="['object-cover w-full rounded-md shadow-md max-h-[60vh]', thumbnail ? 'max-h-[20vh] ' : '']">
        <p v-if="visible == true" class="mt-4">{{ blok.image.title }}</p>
    </div>

</template>
<style scoped>

</style>
