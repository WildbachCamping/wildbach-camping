<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
  visible: Boolean,

  thumbnail: Boolean,
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <img
      :src="blok.image?.filename"
      alt=""
      :class="[
        'w-full rounded-md object-cover shadow-md',
        thumbnail
          ? 'max-h-[10vh] min-h-[10vh] md:max-h-[25vh]  md:min-h-[25vh]'
          : 'max-h-[40vh] min-h-[40vh] md:max-h-[75vh]',
      ]"
    />
    <p v-if="visible == true" class="mt-4">{{ blok.image.title }}</p>
  </div>
</template>
<style scoped></style>
