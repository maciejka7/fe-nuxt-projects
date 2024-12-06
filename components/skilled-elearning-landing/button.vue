<script setup lang="ts">

interface ButtonProps {
    type: 'black' | 'orange'| 'purple' | 'link',
    size?: 'md' | 'xs',
    label: string,
}

 const { type, size = 'xs' } = defineProps<ButtonProps>()

</script>

<template>
    <div>
      <button v-if="type === 'orange'" class="text-white text-lg bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] transition-all hover:from-[#FF6F48]/50 hover:to-[#F02AA6]/50 font-bold rounded-full px-8 py-4">
      {{ label }}
      </button>
      <button v-if="type === 'purple'" class="text-white text-lg bg-gradient-to-b from-[#4851FF] to-[#F02AA6] transition-all hover:from-[#4851FF]/50 hover:to-[#F02AA6]/50 font-bold rounded-full px-8 py-4">
      {{ label }}
      </button>
      <button v-if="type === 'link'" class="text-[#F74780] hover:text-[#FFA7C3] transition-all text-lg font-bold rounded-full py-4">
      {{ label }}
      </button>
      <button v-if="type === 'black'" class="text-white text-lg bg-[#13183F] transition-all hover:bg-[#666CA3] rounded-full px-8 py-4 font-bold">
      {{ label }}
      </button>
      </div>
</template>
