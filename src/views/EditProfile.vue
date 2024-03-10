<template>
    <div
        class="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300">
        <div v-if="isLoading">
            <div id="overlay"
                class="fixed inset-0 z-50 flex items-center justify-center animate-pulse bg-gray-900 bg-opacity-50">
                <img src="../assets/loader.png" class="w-24 h-20 ">
                <p class="font-semibold text-green-50 opacity-80">Fetching Profile data Please wait...</p>
            </div>
        </div>
        <div v-else class="bg-white rounded-lg shadow-xl p-8 max-w-xl mx-auto">
            <p :class="messageColor">{{ message }}</p>
            <h2 class="text-3xl font-bold mb-4">Femflare User Profile</h2>
            <form class="space-y-4 w-full max-w-md mx-auto" @submit.prevent="handleSubmit">
                <div>
                    <label class="font-semibold" for="idno">ID Number:</label>
                    <input type="text" id="idno" v-model="idno" placeholder="Enter ID number" autocomplete="off"
                        required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                </div>
                <div>
                    <label class="font-semibold" for="username">Username:</label>
                    <input type="text" id="username" v-model="authStore.user" placeholder="Enter username"
                        autocomplete="off" disabled
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                </div>
                <div>
                    <label class="font-semibold" for="phone">Phone Number:</label>
                    <input type="tel" id="phone" v-model="phno" placeholder="Enter phone number" autocomplete="off"
                        required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                </div>
                <div>
                    <label class="font-semibold" for="department">Department:</label>
                    <select id="department" name="department" v-model="department"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
                <div class="flex items-center align-middle justify-center pt-5">

                    <button type="submit" v-if="isSubmited" disabled
                        class="bg-rose-400 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        <svg class="w-4 h-4 animate-spin inline me-1 mb-1" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="#555" fill-rule="evenodd"
                                d="M11,16 C12.1045695,16 13,16.8954305 13,18 C13,19.1045695 12.1045695,20 11,20 C9.8954305,20 9,19.1045695 9,18 C9,16.8954305 9.8954305,16 11,16 Z M4.74123945,13 C6.12195133,13 7.24123945,14.1192881 7.24123945,15.5 C7.24123945,16.8807119 6.12195133,18 4.74123945,18 C3.36052758,18 2.24123945,16.8807119 2.24123945,15.5 C2.24123945,14.1192881 3.36052758,13 4.74123945,13 Z M16.3193286,13.5 C17.4238981,13.5 18.3193286,14.3954305 18.3193286,15.5 C18.3193286,16.6045695 17.4238981,17.5 16.3193286,17.5 C15.2147591,17.5 14.3193286,16.6045695 14.3193286,15.5 C14.3193286,14.3954305 15.2147591,13.5 16.3193286,13.5 Z M18.5,9.31854099 C19.3284271,9.31854099 20,9.99011387 20,10.818541 C20,11.6469681 19.3284271,12.318541 18.5,12.318541 C17.6715729,12.318541 17,11.6469681 17,10.818541 C17,9.99011387 17.6715729,9.31854099 18.5,9.31854099 Z M2.5,6 C3.88071187,6 5,7.11928813 5,8.5 C5,9.88071187 3.88071187,11 2.5,11 C1.11928813,11 0,9.88071187 0,8.5 C0,7.11928813 1.11928813,6 2.5,6 Z M17.7857894,5.20724734 C18.3380741,5.20724734 18.7857894,5.65496259 18.7857894,6.20724734 C18.7857894,6.75953209 18.3380741,7.20724734 17.7857894,7.20724734 C17.2335046,7.20724734 16.7857894,6.75953209 16.7857894,6.20724734 C16.7857894,5.65496259 17.2335046,5.20724734 17.7857894,5.20724734 Z M8,0 C9.65685425,0 11,1.34314575 11,3 C11,4.65685425 9.65685425,6 8,6 C6.34314575,6 5,4.65685425 5,3 C5,1.34314575 6.34314575,0 8,0 Z M15.5,3 C15.7761424,3 16,3.22385763 16,3.5 C16,3.77614237 15.7761424,4 15.5,4 C15.2238576,4 15,3.77614237 15,3.5 C15,3.22385763 15.2238576,3 15.5,3 Z" />
                        </svg> Processing...
                    </button>
                    <button type="submit" v-else
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { HTTP } from '../axios';
import router from '../router/index';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const isSubmited = ref(false);
const isLoading = ref(true);
const department = ref("");
const idno = ref("");
const phno = ref("");
const message = ref("");
const messageColor = ref("");

async function getProfileData() {
    try {
        const response = await HTTP.get('/api/profile', {
            params: {
                username: authStore.getUsername,
                token: authStore.token,
            },
        });
        console.log(response.data);
        idno.value = response.data.idno
        phno.value = response.data.phno
        department.value = response.data.dept
    } catch (error) {
        console.error('Error fetching data:', error.error);
    }
    isLoading.value = false;
}

getProfileData()

const handleSubmit = async () => {
    isSubmited.value = true

    try {
        const response = await HTTP.post('api/profile/edit', {
            username: authStore.user,
            idno: idno.value,
            phno: phno.value,
            dept: department.value,
            token: authStore.token,
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
        else {
            console.log(response.data)
            idno.value = response.data.idno
            phno.value = response.data.phno
            department.value = response.data.dept
            messageColor.value = "text-green-600";
            message.value = "Changes made successfully!"
        }

    } catch (error) {
        console.error("Error submitting form:", error);
        messageColor.value = "text-red-600";
        message.value = "An error occured";
    } finally {
        isSubmited.value = false;
    }
};

</script>