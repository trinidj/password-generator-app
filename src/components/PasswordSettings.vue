<script setup>
  import Slider from '@/components/ui/Slider.vue'; 
  import Checkbox from '@/components/ui/Checkbox.vue';
  import { Settings } from 'lucide-vue-next';
  import { ref, watchEffect, reactive } from 'vue';

  const props = defineProps({
    passwordLength: {
      type: Number,
      default: 8
    },
    checked: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['length-changed', 'generate-password']);

  const setPasswordLength = ref(props.passwordLength);

  const checkboxOptions = ref({
    uppercase: true,
    lowercase: true,
    digits: true,
    symbols: true
  });

  const generatePassword = () => {
    emit('generate-password');
  }

  watchEffect(() => {
    emit('length-changed', setPasswordLength.value);
    generatePassword();
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
        <input v-model="setPasswordLength" class="password-length-field" type="text" readonly>
      </div>

      <div class="slider-container">
        <Slider 
          v-model="setPasswordLength"
          :min="8"
          :max="32"
          :step="1"
          class="slider"
        />         
      </div>

      <div class="options-container">
        <Checkbox v-model="checkboxOptions.uppercase" title="Uppercase" />
        <Checkbox v-model="checkboxOptions.lowercase" title="Lowercase"/>
        <Checkbox v-model="checkboxOptions.digits" title="Digits (0-9)"/>
        <Checkbox v-model="checkboxOptions.symbols" title="Special Characters"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .options-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-sm);
  }

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