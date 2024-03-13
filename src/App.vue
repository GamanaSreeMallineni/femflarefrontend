<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useAuthStore } from './stores/auth';
import { ref } from 'vue';
const authStore = useAuthStore()

const isLoading = ref(true);

window.addEventListener('load', () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});


</script>

<template>

  <div class="preloader" v-if="isLoading"></div>

  <Navbar />



  <RouterView />

  <div class="h-full w-screen bg-gray-50">
    <img src="./assets/KL_Ranks.png" alt="image" class="w-screen h-30" />
  </div>

</template>

<style>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #e9a15d, #e461db);
  /* gradient background */
  z-index: 9999;
  /* ensure it's on top of everything */
  display: flex;
  justify-content: center;
  align-items: center;
}

.preloader::after {
  content: '';
  width: 60px;
  /* adjust size */
  height: 60px;
  /* adjust size */
  background-image: url('https://t3.ftcdn.net/jpg/01/37/69/42/360_F_137694239_ihbs4kHd2w3HC3KipODkBDfhltbjwwLV.jpg');
  /* replace 'your_image_url_here' with the URL of your image */
  background-size: cover;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>