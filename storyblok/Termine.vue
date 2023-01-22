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
        <section class=" flex flex-col items-center  container mt-10">
            <div v-if="blok.visible" class="relative  flex flex-col items-center">
                <div class="w-full flex flex-col-reverse  items-center justify-center gap-x-24 lg:flex-row">
                    <!-- Image -->
                    <div class=" flex flex-1 justify-center mb-10 lg:mb-0">
                        <img class="rounded-md shadow-lg max-h-[65vh]" :src="blok.image[0].filename"
                            :alt="blok.image.alt" />
                    </div>
                    <!-- Content -->
                    <div class="flex flex-1 flex-col items-center lg:items-start">
                        <div class="text-justify my-4 lg:text-left flex flex-col gap-4">
                            <h2>{{ blok.title }}</h2>
                            <p> {{ blok.text }} </p>
                            <p>Anmeldung: <a class="underline underline-offset-2" :href="blok.anmeldung.url">Kontaktiere
                                    uns per Mail</a>
                            </p>
                            <p>Datum: {{ blok.date }}</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    </div>
</template>