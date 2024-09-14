<template>
  <nav class="fixed top-0 left-0 w-full  bg-[#F4EED3] lg:flex justify-between w-3/2 px-20 pt-4 pb-4 z-[99999] rounded-b-[2rem] border-b-[#DBCCB1] border-b-2">
    <img src="/logo.svg" class="my-auto" alt="logo" />

    <div class="flex gap-2">
      <div class="flex text-[#00140F] text-[16px] text-lg font-medium px-8 py-1">
        <NuxtLink 
          to="#ourwork" 
          :class="activeLink === 'ourwork' ? 'underline my-auto px-2 hover:text-[#555C5A]' : 'my-auto px-2 hover:text-[#555C5A]'"
        >
          Our Work
        </NuxtLink>
        <NuxtLink 
          to="#platform" 
          :class="activeLink === 'platform' ? 'underline my-auto px-2 hover:text-[#555C5A]' : 'my-auto px-2 hover:text-[#555C5A]'"
        >
          Platform
        </NuxtLink>
        <NuxtLink 
          to="#aboutus" 
          :class="activeLink === 'aboutus' ? 'underline my-auto px-2 hover:text-[#555C5A]' : 'my-auto px-2 hover:text-[#555C5A]'"
        >
          About Us
        </NuxtLink>
      </div>
      <NuxtLink 
          to="#contactus" 
          :class="activeLink === 'contactus' ? 'active-link' : ''"
          >
          <button
            :class="activeLink === 'contactus' ? 'bg-[#FF9D8D]' : 'bg-[#FF5F45] hover:bg-[#E0462D]'"
            class="font-hind rounded-lg px-4 py-2 text-[#ffffff] font-regular text-[16px] my-auto"
          >
    Contact Us >
  </button>
</NuxtLink>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// State for the mobile menu toggle
const isOpen = ref(false);

// State for the active link underline
const activeLink = ref('');

// Function to handle scroll and detect the active section
const handleScroll = () => {
  const sections = document.querySelectorAll('div[id]');
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
