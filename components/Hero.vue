<template>
    <div class="noise-bg rounded-b-[2rem] py-20 4xl:pb-12 justify-center items-center relative w-full pl-0 lg:pl-[3.5rem] 3xl:pl-[11rem] 4xl:pl-[14rem]">
        <img src="/Decorative Dots.png" class="hidden lg:flex absolute bottom-2  w-full lg:w-[1000px] z-0 right-0 " />
        <div class="flex flex-col-reverse lg:flex-row justify-center items-center w-full relative z-20">
            <div class="w-1/2 [text-#00140F] lg:ml-20 3xl:ml-[200px] py-20 justify-center items-center">
                <h1 class="text-[32px] lg:text-5xl max-w-full lg:max-w-[671px] font-montserrat font-semibold leading-10 lg:leading-[56px] lg:pr-16">
                    Empowering Students and Young Professionals to Find the Right Stepping Stone
                </h1>
                <h5 class="text-beige font-montserrat text-xl font-medium leading-[24px] pr-16 text-left max-w-[671px] 3xl:max-w-[780px] mb-[34px] mt-[37px]">
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
            <div class="w-full 3xl:w-3/4 4xl:w-[70%] flex items-center justify-center">
                <img src="/Visual.png" class="3xl:ml-[-300px] 4xl-ml-[475px] w-[343px] lg:w-full h-full object-contain" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>