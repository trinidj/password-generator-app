<script setup>
  const props = defineProps({
    title: {
      type: String
    },
  }); 
</script>

<template>
  <div class="checkbox-container">
    <input type="checkbox" />
    <p>{{ props.title }}</p>
  </div>
</template>

<style scoped>
  .checkbox-container {
    display: flex;
    justify-content: space-between;
  }

  .checkbox-container input {
    padding: var(--spacing-lg);
  }

  .checkbox-container p {
    color: var(--text-color);
  }
</style>