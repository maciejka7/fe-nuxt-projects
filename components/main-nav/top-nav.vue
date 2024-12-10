<script setup lang="ts">

const { query } = useRoute()

const isNavVisible = computed(()=> ( !('nav' in query && query.nav === 'false') ))

</script>

<template>
  <ul v-show="isNavVisible" class="text-white bg-stone-800 p-6">
    <nuxt-link
      to="projects/skilled-elearning-landing"
      class="border rounded p-2 bg-rosePine-surface text-rosePine-text"
    >
      projects / skilled elearning landing
    </nuxt-link>
  </ul>
</template>
