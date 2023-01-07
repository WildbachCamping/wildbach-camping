<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({}),
    },
});
</script>
<template>
  <div>
    <button
      type="button"
      class="rounded-full bg-gray-800/90 px-4 py-1 hover:bg-gray-800/70 duration-300"
    >
      <NuxtLink class="text-white" :to="blok.link">{{ blok.label }}</NuxtLink>
    </button>
  </div>
</template>
