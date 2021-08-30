<template>
  <form class="form">
    <fieldset class="form__fieldset">
      <legend class="form__legend">Basic information</legend>
      <Input
        wrapperClass="form__input"
        v-model="form.fullName"
        label="Full name"
        placeholder="Wayne Fisher"
      />
      <Input
        wrapperClass="form__input"
        type="email"
        v-model="form.email"
        label="Email"
        placeholder="wayne@gmail.com"
      />
      <Input
        wrapperClass="form__input"
        type="date"
        v-model="form.birthdate"
        label="Birthdate"
      />
      <Select
        wrapperClass="form__input"
        v-model="form.favouriteAnimal"
        :options="animals"
        label="Favourite animal"
      />
    </fieldset>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import Input from '../input/Input.vue';
import Select from '../select/Select.vue';

const form = ref({
  fullName: '',
  email: '',
  birthdate: '',
  favouriteAnimal: '',
});

const animals = ['Dog', 'Cat', 'Parrot', 'Tiger'];
</script>

<style scoped lang="scss" src="./form.scss" />
