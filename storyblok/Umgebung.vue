<template>
    <div>
        <section class="container px-5 flex flex-col items-center mt-20 ">
            <div class="flex flex-col items-center pt-10">
                <p class="text-center">{{ blok.header }}</p>
                <NuxtLink class="flex flex-col items-center">
                    <img src="@/assets/images/umgebung/nordeifeltourismus.jpeg" class="h-26 w-24" alt="">
                    <p class="underline underline-offset-2">{{ blok.linktext }}</p>
                </NuxtLink>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-6 pt-6">
                <NuxtLink to="https://nordeifel-tourismus.de/aktivzeit/natur-erleben/nationalpark-eifel" target="_blank"
                    class="flex flex-col items-center justify-center">

                    <img class="rounded-md shadow-md w-48 h-48" src="@/assets/images/umgebung/Nationalpark.svg"
                        alt="Nationalpark Eifel">
                    <p class="text-base mt-2 text-center w-4/5">{{ blok.icontext1 }}</p>
                </NuxtLink>
                <NuxtLink
                    to="https://regio.outdooractive.com/oar-nordeifel-tourismus/de/touren/#area=*&filter=r-fullyTranslatedLangus-,r-onlyOpened-,sb-sortedBy-0&q=hellenthal"
                    target="_blank" class="flex flex-col items-center justify-center">

                    <img class="rounded-md shadow-md w-48 h-48" src="@/assets/images/umgebung/Wanderung.svg"
                        alt="Wanderung">
                    <p class="text-base mt-2 text-center w-7/8">{{ blok.icontext2 }}</p>
                </NuxtLink>
                <NuxtLink to="https://nordeifel-tourismus.de/aktivzeit/radfahren" target="_blank"
                    class="flex flex-col items-center justify-center">

                    <img class="rounded-md shadow-md w-48 h-48" src="@/assets/images/umgebung/Radfahren.svg"
                        alt="Infos zum Radfahren">
                    <p class="text-base mt-2 text-center w-4/5">{{ blok.icontext3 }}</p>
                </NuxtLink>
                <NuxtLink to="https://nordeifel-tourismus.de/aktivzeit/radfahren/uebersicht-radrouten" target="_blank"
                    class="flex flex-col items-center justify-center">

                    <img class="rounded-md shadow-md w-48 h-48" src="@/assets/images/umgebung/MTB.svg"
                        alt="Fahrrad und Mountainbike Touren">
                    <p class="text-base mt-2 text-center w-7/8">{{ blok.icontext4 }}
                    </p>
                </NuxtLink>
                <NuxtLink to="https://www.naturpark-eifel.de/de/landschaften/hohes-venn/" target="_blank"
                    class="flex flex-col items-center justify-center">

                    <img class="rounded-md shadow-md w-48 h-48" src="@/assets/images/umgebung/HohesVenn.svg"
                        alt="Naturpark Hohes Venn">
                    <p class="text-base mt-2 text-center w-7/8">{{ blok.icontext5 }}</p>
                </NuxtLink>
                <NuxtLink to="https://www.monschau.de/de/" target="_blank"
                    class="flex flex-col items-center justify-center">

                    <img class="rounded-md shadow-md w-48 h-48" src="@/assets/images/umgebung/Monschau.svg"
                        alt="Altstadt Monschau">
                    <p class="text-base mt-2 text-center ">{{ blok.icontext6 }}</p>
                </NuxtLink>
                <NuxtLink
                    to="https://nordeifel-tourismus.de/familienzeit/wildparks/greifvogelstation-wildfreigehege-hellenthal"
                    target="_blank" class="flex flex-col items-center justify-center">

                    <img class="rounded-md shadow-md w-48 h-48" src="@/assets/images/umgebung/Wildgehege.svg"
                        alt="Wildfreigehege Hellentahl">
                    <p class="text-base mt-2 text-center w-7/8">{{ blok.icontext7 }} </p>
                </NuxtLink>
                <NuxtLink to="https://nordeifel-tourismus.de/familienzeit/eifel-guides" target="_blank"
                    class="flex flex-col items-center justify-center">

                    <img class="rounded-md shadow-md w-48 h-48" src="@/assets/images/umgebung/Touren.svg"
                        alt="Individuelle Touren">
                    <p class="text-base mt-2 text-center w-7/8">{{ blok.icontext8 }}</p>
                </NuxtLink>



            </div>

        </section>

        <section class="container flex flex-col items-center mt-20">
            <div class="grid grid-cols-12 grid-row-11 gap-1 sm:gap-2 md:gap-3 ld:gap-4">
                <img src="@/assets/images/umgebung/umgebung-1.jpeg" alt=""
                    class="col-span-4 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-2.jpeg" alt=""
                    class="col-span-5 row-span-2 object-cover h-full rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-3.jpeg" alt=""
                    class="col-span-3 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-4.jpeg" alt=""
                    class="col-span-6 row-span-2 w-full h-full  object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-5.jpeg" alt=""
                    class="col-span-6 row-span-2 w-full h-full  object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-6.jpeg" alt=""
                    class="col-span-3 row-span-2 w-full h-full  object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-7.jpeg" alt=""
                    class="col-span-6 row-span-2 w-full h-full  object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-8.jpeg" alt=""
                    class="col-span-3 row-span-2 w-full h-full  object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-9.jpeg" alt=""
                    class="col-span-6 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-10.jpeg" alt=""
                    class="col-span-6 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-11.jpeg" alt=""
                    class="col-span-4 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-12.jpeg" alt=""
                    class="col-span-4 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/umgebung/umgebung-13.jpeg" alt=""
                    class="col-span-4 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
            </div>
        </section>
    </div>
</template>

<script setup>

const props = defineProps({
    blok: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style lang="scss" scoped>

</style>