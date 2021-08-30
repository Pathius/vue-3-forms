<template>
  <div class="select" :class="wrapperClass">
    <label class="select__label" v-if="label" :for="id">
      {{ label }}
    </label>
    <select
      class="select__field"
      :id="id"
      :value="modelValue"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option 
        v-if="placeholderOption"
        class="select__placeholder"
        selected
      >
        {{ placeholderOption }}
      </option>
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import uniqueID from '../../features/uniqueID.js';

export default {
  props: {
    wrapperClass: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholderOption: {
      type: [String, Number],
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
  },
  setup () {
    const id = uniqueID().getID();
    return { id };
  },
};
</script>

<style scoped lang="scss" src="./select.scss" />
