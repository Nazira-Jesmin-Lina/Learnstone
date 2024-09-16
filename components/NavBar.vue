<template>
  <nav
    class="hidden fixed top-0 left-0 w-full  bg-[#F4EED3] lg:flex justify-between w-3/2 px-20 pt-4 pb-2 z-[99999] rounded-b-3xl border-b-[#DBCCB1] border-b-[1px]">
    <img src="/logo.svg" class="my-auto" alt="logo" />

    <div class="flex gap-2">
      <div class="flex text-[#00140F] text-[16px] text-lg font-medium px-8 py-1">
        <NuxtLink to="#ourwork"
          :class="activeLink === 'ourwork' ? 'underline my-auto px-2 hover:text-[#555C5A]' : 'my-auto px-2 hover:text-[#555C5A] hover:underline'">
          Our Work
        </NuxtLink>
        <NuxtLink to="#platform"
          :class="activeLink === 'platform' ? 'underline my-auto px-2 hover:text-[#555C5A]' : 'my-auto px-2 hover:text-[#555C5A] hover:underline'">
          Platform
        </NuxtLink>
        <NuxtLink to="#aboutus"
          :class="activeLink === 'aboutus' ? 'underline my-auto px-2 hover:text-[#555C5A]' : 'my-auto px-2 hover:text-[#555C5A] hover:underline'">
          About Us
        </NuxtLink>
      </div>
      <NuxtLink to="#contactus" :class="activeLink === 'contactus' ? 'active-link' : ''">
        <button :class="activeLink === 'contactus' ? 'bg-[#FF9D8D]' : 'bg-[#FF5F45] hover:bg-[#E0462D]'"
          class="font-hind rounded-lg px-4 py-2 text-[#ffffff] font-regular text-[16px] my-auto">
          Contact Us >
        </button>
      </NuxtLink>

    </div>
  </nav>

  <!-- Mobile Navbar -->
  <nav
    :class="['lg:hidden bg-[#F4EED3] text-[#00140F] fixed top-0 left-0 z-[99999] border-b-[#DBCCB1] border-b-[1px] w-full', isOpen ? 'h-full overflow-y-hidden' : 'h-auto rounded-b-3xl']">
    <div class="flex justify-between  p-4">
      <!-- Logo -->
      <img src="/logo.svg" class="my-auto h-[20px]" alt="logo" />

      <!-- Toggle between Burger and Vector (Stroke) icons based on isOpen state -->
      <img :src="isOpen ? '/Vector (Stroke).svg' : '/burger.svg'" @click="isOpen = !isOpen"
        class="my-auto cursor-pointer size-5" alt="menu" />
    </div>

    <!-- Transition for Mobile Menu -->
    <transition name="fade-slide">
      <div v-if="isOpen" class=" bg-[#F4EED3] w-full h-full rounded-lg flex flex-col justify-between">
        <ul
          class="text-[#00140F] flex-none rounded-lg font-montserrat text-[20px] font-[500px] leading-[32px]  px-5 text-center text-xl">

          <!-- Our Work Link -->
          <li class="py-4 cursor-pointer" @click="isOpen = false">
            <NuxtLink to="#ourwork"
              :class="activeLink === 'ourwork' ? 'underline font-bold text-[#00140F]' : 'text-[#00140F]'"
              @click.native="activeLink = 'ourwork'">
              Our Work
            </NuxtLink>
          </li>

          <!-- Platform Link -->
          <li class="py-4 cursor-pointer" @click="isOpen = false">
            <NuxtLink to="#platform"
              :class="activeLink === 'platform' ? 'underline font-bold text-[#00140F]' : 'text-[#00140F]'"
              @click.native="activeLink = 'platform'">
              Platform
            </NuxtLink>
          </li>

          <!-- About Us Link -->
          <li class="py-4 cursor-pointer" @click="isOpen = false">
            <NuxtLink to="#aboutus"
              :class="activeLink === 'aboutus' ? 'underline font-bold text-[#00140F]' : 'text-[#00140F]'"
              @click.native="activeLink = 'aboutus'">
              About Us
            </NuxtLink>
          </li>          
        </ul>
        <!-- Contact Us Button -->
          <div class="p-4 cursor-pointer " @click="isOpen = false">
            <NuxtLink 
              to="#contactus" 
              :class="activeLink === 'contactus' ? 'active-link' : ''"
              @click.native="activeLink = 'contactus'"
            >
              <button
                :class=" activeLink === 'contactus' ? 'bg-[#FF9D8D]' : 'bg-[#FF5F45] hover:bg-[#E0462D]'"
                class="w-full font-hind rounded-lg px-4 py-2 text-[#ffffff] font-regular text-[16px] my-auto"
              >
                Contact Us >
              </button>
            </NuxtLink>
          </div>
      </div>
    </transition>
  </nav>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// State for the mobile menu toggle
const isOpen = ref(false);

// Watch for changes to isOpen and add/remove 'overflow-hidden' class from body
watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

// State for the active link underline
const activeLink = ref('');

// Function to handle scroll and detect the active section
const handleScroll = () => {
  // Select any element with an id
  const sections = document.querySelectorAll('[id]');
  const scrollPos = window.scrollY + 150; // Adjust the offset as needed

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      activeLink.value = sectionId;
    }
  });
};


// Add and remove scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
