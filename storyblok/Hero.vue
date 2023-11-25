<script setup>
import { ArrowDownIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <Head>
    <Title>Wildbach Camping</Title>

    <Meta content="Startseite" />
  </Head>
  <div class="flex flex-col items-center">
    <div
      class="absolute bottom-[50%] z-10 mt-10 rounded-sm bg-primary-white/[.7] p-6 font-bold tracking-widest text-secondary-green md:p-20"
      data-aos="fade-up"
      data-aos-duration="2500"
      data-aos-delay="500"
    >
      <div class="flex flex-col items-center text-center">
        <h1
          class="min-w-max pb-5 text-4xl font-bold text-secondary-green md:text-5xl"
        >
          {{ blok.title }}
        </h1>
        <div class="text-xl">{{ blok.subtitle }}</div>
      </div>
    </div>
    <div
      class="min-w-screen absolute bottom-10 z-10 mx-auto flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-primary-green shadow-lg"
    >
      <a href="#welcome">
        <ArrowDownIcon class="h-8 w-8" />
      </a>
    </div>
  </div>
  <Dialog />
  <div
    class="relative max-h-[92vh] bg-cover bg-bottom bg-no-repeat md:mt-6 md:max-h-[90vh] md:bg-top"
    :style="{ backgroundImage: `url(${blok.image.filename})` }"
    style="height: 100vh"
  ></div>
</template>
