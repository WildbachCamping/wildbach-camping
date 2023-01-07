<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>

    <section class="container  pt-10 flex ">

        <div class="">
            <h2 class="text-3xl mb-4">{{ blok.title }}</h2>

        </div>
        <div class="text-center pt-6" data-aos="fade-right" data-aos-delay="700" data-aos-offset="500"
            data-aos-duration="2000">
            <h1 class="text-5xl mb-4">{{ blok.subtitle }}</h1>

        </div>
    </section>


</template>
