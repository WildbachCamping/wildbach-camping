<template>
    <div>
        <section class="container flex flex-col items-center mt-20">
            <div class="grid grid-cols-12 grid-row-11 gap-1 sm:gap-2 md:gap-3 ld:gap-4 w-full">
                <img src="@/assets/images/dauercamping/dauercamping-1.jpeg" alt=""
                    class="col-span-7 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/dauercamping/dauercamping-2.jpeg" alt=""
                    class="col-span-5 row-span-2 object-cover h-full rounded-sm shadow-md">
                <img src="@/assets/images/dauercamping/dauercamping-3.jpeg" alt=""
                    class="col-span-6 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/dauercamping/dauercamping-4.jpeg" alt=""
                    class="col-span-6 row-span-2 w-full h-full  object-cover rounded-sm shadow-md">

            </div>
            <div class="container pt-10">
                <swiper :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                    class="mySwiper2 ">
                    <swiper-slide v-for="image in blok.blocks">
                        <StoryblokComponent :blok="image" :visible="true" />
                    </swiper-slide>
                </swiper>

            </div>
        </section>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css/bundle';


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
    height: 40vh;
}
</style>