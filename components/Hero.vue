<template>
    <div class="noise-bg rounded-b-[2rem] justify-center items-center relative w-full pl-[3.5rem]">
        <img src="/Decorative Dots.png" class="absolute bottom-2  w-full lg:w-[1000px] z-0 right-0" />
        <div class="my-10 flex justify-center items-center w-full z-20">
            <div class="w-full [text-#00140F] ml-20 justify-center items-center">
                <h1 class="text-5xl font-montserrat font-semibold leading-[56px] pr-16">
                    Empowering Students and Young Professionals to Find the Right Stepping Stone
                </h1>
                <h5 class="text-beige font-montserrat text-xl leading-[24px] pr-16 text-left max-w-[572px] mb-[34px] mt-[37px]">
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
            <div class="relative w-full">
                <img src="/Visual.png" class="relative mt-10 z-10  lg:w-[900px] object-contain " />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>