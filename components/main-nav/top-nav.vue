<script setup lang="ts">
import type { SkillLevel } from './skill-badge.vue';

interface ProjectsLink {
  name: string,
  to: string,
  level?: SkillLevel
}

const { query } = useRoute()
const isOpen = ref(true)
const isNavVisible = computed(() => (!('nav' in query && query.nav === 'false')))

const projects: ProjectsLink[] = [

  {
    name: 'Skilled E-learning landing',
    to: '/projects/skilled-elearning-landing',
    level: 'junior'
  },
  {
    name: 'Tech Book Club Landing',
    to: '/projects/techbook-club-landing',
    level: 'junior'
  }

]

const levels: SkillLevel[] = ['newbie', 'junior', 'intermediate', 'advanced','guru']

</script>

<template>
  <nav v-show="isNavVisible"
    class="text-rosePine-text bg-rosePine-surface p-4 relative flex flex-row justify-between z-10">
    <NuxtLink to="/">

      <Icon name="material-symbols-light:home-outline-rounded" size="2em" />
    </NuxtLink>
    <Icon name="material-symbols-light:menu" size="2em" class="visible lg:hidden" @click="isOpen = !isOpen"
      v-if="!isOpen" />
    <Icon name="material-symbols-light:close" size="2em" class="visible lg:hidden" @click="isOpen = !isOpen" v-else />

    <div v-if="isOpen" class="bg-rosePine-surface w-full absolute p-4 left-0 top-16 transition-all shadow-xl">

      <section>
        <p class="px-2 pb-2 text-rosePine-muted text-sm"> Projects:</p>
  
        <NuxtLink v-for="project in projects" :to="project.to" @click="isOpen = false"
          class=" text-rosePine-text border border-transparent px-2 w-full py-2 flex hover:border-rosePine-subtle transition-all ">
          {{ project.name }}
          <MainNavSkillBadge :level="project.level"/>
        </NuxtLink>

        <div class="flex flex-row text-xs text-rosePine-subtle px-2">
          <p class="flex flex-row items-center mr-2" v-for="level in levels"> <MainNavSkillBadge :level="level"/>-{{ level }}</p>
        </div>
      </section>
    </div>
  </nav>
  <ul>

  </ul>
</template>
