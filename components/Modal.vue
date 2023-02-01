<template>
    <transition name="modal-animation" enter-from-class="opacity-0" leave-to-class="opacity-0"
        leave-active-class="transition-all ease-[cubic-bezier(0.52,0.02,0.19, 1.02)] duration-700"
        enter-active-class="transition-all ease-[cubic-bezier(0.52,0.02,0.19, 1.02)] duration-700">
        <div v-show="props.modalActive"
            class="modal flex justify-center items-center h-screen w-full top-0 left-0 fixed bg-gray-700/60">
            <transition name="modal-animation-inner">
                <div v-show="props.modalActive" class="p-5 max-w-lg w-4/5 flex flex-col bg-white rounded-md">
                    <!-- Modal Content -->
                    <slot></slot>
                    <button
                        class="bg-secondary-green rounded-3xl m-1 text-white hover:bg-primary-green active:translate-y-px transition-all ease-linear duration-300"
                        @click="accept">{{ locale == 'nl' ? 'Accepteer' : 'Akzeptieren' }}</button>
                    <div class="flex flex-col md:flex-row ">
                        <button
                            class="flex-1 bg-primary-white m-1 rounded-3xl hover:bg-primary-green active:translate-y-px transition-all ease-linear duration-300"
                            @click="decline">{{ locale == 'nl' ? 'Daling' : 'Ablehnen'
                            }}</button>
                        <button
                            class="flex-1 bg-primary-white m-1 rounded-3xl hover:bg-primary-green active:translate-y-px transition-all ease-linear duration-300">
                            <NuxtLink class="" @click="close" to="/datenschutz">{{ locale == 'nl' ?
                            'Verdere informatie' : 'Weitere Informationen' }}
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

const props = defineProps(['modalActive'])

const emit = defineEmits(['accept', 'decline', 'close'])

const accept = () => {
    emit('accept')
}
const decline = () => {
    emit('decline')
}
const close = () => {
    emit('close')
}
const locale = localStorage.getItem('langStore')
</script>

<style lang="scss" scoped>

</style>