<template>
  <transition
    name="modal-animation"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    leave-active-class="transition-all ease-[cubic-bezier(0.52,0.02,0.19, 1.02)] duration-700"
    enter-active-class="transition-all ease-[cubic-bezier(0.52,0.02,0.19, 1.02)] duration-700"
    class="z-50"
  >
    <div
      v-show="props.modalActive"
      class="modal fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-gray-700/60"
    >
      <transition name="modal-animation-inner">
        <div
          v-show="props.modalActive"
          class="flex w-4/5 max-w-lg flex-col rounded-md bg-white p-5"
        >
          <!-- Modal Content -->
          <slot></slot>
          <button
            class="m-1 rounded-3xl bg-secondary-green text-white transition-all duration-300 ease-linear hover:bg-primary-green active:translate-y-px"
            @click="accept"
          >
            {{ locale == "nl" ? "Accepteer" : "Akzeptieren" }}
          </button>
          <div class="flex flex-col md:flex-row">
            <button
              class="m-1 flex-1 rounded-3xl bg-primary-white transition-all duration-300 ease-linear hover:bg-primary-green active:translate-y-px"
              @click="decline"
            >
              {{ locale == "nl" ? "Daling" : "Ablehnen" }}
            </button>
            <button
              class="m-1 flex-1 rounded-3xl bg-primary-white transition-all duration-300 ease-linear hover:bg-primary-green active:translate-y-px"
            >
              <NuxtLink class="" @click="close" to="/datenschutz"
                >{{
                  locale == "nl"
                    ? "Verdere informatie"
                    : "Weitere Informationen"
                }}
              </NuxtLink>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
// import { XIcon } from '@heroicons/vue/24/outline';

const props = defineProps(["modalActive"]);

const emit = defineEmits(["accept", "decline", "close"]);

const accept = () => {
  emit("accept");
};
const decline = () => {
  emit("decline");
};
const close = () => {
  emit("close");
};
let locale = "de";
if (typeof window !== "undefined") {
  const locale = localStorage.getItem("langStore");
}
</script>

<style lang="scss" scoped></style>
