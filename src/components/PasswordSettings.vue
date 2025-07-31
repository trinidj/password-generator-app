<script setup>
  import { Settings } from 'lucide-vue-next';
  import Slider from './ui/Slider.vue';
  import { passwordGenerator } from './utils/helpers/passwordGenerator';
  import { ref, watchEffect } from 'vue';

  const props = defineProps({
    passwordLength: {
      type: Number,
      default: 8
    }
  });

  const emit = defineEmits(['length-changed']);

  const setPasswordLength = ref(props.passwordLength);

  watchEffect(() => {
    emit('length-changed', setPasswordLength.value);
    // generateNewPassword();
  });
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
      <div class="length-display">
        <label for="password-length">Password Length</label>
        <input v-model="setPasswordLength" class="password-length-field" type="text">
      </div>

      <div class="slider-container">
        <Slider 
          v-model="setPasswordLength"
          :min="8"
          :max="64"
          :step="1"
          class="slider"
        />         
      </div>
    </div>
  </section>
</template>

<style scoped>
  .settings-container {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-lg);
  }

  .length-display {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--spacing-base);
  }

  .password-length-field {
    width: 10%;
    text-align: center;
    border: none;
    padding: var(--spacing-xs);
    border-radius: 5px;
  }

  .password-length-field:focus {
    outline: none;
  }

  label {
    font-size: var(--text-sm);
    color: hsl(from var(--text-color) h s calc(l - 10) / 0.5);
  }
</style>