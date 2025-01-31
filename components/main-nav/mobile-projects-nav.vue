<script setup lang="ts" >
import { projectsLinksList } from './projectsLinkList';
import { skillsLevelList } from './skillsLevelList';

interface MobileProjectsNavProps {
	isOpen: boolean,
}
const isOpen = ref(false)

</script>

<template>
	<div class="visible lg:hidden">
	   <Icon name="material-symbols-light:menu" size="2em" class="visible lg:hidden" @click="isOpen = !isOpen" v-if="!isOpen" />
 	   <Icon name="material-symbols-light:close" size="2em" class="visible lg:hidden" @click="isOpen = !isOpen" v-else />
    </div>    
    
	<div v-if="isOpen" class="bg-rosePine-surface w-full md:w-1/2 absolute p-5 right-0 top-16 transition-all shadow-xl">
	      <section >
	        <p class="px-2 pb-1 text-rosePine-muted text-sm"> Projects:</p>
	
	        <div v-for="project in projectsLinksList" @click="isOpen = false" class="flex flex-row items-center w-full ">
	          <NuxtLink :to="project.to" 
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
	          <p class="flex flex-row items-center mr-2" v-for="level in skillsLevelList ">
	            <MainNavSkillBadge :level="level" />{{ level }}
	          </p>
	        </div>
	      </section>
	    </div>
</template>
