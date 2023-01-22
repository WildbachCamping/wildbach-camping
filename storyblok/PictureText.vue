<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>
<template>


    <section class=" flex flex-col items-center mt-32 container">
        <h2 class="text-4xl md:text-5xl mb-4 md:mb-20 ">{{ blok.Header }}</h2>
        <div class="relative  flex flex-col items-center">
            <div class="w-full flex flex-col  items-center justify-center gap-x-24 lg:flex-row">
                <!-- Image -->
                <div class=" flex flex-1 justify-center mb-10 lg:mb-0">
                    <img class="rounded-md shadow-lg max-h-[65vh]" :src="blok.image[0].filename"
                        :alt="blok.image.alt" />
                </div>
                <!-- Content -->
                <div class="flex flex-1 flex-col items-center lg:items-start">
                    <p class="text-justify my-4 lg:text-left">
                        {{ blok.text }}
                    </p>

                </div>
            </div>
            <!-- Rounded Rectangle -->
        </div>
    </section>

</template>