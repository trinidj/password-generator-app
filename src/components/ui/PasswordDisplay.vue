<script setup>
  defineProps({
    password: String,
  });
</script>

<template>
  <p>{{ password || 'No Password Yet' }}</p>
</template>