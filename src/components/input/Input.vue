<template>
  <div class="input" :class="wrapperClass">
    <label
      class="input__label"
      v-if="label"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      class="input__field"
      v-bind="$attrs"
      :id="id"
      :placeholder="placeholder || label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import uniqueID from '../../features/uniqueID.js'

export default {
  inheritAttrs: false,
  props: {
    wrapperClass: {
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
  },
  setup () {
    const id = uniqueID().getID()
    return { id }
  }
}
</script>

<style scoped lang="scss" src="./input.scss" />
