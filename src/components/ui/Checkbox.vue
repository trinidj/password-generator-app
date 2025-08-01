<script setup>
  import { Check } from 'lucide-vue-next';

  const props = defineProps({
    title: {
      type: String
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  }); 

  const emit = defineEmits(['update:modelValue']);

  const toggleCheckbox = () => {
    emit('update:modelValue', !props.modelValue);
  };
</script>

<template>
  <div class="checkbox-container">
    <button class="button" @click="toggleCheckbox" :class="{ checked: props.modelValue }">
      <Check 
        v-show="props.modelValue"
        :size="20"
      />
    </button>
    <p>{{ props.title }}</p>
  </div>
</template>

<style scoped>
  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    justify-content: space-between;
  }

  .button {
    display: flex;
    padding: 4px;
    border: 2px solid var(--border-color, #ccc);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease;
    background: transparent;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  .button.checked {
    background: var(--primary-color, #007bff);
    border-color: var(--primary-color, #007bff);
    color: white;
  }

  .button:hover {
    border-color: var(--primary-color, #007bff);
  }

  .checkbox-container p {
    color: var(--text-color);
    margin: 0;
    user-select: none;
  }
</style>