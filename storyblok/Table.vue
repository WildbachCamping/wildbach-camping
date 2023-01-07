<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>
    <section class="container">

        <table class="table border-separate w-full">
            <thead>
                <tr class="">
                    <th class="header" v-for="th in blok.preise.thead">
                        {{
                                th.value
                        }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tr in blok.preise.tbody">
                    <td class="entry" v-for="td in tr.body">{{ td.value }}</td>
                </tr>
            </tbody>
        </table>

        <p class="text-xs">{{ blok.footnote1 }}</p>
        <p class="text-xs" v-if="!blok.footnote2 == ''">{{ blok.footnote2 }}</p>
        <p class="text-xs" v-if="!blok.footnote3 == ''">{{ blok.footnote3 }}</p>

    </section>
</template>

<style scoped>
.table {
    border-collapse: separate;
    border-spacing: .5rem;
    text-align: left;

}

.header {
    background-color: #a9c1af;
    padding-left: 8px;
}

.entry {

    background-color: #eceeed;
    padding-left: 8px;
}

th,
td:last-child {
    text-align: center;
}
</style>