<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="container flex flex-col items-center pt-10">
    <button
      type="button"
      class="mt-10 rounded-full bg-gray-800/90 px-4 py-1 duration-300 hover:bg-gray-800/70"
    >
      <NuxtLink
        class="flex gap-2 text-white"
        :to="blok.pdf?.filename"
        target="_blank"
        >{{ blok.label }}
        <img src="@/assets/images/open-outline.svg" class="w-5" alt=""
      /></NuxtLink>
    </button>
  </div>
</template>
