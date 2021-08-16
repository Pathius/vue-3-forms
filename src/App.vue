<template>
  <Input
    v-model="form.name"
    placeholder="Please insert your name"
    label="Name"
    type="text"
  />
  {{ form.name }}
</template>

<script>
import { ref } from 'vue'
import Input from './components/Input.vue'

export default {
  components: {
    Input
  },
  setup () {
    const form = ref({
      name: ''
    })

    return { form }
  }
}
</script>