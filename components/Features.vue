<template>
  <div id="platform"
    class="bg-[#F4EED3] pt-8 lg:pt-20 3xl:pt-20 4xl:pt-24 lg:pb-16  rounded-2xl lg:rounded-[2rem] pb-4 3xl:pb-0 4xl:pb-14 z-10 relative lg:pl-[8.5rem] px-4 lg:px-0  3xl:px-[23.5rem] 4xl:px-[27rem]">
    <img src='/Mask group.svg' class="absolute 4xl:w-3/5  z-0 top-4 right-0" />
    <div class="text-black relative z-20 flex flex-col items-start justify-center">
      <p class="text-[20px] text-[#FF5F45] font-montserrat font-semibold">Platform</p>
      <h2 class="font-montserrat lg:text-[40px] text-[32px] font-semibold leading-[48px]">Core Features</h2>
      <div class="flex w-full justify-center items-center py-10 lg:py-14 3xl:py-4 4xl:py-10 ">
        <!-- Button Section -->
        <div class="w-full flex flex-col items-center lg:pr-40 ">
          <!-- Accordion 1 -->
          <div class="w-full border-b-2 border-b-[#B4B8B7] py-6 3xl:py-4 4xl:py-6 items-center justify-center">
            <div @click="toggleAccordion(1)" class="flex justify-between cursor-pointer">
              <h3  class="font-semibold font-montserrat text-[20px] text-[#00140F] ">Semantic Search</h3>
              <Button @click="toggleAccordion(1)"
                class="px-2 py-[1px] bg-[#EBDFCE] rounded-full text-[#00140F] hover:bg-[#DBCCB1] focus:outline-none">
                <i :class="isAccordionOpen(1) ? 'fas fa-minus' : 'fas fa-plus'"></i>
              </Button>
            </div>
            <div v-show="isAccordionOpen(1)"
              class="w-full py-4 3xl:pt-12 rounded font-hind font-light text-[16px] text-[#00140F] flex-col space-y-4">
              <p>Our platform leverages cutting-edge semantic models that enable users to search in plain English,
                bypassing the limitations of traditional keyword matching.</p>
              <p>Whether searching for a graduate program, a professional course, or any other learning opportunity,
                users can simply describe what they're looking for in their own words.</p>
              <div class="lg:hidden w-full h-[60vh] flex justify-center items-center transition delay-300">
                <img :src="currentImage" alt="business"
                  class="h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-105" />
              </div>
            </div>
          </div>

          <!-- Accordion 2 -->
          <div class="w-full border-b-2 border-b-[#B4B8B7] py-6 3xl:py-4 4xl:py-6 items-center justify-center">
            <div @click="toggleAccordion(2)" class="flex justify-between cursor-pointer">
              <h3  class="font-semibold font-montserrat text-[20px] text-[#00140F] ">Derivative Insights</h3>
              <Button @click="toggleAccordion(2)"
                class="px-2 py-[1px] bg-[#EBDFCE] rounded-full text-[#00140F] hover:bg-[#DBCCB1] focus:outline-none">
                <i :class="isAccordionOpen(2) ? 'fas fa-minus' : 'fas fa-plus'"></i>
              </Button>
            </div>
            <div v-show="isAccordionOpen(2)" class="w-full py-4 3xl:pt-12 rounded flex-col space-y-4">
              <p class="font-hind font-light text-[16px] text-[#00140F]">
                Once a user chooses an opportunity of interest — such as a graduate course or professional program — our
                platform offers far more than just the official program specifications.
              </p>
              <p class="font-hind font-light text-[16px] text-[#00140F]">
                We provide a range of derivative insights, pulling from third-party sources such as reviews, job market
                stats, and employment outcomes, in a clear and actionable way.
              </p>

              <div class="lg:hidden w-full h-[60vh] flex justify-center items-center transition delay-300">
                <img :src="currentImage" alt="business"
                  class="h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-105" />
              </div>
            </div>
          </div>

          <!-- Accordion 3 -->
          <div class="w-full border-b-2 border-b-[#B4B8B7] py-6 3xl:py-4 4xl:py-6 items-center justify-center">
            <div @click="toggleAccordion(3)" class="flex justify-between cursor-pointer">
              <h3  class="font-semibold font-montserrat text-[20px] text-[#00140F] ">Deep Profile</h3>
              <Button @click="toggleAccordion(3)"
                class="px-2 py-[1px] bg-[#EBDFCE] rounded-full text-[#00140F] hover:bg-[#DBCCB1] focus:outline-none">
                <i :class="isAccordionOpen(3) ? 'fas fa-minus' : 'fas fa-plus'"></i>
              </Button>
            </div>
            <div v-show="isAccordionOpen(3)"
              class="w-full py-4 3xl:pt-12 rounded font-hind font-light text-[16px] text-[#00140F] flex-col space-y-4">
              <p>Users can create in-depth profiles that capture their complete academic and professional journey, from
                past achievements to current skills and future aspirations. </p>
              <p>By including details such as education history, work experience, and areas of interest, users allow the
                platform to gain a nuanced understanding of their unique position.</p>

              <div class="lg:hidden w-full h-[60vh] flex justify-center items-center transition delay-300">
                <img :src="currentImage" alt="business"
                  class="h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-105" />
              </div>
            </div>
          </div>

          <!-- Accordion 4 -->
          <div class="w-full border-b-2 border-b-[#B4B8B7] py-6 3xl:py-4 4xl:py-6 items-center justify-center">
            <div @click="toggleAccordion(4)" class="flex justify-between cursor-pointer">
              <h3  class="font-semibold font-montserrat text-[20px] text-[#00140F] ">User Centered</h3>
              <Button @click="toggleAccordion(4)"
                class="px-2 py-[1px] bg-[#EBDFCE] rounded-full text-[#00140F] hover:bg-[#DBCCB1] focus:outline-none">
                <i :class="isAccordionOpen(4) ? 'fas fa-minus' : 'fas fa-plus'"></i>
              </Button>
            </div>
            <div v-show="isAccordionOpen(4)" class="w-full py-4 3xl:pt-12 rounded flex-col space-y-4">
              <p class="font-hind font-light text-[16px] text-[#00140F]">
                As users interact with the platform, our recommendation engine learns from their preferences, offering
                ever more relevant and curated suggestions
              </p>
              <p class="font-hind font-light text-[16px] text-[#00140F]">
                The personalized "For You" section evolves continuously, surfacing opportunities that align more closely
                with users' academic and professional goals over time.
              </p>

              <div class="lg:hidden w-full h-[60vh] flex justify-center items-center transition delay-300">
                <img :src="currentImage" alt="business"
                  class="h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-105" />
              </div>
            </div>
          </div>

          <!-- Accordion 5 -->
          <div class="w-full border-b-2 border-b-[#B4B8B7] py-6 3xl:py-4 4xl:py-6 items-center justify-center">
            <div @click="toggleAccordion(5)" class="flex justify-between cursor-pointer">
              <h3  class="font-semibold font-montserrat text-[20px] text-[#00140F] ">High-Resolution Guidance</h3>
              <Button @click="toggleAccordion(5)"
                class="px-2 py-[1px] bg-[#EBDFCE] rounded-full text-[#00140F] hover:bg-[#DBCCB1] focus:outline-none">
                <i :class="isAccordionOpen(5) ? 'fas fa-minus' : 'fas fa-plus'"></i>
              </Button>
            </div>
            <div v-show="isAccordionOpen(5)"
              class="w-full py-4 3xl:pt-12 rounded font-hind font-light text-[16px] text-[#00140F] flex-col space-y-4">
              <p>
                When key decisions arise, our high-resolution guidance feature lets users request targeted, personalized
                advice on specific opportunities without committing to full-service packages.
              </p>

              <p>
                Whether users need guidance on a program, application, or career step, we connect them with flexible,
                price-competitive consultants to get exactly the support they need.
              </p>

              <div class="lg:hidden w-full h-[60vh] flex justify-center items-center transition delay-300">
                <img :src="currentImage" alt="business"
                  class="h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-105" />
              </div>
            </div>
          </div>

          <!-- Add more accordions if needed -->
        </div>

        <!-- Image Section -->
        <div class="hidden lg:pr-40 3xl:pr-0 w-full h-[70vh] 4xl:h-[45vh] lg:flex justify-center items-center transition delay-300">
          <transition name="fade" mode="out-in">
            <img :src="currentImage" alt="business"
              class="h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-105" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const openAccordion = ref<number | null>(1); // Set the first accordion to be open by default

// Toggle Accordion state
function toggleAccordion(accordion: number) {
  // Change accordion only if a different one is clicked
  openAccordion.value = openAccordion.value !== accordion ? accordion : openAccordion.value;
}

// Check if an accordion is open
function isAccordionOpen(accordion: number) {
  return openAccordion.value === accordion;
}

// Dynamic image source based on the open accordion
const currentImage = computed(() => {
  switch (openAccordion.value) {
    case 1:
      return "Image Placeholder (4).svg";
    case 2:
      return "Image Placeholder (3).svg";
    case 3:
      return "Image Placeholder (2).svg";
    case 4:
      return "Image Placeholder.svg";
    case 5:
      return "Image Placeholder (5).svg";
    default:
      return "Image Placeholder.png"; // Default image if no accordion is open
  }
});
</script>

<style scoped>
/* Your styles here */
</style>
