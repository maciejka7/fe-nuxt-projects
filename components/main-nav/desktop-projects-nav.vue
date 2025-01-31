
<script setup lang="ts">
import { Icon } from '#components';
import { projectsLinksList } from './projectsLinkList';
import { skillsLevelList } from './skillsLevelList'

const currentTrigger = ref('')

</script>
<template>
	<NavigationMenuRoot v-model="currentTrigger" class="relative z-[1] flex w-full justify-end">
		<NavigationMenuList class=" flex list-none ">
			<NavigationMenuItem>
				<NavigationMenuTrigger
					class="text-rosePine-text hover:text-rosePine-subtle hover:bg-rosePine-base focus:shadow-rosePine-subtle group flex select-none items-center justify-between gap-1 rounded px-3 py-2 text-base leading-none outline-none focus:shadow-[0_0_0_2px]">
					Projects
					<Icon name="radix-icons:caret-down"
						class="text-green10 relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180" />
				</NavigationMenuTrigger>
				<NavigationMenuContent
					class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight bg-rosePine-surface absolute top-11 right-0 px-4 py-2 w-full sm:w-auto">
					<ul
						class="one m-0 flex flex-col list-none gap-y-3 ">
						<li v-for="project in projectsLinksList" class="flex flex-row items-center w-full ">
							<NavigationMenuLink as-child>
								<NuxtLink :to="project.to"
									class="flex-row items-center gap-2 text-rosePine-text hover:text-rosePine-subtle transition-all px-2 py-2 flex  ">
									{{ project.name }}
									<MainNavSkillBadge :level="project.level" />
								</NuxtLink>

								<NuxtLink v-if="project.feLink" :to="project.feLink" target="_blank"
									class="flex m-0 p-0">
									<span class="block border border-rosePine-muted rounded">
										<Icon size="1rem" class="flex p-2"
											name="material-symbols-light:arrow-outward-rounded" />
									</span>
								</NuxtLink>
							</NavigationMenuLink>
						</li>
					</ul>

					<div class="flex flex-row text-xs text-rosePine-subtle gap-2 p-2">
						<p class="flex flex-row items-center" v-for="level in skillsLevelList">
							<MainNavSkillBadge :level="level" />{{ level }}
						</p>
					</div>

				</NavigationMenuContent>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenuRoot>
</template >
