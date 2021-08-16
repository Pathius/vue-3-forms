<template>
  <!-- Label will be rendered only if it's passed -->
  <!-- After clicking on label input will focus -->
  <label 
    v-if="label"
    :for="id || label"
  >
    {{ label }}
  </label>
  <!-- If type is not declared HTML will automatically make input type="text" -->
  <!-- If placeholder is not declined, label will be used as placeholder -->
  <input
    v-bind="$attrs"
    :id="id || label"
    :placeholder="placeholder || label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
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
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>