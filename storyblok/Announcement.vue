<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>
<template>
    <div>
        <section class="container pt-10  px-5 md:px-10 h-full mt-6">
            <div>
                <h2 class="text-4xl my-5 font-bold">{{ blok.title }}</h2>
                <p class="text-2xl">{{ blok.text }}</p>
            </div>
           
            <p class="text-2xl font-extrabold mt-4" v-if="blok.text2">{{ blok.text2 }}</p>
            


        </section>
    </div>
</template>