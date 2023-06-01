<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="container mt-28 flex flex-col items-center justify-center gap-6">
    <h2
      class="text-center text-3xl"
      data-aos="fade-up"
      data-aos-duration="2500"
      data-aos-delay="500"
      data-aos-offset="350"
    >
      {{ blok.more }}
    </h2>
    <div
      class="container mt-8 flex flex-col items-center justify-center gap-6 lg:flex-row"
    >
      <div
        class="flex flex-col items-center md:pt-12"
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-offset="450"
        data-aos-delay="500"
      >
        <h2>{{ blok.header1 }}</h2>
        <img
          :src="blok.image1.filename"
          class="mt-4 h-80 w-full rounded-md object-cover md:w-80"
          alt=""
        />
        <button
          type="button"
          class="mt-6 w-1/2 rounded-lg bg-secondary-green/90 px-4 py-1 duration-300 hover:bg-secondary-green/70"
        >
          <NuxtLink class="text-white" to="/camping">
            {{ blok.information }}
          </NuxtLink>
        </button>
      </div>
      <div
        class="flex flex-col items-center pt-12"
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-offset="450"
        data-aos-delay="500"
      >
        <h2>{{ blok.header2 }}</h2>
        <img
          :src="blok.image2.filename"
          class="mt-4 h-80 w-full rounded-md object-cover md:w-80"
          alt=""
        />
        <button
          type="button"
          class="mt-6 w-1/2 rounded-lg bg-secondary-green/90 px-4 py-1 duration-300 hover:bg-secondary-green/70"
        >
          <NuxtLink class="text-white" to="more/mietobjekte">
            {{ blok.information }}
          </NuxtLink>
        </button>
      </div>
      <div
        class="flex flex-col items-center pt-12"
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-offset="450"
        data-aos-delay="500"
      >
        <h2>{{ blok.header3 }}</h2>
        <img
          :src="blok.image3.filename"
          class="mt-4 h-80 w-full rounded-md object-cover md:w-80"
          alt=""
        />
        <button
          type="button"
          class="mt-6 w-1/2 rounded-lg bg-secondary-green/90 px-4 py-1 duration-300 hover:bg-secondary-green/70"
        >
          <NuxtLink class="text-white" to="more/dauercamping">
            {{ blok.information }}
          </NuxtLink>
        </button>
      </div>
    </div>
  </div>
  <div class="container my-40 flex justify-center">
    <button
      type="button"
      class="w-7/8 h-20 rounded-md bg-primary-green px-4 py-1 duration-300 hover:bg-secondary-green/70 md:w-1/2"
    >
      <NuxtLink
        class="text-3xl text-white"
        to="https://wildbach-camping.camping.care/"
        target="_blank"
      >
        {{ blok.buchung }}</NuxtLink
      >
    </button>
  </div>
</template>
