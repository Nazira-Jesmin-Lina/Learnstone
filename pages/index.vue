<template>
  <div class="flex flex-col items-center justify-center ">
    <div class="">
      <div class="">
        <nav-bar />
        <!-- Hero -->
        <Hero/>
      </div>
      
      <OurWork/>
      <div class=" -mt-20">
      
        <!-- Core Feature -->
        <div id="platform" class="bg-[#F4EED3] pt-16 rounded-[2rem] pb-4 3xl:pb-16 4xl:pb-8 z-10 relative lg:pl-[8.5rem] 3xl:px-[23.5rem] 4xl:px-[27rem]">
          <img src='/Mask group.svg' class="absolute 4xl:w-3/5  z-0 top-0 right-0"/>
          <div class="text-black relative z-20 flex flex-col items-start justify-center">
            <p class="text-[20px] text-[#FF5F45] font-montserrat font-semibold">Platform</p>
            <h2 class="font-montserrat text-[40px] font-semibold leading-[48px]">Core Features</h2>
            <Features/>
          </div>
        </div>
        <!-- About Us -->
         <div class="items-center justify-center w-full">
          <div id="aboutus" class="bg-[#21463C] pb-20 4xl:pb-16 items-center justify-center flex flex-col w-full">
            <div class=" text-black px-[8.5rem] 3xl:px-[23.5rem] 4xl:px-[27rem] justify-center items-center w-full ">
              <h6 class="text-lg font-semibold font-montserrat text-[#FF5F45] text-start mt-[5.5rem] pb-2">About Us</h6>
              <h3 class="text-[40px] font-montserrat mb-10 leading-[48px] text-[#ffffff] text-start">Understanding the Team</h3>
              <div class="flex flex-row gap-12 justify-between w-full">
                <div class="flex flex-row w-full text-center items-center justify-center gap-8  mt-[1.25rem]">
                  <div class="text-[#ffffff] text-left font-hind text-lg w-full 4xl:w-11/12 tracking-wide space-y-8 ">
                    <h5 class="text-[#A2FF48] font-montserrat text-[20px] font-medium leading-[24px] text-left">Why Now?</h5>
                    <div class="space-y-4">
                      <p class="font-thin text-base tracking-wide font-hind">Recent breakthroughs in Natural Language Processing, Machine Learning, and Large Language Models have made it possible to process vast amounts of unstructured data at scale—something that was previously accessible to only a few.</p>
                      <p class="font-thin text-base tracking-wide font-hind">Now, this technology is commercially viable, just as the demand for personalized education and career guidance is rising.</p>
                      <p class="font-thin text-base tracking-wide font-hind">This convergence makes it the perfect time for a platform that delivers smarter, more contextual recommendations, moving beyond traditional search methods.</p>
                    </div>
                  </div>
                  <div class="relative w-full 3xl:w-5/6 4xl:pl-6  items-center justify-center">
                    <img src="/Image (5).png" class="relative lg:w-[600px] object-contain z-10" />
                    <img src="/Frame 204.png" class="absolute -top-24 -right-[6rem] z-0 lg:w-[270px] " />
                  </div>
                </div>
              </div>
            </div>
            <div class="my-auto text-black pt-10 pb-8 3xl:pb-10 px-[8.5rem] 3xl:px-[22rem] 4xl:px-[26rem] justify-center items-center w-full">
                <div class="flex flex-row-reverse justify-between items-center text-center gap-8">
                  <div class="text-[#ffffff] text-left font-hind text-lg w-full 4xl:w-5/6 4xl:pl-8 tracking-wide space-y-8 z-10 relative">
                    <h5 class="text-[#A2FF48] font-montserrat text-[20px]  font-medium leading-[24px] text-left">Why Us?</h5>
                    <div class="space-y-4">
                      <p class="font-thin text-base tracking-wide font-hind">Our team is composed of researchers and engineers with exceptional academic and professional track records.</p>
                      <p class="font-thin text-base tracking-wide font-hind">Many of us hold top-tier credentials in Natural Language Processing and related fields. We also bring expertise in data collection, processing, and warehousing.</p>
                      <p class="font-thin text-base tracking-wide font-hind">This unique combination of skills positions us strongly to deliver on the challenge.</p>
                    </div>
                  </div>
                  <div class="w-full 3xl:w-5/6 3xl:pl-6 4xl:pl-4  relative">
                    <img src="/Image (6).png" class="lg:w-[650px] 4xl:w-[572px] object-contain z-10 relative" />
                    <img src="/Frame 205_2.png" class="absolute -bottom-[3.5rem] -left-[4.5rem] transform translate-x-4 z-0 lg:w-[200px]" />
                  </div>
                </div>
              </div>
          </div>
         </div>

         
        
        
  
  
    


        
        

        
        
        <ContactUs/>
        
        
        <Footer/>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts"></script>

<style scoped></style>
