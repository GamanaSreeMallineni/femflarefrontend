<script setup>
import { ref } from 'vue';
import { HTTP } from '../axios';
import router from '../router/index';
import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore();
const username = ref("");
const password = ref("");
const message = ref("");
const messageColor = ref("");

const handleSubmit = async () => {
    try {
        const response = await HTTP.post('/api/login', {
            username: username.value,
            password: password.value,
        });

        if (response.status == 200) {
            console.log("good")
            authStore.setAuthData(response.data.user, response.data.token);
            router.push({ name: 'Home' });
        } else {
            messageColor.value = "text-red-600";
            message.value = "An error occurred";
        }
    } catch (error) {
        if (error.response) {
            const status = error.response.status;
            messageColor.value = "text-red-600";

            if (status === 401) {
                message.value = 'Invalid username or password';
            } else {
                message.value = 'Error submitting the form!'
            }
        } else {
            message.value = 'Error submitting the form!' + error
        }
    }
};

</script>

<template>
    <section class="h-screen bg-gray-900 flex items-center justify-center">
        <div class="w-full h-3/2 max-w-sm mx-auto overflow-hidden bg-gray-800 rounded-lg shadow-md">
            <div class="px-6 py-4">
                <div class="flex justify-center mx-auto">
                    <img class="w-auto h-24" src="../assets/logo.png" alt="">
                </div>
                <p class="mt-1 text-center text-gray-400">Embrace the Blooms of Femininity</p>
                <p class="text-center text-gray-400">{{ message }}</p>
                <h3 class="mt-2 text-xl font-medium text-center text-gray-200">Login</h3>


                <form @submit.prevent="handleSubmit">
                    <div class="w-full mt-4">
                        <input
                            class="block w-full px-4 py-2 mt-2 text-gray-50 placeholder-gray-400 bg-gray-800 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text" placeholder="Username" aria-label="username" v-model="username" required/>
                    </div>

                    <div class="w-full mt-4">
                        <input
                            class="block w-full px-4 py-2 mt-2 text-gray-50 placeholder-gray-400 bg-gray-800 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="password" placeholder="Password" aria-label="Password" v-model="password" required/>
                    </div>

                    <div class="flex items-center justify-between mt-4">


                        <button
                            class="px-6 py-2 mx-auto text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>

            <div class="flex items-center justify-center py-4 text-center bg-gray-700">
                <span class="text-sm text-gray-200">Don't have an account? </span>

                <a href="/#/signup"
                    class="mx-2 text-sm font-bold text-blue-400 hover:underline">Signup here</a>
            </div>
        </div>
    </section>

</template>

<style></style>