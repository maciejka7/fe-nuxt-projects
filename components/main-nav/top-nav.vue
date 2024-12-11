<script setup lang="ts">
import type { SkillLevel } from './skill-badge.vue';

interface ProjectsLink {
  name: string,
  to: string,
  level?: SkillLevel
  feLink?: string
}

const { query } = useRoute()
const isOpen = ref(true)
const isNavVisible = computed(() => (!('nav' in query && query.nav === 'false')))

const projects: ProjectsLink[] = [

  {
    name: 'Skilled e-learning Landing Page',
    to: '/projects/skilled-elearning-landing',
    level: 'junior',
     feLink: 'https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q'
  },
  {
    name: 'Tech Book Club Landing Page',
    to: '/projects/techbook-club-landing',
    level: 'junior',
    feLink: 'https://www.frontendmentor.io/challenges/tech-book-club-landing-page-fZQidjHU73'
  }

]

const levels: SkillLevel[] = ['newbie', 'junior', 'intermediate', 'advanced', 'guru']

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
        <p class="px-2 pb-1 text-rosePine-muted text-sm"> Projects:</p>

        <div v-for="project in projects" class="flex flex-row items-center w-full ">
          <NuxtLink :to="project.to" @click="isOpen = false"
            class="flex-row items-center gap-2 text-rosePine-text hover:text-rosePine-subtle transition-all px-2 py-2 flex  ">
            {{ project.name }}
            <MainNavSkillBadge :level="project.level" />
          </NuxtLink>

          <NuxtLink v-if="project.feLink" :to="project.feLink" target="_blank" class="flex m-0 p-0">
            <span class="block border border-rosePine-muted rounded">
              <Icon size="1rem" class="flex p-2" name="material-symbols-light:arrow-outward-rounded" />
            </span>
          </NuxtLink>
        </div>

        <div class="flex flex-row text-xs text-rosePine-subtle px-2">
          <p class="flex flex-row items-center mr-2" v-for="level in levels">
            <MainNavSkillBadge :level="level" />{{ level }}
          </p>
        </div>
      </section>
    </div>
  </nav>
  <ul>

  </ul>
</template>
