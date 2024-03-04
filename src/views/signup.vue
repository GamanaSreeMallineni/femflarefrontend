<script setup>
import { ref } from 'vue';
import { HTTP } from '../axios';
import router from '../router/index';

const username = ref("");
const password = ref("");
const password2 = ref("");
const message = ref("");
const messageColor = ref("");
const isSigningUp = ref(false)

const handleSubmit = async () => {
    if (password.value != password2.value) {
        messageColor.value = "text-red-600"
        message.value = "Passwords didn't match"
        return;
    }

    try {
        isSigningUp.value = true;
        const response = await HTTP.post('api/signup', {
            username: username.value.trim(),
            password: password.value,
        });
        if (response.status !== 200) {
            try {
                const errorData = await response.json();
                messageColor.value = "text-red-600";
                message.value = errorData.error || "An error occurred";
            } catch {
                console.error("Non-JSON error response:", response);
                messageColor.value = "text-red-600";
                message.value = "An error occurred";
            }
        }
        if (response.data.error) {
            messageColor.value = "text-red-600"
            message.value = response.data.error
        }
        else {
            messageColor.value = "text-red-600"
            message.value = "success"
            router.push({ name: 'login' });
        }
        isSigningUp.value = false;
        console.log(response.data);
    } catch (error) {
        console.error("Error submitting form:", error);
        messageColor.value = "text-red-600";
        message.value = "Username already exist or Something went wrong. Please try again later.";
    } finally {
        isSigningUp.value = false;
    }
};

</script>

<template>
    <section class="h-screen bg-gray-900 flex items-center justify-center">
        <div class="w-full h-3/2 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="px-6 py-4">
                <div class="flex justify-center mx-auto">
                    <img class="w-auto h-24" src="../assets/logo.png" alt="">
                </div>
                <p class="mt-1 text-center text-pink-300">Embrace the Blooms of Femininity</p>
                <p class="text-center" :class="messageColor">{{ message }}</p>
                <h3 class="mt-2 text-xl font-medium text-center text-gray-100">Signup</h3>


                <form @submit.prevent="handleSubmit">
                    <div class="w-full mt-4">
                        <input v-model="username"
                            class="block w-full px-4 py-2 mt-2 text-gray-50 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text" placeholder="Username" aria-label="username" name="username" required />
                    </div>

                    <div class="w-full mt-4">
                        <input v-model="password"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="password" placeholder="Password" aria-label="Password" required />
                    </div>
                    <div class="w-full mt-4">
                        <input v-model="password2"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="password" placeholder="Confirm-Password" aria-label="Password" required />
                    </div>

                    <div class="flex items-center justify-between mt-4">


                        <button
                            class="px-6 py-2 mx-auto items-center text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>

            <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span class="text-sm text-gray-600 dark:text-gray-200">have an account? </span>

                <a href="#/login"
                    class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</a>
            </div>
        </div>
    </section>

</template>

<style></style>