<script setup lang="ts">
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="container mt-10">
    <h2 class="">{{ blok.title }}</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <img
          class="max-h-full w-full rounded-md object-cover shadow-md"
          :src="blok.image1.filename"
          alt=""
        />
      </div>
      <div>
        <ul class="list-disc pl-8 pt-2 leading-relaxed lg:text-xl">
          <li v-for="item in blok.liste.content[0].content">
            {{ item.content[0].content[0].text }}
          </li>
        </ul>
      </div>
      <div>
        <img
          class="max-h-[500px] min-h-full w-full rounded-md object-cover shadow-md"
          :src="blok.image2.filename"
          alt=""
        />
      </div>
      <div>
        <img
          class="max-h-[500px] min-h-full w-full rounded-md object-cover shadow-md"
          :src="blok.image3.filename"
          alt=""
        />
      </div>
    </div>

    <table class="mt-4 w-full table-auto border-separate border-spacing-2">
      <thead>
        <tr class="bg-primary-green">
          <th class="rounded-sm px-2 py-1" v-for="th in blok.conditions.thead">
            {{ th.value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tr in blok.conditions.tbody">
          <td
            class="rounded-sm bg-primary-white px-1 text-sm last:text-center md:px-2 md:py-1 md:text-lg"
            v-for="td in tr.body"
          >
            {{ td.value }}
          </td>
        </tr>
      </tbody>
    </table>

    <p class="text-xs" v-for="item in blok.footnote.content">
      {{ item.content[0].text }}
    </p>
    <button
      type="button"
      class="mt-10 rounded-full bg-gray-800/90 px-4 py-1 duration-300 hover:bg-gray-800/70"
      v-if="blok.pdf"
    >
      <NuxtLink
        class="flex gap-2 text-white"
        :to="blok.pdf?.filename"
        target="_blank"
        >{{ blok.label }}
        <img src="@/assets/images/open-outline.svg" class="w-5" alt=""
      /></NuxtLink>
    </button>
  </div>
</template>
