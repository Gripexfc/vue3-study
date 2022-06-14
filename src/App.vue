<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed, onMounted } from 'vue';
import router from '@/router/index.js'
const b = 'a';
let count = ref(1)
let a = ref<number>(0);

const add = () => {
  a.value++;
  count.value = count.value + 100
}
onMounted(()=> {
  console.log('onMounted');
})
const plusOne = computed(() => count.value + 111)


</script>

<template>
  <router-link to="/activty">Go to Home</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
