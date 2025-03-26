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
  { path: '/', name: 'Home', component: Home, props: true },
  { path: '/ourvisionary', name: 'ourvisionary', component: ourvisionaryVue, props: true },
  { path: '/about', name: 'about', component: AboutVue, props: true },
  { path: '/team', name: 'team', component: Team, props: true },
  { path: '/gallery', name: 'gallery', component: Gallery, props: true },
  { path: '/login', name: 'login', component: loginVue, props: true },
  { path: '/signup', name: 'signup', component: signupVue, props: true },
  { path: '/patronsadvisors', name: 'patronsadvisors', component: patronsadvisorsVue, props: true },
  { path: '/chiefpatrons', name: 'chiefpatrons', component: chiefpatronsVue, props: true },
  { path: '/conveners', name: 'conveners', component: Convener, props: true },
  { path: '/coconveners', name: 'coconveners', component: CoConvner, props: true },
  { path: '/profile', name: 'profile', component: profile, props: true },
  { path: '/profile/edit', name: 'editprofile', component: EditProfile, props: true },
  { path: '/organizingcommittee', name: 'organizingcommittee', component: organizing_committeeVue, props: true },
  { path: '/events', name: 'events', component: EventsVue, props: true }
];

const router = createRouter({
  history: createWebHashHistory('/femflarefrontend/'), // Set base path
  routes
});

export default router;
