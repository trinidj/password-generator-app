<script setup>
</script>

<template>
  <input type="text" placeholder="Click to generate password" readonly />
</template>

<style scoped>
  input {
    border: none;
    padding: var(--spacing-base);
    background: var(--base-color);
  }

  input:focus {
    outline: none;
  }
</style>