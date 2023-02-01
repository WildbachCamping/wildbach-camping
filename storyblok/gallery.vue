
<template>


    <div class="container">
        <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
            class="mySwiper2 ">
            <swiper-slide v-for="image in blok.blocks">
                <StoryblokComponent :blok="image" :visible="true" />
            </swiper-slide>
        </swiper>
        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
            :watchSlidesProgress="true" :modules="modules" class="max-h-[40vh]">
            <swiper-slide v-for="image in blok.blocks">
                <StoryblokComponent :blok="image" :visible="false" />
            </swiper-slide>

        </swiper>
    </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

const modules = ref([FreeMode, Navigation, Thumbs])
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
}
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>
<style scoped>
img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 0.25rem;
}
</style>