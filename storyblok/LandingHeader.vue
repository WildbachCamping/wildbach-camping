<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
Weglot.initialize({
    api_key: 'wg_2895a86e8d48d5ef2d6baf990e41ea880'
});
</script>

<template>
    <div id="welcome" class="mt-[-75px]"></div>
    <section class=" container min-h-[60vh] pt-10 flex flex-col justify-center items-center mt-20" id="welcome">

        <div class="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="500">
            <h2 class=" font-bold text-3xl md:text-4xl md:mb-4">{{ blok.title }}</h2>

        </div>
        <div class="text-center pt-2 md:pt-6" data-aos="fade-right" data-aos-delay="700" data-aos-offset="500"
            data-aos-duration="2000">
            <h2 class="font-bold text-3xl md:text-4xl mb-4">{{ blok.subtitle }}</h2>

        </div>
    </section>


</template>
