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
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="2500"
            data-aos-delay="500">
            <li v-for="column in blok.columns">
                <StoryblokComponent :blok="column" />
            </li>
        </ul>
    </div>
</template>