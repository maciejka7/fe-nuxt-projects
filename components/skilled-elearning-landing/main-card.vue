<script setup lang="ts">

interface MainCardProps {
  icon: string;
  title: string;
  description: string;
}

const { icon, title, description } = defineProps< MainCardProps >();
const baseAssetsPath = '/skilled-elearning-landing'

const cardIcon = computed(() => { return `${baseAssetsPath}/${icon}`})
</script>

<template>
  <article class="bg-white p-8 mb-16 rounded-2xl relative w-full" >
    <div class="bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] absolute rounded-full w-14 h-14 -top-7 ">
      <img :src="cardIcon" :alt="`${title} icon`" />
    </div>

    <div class="mt-8">
      <h3 class="font-extrabold text-xl pb-6">{{ title }} </h3>
      <p class="font-bold text-base text-[#83869A] pb-2">{{ description }}</p>
      <SkilledElearningLandingButton label="Get Started" type="link"/>
    </div>
  </article >
</template>
