<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()

</script>

<template>
  <div class="bg-gray-900 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-center text-center">
        <h1 class="text-5xl font-bold text-pink-500 mb-8">FEMFLARE 2024</h1>
        <div class="flex items-center justify-center mb-8">
          <img src="https://via.placeholder.com/200x200" alt="Beautiful flowers"
            class="w-48 h-48 rounded-full shadow-lg mr-4">
          <div class="flex flex-col items-center">
            <h2 class="text-3xl font-semibold text-pink-500 mb-2">Countdown:</h2>
            <div class="flex items-center justify-center">
              <div class="text-6xl font-bold text-white mr-2">00</div>
              <div class="text-6xl font-bold text-white mr-2">00</div>
              <div class="text-6xl font-bold text-white mr-2">00</div>
              <div class="text-6xl font-bold text-white mr-2">:</div>
              <div class="text-6xl font-bold text-white mr-2">00</div>
              <div class="text-6xl font-bold text-white mr-2">00</div>
              <div class="text-6xl font-bold text-white mr-2">:</div>
              <div class="text-6xl font-bold text-white mr-2">00</div>
              <div class="text-6xl font-bold text-white">00</div>
            </div>
          </div>
        </div>
        <p class="text-lg text-white mb-8">Join us for the most amazing event of the year!</p>
      </div>
    </div>
  </div>
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

<style scoped>
.hero {
  background-image: url('../assets/images/logos/bg.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 2rem;
  background-color: pink;
}

@media (max-width: 475px) {
  .hero {
    height: 80vh;
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 50vh;
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  .hero {
    height: 20vh;
    font-size: 1.2rem;
  }
}

@media (max-width: 840px) {
  .hero {
    height: 20vh;
    font-size: 1.2rem;
  }
}

@media (max-width: 1040px) {
  .hero {
    height: 20vh;
    font-size: 1.2rem;
  }
}
</style>