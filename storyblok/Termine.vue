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
    <section class="container mt-10 flex flex-col items-center">
      <div v-if="blok.visible" class="relative flex flex-col items-center">
        <div
          class="flex w-full flex-col-reverse items-center justify-center gap-x-24 lg:flex-row"
        >
          <!-- Image -->
          <div class="mb-10 flex flex-1 justify-center lg:mb-0">
            <img
              class="max-h-[65vh] rounded-md shadow-lg"
              :src="blok.image[0].filename"
              :alt="blok.image.alt"
            />
          </div>
          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <div class="my-4 flex flex-col gap-4 text-justify lg:text-left">
              <h2>{{ blok.title }}</h2>
              <p>{{ blok.text }}</p>
              <p v-if="blok.anmeldung">
                Anmeldung:
                <a
                  class="underline underline-offset-2"
                  :href="blok.anmeldung.url"
                  >Kontaktiere uns per Mail</a
                >
              </p>
              <p>Datum: {{ blok.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
