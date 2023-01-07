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

        <section class="cointainer  flex flex-col justify-center my-20">
            <div class="relative mt-20 ">
                <div class="container flex flex-col  items-center justify-center gap-x-24"
                    :class="blok.type === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'">
                    <!-- Image -->
                    <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0" :data-aos="`fade-${blok.type}`"
                        data-aos-duration="2000" data-aos-offset="250">
                        <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-md shadow-lg"
                            :src="blok.image.filename" :alt="blok.image.alt" />
                    </div>
                    <!-- Content -->
                    <div class="flex flex-1 flex-col items-center lg:items-start"
                        :data-aos="blok.type === 'right' ? 'fade-left' : ''" data-aos-duration="2000"
                        data-aos-offset="250">
                        <h1 class="text-3xl text-center text-bookmark-blue">{{ blok.title }}</h1>
                        <p class="text-justify my-4 lg:text-left sm:w-3/4 lg:w-full">
                            {{ blok.text }}
                        </p>
                        <div class="flex gap-x-5">
                            <ul>
                                <li v-for="action in blok.actions">
                                    <StoryblokComponent :blok="action" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Rounded Rectangle -->
            </div>
        </section>
    </div>
</template>