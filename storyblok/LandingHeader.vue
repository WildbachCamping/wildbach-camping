<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>

    <section class="container min-h-[60vh] pt-10 flex flex-col justify-center items-center" id="welcome">

        <div class="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="500">
            <h1 class=" font-bold mb-4">{{ blok.title }}</h1>

        </div>
        <div class="text-center pt-6" data-aos="fade-right" data-aos-delay="700" data-aos-offset="500"
            data-aos-duration="2000">
            <h1 class="font-bold mb-4">{{ blok.subtitle }}</h1>

        </div>
    </section>


</template>
