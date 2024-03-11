
<script setup>
import { ref } from 'vue';

import gayathri from '../assets/images/students/GayathriChiefExecutive.jpeg'
import nagamani from '../assets/images/students/NagaManiChiefExecutive.jpeg'
import saisree from '../assets/images/students/SaisreeChiefExecutive.jpg'
import jayaharshitha from '../assets/images/students/JayaharshithaChiefExecutive.jpg'
import varshitha from '../assets/images/students/VarshithaChiefStudentCoordinator.jpg'
import vallika from '../assets/images/students/SrivallikaSecretary.jpg'
import anjali from '../assets/images/students/AnjaliTresurer.jpeg'
import khyathi from '../assets/images/students/KhyathiWebsite.png'
import snehitha from '../assets/images/students/snehitha.jpg'
import navya from '../assets/images/students/NavyaTechevents.jpg'
import rasagna from '../assets/images/students/Rasgna echevents.png'
import divyateja from '../assets/images/students/DivyaTejaSpotEvents.jpg'
import sahithi from '../assets/images/students/SahithiLiteraryevents.jpg'
import trishitha from '../assets/images/students/TrishitaPR.jpg'
import saisri from '../assets/images/students/saisriSponsorships.jpg'
import johana from '../assets/images/students/JohanaSponsorships.jpg'
import komalikusuma from '../assets/images/students/KomaliKusumaStageManagement.jpg'
import ziyaafreen from '../assets/images/students/ziyaAfreenCulturals.jpg'
import keerthana from '../assets/images/students/keerthanaHospitality.jpg'
import Pranitha from '../assets/images/students/pranithaCreativearts.jpeg'
import praharshini from '../assets/images/students/praharshiniBroadcasting.jpg'
import Manikya from '../assets/images/students/manikyaaLogistics.jpg'
import bhuvana from '../assets/images/students/BhuvanaProtocol.jpg'
import jahnavi from '../assets/images/students/JahnaviProtocol.jpeg'
import manasa from '../assets/images/students/ManasaDrafting.jpg'
import harshitha from '../assets/images/students/HarshithaDesigning.jpeg'
import vaishnavi from '../assets/images/students/vaishnaviTransport.jpg'

import { KinesisContainer, KinesisElement } from 'vue-kinesis'

const team = ref([
    { name: 'Gayathri Thotakura', title: 'Chief Executive', imgsrc: gayathri },
    { name: 'NagaMani Thota', title: 'Chief Executive', imgsrc: nagamani },
    { name: 'T Sai Sree', title: 'Chief Executive', imgsrc: saisree },
    { name: 'JayaHarshitha', title: 'Chief Executive', imgsrc: jayaharshitha },
    { name: 'Varshitha', title: 'Chief Student Coordinator', imgsrc: varshitha },
    { name: 'Sri vallika', title: 'Secretary', imgsrc: vallika },
    { name: 'Snehitha', title: 'Website', imgsrc: snehitha },
    { name: 'khyathi', title: 'Website', imgsrc: khyathi },
    { name: 'Anjali', title: 'Tresurer', imgsrc: anjali },
    { name: 'Navya', title: 'Chief Technical Events', imgsrc: navya },
    { name: 'Rasagna', title: 'Chief Technical Events', imgsrc: rasagna },
    { name: 'Divyateja', title: 'Chief Spot Events', imgsrc: divyateja },
    { name: 'TRISHITHA', title: 'Chief PR', imgsrc: trishitha },
    { name: 'SAI SRI', title: 'Chief Sponsorships', imgsrc: saisri },
    { name: 'Johana', title: 'Chief Sponsorships', imgsrc: johana },
    { name: 'Komali Kusuma', title: 'Chief StageManagement & Stalls', imgsrc: komalikusuma },
    { name: 'ZiyaAfreen', title: 'Chief Culturals', imgsrc: ziyaafreen },
    { name: 'Sahithi', title: 'Literary Events Chief', imgsrc: sahithi },
    { name: 'Keerthana', title: 'Chief Hospitality', imgsrc: keerthana },
    { name: 'Pranitha', title: 'Chief Creative Arts', imgsrc: Pranitha },
    { name: 'Praharshini', title: 'Chief Broadcasting', imgsrc: praharshini },
    { name: 'Manikya', title: 'Chief Logistics', imgsrc: Manikya },
    { name: 'Bhuvana', title: 'Chief Protocol', imgsrc: bhuvana },
    { name: 'Jahnavi', title: 'Chief Protocol', imgsrc: jahnavi },
    { name: 'Manasa', title: 'Chief Drafting', imgsrc: manasa },
    { name: 'Harshitha', title: 'Chief Designing', imgsrc: harshitha },
    { name: 'vaishnavi', title: 'Chief Transport', imgsrc: vaishnavi },

]);
</script>

<template>
    <div class="py-20 bg-gray-900">
        <div class="container mx-auto px-6 md:px-12 xl:px-32">
            <div class="grid gap-12 items-center md:grid-cols-3">
                <div class="space-y-4 text-center rounded-xl shadow-lg shadow-pink-200" v-for="(member, index) in team"
                    :key="index">
                    <img class="w-64 h-64 mx-auto mt-5 object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                        :src="member.imgsrc" alt="woman" width="640" height="805" loading="lazy">
                    <div class=" pb-2">
                        <h4 class="text-2xl text-gray-50">{{ member.name }}</h4>
                        <span class="block text-sm text-gray-50">{{ member.title }}</span>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>


<style>
/* Your custom styles can be added here */
</style>