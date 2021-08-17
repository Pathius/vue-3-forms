<template>
  <Input
    v-model="name"
    placeholder="Please insert your name"
    label="Name"
    type="text"
  />
  {{ name }}
</template>

<script setup>
import { ref } from 'vue';
import Input from './components/Input.vue';

const name = ref('');
</script>
