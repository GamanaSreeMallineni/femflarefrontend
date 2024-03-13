<template>
  <div class="min-h-screen h-full bg-gray-900 pt-14">
    <section id="events">
      <main class="p-5 bg-light-pink">
        <div class="flex justify-center items-start my-2">
          <div class="w-full sm:w-10/12 md:w-3/4 my-1">
            <h1 class="text-2xl font-semibold text-pink-500 mb-2 text-center" style="font-family: 'Arial', sans-serif;">
              EVENTS</h1>
            <div>
              <div class="sm:hidden">
                <label for="Tab" class="sr-only">Tab</label>

                <select id="Tab" class="w-full rounded-md border-gray-200" v-model="category"
                  @change="selectCategoryMobile()">
                  <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                </select>
              </div>

              <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                  <nav class="-mb-px flex gap-6" aria-label="Tabs">


                    <button href="#" v-for="cat in categories" :key="cat" :class="{
                  'active': category === cat,
                  'inactive': category !== cat
                }" @click="selectCategory(cat)"
                      class="inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium">
                      {{ cat }}
                    </button>



                  </nav>
                </div>
              </div>
            </div>
            <span class="flex items-center py-5">
              <span class="h-px flex-1 bg-pink-50"></span>
              <span class="shrink-0 px-6 text-gray-50">{{ category }}</span>
              <span class="h-px flex-1 bg-pink-50"></span>
            </span>
            <div v-if="isLoading">
              <div id="overlay"
                class="fixed inset-0 z-50 flex items-center justify-center animate-pulse bg-gray-900 bg-opacity-50">
                <img src="../assets/loader.png" class="w-24 h-20 ">
                <p class="font-semibold text-green-50 opacity-80">Fetching Events data Please wait...</p>
              </div>
            </div>
            <ul class="flex flex-col" v-else>
              <li class="bg-white my-2 shadow-md  shadow-pink-300 rounded-xl" v-for="(event, index) in events"
                :key="index">
                <h2 @click="toggleAccordion(index)"
                  class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
                  <span>{{ event.eventName }}</span>
                  <button @click="redirectToForm(event.registration_link)"
                    class="bg-pink-500 mx-5 text-white font-semibold py-2 px-5 rounded hover:bg-pink-600 ml-auto">Register</button>
                  <svg :class="rotateIcon(index)"
                    class="fill-current text-pink-700 h-6 w-6 transform transition-transform duration-500"
                    viewBox="0 0 20 20">
                    <path
                      d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10">
                    </path>
                  </svg>
                </h2>
                <div v-if="event.open" class="border-l-2 border-pink-600 overflow-hidden duration-500 transition-all">
                  <p class="p-3 text-gray-900">
                  <p class="font-medium inline">Description</p> : {{ event.description }}</p>
                  <p class="p-3 text-gray-900">
                  <p class="font-medium inline">Venue</p> : {{ event.venue }}</p>
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

const events = ref([]);
const category = ref('Tech Events');
const categories = ref(['Tech Events', 'Spot Events', 'Litrary Events']);
const isLoading = ref(true);

const toggleAccordion = (index) => {
  events.value[index].open = !events.value[index].open;
};

const rotateIcon = (index) => {
  return events.value[index].open ? 'rotate-180' : '';
};


const redirectToForm = (href) => {
  window.location.href = href;
};

const selectCategory = (selectedCat) => {
  category.value = selectedCat;
  isLoading.value = true;
  if (category.value == 'Tech Events') {
    eventsResponse('tech');
  }
  else if (category.value == 'Non Tech Events') {
    eventsResponse('nontech');
  }
  else if (category.value == 'Spot Events') {
    eventsResponse('sports');
  }
  else if (category.value == 'Litrary Events') {
    eventsResponse('litrary');
  }
}

const selectCategoryMobile = () => {
  isLoading.value = true;
  if (category.value === 'Tech Events') {
    eventsResponse('tech');
  } else if (category.value === 'Non Tech Events') {
    eventsResponse('nontech');
  } else if (category.value === 'Spot Events') {
    eventsResponse('sports');
  }
  else if (category.value == 'Litrary Events') {
    eventsResponse('litrary');
  }
};

  function eventsResponse(caty) {
    fetch('https://kl-femflare.fly.dev/api/events/' + caty)
      .then(response => {
        isLoading.value = false;
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        events.value = data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

eventsResponse('tech');

</script>

<style scoped>
/* Define your active and inactive styles here */
.active {
  border-color: #3182ce;
  /* Change border color for active category */
  color: #3182ce;
  /* Change text color for active category */
}

.inactive {
  border-color: transparent;
  /* Change border color for inactive categories */
  color: #9ca3af;
  /* Change text color for inactive categories */
}

select {
  /* Base styles */
  padding: 0.5rem;
  font-size: 1rem;
}

/* Define active style for select */
select.active {
  border-color: #3182ce;
  /* Change border color for active category */
}

/* Define inactive style for select */
select.inactive {
  border-color: transparent;
  /* Change border color for inactive categories */
}
</style>