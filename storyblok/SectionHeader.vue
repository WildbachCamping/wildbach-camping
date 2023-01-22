<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>

    <section class="container  mt-32 flex ">

        <div class="w-full text-center">
            <h2 class="text-3xl mb-4">{{ blok.title }}</h2>
        </div>
        <div v-if="blok.subtitle" class="text-center pt-6" data-aos="fade-right" data-aos-delay="700"
            data-aos-offset="500" data-aos-duration="2000">
            <h2 class="text-5xl mb-4">{{ blok.subtitle }}</h2>

        </div>
    </section>


</template>
