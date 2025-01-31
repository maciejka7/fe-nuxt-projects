<script setup lang="ts">
import AppInput from './_components/AppInput.vue';

interface FormState {
    name: string,
    password: string,
    isSuccess: boolean
    isError: boolean
    isLoading: boolean
}

const initialFormState: FormState = {
    name: '',
    password: '',
    isSuccess: false,
    isError: false,
    isLoading: false
}
// ,user can log in, 
// so name and email are filled-in 
// after the form is sent a 'Thank You' message should appear.

const formState = reactive<FormState>(initialFormState)

function submitLoginForm() {

    formState.isLoading = true

    if (formState.name && formState.password) {
        setTimeout(() => {

            formState.isSuccess = true
            formState.isError = false
            formState.isLoading = false
        }, 1000 * 1000)
    } else {
        formState.isSuccess = false
        formState.isLoading = false
        formState.isError = true
    }
}


</script>

<template>

    <h2>login form</h2>
    <form v-if="!formState.isSuccess" @submit.prevent="submitLoginForm" class="flex flex-col gap-2">

        <AppInput @inputChange="(value) => formState.name = value" input-id="name" input-placeholder="name "
            input-type="text" input-label="Your name:" />
        <AppInput @inputChange="(value) => formState.password = value" input-id="password" input-placeholder="password"
            input-type="password" input-label="Your password:" />

        <p v-if="formState.isError" class="text-red-500">form errror</p>

        <p v-if="formState.isLoading">LOADING ...</p>
        <button :disabled="formState.isLoading" type="submit"

            class="flex border shadow  rounded bg-teal-500 text-white w-fit px-4 py-1 rounded disabled:bg-gray-500">Login</button>



    </form>
    <section v-else>
        <h3>logged in :)</h3>
    </section>
</template>