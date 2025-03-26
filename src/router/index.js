import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventsVue from '../views/Events.vue'
import Team from '../views/Team.vue'
import Gallery from '../views/Gallery.vue'
import AboutVue from '@/views/About.vue'
import signupVue from '@/views/signup.vue'
import loginVue from '@/views/login.vue'
import patronsadvisorsVue from '@/views/patronsadvisors.vue'
import chiefpatronsVue from '@/views/chiefpatrons.vue'
import Convener from '@/views/Convener.vue'
import CoConvner from '@/views/CoConvner.vue'
import profile from '@/views/profile.vue'
import EditProfile from '@/views/EditProfile.vue'
import ourvisionaryVue from '@/views/ourvisionary.vue'
import organizing_committeeVue from '@/views/organizing_committee.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/ourvisionary',
    name: 'ourvisionary',
    component: ourvisionaryVue,
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
    path: '/conveners',
    name: 'conveners',
    props: true,
    component: Convener
  },
  {
    path: '/coconveners',
    name: 'coconveners',
    props: true,
    component: CoConvner
  },
  {
    path: '/profile',
    name: 'profile',
    props: true,
    component: profile
  },
  {
    path: '/profile/edit',
    name: 'editprofile',
    props: true,
    component: EditProfile
  },
  {
    path: '/organizingcommittee',
    name: 'organizingcommittee',
    props: true,
    component: organizing_committeeVue
  },
  {
    path: '/events',
    name: 'events',
    props: true,
    component: EventsVue
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
