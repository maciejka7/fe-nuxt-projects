<script setup lang="ts">

const { query } = useRoute()
const isOpen = ref(false)
const isNavVisible = computed(()=> ( !('nav' in query && query.nav === 'false') ))

const projects = [

{
  name: 'Skilled E-learning landing',
  to: '/projects/skilled-elearning-landing'
},
{
  name: 'Tech Book Club Landing',
  to: '/projects/techbook-club-landing'
}

]
</script>

<template>
  <nav v-show="isNavVisible"  class="text-rosePine-text bg-rosePine-surface p-4 relative flex flex-row justify-between z-10" >
    <NuxtLink to="/">
      
    <Icon name="material-symbols-light:home-outline-rounded" size="2em" />
    </NuxtLink>
    <Icon name="material-symbols-light:menu" size="2em" class="visible lg:hidden" @click="isOpen = !isOpen"  v-if="!isOpen"/>
    <Icon name="material-symbols-light:close" size="2em" class="visible lg:hidden" @click="isOpen = !isOpen" v-else />

    <div v-if="isOpen" class="bg-rosePine-surface w-full absolute p-4 left-0 top-16 transition-all shadow-xl">
  
      <p class="px-2 pb-2 text-rosePine-muted text-sm"> Projects:</p>
  
      <NuxtLink v-for="project in projects"
        :to="project.to"
        class=" text-rosePine-text border border-transparent px-2 w-full py-2 flex hover:border-rosePine-subtle transition-all "
      >
      {{ project.name }}
      </NuxtLink>
    </div>
  </nav>
  <ul >
    
  </ul>
</template>
