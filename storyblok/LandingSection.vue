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

        <section class="cointainer flex flex-col justify-center my-20">
            <div class="relative mt-20 flex flex-col items-center">
                <div class="w-3/4 flex flex-col-reverse  items-center justify-center gap-x-24"
                    :class="blok.type === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'">
                    <!-- Image -->
                    <div class="flex flex-1 justify-center mb-10 lg:mb-0" :data-aos="blok.animation"
                        data-aos-duration="2000" data-aos-offset="250">
                        <img class="rounded-md shadow-lg" :src="blok.image.filename" :alt="blok.image.alt" />
                    </div>
                    <!-- Content -->
                    <div class="flex flex-1 flex-col items-center lg:items-start" :data-aos="blok.animation"
                        data-aos-duration="2000" data-aos-offset="250">
                        <h1 class="text-3xl text-center text-bookmark-blue">{{ blok.title }}</h1>
                        <p class="text-justify my-4 lg:text-left">
                            {{ blok.text }}
                        </p>
                        <div class="flex gap-x-5 mb-3">
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