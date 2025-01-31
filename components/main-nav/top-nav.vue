<script setup lang="ts">
import { MainNavDesktopProjectsNav } from '#components';

const { query } = useRoute()
const isNavVisible = computed(() => (!('nav' in query && query.nav === 'false')))
</script>

<template>
  <nav v-show="isNavVisible" class="text-rosePine-text bg-rosePine-surface p-4 relative flex flex-row justify-between z-10">

    <NuxtLink to="/">
      <Icon name="material-symbols-light:home-outline-rounded" size="2em" />
    </NuxtLink>


    <MainNavMobileProjectsNav class="lg:hidden" />
    <MainNavDesktopProjectsNav class="hidden lg:flex" />
  </nav>
  <ul>

  </ul>
</template>
