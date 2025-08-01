<script setup>
  defineProps({
    modelValue: [String, Number],
    min: { type: [String, Number] },
    max: { type: [String, Number]  },
    step: { type: [String, Number] },
  });

  defineEmits(['update:modelValue']);
</script>

<template>
  <input 
    class="slider"
    type="range"
    :min="min"
    :max="max"
    :step="step"
    :value="modelValue"
    @input="$emit('update:modelValue', Number($event.target.value))"
  />
</template>

<style scoped>
  .slider {
    width: 100%;
  }
</style>