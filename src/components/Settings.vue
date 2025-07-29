<script setup>
  import { Settings } from 'lucide-vue-next';
  import Slider from './ui/Slider.vue';
  import { ref } from 'vue';

  const passwordLength = ref(8);
</script>

<template>
  <section id="settings-section">
    <div class="settings-header">
      <h3>
        <Settings 
          :size="20"
        />
        Password Settings
      </h3>
      <p>Customize your password generation preferences</p>   
    </div>

    <div class="settings-container">
      <div class="slider-container">
        <label for="password-length">Password Length</label>
        <Slider 
          v-model="passwordLength" 
          class="slider"
        />
      </div>

      <div class="length-display">
        <input v-model="passwordLength" class="password-length-field" type="number">         
      </div>
    </div>
  </section>
</template>

<style scoped>
  .settings-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: var(--spacing-lg);
    padding-top: 0;
    gap: var(--spacing-sm);
    justify-content: space-between;
  }

  .slider-container {
    display: flex;
    flex-direction: column;
  }

  .password-length-field {
    border: none;
    cursor: default;
    padding: var(--spacing-xs) var(--spacing-sm);
    text-align: center;
  }
</style>