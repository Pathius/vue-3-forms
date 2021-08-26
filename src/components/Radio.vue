<template>
  <input
    :id="id"
    type="radio"
    :checked="modelValue === value"
    :value="value"
    v-bind="$attrs"
    @change="$emit('update:modelValue', value)"
  >
  <label 
    v-if="label"
    :for="id"
  >
    {{ label }}
  </label>
</template>

<script>
import uniqueID from '../features/uniqueID.js'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  setup () {
    const id = uniqueID().getID()
    return { id }
  }
}
</script>
