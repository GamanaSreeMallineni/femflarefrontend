import { createRouter , createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventsVue from '../views/Events.vue'
import Team from '../views/Team.vue'
import Gallery from '../views/Gallery.vue'
import AboutVue from '@/views/About.vue'
import signupVue from '@/views/signup.vue'
import loginVue from '@/views/login.vue'
import patronsadvisorsVue from '@/views/patronsadvisors.vue'
import chiefpatronsVue from '@/views/chiefpatrons.vue'

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home,
      props: true,
  },
  {
      path: '/about',
      name: 'about',
      props: true,
      component: AboutVue
  },
  {
      path: '/team',
      name: 'team',
      props: true,
      component: Team
  },
  {
      path: '/gallery',
      name: 'gallery',
      props: true,
      component: Gallery
  },
  {
    path: '/login',
    name: 'login',
    props: true,
    component: loginVue
  },
  {
    path: '/signup',
    name: 'signup',
    props: true,
    component: signupVue
  },
  {
    path: '/patronsadvisors',
    name: 'patronsadvisors',
    props: true,
    component: patronsadvisorsVue
  },
  {
    path: '/chiefpatrons',
    name: 'chiefpatrons',
    props: true,
    component: chiefpatronsVue
  },
  {
    path: '/events',
    name: 'events',
    props: true,
    component: EventsVue
},

  
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router