<template>
    <div>
        <ul class="w-20 flex gap-2">
            <li class="bg-gray-50 cursor-pointer p-2" v-for="locale in locales" @click="changeLang(locale)">{{ locale }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { usePreferredLanguages } from '@vueuse/core'

const languages = usePreferredLanguages()
console.log(languages.value);
const locales = reactive({ de: 'de', nl: 'nl' })


const changeLang = (locale) => {
    localStorage.setItem('langStore', `${locale}`)
    location.reload()
    console.log(localStorage.getItem('langStore'))
}
</script>

