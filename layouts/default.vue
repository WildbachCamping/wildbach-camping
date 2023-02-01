<template>


  <Navigation />
  <div class="pt-20 min-h-screen max-w-[100vw]">
    <slot />
  </div>
  <Footer />

</template>
<script setup>



Weglot.initialize({
  api_key: 'wg_2895a86e8d48d5ef2d6baf990e41ea880'
});



</script>