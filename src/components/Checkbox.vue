<template>
  <input
    :for="id || label"
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  >
  <label
    v-if="label"
    :id="id || label"
  >
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Boolean,
      default: false
    },
  },
};
</script>
