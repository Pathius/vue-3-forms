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
  <RadioGroup
    v-model="likeDogs"
    :options="dogOptions"
    name="likeDogs"
  />
</template>

// TODO: Provide name attribute for single each component
<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue'
import Select from './components/Select.vue'
import Checkbox from './components/Checkbox.vue'
import RadioGroup from './components/RadioGroup.vue'

const name = ref('');
const countries = ['Poland', 'Germany', 'USA']
const selectedCountry = ref('')
const isAdult = ref(false)
const dogOptions = [
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 }
]
const likeDogs = ref(1)
</script>
