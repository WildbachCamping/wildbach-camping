<template>
  <div class="container pt-10">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide v-for="image in blok.blocks">
        <StoryblokComponent :blok="image" :visible="true" />
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="8"
      :slidesPerView="5"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
    >
      <swiper-slide v-for="image in blok.blocks">
        <StoryblokComponent :blok="image" :visible="false" :thumbnail="true" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/bundle";

const modules = ref([FreeMode, Navigation, Thumbs]);
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style scoped></style>
