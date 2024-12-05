<script setup lang="ts">

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
  <main class="bg-gradient-to-b from-white to-[#F0F1FF]">

    <header class="px-5 flex justify-between content-center items-center py-4">
      <img src="/skilled-elearning-landing/logo-dark.svg" alt="skilled logo" />
      <SkilledElearningLandingButton type="black" label="Get Started" />
    </header>

    <section class="px-5 pt-16 pb-12">
      <h1 class="font-extrabold text-[40px] tracking-tight mb-6">
        Maximize skill, <br /> minimize budget
      </h1>
      <p class="text-[#83869A] text-lg mb-10">Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.</p>
      <SkilledElearningLandingButton type="orange" label="Get Started" />
    </section>

    <section>
      <img src="/skilled-elearning-landing/image-hero-mobile.webp"
        alt="stats image, woman drinking coffee, members 29k, course hours 1,451">
    </section>

    <section class="px-5 pb-14">

      <h2 class="bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] p-8 rounded-2xl text-white font-extrabold text-2xl">
        Check out our most popular courses!
      </h2>
    </section>

    <section class="px-5 pb-14">
      <SkilledElearningLandingMainCard v-for="card in cardContent" :icon="card.icon" :title="card.title" :description="card.description" />

    </section>



  </main>
  <footer class="bg-[#13183F] px-5 flex justify-between content-center items-center py-4">
    <img src="/skilled-elearning-landing/logo-light.svg" alt="skilled logo" />
    <SkilledElearningLandingButton type="purple" label="Get Started" />
  </footer>
</template>

<style>
main>* {
  font-family: "Plus Jakarta Sans";
}
</style>