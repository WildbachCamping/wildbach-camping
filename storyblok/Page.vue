<template>
  <div v-editable="blok" class="min-h-screen">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>
