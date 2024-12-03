<script setup lang="ts">
interface MainCardProps {
  icon: string;
  title: string;
  description: string;
}

const { icon, title, description } = defineProps<{ MainCardProps }>();
</script>

<template>
  <section>
    <div>
      {{ icon }}
    </div>

    <div>
      <h3>{{ title }</h3>
      <p>{{ description }}</p>
    </div>
  </section>
</template>
