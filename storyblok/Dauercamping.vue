<template>
    <div>
        <section class="container flex flex-col items-center mt-20">
            <div class="grid grid-cols-12 grid-row-11 gap-1 sm:gap-2 md:gap-3 ld:gap-4 w-full">
                <img src="@/assets/images/dauercamping/dauercamping-1.jpeg" alt=""
                    class="col-span-7 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/dauercamping/dauercamping-2.jpeg" alt=""
                    class="col-span-5 row-span-2 object-cover h-full rounded-sm shadow-md">
                <img src="@/assets/images/dauercamping/dauercamping-3.jpeg" alt=""
                    class="col-span-6 row-span-2 w-full h-full object-cover rounded-sm shadow-md">
                <img src="@/assets/images/dauercamping/dauercamping-4.jpeg" alt=""
                    class="col-span-6 row-span-2 w-full h-full  object-cover rounded-sm shadow-md">

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

<style scoped>
img {
    height: 40vh;
}
</style>