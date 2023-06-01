<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center pt-20">
    <img
      :src="blok.image[0]?.filename"
      alt=""
      class="max-h-[60vh] min-h-[60vh] w-full rounded-md object-cover shadow-md md:w-5/6"
    />
    <p class="mt-4">{{ blok.caption }}</p>
  </div>
</template>
