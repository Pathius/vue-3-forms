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

// TODO: Implement reset.css file, provide font, title, favicon etc.
// TODO: Cleanup existing project structure
// TODO: Create new form component where there will be separate sections for individual data
// TODO: Section 1 will cover basic informations like name, email, age, country
// TODO: Improve styling for Input and Select
// TODO: Create RadioCard component to combine Radio button and icon
// TODO: Section 2 will cover gender using RadioCard component
// TODO: Create CheckboxCard to combine Checkbox button and icon
// TODO: Section 3 will cover favorite food
// TODO: Create Uploader component
// TODO: Section 4 will cover uploader component so user can upload some cute photos
// TODO: Implement validation with some animations
// TODO: Create UserSummary component to display all data gathered
// TODO: Create skeleton version of UserSummary
// TODO: Provide name attribute for single each component
// TODO: Make sure you're following rules of accessibility
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
