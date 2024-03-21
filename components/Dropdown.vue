<template>
  <Popover class="relative">
    <PopoverButton
      class="inline-flex items-center gap-x-1 border-b-[2px] border-transparent pb-1 font-semibold leading-6 text-white transition-all duration-500 ease-in-out hover:border-b-white"
    >
      <span>{{ $t("moreOffers") }}</span>
      <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
    </PopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <PopoverPanel
        class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
      >
        <div
          class="text-md w-56 shrink rounded-xl bg-white p-4 font-semibold leading-6 text-gray-900 shadow-lg"
        >
          <NuxtLink
            v-for="item in submenu"
            :key="item.name"
            :to="localePath(item.to)"
            class="block rounded-lg p-2 hover:bg-gray-50"
            >{{ $t(item.name) }}
          </NuxtLink>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
const { t } = useI18n();

const submenu = [
  { name: "rentalObjects", to: "/mietobjekte" },
  { name: "permanentCamping", to: "/dauercamping" },
  { name: "events", to: "/events" },
  { name: "back2Basic", to: "/back2basic" },
];
</script>
