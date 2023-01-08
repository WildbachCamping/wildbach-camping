<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>
<template>
    <div class="container">
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li v-for="column in blok.columns">
                <StoryblokComponent :blok="column" />
            </li>
        </ul>
    </div>
</template>