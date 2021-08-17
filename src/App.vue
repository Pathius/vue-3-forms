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
</template>

<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue'
import Select from './components/Select.vue'
import Checkbox from './components/Checkbox.vue'

const name = ref('');
const countries = ['Poland', 'Germany', 'USA']
const selectedCountry = ref('')
const isAdult = ref(false)
</script>
