<template>
    <div class="h-screen bg-gray-900">
      <section id="events">
        <main class="p-5 bg-light-pink">
          <div class="flex justify-center items-start my-2">
            <div class="w-full sm:w-10/12 md:w-3/4 my-1">
              <h1 class="text-2xl font-semibold text-pink-500 mb-2 text-center" style="font-family: 'Arial', sans-serif;">EVENTS</h1>
              <ul class="flex flex-col">
                <li class="bg-white my-2 shadow-md  shadow-pink-300 rounded-xl" v-for="(event, index) in events" :key="index">
                  <h2 @click="toggleAccordion(index)" class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
                    <span>{{ event.title }}</span>
                    <button @click="redirectToForm(event.formUrl)" class="bg-pink-500 mx-5 text-white font-semibold py-2 px-5 rounded hover:bg-pink-600 ml-auto">Register</button>
                    <svg :class="rotateIcon(index)" class="fill-current text-pink-700 h-6 w-6 transform transition-transform duration-500" viewBox="0 0 20 20">
                      <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                  </h2>
                  <div v-if="event.open" class="border-l-2 border-pink-600 overflow-hidden duration-500 transition-all">
                    <p class="p-3 text-gray-900">{{ event.description }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const events = ref([
    { title: 'Ads Making', formUrl: 'https://forms.office.com/', description: '"Ad Making" is a game that involves creating an advertisement for a product or service using creativity, humor, and persuasive language.', open: false },
    { title: 'Meme Contest', formUrl: 'https://forms.office.com/', description: '"Meme Contest" is a game that involves creating humorous and relatable memes on a given topic or theme.', open: false },
    { title: 'Picture Framing', formUrl: 'https://forms.office.com/', description: 'Picture Framing is a game that involves arranging a set of pictures or images in a specific order or pattern using creativity and imagination.', open: false },
    { title: 'Hungry Taste Buds', formUrl: 'https://forms.office.com/', description: 'Hungry taste buds is nothing but guessing the food item provided to you by tasting the food item.', open: false },
    { title: 'Treasure Hunt', formUrl: 'https://forms.office.com/', description: 'Treasure Hunt is nothing but finding the hidden thing using the clues given to you.', open: false },
    { title: 'Rangoli', formUrl: 'https://forms.office.com/', description: 'Rangoli is nothing but traditional Indian decoration and patterns that are drawn on the ground.', open: false },
  ]);
  
  const toggleAccordion = (index) => {
    events.value[index].open = !events.value[index].open;
  };
  
  const rotateIcon = (index) => {
    return events.value[index].open ? 'rotate-180' : '';
  };
  
  
  const redirectToForm = (href) => {
    window.location.href = href;
  };
  </script>
  
  <style scoped>
    /* Add your CSS styles here */
  </style>
  