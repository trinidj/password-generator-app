<script setup>
  defineEmits(['click']);
</script>

<template>
  <button class="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped>
  .button {
    display: flex;
    padding: 10px;
    border: none;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease;
  }

  .button:hover {
    cursor: pointer;
  }
</style>