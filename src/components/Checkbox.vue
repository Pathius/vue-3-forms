<template>
  <input
    :id="id"
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  >
  <label
    v-if="label"
    :for="id"
  >
    {{ label }}
  </label>
</template>

<script>
import uniqueID from '../features/uniqueID';

export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Boolean,
      default: false
    },
  },
  setup () {
    const id = uniqueID().getID()
    return { id }
  }
};
</script>
