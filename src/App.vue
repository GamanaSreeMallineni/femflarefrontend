<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useAuthStore } from './stores/auth';
const authStore = useAuthStore()
</script>

<template >

  <Navbar />



    <RouterView />

</template>
