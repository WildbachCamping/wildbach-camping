<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>
    <section class="container pt-10">
        <div class="text-justify">
            <h2 class="text-4xl mb-4">{{ blok.title }}</h2>
            <h3 v-if="!blok.subtitle == ''" class="mb-4">{{ blok.subtitle }}</h3>
            <p class="text-lg">{{ blok.text }}</p>
            <p v-if="!blok.subtext == ''" class="text-lg mt-4">{{ blok.subtext }}</p>
        </div>
    </section>
</template>
