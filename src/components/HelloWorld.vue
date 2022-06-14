<script setup lang="ts">
import { ref } from 'vue'
import {activtyStore} from '@/store/activty';
import {ceshi} from '@/store/ceshi.js';
import {storeToRefs} from 'pinia'
const ccc = import.meta.env
 
const stateAc = activtyStore();
const {activty} = storeToRefs(stateAc);
const satteCe = ceshi();
const {activt} = satteCe;


const Setactivty = () => {
  stateAc.$patch((state)=> {
    state.activty = state.activty + 3;
  })
  // stateAc.$patch({
  //   activty: stateAc.activty+2
  // });
  // stateAc.$patch((state) => {
  //   state.activt = state.activt+3
  // })
}

const count = ref(0)
defineProps<{ msg: string }>()


</script>

<template>
  <div>{{ activty }}</div>
  <div>{{ activt }}</div>
  <button @click="Setactivty">activty</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
