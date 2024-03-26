<template>
  <Disclosure as="nav" class="bg-primary-green text-white w-screen z-50" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-secondary-green hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink :to="localePath('/')">
              <img
                class="h-16 w-auto"
                src="~/assets/images/WBC_white.svg"
                alt="Wildbach-Logo"
              />
            </NuxtLink>
          </div>
        </div>

        <div class="flex items-center">
          <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <NuxtLink
              class="border-b-[2px] border-b-transparent pb-1 transition duration-500 hover:border-b-white"
              :to="localePath('/camping')"
              >{{ $t("camping") }}
            </NuxtLink>
            <NuxtLink
              class="border-b-[2px] border-transparent pb-1 transition-all duration-500 ease-in-out hover:border-b-white"
              :to="localePath('/umgebung')"
              >{{ $t("surroundings") }}</NuxtLink
            >
            <NuxtLink
              class="border-b-[2px] border-transparent pb-1 transition-all duration-500 ease-in-out hover:border-b-white"
              :to="localePath('/galerie')"
              >{{ $t("gallery") }}</NuxtLink
            >
            <NuxtLink
              class="border-b-[2px] border-transparent pb-1 transition-all duration-500 ease-in-out hover:border-b-white"
              :to="localePath('/termine')"
              >{{ $t("dates") }}</NuxtLink
            >
            <Dropdown />
          </div>
          <div class="ml-3 flex-shrink-0">
            <button
              type="button"
              class="relative inline-flex items-center gap-x-1.5 rounded-md bg-primary-white px-3 py-2 text-sm font-semibold text-secondary-green shadow-sm hover:bg-secondary-green hover:text-primary-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-white"
            >
              <NuxtLink
                to="https://wildbach-camping.campalot.de/de"
                target="_blank"
              >
                {{ $t("bookNow") }}</NuxtLink
              >
            </button>
          </div>
          <div class="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
            <!-- Language dropdown -->
            <LangSwitcher />
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="space-y-2 px-2 pb-3 pt-2 sm:px-3">
        <DisclosureButton
          class="block "
        >
          <NuxtLink
            class="border-b-[2px] border-b-transparent pb-1 transition duration-500 hover:border-b-white"
            :to="localePath('/camping')"
            >{{ $t("camping") }}
          </NuxtLink>
        </DisclosureButton class="block">
        <DisclosureButton>
          <NuxtLink
            class="border-b-[2px] border-transparent pb-1 transition-all duration-500 ease-in-out hover:border-b-white"
            :to="localePath('/umgebung')"
            >{{ $t("surroundings") }}</NuxtLink
          ></DisclosureButton
        >
        <DisclosureButton class="block">
          <NuxtLink
            class="border-b-[2px] border-transparent pb-1 transition-all duration-500 ease-in-out hover:border-b-white"
            :to="localePath('/galerie')"
            >{{ $t("gallery") }}</NuxtLink
          ></DisclosureButton
        >
        <DisclosureButton
           class="block"><NuxtLink
            class="border-b-[2px] border-transparent pb-1 transition-all duration-500 ease-in-out hover:border-b-white"
            :to="localePath('/termine')"
            >{{ $t("dates") }}</NuxtLink
          ></DisclosureButton
        >
        <DisclosureButton class="block"><Dropdown /></DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const localePath = useLocalePath();
</script>
