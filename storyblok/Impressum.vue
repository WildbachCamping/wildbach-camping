<template>
  <div>
    <section class="container">
      <div class="flex flex-1 flex-col">
        <h2 class="text-3xl">CL Schmitz GmbH</h2>
        <p>Platiß 1</p>
        <p>53940 Hellenthal</p>
        <p>Telefon: +492482/1500</p>
        <p>Mail: info@wildbach-camping.de</p>
        <p>Web: www.wildbach-camping.de</p>
        <br />
        <p>Geschäftsführer:</p>
        <p>Clemens Schmitz</p>
        <p>Lorenz Schmitz</p>
        <br />
        <p>Umsatzsteuer- ID: DE338083275</p>
        <br />
        <p>HRB 8522 B Amtsgericht Düren</p>
        <br />
        <p>{{ blok.Sources }}</p>
      </div>
    </section>
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
