<script setup>
import { ref } from 'vue';
import { HTTP } from '../axios';
import router from '../router/index';

const username = ref("");
const department = ref("Select Department");
const idno = ref("");
const phno = ref("");
const collage = ref("");
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
            idno: idno.value,
            phno: phno.value,
            collage: collage.value,
            dept: department.value.trim(),
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
    <section class="min-h-screen h-full bg-gradient-to-r from-slate-900 via-pink-900 to-slate-900 pt-24 flex items-center justify-center py-20">
        <div class="w-full h-full max-w-sm mx-auto overflow-hidden bg-gray-800 rounded-lg shadow-md">
            <div class="px-6 my-10">
                <div class="flex justify-center mx-auto">
                    <img class="w-auto h-24" src="../assets/logo.png" alt="">
                </div>
                <p class="mt-1 text-center text-pink-300">Embrace the Blooms of Femininity</p>
                <p class="text-center text-pink-300">{{ message }}</p>
                <h3 class="mt-2 text-xl font-medium text-center text-gray-100">Signup</h3>


                <form @submit.prevent="handleSubmit">
                    <div class="w-full mt-4">
                        <input v-model="username"
                            class="block w-full px-4 py-2 mt-2 text-gray-50 placeholder-gray-400 bg-gray-800 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text" placeholder="Username" aria-label="username" name="username" required />
                    </div>
                    <div>
                        <input type="text" id="collage" v-model="collage" placeholder="Enter your Collage Name"
                            autocomplete="off" required
                            class="block w-full px-4 py-2 mt-4 text-gray-50 placeholder-gray-400 bg-gray-800 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
                    </div>
                    <div class="w-full mt-4">

                        <select id="department" name="department" v-model="department"
                            class="block w-full rounded-lg border border-gray-300 bg-gray-900 p-2.5 text-gray-50 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            required>
                            <option value="Select Department" selected hidden>Select Department</option>
                            <option value="FED">FED</option>
                            <option value="CSE(HONORS)">CSE(HONORS)</option>
                            <option value="CSE(REGULAR)">CSE(REGULAR)</option>
                            <option value="CSE">CSE</option>
                            <option value="CS&amp;IT">CS&amp;IT</option>
                            <option value="AI&amp;DS">AI&amp;DS</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="ECM">ECM</option>
                            <option value="MECH">MECH</option>
                            <option value="IOT">IOT</option>
                            <option value="ECS">ECS</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="BT">BT</option>
                            <option value="BBA">BBA</option>
                            <option value="MBA">MBA</option>
                            <option value="B.Com">B.Com</option>
                            <option value="M.Sc. Chemistry">M.Sc. Chemistry</option>
                            <option value="M.Com">M.Com</option>
                            <option value="BA-IAS">BA-IAS</option>
                            <option value="LLB">LLB</option>
                            <option value="BFA">BFA</option>
                            <option value="MCA">MCA</option>
                            <option value="BCA">BCA</option>
                            <option value="BHM">BHM</option>
                            <option value="B.PHARM">B.PHARM</option>
                            <option value="M.PHARM">M.PHARM</option>
                            <option value="PHARMA D">PHARMA D</option>
                            <option value="VISUAL COMMUNICATIONS">VISUAL COMMUNICATIONS</option>
                            <option value="ARCHITECTURE">ARCHITECTURE</option>
                            <option value="AGRICULTURE">AGRICULTURE</option>
                            <option value="FINE ARTS">FINE ARTS</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div class="w-full mt-4">
                        <input v-model="idno"
                            class="block w-full px-4 py-2 mt-2 text-gray-50 placeholder-gray-400 bg-gray-800 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text" placeholder="ID Number" aria-label="username" name="idno" required />
                    </div>

                    <div class="w-full mt-4">
                        <input v-model="phno"
                            class="block w-full px-4 py-2 mt-2 text-gray-50 placeholder-gray-400 bg-gray-800 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text" placeholder="Contact Number " aria-label="username" name="phno" required />
                    </div>

                    <div class="w-full mt-4">
                        <input v-model="password"
                            class="block w-full px-4 py-2 mt-2 text-gray-50 placeholder-gray-400 bg-gray-800 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="password" placeholder="Password" aria-label="Password" required />
                    </div>
                    <div class="w-full mt-4">
                        <input v-model="password2"
                            class="block w-full px-4 py-2 mt-2 text-gray-50 placeholder-gray-400 bg-gray-800 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
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

            <div class="flex items-center justify-center py-4 text-center bg-gray-700">
                <span class="text-sm text-gray-200">have an account? </span>

                <a href="#/login" class="mx-2 text-sm font-bold text-blue-400 hover:underline">Login</a>
            </div>
        </div>
    </section>

</template>


<style></style>