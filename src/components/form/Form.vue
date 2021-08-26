<template>
  <form class="form">
    <fieldset class="form__fieldset">
      <legend class="form__legend">Basic information</legend>
      <Input
        v-model="form.fullName"
        label="Full name"
        placeholder="Wayne Fisher"
      />
      <Input
        type="email"
        v-model="form.email"
        label="Email"
        placeholder="wayne@gmail.com"
      />
      <Input 
        type="date"
        v-model="form.birthdate"
        label="Birthdate" 
      />
      <Select
        v-model="form.favouriteAnimal"
        :options="animals"
        label="Favourite animal"
      />
    </fieldset>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import Input from '../Input.vue';
import Select from '../Select.vue';

const form = ref({
  fullName: '',
  email: '',
  birthdate: '',
  favouriteAnimal: '',
});

const animals = ['Dog', 'Cat', 'Parrot', 'Tiger'];
</script>

<style scoped lang="scss" src="./form.scss" />
