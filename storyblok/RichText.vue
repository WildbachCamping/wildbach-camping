<script setup>
const props = defineProps({ blok: Object });
const articleContent = computed(() => renderRichText(props.blok.textBlock));
</script>
<template>
  <section class="container my-4 flex flex-col items-center">
    <div v-html="articleContent" class="w-full text-justify"></div>
  </section>
</template>
