<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useAuthStore } from './stores/auth';
const authStore = useAuthStore()
</script>

<template >

  <Navbar />



    <RouterView />

    <div class="h-full w-screen bg-gray-50">
      <img src="./assets/KLRanks.png" alt="image" class="w-full h-30" />
    </div>

</template>
