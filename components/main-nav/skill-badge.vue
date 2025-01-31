<script setup lang="ts">


const { level } = defineProps<{ level?: SkillLevel }>()
const levelColor: { [color in SkillLevel ] : string} = {
    newbie: 'bg-teal-500',
    junior: 'bg-green-500',
    intermediate: 'bg-yellow-500',
    advanced: 'bg-orange-500',
    guru: 'bg-red-500',
}


const badgeColor = computed(() => {
    return level? levelColor[level] : 'bg-stone-500'
})

</script>

<template>
    <div class="w-1.5 h-1.5 mr-1 rounded-full" :class="badgeColor"> </div>
</template>
