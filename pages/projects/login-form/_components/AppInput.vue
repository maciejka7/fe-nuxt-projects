<template>


    <label :for="inputId">
        <span v-if="inputLabel">{{ inputLabel }}</span>
        <input v-bind="$attrs" @keyup="emitInputChange" v-model="inputModel" :type="inputType" :name="inputId" :id="inputId" :placeholder="inputPlaceholder || ''"
            class="border shadow p-1" />
    </label>
</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';

interface AppInputProps {
    inputLabel?: string,
    inputId: string,
    inputType: InputTypeHTMLAttribute,
    inputPlaceholder?: string,
}

interface AppInputEmits {
    inputChange: [value: string]
}

defineOptions({
    inheritAttrs: false
})

const emit = defineEmits<AppInputEmits>()
const { inputLabel, inputId, inputPlaceholder, inputType } = defineProps<AppInputProps>()

const inputModel = ref('')

function emitInputChange() {
    emit('inputChange', inputModel.value)
}

</script>

<style scoped></style>