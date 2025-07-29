<script setup>
  defineProps({
    modelValue: [String, Number],
    min: { type: [String, Number], default: 8 },
    max: { type: [String, Number], default: 64 },
    step: { type: [String, Number], default: 1},
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
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
  .slider {
    width: 100%;
  }
</style>