<template>
    <div>

        <Head>
            <Title>Termine</Title>
            <Meta name="description" />
        </Head>
        <div class="container">

            <swiper class="h-[80vh]" :slides-per-view="1" :space-between="50" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide class="h-full"><img src="@/assets/images/umgebung/umgebung-1.jpeg" alt=""
                        class="col-span-4 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                </swiper-slide>
                <swiper-slide><img src="@/assets/images/umgebung/umgebung-2.jpeg" alt=""
                        class="col-span-5 row-span-2 object-cover h-full rounded-sm shadow-md">
                </swiper-slide>
                <swiper-slide><img src="@/assets/images/umgebung/umgebung-3.jpeg" alt=""
                        class="col-span-3 row-span-2 w-full h-full object-cover rounded-sm shadow-md"></swiper-slide>
            </swiper>
        </div>
        <!-- <button @click="swipe.slideNext()">Slide to the next slide</button> -->
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
// const swipe = useSwiper();

</script>
