<template>
  <div>
    <section class="container mt-20 flex flex-col items-center px-5">
      <div class="flex flex-col items-center pt-10">
        <p class="text-center">{{ blok.header }}</p>
        <NuxtLink class="flex flex-col items-center">
          <img
            src="@/assets/images/umgebung/nordeifeltourismus.jpeg"
            class="h-26 w-24"
            alt=""
          />
          <p class="underline underline-offset-2">{{ blok.linktext }}</p>
        </NuxtLink>
      </div>
      <div
        class="grid grid-flow-row grid-cols-1 gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <NuxtLink
          to="https://nordeifel-tourismus.de/aktivzeit/natur-erleben/nationalpark-eifel"
          target="_blank"
          class="flex flex-col items-center justify-center"
        >
          <img
            class="h-48 w-48 rounded-md shadow-md"
            src="@/assets/images/umgebung/Nationalpark.svg"
            alt="Nationalpark Eifel"
          />
          <p class="mt-2 w-4/5 text-center text-base">{{ blok.icontext1 }}</p>
        </NuxtLink>
        <NuxtLink
          to="https://regio.outdooractive.com/oar-nordeifel-tourismus/de/touren/#area=*&filter=r-fullyTranslatedLangus-,r-onlyOpened-,sb-sortedBy-0&q=hellenthal"
          target="_blank"
          class="flex flex-col items-center justify-center"
        >
          <img
            class="h-48 w-48 rounded-md shadow-md"
            src="@/assets/images/umgebung/Wanderung.svg"
            alt="Wanderung"
          />
          <p class="w-7/8 mt-2 text-center text-base">{{ blok.icontext2 }}</p>
        </NuxtLink>
        <NuxtLink
          to="https://nordeifel-tourismus.de/aktivzeit/radfahren"
          target="_blank"
          class="flex flex-col items-center justify-center"
        >
          <img
            class="h-48 w-48 rounded-md shadow-md"
            src="@/assets/images/umgebung/Radfahren.svg"
            alt="Infos zum Radfahren"
          />
          <p class="mt-2 w-4/5 text-center text-base">{{ blok.icontext3 }}</p>
        </NuxtLink>
        <NuxtLink
          to="https://nordeifel-tourismus.de/aktivzeit/radfahren/uebersicht-radrouten"
          target="_blank"
          class="flex flex-col items-center justify-center"
        >
          <img
            class="h-48 w-48 rounded-md shadow-md"
            src="@/assets/images/umgebung/MTB.svg"
            alt="Fahrrad und Mountainbike Touren"
          />
          <p class="w-7/8 mt-2 text-center text-base">{{ blok.icontext4 }}</p>
        </NuxtLink>
        <NuxtLink
          to="https://www.naturpark-eifel.de/de/landschaften/hohes-venn/"
          target="_blank"
          class="flex flex-col items-center justify-center"
        >
          <img
            class="h-48 w-48 rounded-md shadow-md"
            src="@/assets/images/umgebung/HohesVenn.svg"
            alt="Naturpark Hohes Venn"
          />
          <p class="w-7/8 mt-2 text-center text-base">{{ blok.icontext5 }}</p>
        </NuxtLink>
        <NuxtLink
          to="https://www.monschau.de/de/"
          target="_blank"
          class="flex flex-col items-center justify-center"
        >
          <img
            class="h-48 w-48 rounded-md shadow-md"
            src="@/assets/images/umgebung/Monschau.svg"
            alt="Altstadt Monschau"
          />
          <p class="mt-2 text-center text-base">{{ blok.icontext6 }}</p>
        </NuxtLink>
        <NuxtLink
          to="https://nordeifel-tourismus.de/familienzeit/wildparks/greifvogelstation-wildfreigehege-hellenthal"
          target="_blank"
          class="flex flex-col items-center justify-center"
        >
          <img
            class="h-48 w-48 rounded-md shadow-md"
            src="@/assets/images/umgebung/Wildgehege.svg"
            alt="Wildfreigehege Hellentahl"
          />
          <p class="w-7/8 mt-2 text-center text-base">{{ blok.icontext7 }}</p>
        </NuxtLink>
        <NuxtLink
          to="https://nordeifel-tourismus.de/familienzeit/eifel-guides"
          target="_blank"
          class="flex flex-col items-center justify-center"
        >
          <img
            class="h-48 w-48 rounded-md shadow-md"
            src="@/assets/images/umgebung/Touren.svg"
            alt="Individuelle Touren"
          />
          <p class="w-7/8 mt-2 text-center text-base">{{ blok.icontext8 }}</p>
        </NuxtLink>
      </div>
    </section>

    <section class="container mt-20 flex flex-col items-center">
      <div
        class="grid-row-11 ld:gap-4 grid w-full grid-cols-12 gap-1 sm:gap-2 md:gap-3"
        v-if="!screen"
      >
        <img
          src="@/assets/images/umgebung/umgebung-1.jpeg"
          alt=""
          class="col-span-4 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-2.jpeg"
          alt=""
          class="col-span-5 row-span-2 h-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-3.jpeg"
          alt=""
          class="col-span-3 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-4.jpeg"
          alt=""
          class="col-span-6 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-5.jpeg"
          alt=""
          class="col-span-6 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-6.jpeg"
          alt=""
          class="col-span-3 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-7.jpeg"
          alt=""
          class="col-span-6 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-8.jpeg"
          alt=""
          class="col-span-3 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-9.jpeg"
          alt=""
          class="col-span-6 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-10.jpeg"
          alt=""
          class="col-span-6 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-11.jpeg"
          alt=""
          class="col-span-4 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-12.jpeg"
          alt=""
          class="col-span-4 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
        <img
          src="@/assets/images/umgebung/umgebung-13.jpeg"
          alt=""
          class="col-span-4 row-span-2 h-full w-full rounded-sm object-cover shadow-md"
        />
      </div>
      <div class="max-w-[98vw]" v-if="screen">
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
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/bundle";

const screen = useState("screen");
const modules = ref([FreeMode, Navigation, Thumbs]);
const thumbsSwiper = ref(null);
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped>
img {
  max-height: 50vh;
}
</style>
