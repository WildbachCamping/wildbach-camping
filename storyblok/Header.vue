<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>
    <section class="container mt-20 ">
        <div class="text-justify">
            <h1 class="text-4xl md:text-5xl mb-4">{{ blok.title }}</h1>
            <h2 v-if="!blok.subtitle == ''" class="mb-4">{{ blok.subtitle }}</h2>
            <p class="text-base sm:text-lg">{{ blok.text }}</p>
            <p v-if="!blok.subtext == ''" class="text-lg mt-4">{{ blok.subtext }}</p>
        </div>
    </section>
</template>
