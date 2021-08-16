<template>
  <label>
    {{ label }}
  </label>
  <!-- If type is not declared HTML will automatically make input type="text" -->
  <!-- If placeholder is not declined, label will be used as placeholder -->
  <input
    v-bind="$attrs"
    :placeholder="placeholder || label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
// TODO Create example of a modifier
export default {
  props: {
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