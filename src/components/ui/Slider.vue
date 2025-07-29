<script setup>  
  defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);

  function updatePasswordLength(event) {
    const newLength = event.target.value;
    emit('update:modelValue', newLength);  
  }
</script>

<template>
  <input 
    class="slider" 
    type="range" 
    min="8" 
    max="64" 
    :value="modelValue"
    @input="updatePasswordLength" 
  />
</template>