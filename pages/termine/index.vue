<template>
    <div class="w-full">

        <Head>
            <Title>Termine</Title>
            <Meta name="description" />
        </Head>


        <!-- <swiper class="h-[80vh]" :slides-per-view="1" :space-between="50" @swiper="onSwiper"
                @slideChange="onSlideChange" :navigation="true" :pagination="{ type: 'fraction' }" :modules="modules">
                <swiper-slide class="h-full"><img src="@/assets/images/umgebung/umgebung-1.jpeg" alt=""
                        class="col-span-4 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                </swiper-slide>
                <swiper-slide><img src="@/assets/images/umgebung/umgebung-2.jpeg" alt=""
                        class="col-span-5 row-span-2 object-cover h-full rounded-sm shadow-md">
                </swiper-slide>
                <swiper-slide><img src="@/assets/images/umgebung/umgebung-3.jpeg" alt=""
                        class="col-span-3 row-span-2 w-full h-full object-cover rounded-sm shadow-md"></swiper-slide>
            </swiper>
        </div> -->
        <!-- <button @click="swipe.slideNext()">Slide to the next slide</button> -->
        <Gallery />

    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
// const modules = ref([Navigation, Pagination])
// const onSwiper = (swiper) => {
//     console.log(swiper);
// };
// const onSlideChange = () => {
//     console.log('slide change');
// };
// const swipe = useSwiper();



</script>
