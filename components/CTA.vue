<template>
    <div class="grid lg:grid-cols-2 2xl:grid-cols-5">
        <div class="max-w-md mx-auto sm:max-w-xl lg:max-w-full xl:mr-0 2xl:col-span-1">
            <div class="bg-white">
            <div class=" px-14 py-12 xl:max-w-xl">
                <img class="h-50 sm-mt-8 sm:w-full sm:object-cover object-center" :src="require(`~/assets/img/logo.png`)" alt="Workcation">
            </div>
            </div>
            <div class="bg-gray-500">
            <div class=" px-14 py-12 xl:max-w-xl">
                <h1 class="mt-6 text-2xl font-bold text-white sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                <span style="font-family: 'Lato', sans-serif;">Engineering</span> <br class="hidden lg:inline"> <span>Design Management Engineering</span>
                </h1>
            </div>
            </div>
        </div>
        <div class="hidden relative lg:block 2xl:col-span-4">
            <img class="absolute inset-0 w-full h-full object-cover object-center" :src="require(`~/assets/img/beach-work.jpg`)" alt="Woman workcationing on the beach">
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
