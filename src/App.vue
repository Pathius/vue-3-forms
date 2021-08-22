<template>
  <div class="page">
    <Header />
  </div>
</template>

// TODO: Create typography file 
// TODO: Create Header component basic styling
// TODO: Create Form component with basic styling
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
import Header from './components/header/Header.vue'
</script>

<style lang="scss">
.page {
  min-height: 100vh;
  background-color: $light-gray;
  display: flex;
  justify-content: center;
}
</style>
