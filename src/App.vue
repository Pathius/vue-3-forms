<template>
  <Input
    v-model="name"
    placeholder="Please insert your name"
    label="Name"
    type="text"
  />
  <Select
    v-model="selectedCountry"
    label="Country"
    :options="countries"
  />
  <Checkbox
    v-model="isAdult"
    label="Is adult?"
  />
  <h2>
    Do you like dogs?
  </h2>
  <Radio 
    v-model="likeDogs"
    :value="1"
    label="Yes"
    name="likedogs"
  />
  <Radio 
    v-model="likeDogs"
    :value="0"
    label="No"
    name="likedogs"
  />
</template>

<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue'
import Select from './components/Select.vue'
import Checkbox from './components/Checkbox.vue'
import Radio from './components/Radio.vue'

const name = ref('');
const countries = ['Poland', 'Germany', 'USA']
const selectedCountry = ref('')
const isAdult = ref(false)
const likeDogs = ref(1)
</script>
