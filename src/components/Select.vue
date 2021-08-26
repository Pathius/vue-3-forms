<template>
  <label
    v-if="label"
    :for="id"
  >
    {{ label }}
  </label>
  <select
    :id="id"
    :value="modelValue"
    v-bind="$attrs"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
import uniqueID from '../features/uniqueID.js'

export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  },
  setup () {
    const id = uniqueID().getID()
    return { id }
  }
};
</script>
