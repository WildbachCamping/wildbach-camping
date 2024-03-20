<template>
  <div>
    <ul class="flex w-20 gap-2">
      <li
        class="px cursor-pointer bg-gray-50"
        v-for="locale in availableLocales"
      >
        <NuxtLink :to="switchLocalePath(lang)">
          <img
            :src="`/${locale}.svg`"
            :alt="locale"
            class="max-h-[20px] min-h-[20px] min-w-10 object-cover"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
