<template>
    <div>
        <ul class="w-20 flex gap-2">
            <li class="bg-gray-50 cursor-pointer px" v-for="locale in locales" @click="changeLang(locale)"><img
                    :src="`/${locale}.svg`" :alt="locale" class="w-8 max-h-[25px] min-h-[25px] object-cover">
            </li>
        </ul>
    </div>
</template>

<script setup>
import { usePreferredLanguages } from '@vueuse/core'

const languages = usePreferredLanguages()

const locales = reactive({ de: 'de', nl: 'nl' })


const changeLang = (locale) => {
    localStorage.setItem('langStore', `${locale}`)
    location.reload()
}
</script>

