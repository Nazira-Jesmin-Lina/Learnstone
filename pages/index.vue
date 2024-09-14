<template>
  <div class="flex flex-col items-center justify-center">
    <div class="">
      <div>
        <nav-bar />
        <!-- Hero -->
        <div  class="noise-bg rounded-b-[2rem] z-20 relative w-full">
          <div class="my-11 lg:flex justify-center items-center w-6/5 mx-auto pt-20 lg:pt-0 -pb-5 pl-20 ">
          <div class="w-full [text-#00140F] mt-[215px] mb-6 ml-20">
            <h1 class="large-font leading-[56px] max-w-[675px] max-h-[224px]">
              Empowering Students and Young Professionals to Find the Right Stepping Stone
            </h1>
            <h5 class="text-beige font-montserrat font-medium text-[20px] leading-[24px] text-left max-w-[572px] tracking-wider mb-[34px] mt-[37px]">
              By combining vast data with recent advancements in Natural Language Processing, Learnstone matches your goals with the best opportunities.
            </h5>
            
            <div class="flex gap-3 ">
              <NuxtLink to="#platform">
                <button class="btn-secondary flex items-center justify-center gap-1 pl-2">
                  Visit Platform 
                  <img class="pt-1.5" src="/angle_right_2.svg"/>
                </button>
              </NuxtLink>
              <NuxtLink to="#contactus">
                <button class="btn-primary flex items-center justify-center gap-1">
                  Contact Us
                  <img class="pt-1" src="/angle_right.svg"/>
                </button>
              </NuxtLink>
              
            </div>
          </div>
          <div class="relative">
            <img src="/Visual.png" class="relative mt-10 z-10  lg:w-[900px] object-contain " />
            <img src="/Decorative Dots.png" class="absolute inset-x-0 bottom-2 mx-auto w-full lg:w-[1000px] z-0 mb-5" />
          </div>
        </div>
        </div>
      </div>
  
      <div class=" -mt-8">
        <div id="ourwork" class="bg-[#21463C] mx-auto lg:flex gap-4 xl:gap-16 relative justify-center items-center pb-10 z-0 flex flex-col ">
  
          <div class="my-auto text-black  py-10 lg:py-1 px-6 justify-start pl-20 max-w-[px]">
            <p class="text-[20px] text-[#FF5F45] mt-40 ml-20 font-montesserat font-semibold max-w-[572]">Our Work</p>
            <h3 class="text-[40px] font-montserrat mb-10 text-[#ffffff] font-semibold leading-[48px] text-start mt-5 ml-20 ">Disruppting Current Solutions</h3>
            <div class="flex flex-row gap-12 justify-between -pr-20">
              
              <div class="flex flex-row  max-w-[880px] pt-40 text-center justify-center text-hind">
                <div class="mr-10 ">
                  <h4 class=" text-[24px] font-montserrat text-[#A2FF48] text-semibold leading-9 text-left mt-35 ml-20 mb-5">The problem we're addressing isn't new.</h4>
                  <div class="font-hind text-[16px] font-light" >
                    <p class="text-[#ffffff] text-[16px] text-normal leading-6 text-left mt-35 ml-20">Students and young professionals have always faced overwhelming choices that will multiple over time, and a lack of clear guidance when planning their next steps</p> 
                    <br>
                    <p class="text-[#ffffff] text-[16px] leading-6 text-left mt-35 ml-20">Existing solutions often provide superficial information, falling short of what's needed.</p> 
                  </div>
                </div>
              </div>
              <div class="-ml-8 pl-2 pr-20 relative">
                <img src="/our_work_1.png" class="relative z-20 lg:w-[900px] object-contain left-0 top-3" />
                <img src="/Frame 204.png" class="absolute top-0 right-[-20px] transform -translate-y-1/3 z-10 lg:w-[300px]" />
              </div>
            </div>
          </div>
  
  
          <div class="flex flex-row justify-center pt-10">
            <img src="/Frame 206.png" class="lg:w-[200px] -mr-20 relative z-10 -top-1" />
            <h3 class="text-center text-[#ffffff] font-semibold font-montserrat text-[32px] leading-[40px] mt-20 relative z-20 -ml-5 -mr-5">
              We aim to change that by offering <br>deeper, more meaningful insights.
            </h3>
            <img src="/Frame 205.png" class="lg:w-[200px] -ml-20 relative z-10 top-5" />
          </div>

          <div class=" items-center">

            <div class="flex flex-row items-center pl-20">
              <div class="pl-20">
                <div class="w-11/12">
                  <img src="/ourwork_1.png" class="lg:w-[700px] " />
                </div>
              </div>
              <div class="flex flex-col pr-10 mr-20 w-[700px] ">
                <h4 class="font-montserrat text-[#A2FF48] text-[24px] font-semibold leading-[36px] text-left mb-10">
                  With Exhaustive Contextual Data
                </h4>        
                 <p class="text-[#ffffff] font-montserrat text-[20px] font-medium leading-[32px] text-left">Most platforms rely solely on surface-level information like official program descriptions — but we see that as just the starting point.</p>
                <img src="/Separator.png" class="lg:w-[550px] my-5 " />
                <p class="text-[#ffffff] text-left font-hind text-[16px] font-bold leading-[24px] tracking-[0.0075em] space-y-5 mb-5">
                  The real value comes from contextualizing this data:
                </p>            
                <ul class="text-[#ffffff] list-disc pl-5 text-left font-hind text-[16px] font-light leading-[24px] tracking-[0.0075em]">
                  <li>What are people saying about these programs?</li>
                  <li>How do employment trends align with program outcomes?</li>
                  <li>What do government statistics reveal about job market demand and typical professional trajectories?</li>
                </ul>
                <p class="text-[#ffffff] text-left font-hind text-[15px] font-normal leading-[24px] tracking-[0.0075em] mt-5">
                  By leveraging diverse data sources beyond basic listings, we deliver deeper, more meaningful insights that other platforms overlook.
                </p>
                <div class="flex gap-3 mt-8">
                  <NuxtLink to="#contactus">
                    <button class="btn-primary font-hind text-[16px] font-normal flex items-center justify-center gap-1 h-10 w-13">
                      Contact Us
                      <img class="pt-1" src="/angle_right.svg" />
                    </button>
                  </NuxtLink>
                  
                </div>
              </div>
            </div>

          </div>


          

          <div class=" items-center pt-20">

            <div class="flex flex-row-reverse px-20 -pr-20 gap-20 items-center">
              <div  class="-mr-20 overflow-hidden">
                <div class="w-11/12 pr-20">
                  <img src="/ourwork_2.png" class="lg:w-[700px] " />
                </div>
              </div>
              <div class="flex flex-col pl-20 justify-end w-[700px]">
                <h4 class="font-montserrat text-[#A2FF48] text-[24px] font-semibold leading-[36px] text-left mb-10">
                  Involving Human Expertise
                </h4>
                
                 <p class="text-[#ffffff] font-montserrat font-medium text-[20px] leading-[32px] text-left">While AI is powerful and holds great promise, it's not a complete replacement for human insight. </p>
    
                <!-- Separator -->
                <img src="/Separator.png" class="lg:w-[650px] mt-5 " />
                  <div class="text-[#ffffff] text-left font-hind text-[16px] font-light leading-[24px] tracking-[0.0075em] scale-y-5 mt-5">
                    <p>We leverage cutting-edge technology to provide highly personalized recommendations, but we understand that reliable high-quality decisions often require a human touch.</p>
                    <br>
                    <p>That's why we partner with third-party agencies and independent consultants through our marketplace, offering users price-competitive, expert advice for the final, critical, steps.</p>
                    <br>
                    <p>By combining AI-driven insights with human expertise, we set the grounds for the best possible outcomes for each user.</p>
                  </div>
                  <div class="flex gap-3 mt-8">
                  <NuxtLink to="#contactus">
                    <button class="btn-primary font-hind text-[16px] font-normal flex items-center justify-center gap-1 h-10 w-13">
                      Contact Us
                      <img class="pt-1" src="/angle_right.svg" />
                    </button>
                  </NuxtLink>
                 
                  
                </div>
              </div>
            </div>

          </div>


          <div class=" items-center pt-20 pb-20">

            <<div class="flex flex-row items-center pl-20">
              <div class="pl-20">
                <div class="w-11/12">
                  <img src="/ourwork_3.png" class="lg:w-[700px] " />
                </div>
              </div>
              <div class="flex flex-col pr-10 mr-20 w-[700px]">
                <h4 class="font-montserrat text-[#A2FF48] text-[24px] font-semibold leading-[36px] text-left mb-10">
                  Leveraging Machine Learning
                </h4>
                
                 <p class="text-[#ffffff] font-montserrat font-medium text-[20px] leading-[32px] text-left">
                 Thanks to recent advances in Natural Language Processing (NLP) and Large Language Models (LLMs), we can now process and model vast amounts of unstructured data at scale. 
                 </p>
    
            
                <img src="/Separator.png" class="lg:w-[450px] mt-5 " />
                <div class="text-[#ffffff] text-left font-hind text-[16px] font-light leading-[24px] tracking-[0.0075em] scale-y-12 mt-5">
                    <p>This enables us to semantically understand and assess learning opportunities in ways that were previously unimaginable.</p>
                    <br>
                    <p>We don't just recommend opportunities - we connect you to the ones that genuinely fit your goals and context.</p>
                  </div>
                <div class="flex gap-3 mt-8">
                  <NuxtLink to="#contactus">
                    <button class="btn-primary font-hind text-[16px] font-normal flex items-center justify-center gap-1 h-10 w-13">
                      Contact Us
                      <img class="pt-1" src="/angle_right.svg" />
                    </button>
                  </NuxtLink>
                  
                </div>
              </div>
            </div>

          </div>

           
          
        
        </div>
    
      
        <!-- Core Feature -->
        <div id="platform" class="bg-[#F4EED3] pt-20 rounded-[2rem]  z-10 relative pl-40">
          <div class="text-black  flex flex-col items-start justify-center">
            <p class="text-[20px] text-[#FF5F45] font-montserrat font-semibold">Platform</p>
            <h2 class="font-montserrat text-[40px] font-semibold leading-[48px]">Core Features</h2>
            <Features/>
          </div>
        </div>
        <!-- About Us -->
         <div class="items-center justify-center w-full">
          <div id="aboutus" class="bg-[#21463C] pb-20 items-center justify-center flex flex-col w-full">
            <div class="my-auto text-black py-10 lg:py-1 px-20 xl:px-40 2xl:px-8 2xl:w-2/3 4xl:w-1/2 justify-center items-center w-full relative">
              <h6 class="text-lg font-semibold font-montserrat text-[#FF5F45] text-start mt-40 pb-4">About Us</h6>
              <h3 class="text-[40px] font-montserrat mb-10 leading-[48px] text-[#ffffff] text-start">Understanding the Team</h3>
              <div class="flex flex-row gap-12 justify-between w-full relative z-10">
                <div class="flex flex-row w-full text-center items-center justify-center gap-8 z-10 relative">
                  <div class="text-[#ffffff] text-left font-hind text-lg w-full tracking-wide space-y-8 relative">
                    <h5 class=" font-montserrat text-[20px] font-medium leading-[24px] text-left">Why Now?</h5>
                    <div class="space-y-4">
                      <p class="font-thin text-base tracking-wide font-hind">Recent breakthroughs in Natural Language Processing, Machine Learning, and Large Language Models have made it possible to process vast amounts of unstructured data at scale—something that was previously accessible to only a few.</p>
                      <p class="font-thin text-base tracking-wide font-hind">Now, this technology is commercially viable, just as the demand for personalized education and career guidance is rising.</p>
                      <p class="font-thin text-base tracking-wide font-hind">This convergence makes it the perfect time for a platform that delivers smarter, more contextual recommendations, moving beyond traditional search methods.</p>
                    </div>
                  </div>
                  <div class="w-full items-center justify-center">
                    <img src="/Image (5).png" class="lg:w-[600px] object-contain z-10" />
                  </div>
                </div>
              </div>
              <img src="/Frame 204.png" class="absolute top-60 right-20 z-0 lg:w-[200px] " />
            </div>
            <div class="my-auto text-black pt-20 pb-10 px-40 2xl:px-8 2xl:w-2/3 4xl:w-1/2 justify-center items-center w-full">
                <div class="flex flex-row-reverse justify-between items-center text-center gap-8">
                  <div class="text-[#ffffff] text-left font-hind text-lg w-full tracking-wide space-y-8 z-10 relative">
                    <h5 class="font-montserrat text-[20px] font-medium leading-[24px] text-left">Why Us?</h5>
                    <div class="space-y-4">
                      <p class="font-thin text-base tracking-wide font-hind">Our team is composed of researchers and engineers with exceptional academic and professional track records.</p>
                      <p class="font-thin text-base tracking-wide font-hind">Many of us hold top-tier credentials in Natural Language Processing and related fields. We also bring expertise in data collection, processing, and warehousing.</p>
                      <p class="font-thin text-base tracking-wide font-hind">This unique combination of skills positions us strongly to deliver on the challenge.</p>
                    </div>
                  </div>
                  <div class="w-full relative">
                    <img src="/Image (6).png" class="lg:w-[650px] object-contain left-0 top-3 -ml-4 z-10 relative" />
                    <img src="/Frame 205_2.png" class="absolute -bottom-10 -left-20 transform translate-x-4 z-0 lg:w-[200px]" />
                  </div>
                </div>
              </div>
          </div>
         </div>

         
        
        
  
  
        
        <!-- get in touch -->

        <!-- <div id="contactus" class="items-center">
          <div  class="bg-[#F4EED3] rounded-t-[2rem] pl-20 flex items-start justify-start w-full flex-col">
            <div class="text-left">
              <p class="text-[20px] text-[#FF5F45] mt-40 font-montserrat font-semibold">Contact Us</p>
              <h2 class="font-montserrat text-[40px] font-semibold leading-[48px]">Placeholder Text</h2>
            </div>
            
            <div >
              <div>
                <h5 class="font-montserrat text-[20px] font-semibold leading-[24px] mt-20">We Are Here Currently</h5>
                <p class="font-hind text-[15px] font-normal leading-[24px] tracking-[0.0075em] mt-5">228 Park Avenue South</p>
                <p>PMB 21976, New York</p>
                <p>NY 10003</p>
              </div>

              <div></div>
            </div>
            
          </div>
        </div> -->


        
        

        
        
        <ContactUs/>
        
        
        <Footer/>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts"></script>

<style scoped></style>
