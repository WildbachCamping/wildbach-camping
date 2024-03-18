<template>
  <div>
    <ul class="flex w-20 gap-2">
      <li
        class="px cursor-pointer bg-gray-50"
        v-for="locale in locales"
        @click="changeLang(locale)"
      >
        <img
          :src="`/${locale}.svg`"
          :alt="locale"
          class="min-w-10 max-h-[20px] min-h-[20px] object-cover"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { usePreferredLanguages } from "@vueuse/core";

const languages = usePreferredLanguages();

const locales = reactive({ de: "de", nl: "nl" });

if (typeof window !== "undefined") {
  const changeLang = (locale) => {
    localStorage.setItem("langStore", `${locale}`);
    location.reload();
  };
}
</script>
