<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css/bundle';
const screen = useState('screen');

const modules = ref([FreeMode, Navigation, Thumbs]);
const thumbsSwiper = ref(null);

const props = defineProps({
    blok: {
        type: Object,
        default: () => ({}),
    },
});
</script>

<template>
    <div>
        <section class="container mt-20 flex flex-col items-center">
            <div class="grid-row-2 ld:gap-4 grid grid-cols-12 gap-1 sm:gap-2 md:gap-3" v-if="!screen">
                <img :src="blok.image1.filename" :alt="blok.image1.alt"
                    class="col-span-7 row-span-2 h-[40vh] w-full rounded-sm object-cover shadow-md" />
                <img :src="blok.image2.filename" :alt="blok.image2.alt"
                    class="col-span-5 row-span-2 h-[40vh] rounded-sm object-cover shadow-md" />
                <img :src="blok.image3.filename" :alt="blok.image3.alt"
                    class="col-span-6 row-span-2 h-full w-full rounded-sm object-cover shadow-md" />
                <img :src="blok.image4.filename" :alt="blok.image4.alt"
                    class="col-span-6 row-span-2 h-full w-full rounded-sm object-cover shadow-md" />
            </div>
            <div class="max-w-[98vw]" v-if="screen">
                <swiper :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                    class="mySwiper2">
                    <swiper-slide v-for="image in blok.blocks">
                        <StoryblokComponent :blok="image" :visible="true" />
                    </swiper-slide>
                </swiper>
            </div>
        </section>
    </div>
</template>
<style scoped>
img {
    height: 40vh;
}
</style>
