<template>
    <div id="contactus" class="flex items-start justify-between bg-[#F4EED3] pl-[8.5rem] py-24 pr-10 rounded-t-[2rem] relative">
        <!-- Left Section (Text and Address) -->
        <img src="/Decorative Dots_b.png" class="absolute  bottom-0 w-1/2 h-full  z-0 left-[-150px]" />
        <div class="w-1/2  relative z-10">
          
          <div class="">
            <p class="text-[20px] text-[#FF5F45] font-montserrat font-semibold">Contact Us</p>
            <h2 class="font-montserrat text-[40px] font-semibold leading-[48px]">Placeholder Text</h2>
        
            <!-- Address Section -->
            <div class="mt-12">
              <h5 class="font-montserrat font-semibold text-[20px]">We Are Here Currently</h5>
              <div class="mt-4 text-[16px] space-y-4">
                <p>228 Park Avenue South</p>
                <p>PMB 21976, New York</p>
                <p>NY 10003</p>
              </div>
            </div>
        
            <!-- Social Media Links -->
            <div class="mt-8">
              <h5 class="font-montserrat font-semibold text-[20px]">Our Social Media Links</h5>
              <div class="flex flex-col mt-4 space-y-4">
                <a href="#" class="flex items-center space-x-2">
                  <img src="/Youtube.png" alt="YouTube" class="h-6 w-6">
                  <span class="text-[16px] underline hover:text-[#555C5A]">YouTube</span>
                </a>
                <a href="#" class="flex items-center space-x-2">
                  <img src="/Instagram.png" alt="Instagram" class="h-6 w-6">
                  <span class="text-[16px] underline hover:text-[#555C5A]">Instagram</span>
                </a>
                <a href="#" class="flex items-center space-x-2">
                  <img src="/Icon.png" alt="LinkedIn" class="h-6 w-6">
                  <span class="text-[16px] underline hover:text-[#555C5A]">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      
        <!-- Right Section (Form) -->
        <div class="w-5/6 mt-[115px] pr-20 relative">
          <img src="/Decorative Dots_t.png" class="absolute  bottom-[200px] w-full h-full  z-0 left-[150px]" />
          <div class="relative mt-[12px] z-10">
            <h5 class="font-montserrat font-semibold  text-[20px]">Send Us a Message</h5>

            <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
        <!-- Email Field -->
        <div>
          <label class="block text-[16px] font-medium font-montserrat mb-2">Your Business Mail</label>
          <input
            type="email"
            v-model="email"
            @input="validateEmail"
            :class="{
              'border-black': !emailError && email.length > 0
            }"
            class="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Enter your business mail"
          />
          <p v-if="emailError" class="text-red-500 text-sm pt-4">Please enter a valid email address (e.g. example@mail.com).</p>
        </div>

        <!-- Subject Field -->
        <div>
          <label class="block text-[16px] font-medium font-montserrat mb-2">Subject</label>
          <input
            type="text"
            v-model="subject"
            :class="{
              'border-black': subject.length > 0 && subject.length <= 100
            }"
            class="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Add the subject of your message"
          />
          <div class="flex justify-between items-center flex-row-reverse pt-2">
            <div :class="{'text-red-500': subject.length > 100, 'text-[#868F8D]': subject.length <= 100}" 
              class="font-hind text-right text-[12px]">
              {{ subject.length }}/100
            </div>          
            <p v-if="subject.length > 100" class="text-red-500 text-sm">Subject cannot exceed 100 characters.</p>
          </div>
        </div>

        <!-- Message Field -->
        <div>
          <label class="block text-[16px] font-medium font-montserrat mb-2">Message</label>
          <textarea
            v-model="message"
            :class="{
              'border-black': message.length > 0 && message.length <= 500,
            }"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 overflow-y-scroll custom-scrollbar"
            rows="5"
            placeholder="Placeholder"
          ></textarea>

          <!-- Character counter and error message for Message field -->
          <div class="flex justify-between items-center flex-row-reverse pt-2">
            <div :class="{'text-red-500': message.length > 500, 'text-[#868F8D]': message.length <= 500}" 
                class="font-hind text-right text-[12px]">
              {{ message.length }}/500
            </div>
            <p v-if="message.length > 500" class="text-red-500 text-sm">Message cannot exceed 500 characters.</p>
          </div>
        </div>


        <!-- Submit Button -->
        <div class="text-right justify-center my-auto items-center">
          <button type="submit" class="bg-[#FF5F45] text-white px-6 py-3 rounded-lg text-xl font-semibold btn-primary">Send Message <span class="items-center justify-center text-xl">></span> </button>
        </div>
      </form>

          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Reactive references for the email, subject, and message fields
const email = ref('')
const subject = ref('')
const message = ref('')

// Error states
const emailError = ref(false)

// Validate Email
function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value) && email.value) {
    emailError.value = true
  } else {
    emailError.value = false
  }
}

// Handle form submission
function handleSubmit() {
  if (emailError.value || subject.value.length > 100 || message.value.length > 500) {
    alert('Please correct the errors before submitting.')
  } else {
    alert('Form submitted successfully!')
    // Submit form logic here
  }
}
</script>

<style scoped>
/* Focus and hover styles - all borders turn black */
input:focus, textarea:focus, input:hover, textarea:hover {
  border-color: #00140F;
  outline: none;
}

.border-black {
  border-color: #00140F;
}

/* Error styles */
.border-red-500 {
  border-color: #FF5F45;
}

/* Red error message text without taking additional space */
.text-red-500 {
  color: #FF5F45;
  font-size: 12px;
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
  background-color: #D7E0DE;
  border-radius: 10px;

}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #ABBAB6;
  border-radius: 10px;
  cursor: pointer;
}
.custom-scrollbar::-webkit-scrollbar-thumb:active {
  background-color: #788F89;
}

</style>
