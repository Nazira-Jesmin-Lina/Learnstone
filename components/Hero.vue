<template>
    <div
        class="noise-bg rounded-b-[2rem] p-4 lg:p-0 pt-20 pb-10 lg:pb-20 lg:pt-[6.5rem] 4xl:pb-10 justify-center items-center relative w-full lg:w-full lg:pl-[3.5rem] 3xl:pl-[11rem] 4xl:pl-[14rem]">
        <img src="/Decorative Dots.svg" class="hidden lg:flex absolute bottom-2  w-full lg:w-[1000px] z-0 right-0 " />
        <div class="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-center items-center w-full relative z-20">
            <div class="w-full [text-#00140F] lg:ml-20 3xl:ml-[200px] lg:py-20 justify-center items-center">
                <h1
                    class="text-[32px] tracking-wider lg:tracking-normal lg:text-5xl max-w-full lg:max-w-[650px] font-montserrat font-semibold leading-10 lg:leading-[56px] lg:pr-16">
                    Empowering Students and Young Professionals to Find the Right Stepping Stone
                </h1>
                <h5
                    class="text-beige font-montserrat text-xl font-normal tracking-wide lg:font-medium leading-[32px] lg:leading-[24px] lg:pr-16 text-left max-w-[651px]  3xl:max-w-[720px] mb-[34px] mt-[37px]">
                    By combining vast data with recent advancements in Natural Language Processing, Learnstone matches
                    your goals with the best opportunities.
                </h5>
                <div class="flex flex-col-reverse w-full lg:flex-row gap-3 ">
                    <NuxtLink to="#platform" class="w-full lg:w-fit">
                        <button class="w-full btn-secondary flex items-center justify-center gap-1 lg:pl-2">
                            <span>Visit Platform</span>
                            <i class="fas fa-chevron-right px-1"></i>
                        </button>
                    </NuxtLink>
                    <NuxtLink to="#contactus"class="w-full lg:w-fit">
                        <button class="btn-primary flex items-center justify-center gap-1 w-full ">
                            <span>Contact Us</span>
                            <i class="fas fa-chevron-right px-1"></i>
                        </button>
                    </NuxtLink>
                </div>
            </div>
            <div class="w-full lg:w-5/6 3xl:w-2/3 4xl:w-1/2 flex items-center justify-center ">
                <img src="/Visual copy.svg"
                    class="hidden lg:flex 3xl:ml-[-450px] 3xl:py-2  4xl:py-16 4xl:ml-[-595px] lg:pr-32 lg:py-0 w-full h-full lg:object-contain" />
                <img src="/Visual.svg"
                    class="flex lg:hidden w-full h-full object-contain" />
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'></script>

<style scoped></style>