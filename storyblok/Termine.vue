<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>
<template>
    <div>
        <section class="container">
            <h2>{{ blok.title }}</h2>
            <p>{{ blok.anmeldung.url }}</p>
            <p>{{ blok.date }}</p>
            <p>{{ blok.description.content }}</p>
            <p>{{ blok.description.content }}</p>

            {{ blok }}



        </section>
    </div>
</template>