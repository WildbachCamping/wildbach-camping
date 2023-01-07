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

        <div class="text-center">
            <h1 class="text-5xl mb-4">{{}}</h1>

            <picture>
                <img :src="blok.image[0]?.filename" alt="">
            </picture>



        </div>
    </section>


</template>
