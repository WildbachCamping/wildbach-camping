<template>
    <div class="container">
        <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
            class="mySwiper2 ">
            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-2.jpg" />Guten Tag hier könnte ihre Werbung
                stehen</swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>
        </swiper>
        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
            :watchSlidesProgress="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide><swiper-slide><img
                    src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>
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

