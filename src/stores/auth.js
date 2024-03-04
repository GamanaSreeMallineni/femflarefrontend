import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useLocalStorage } from "@vueuse/core"


export const useAuthStore = defineStore('auth', () => {

    const user = ref(useLocalStorage('user',''))
    const isAuth = ref(useLocalStorage('isAuth',false));
    const isLoading = ref(false);
    const token = ref(useLocalStorage('token',''))
    //Getters
    const getUsername = computed(() => {
        return user.value
    })
    

    function logout(){
        user.value = '';
        token.value = '';
        isAuth.value = false;
    }

    function setAuthData(username, authtoken){
        user.value = username;
        token.value = authtoken;
        isAuth.value = true;
    }


    return { user, getUsername, isAuth, token, isLoading, setAuthData, logout }
})