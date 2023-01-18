<script setup lang="ts">
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>
    <div class="container mt-10">
        <h2 class="text-3xl">{{ blok.title }}</h2>
        <div class="grid  grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <img class="object-cover w-full max-h-full rounded-md shadow-md" :src="blok.image1.filename" alt="">
            </div>
            <div>
                <ul class="pl-8 pt-2 list-disc lg:text-xl leading-relaxed">
                    <li v-for="item in blok.liste.content[0].content">
                        {{ item.content[0].content[0].text }}
                    </li>
                </ul>
            </div>
            <div>
                <img class="object-cover w-full min-h-full max-h-[500px] rounded-md shadow-md "
                    :src="blok.image2.filename" alt="">
            </div>
            <div>

                <img class="object-cover w-full min-h-full max-h-[500px] rounded-md shadow-md"
                    :src="blok.image3.filename" alt="">
            </div>

        </div>

        <table class="table-auto border-separate w-full border-spacing-2 mt-4">
            <thead>
                <tr class="bg-primary-green">
                    <th class="px-2 py-1 rounded-sm" v-for="th in blok.conditions.thead">
                        {{
                            th.value
                        }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tr in blok.conditions.tbody">
                    <td class="bg-primary-white last:text-center text-sm md:text-lg px-1 md:px-2 md:py-1  rounded-sm"
                        v-for="td in tr.body">{{ td.value }}</td>
                </tr>
            </tbody>
        </table>

        <p class="text-xs">{{ blok.footnote.content[0].content[0].text }}</p>

    </div>
</template>