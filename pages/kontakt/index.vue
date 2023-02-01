<template>
  <div>

    <Head>
      <Title>Kontakt</Title>
      <Meta name="description" />
    </Head>
    <StoryblokComponent v-if="story" :blok="story.content" />

  </div>
</template>

<script setup>
const story = await useAsyncStoryblok("kontakt", { version: "draft" });

</script>
