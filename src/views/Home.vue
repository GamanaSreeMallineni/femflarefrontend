<template>

  <kinesis-container>
    <div class="bg-gradient-to-br from-pink-500 to-gray-900 min-h-screen flex items-center justify-center">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center justify-center text-center" v-if="isLargeScreen">
          <kinesis-element :strength="10">
            <h1 class="text-5xl lg:text-9xl font-bold text-pink-500 mb-8 "
              style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
              FEMFLARE 2024</h1>

          </kinesis-element>
          <div class="flex items-center justify-center mb-8">

            <div class="flex flex-col items-center">
              <kinesis-element :strength="5">

                <Countdown labelColor="#ffffff" deadlineISO="2024-03-15 00:00:00" mainColor="#FF407D" />
              </kinesis-element>
            </div>
          </div>
          <p class="text-lg text-white mb-8">Join us for the most amazing event of the year!</p>
        </div>
        <div class="flex flex-col items-center justify-center text-center" v-else>

          <h1 class="text-5xl font-bold text-pink-500 mb-8 "
            style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
            FEMFLARE 2024</h1>


          <div class="flex items-center justify-center mb-8">

            <div class="flex flex-col items-center">


              <Countdown labelColor="#ffffff" deadlineISO="2024-03-15 00:00:00" mainColor="#FF407D" />

            </div>
          </div>
          <p class="text-lg text-white mb-8">Join us for the most amazing event of the year!</p>
        </div>
      </div>
    </div>
  </kinesis-container>
  <section class="bg-gray-900 h-full" id="about">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          style="        font-family: 'Tangerine', serif; color: rgb(246, 51, 165);">Celebration of Womenhood</h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">FemFlare is
          an
          annual festival dedicated to honoring and empowering women from all walks of life. It is a vibrant and
          inclusive
          event that aims to recognize the achievements, talents, and contributions of women in various fields.</p>

      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="../assets/images/logos/flem3.png" alt="mockup">
      </div>
    </div>
  </section>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { Countdown } from 'vue3-flip-countdown'

const isLargeScreen = ref(window.matchMedia('(min-width: 768px)').matches);
console.log(isLargeScreen)
const handleResize = () => {
  isLargeScreen.value = window.matchMedia('(min-width: 768px)').matches;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<script>

</script>

<style scoped>
canvas {
  display: block;
}
</style>