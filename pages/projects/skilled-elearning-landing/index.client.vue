<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const activeBreakpoint = breakpoints.active()
const heroImageUrlBasedOnBreakpoint = computed(() => {
  const heroImageBasePath = '/skilled-elearning-landing/'
  
  if(activeBreakpoint.value === '' || activeBreakpoint.value === 'sm') {
    return `${heroImageBasePath}image-hero-mobile.webp`
  }
  if(activeBreakpoint.value === 'md') {
    return `${heroImageBasePath}image-hero-tablet.webp`
  }

  return `${heroImageBasePath}image-hero-desktop.webp`
})  

const cardContent = [
  {
    icon: 'icon-animation.svg',
    title: "Animation",
    description: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    icon: 'icon-design.svg',
    title: "Design",
    description: "Create beautiful, usable interfaces to help shape the future of how the web looks."
  },
  {
    icon: 'icon-photography.svg',
    title: "Photography",
    description: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos. "
  },
  {
    icon: 'icon-crypto.svg',
    title: "Crypto",
    description: " All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course. "

  },
  {
    icon: 'icon-business.svg',
    title: "Business",
    description: " A step-by-step playbook to help you start, scale, and sustain your business without outside investment.  "
  },
]

</script>

<template>
  <div class="bg-gradient-to-b from-white to-[#F0F1FF]">
  <main class="flex flex-col items-center md:bg-[url('/skilled-elearning-landing/image-hero-tablet.webp')] bg-no-repeat md:bg-[size:80%] md:bg-[position:250%_-4%]  lg:bg-[url('/skilled-elearning-landing/image-hero-desktop.webp')]  lg:bg-[size:70%] lg:bg-[position:140%_-5%] xl:bg-[size:70%] xl:bg-[position:140%_-28%] 2xl:bg-[size:40%] 2xl:bg-[position:75%_-30%] ">
    <header class="px-5 md:px-11 w-full max-w-screen-lg flex justify-between content-center items-center py-4">
      <img src="/skilled-elearning-landing/logo-dark.svg" alt="skilled logo" />
      <SkilledElearningLandingButton type="black" label="Get Started" />
    </header>

    <section class="px-5 md:px-11 pt-16 pb-12 lg:mb-44 md:flex relative w-full max-w-screen-lg">
      <div class="md:w-1/2">
        <h1 class="font-extrabold text-[40px] tracking-tight mb-6">
          Maximize skill, <br /> minimize budget
        </h1>
        <p class="text-[#83869A] text-lg mb-10">Our modern courses across a range of in-demand skills will give you the
          knowledge you need to live the life you want.</p>
        <SkilledElearningLandingButton type="orange" label="Get Started" class="pb-12" />
      </div>
      <img class=" md:hidden md:w-[80%] md:absolute md:-top-[30%] md:-right-[30%] lg:w-[70%] lg:absolute lg:-top-[30%] lg:-right-[25%] " :src="heroImageUrlBasedOnBreakpoint" alt="stats image, woman drinking coffee, members 29k, course hours 1,451">
    </section>

    <section class="px-5 w-full max-w-screen-lg md:px-11 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8">

      <h2 class="bg-gradient-to-b w-full  from-[#FF6F48] to-[#F02AA6] p-8 md:px-8 md:pt-14 mb-16 rounded-2xl text-white font-extrabold text-2xl">
        Check out our most popular courses!
      </h2>
      <SkilledElearningLandingMainCard v-for="card in cardContent" :icon="card.icon" :title="card.title"
        :description="card.description" />
    </section>
  </main>
</div>
  <footer class="bg-[#13183F] flex items-center justify-center w-full">
    <div class="w-full max-w-screen-lg px-5 md:px-11 flex justify-between items-center self-center py-4">
      <img src="/skilled-elearning-landing/logo-light.svg" alt="skilled logo" />
      <SkilledElearningLandingButton type="purple" label="Get Started" />
    </div>
  </footer>
</template>

<style>
main>* {
  font-family: "Plus Jakarta Sans";
}
</style>