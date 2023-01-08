<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>

    <section class="container min-h-[60vh] pt-10 flex flex-col justify-center items-center">

        <div class="text-center">
            <h2 class="text-5xl mb-4">{{}}</h2>

            <picture>
                <img :src="blok.image[0]?.filename" alt="">
            </picture>



        </div>
    </section>


</template>
