<template>
    <section class="container flex flex-col items-center mt-20">
        <div class="grid grid-cols-12 grid-row-11 gap-1 sm:gap-2 md:gap-3 ld:gap-4" v-if="!screen">
            <img src="@/assets/images/events/event-1.jpeg" alt=""
                class="col-span-4 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
            <img src="@/assets/images/events/event-2.jpeg" alt=""
                class="col-span-4 row-span-2 object-cover h-full rounded-sm shadow-md">
            <img src="@/assets/images/events/event-8.jpeg" alt=""
                class="col-span-4 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
            <img src="@/assets/images/events/event-6.jpeg" alt=""
                class="col-span-5 row-span-1 w-full h-full  object-cover rounded-sm shadow-md">
            <img src="@/assets/images/events/event-4.jpeg" alt=""
                class="col-span-7 row-span-1 w-full h-full  object-cover rounded-sm shadow-md">

            <img src="@/assets/images/events/event-5.jpeg" alt=""
                class="col-span-6 row-span-1 w-full h-full  object-cover rounded-sm shadow-md">
            <img src="@/assets/images/events/event-7.jpeg" alt=""
                class="col-span-6 row-span-1 w-full h-full  object-cover rounded-sm shadow-md">
            <img src="@/assets/images/events/event-3.jpeg" alt=""
                class="col-span-5 row-span-2 w-full h-full  object-cover rounded-sm shadow-md">
            <img src="@/assets/images/events/event-9.jpeg" alt=""
                class="col-span-7 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
        </div>
        <div class="max-w-[98vw]" v-if="screen">
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
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css/bundle';
const screen = useState('screen')

const modules = ref([FreeMode, Navigation, Thumbs])
const thumbsSwiper = ref(null);
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style scoped>
img {
    max-height: 50vh;
}
</style>