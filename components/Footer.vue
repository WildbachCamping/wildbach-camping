<template>
  <footer class="mt-40 w-full bg-[#444] py-8">
    <div class="flex flex-col items-center gap-4 pt-10">
      <ul
        class="flex flex-col items-start justify-start gap-2 text-white md:mb-8 md:flex-row md:items-center md:gap-x-8"
      >
        <li class="cursor-pointer">
          <NuxtLink
            class="ease border-b-[2px] border-transparent transition-all duration-500 hover:border-b-white"
            to="/kontakt"
            >{{ locale == "nl" ? "Contact" : "Kontakt" }}</NuxtLink
          >
        </li>

        <li class="cursor-pointer">
          <NuxtLink
            class="ease border-b-[2px] border-transparent transition-all duration-500 hover:border-b-white"
            to="/impressum"
            >{{ locale == "nl" ? "Afdruk" : "Impressum" }}</NuxtLink
          >
        </li>
        <li class="cursor-pointer">
          <NuxtLink
            class="ease border-b-[2px] border-transparent transition-all duration-500 hover:border-b-white"
            to="/datenschutz"
            >{{
              locale == "nl" ? "Gegevensbescherming" : "Datenschutz"
            }}</NuxtLink
          >
        </li>

        <li class="my-1 flex">
          <NuxtLink
            class="ease border-b-[2px] border-transparent transition-all duration-500 hover:border-b-white"
            to="https://www.facebook.com/people/Wildbach-Camping/100064720399133/"
            >Facebook </NuxtLink
          ><img
            src="@/assets/images/logo-facebook.svg"
            alt="Facebook"
            class="ml-2 h-6 w-6"
          />
        </li>
        <li class="my-1 flex">
          <NuxtLink
            class="ease border-b-[2px] border-transparent transition-all duration-500 hover:border-b-white"
            to="https://www.instagram.com/wildbachcamping/?igshid=wbbdewqhox3r"
            >Instagram </NuxtLink
          ><img
            src="@/assets/images/logo-instagram.svg"
            alt="Facebook"
            class="ml-2 h-6 w-6"
          />
        </li>
      </ul>
    </div>

    <div
      class="mt-8 flex flex-col items-center justify-center gap-8 sm:mt-0 md:flex-row"
    >
      <a
        href="https://www.beyondcamping.de/camping/campingplaetze/"
        target="_blank"
        rel="noopener"
        ><img
          class="w-[150px]"
          src="@/assets/images/award1.png"
          alt="BeyondCamping Campingplatz Auszeichnung"
      /></a>
      <img
        class="w-[130px] rounded-full"
        src="@/assets/images/award2.jpg"
        alt="Tour Certification"
      />

      <img
        class="w-[130px] rounded-full object-cover object-top"
        src="@/assets/images/award3.jpeg"
        alt="Nachhaltiges Reiseziel"
      />
    </div>
  </footer>
</template>

<script setup>
const { locale } = useI18n();
</script>
