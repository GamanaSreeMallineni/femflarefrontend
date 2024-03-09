<template>
  <Disclosure as="nav" class="bg-gray-900 fixed w-screen z-50" v-slot="{ open }">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

          <div class="flex flex-shrink-0 items-center">
            <img class="h-12 w-auto " src="../assets/kl_logo.png" alt="Logo" />
            <img class="h-12 w-auto px-10" src="../assets/logo.png" alt="Logo" />
            <img class="h-12 w-auto" src="../assets/womens_logo.png" alt="Logo" />
          </div>

          <div class="hidden sm:ml-6 sm:block mx-auto">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="['text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}
              </a>
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">Team</span>
                    Team
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900 hover:text-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <!-- <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">My
                  Events</a>
                </MenuItem> -->

                    <MenuItem v-slot="{ active }">

                    <a href="/#/chiefpatrons" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-50 hover:text-gray-900 ']">Chief Patrons {{
    authStore.user }} !</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="/#/patronsadvisors"
                      :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-50 hover:text-gray-900 ']">Patrons & Advisors</a>
                    </MenuItem>

                    <MenuItem v-slot="{ active }">
                    <a href="/#/team"
                      :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-50 hover:text-gray-900 ']">Chief Co-ordinators</a>
                    </MenuItem>

                    <MenuItem v-slot="{ active }">
                    <a href="#"
                      :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-50 hover:text-gray-900 ']">Chairperson</a>
                    </MenuItem>

                    <MenuItem v-slot="{ active }">
                    <a href="/#/conveners"
                      :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-50 hover:text-gray-900 ']">Convener</a>
                    </MenuItem>

                    <MenuItem v-slot="{ active }">
                    <a href="/#/coconveners"
                      :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-50 hover:text-gray-900 ']">Co-Convener</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
              <template v-if="!authStore.isAuth" class="hidden md:block">

                <a href="/#/signup"
                  :class="['text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']">Register</a>
              </template>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3" v-if="authStore.isAuth">
            <div>
              <MenuButton
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor" class="h-8 w-8 rounded-full text-gray-50">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <!-- <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">My
                  Events</a>
                </MenuItem> -->

                <MenuItem v-slot="{ active }">

                <a href="/#/profile" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">

                <a href="#" @click="authStore.logout"
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="['text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        <template v-if="!authStore.isAuth" class="hidden md:block">

          <a href="/#/signup"
            :class="['text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']">Register</a>
        </template>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '../stores/auth.js'
import { RouterLink } from 'vue-router';

const authStore = useAuthStore()
console.log(authStore.isAuth)

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Events', href: '/#/events', current: false },
  { name: 'Gallery', href: '/#/gallery', current: false },
]
</script>