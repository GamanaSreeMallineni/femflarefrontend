import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueKinesis from "vue-kinesis";
import Countdown from 'vue3-flip-countdown'
import Particles from "particles.vue3";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueKinesis)
app.use(Particles);
app.use(Countdown)

app.mount('#app')