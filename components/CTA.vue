<template>
  <div class="grid lg:grid-cols-3 2xl:grid-cols-4">
    <div class="max-w-md mx-auto sm:max-w-xl lg:max-w-full xl:mr-0 2xl:col-span-1">
      <div class="bg-white">
        <div class="px-24 py-20 xl:max-w-xl px">
          <img class="h-50 sm-mt-8 sm:w-full sm:object-cover object-center" :src="require(`~/assets/img/logo.png`)" alt="Workcation">
        </div>
      </div>
      <div class="bg-brand">
        <div class="px-14 py-12 xl:max-w-xl">
          <h1 class="text-3xl font-bold text-white uppercase tracking-widest">
            Engineering
          </h1>
          <ul class="list-none text-white font-semibold uppercase space-y-2 lg:mt-10 sm:mt-4 sm:text-md">
            <li>Mechanical</li>
            <li>Electrical</li>
            <li>Civil</li>
            <li>Structural</li>
            <li>Environmental</li>
            <li>Fire Safety</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="hidden relative lg:block 2xl:col-span-3">
      <img class="absolute inset-0 w-full h-full object-cover object-center" :src="require(`~/assets/img/beach-work.jpg`)" alt="Woman workcationing on the beach">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
