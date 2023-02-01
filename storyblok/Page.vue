<template>
    <div v-editable="blok" class="min-h-screen">
        <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
</template>

<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
Weglot.initialize({
    api_key: 'wg_2895a86e8d48d5ef2d6baf990e41ea880'
});
</script>

