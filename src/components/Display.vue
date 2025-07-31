<script setup>
  import Button from './ui/Button.vue';
  import PasswordDisplay from './ui/PasswordDisplay.vue';
  import { Copy, RefreshCw, Key } from 'lucide-vue-next';
  import { passwordGenerator } from './utils/helpers/passwordGenerator';

  const props = defineProps({
    password: String, default: ''
  });
  
  const generatePassword = () => {
    const newPassword = passwordGenerator();
    emit('generate-password', newPassword);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(props.password);
  };
</script>

<template>
  <section id="password-section">
    <div class="display-header">
      <h3>
        <Key 
          :size="20"
        />
        Generated Password
      </h3>
      <p>Copy your generated password</p>
    </div>

    <div class="password-container">
      <div class="password-display">
        <PasswordDisplay :password="props.password"/>
      </div>

      <div class="button-row">
        <Button @click="copyToClipboard" class="copy-button">
          <Copy 
            :size="20"
          />
        </Button>

        <Button @click="generatePassword" class="generate-button">
          <RefreshCw 
            :size="20"
          />
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .password-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: var(--spacing-lg);
    padding-top: 0;
    gap: var(--spacing-sm);
    justify-content: space-between;
    
  }

  .password-display, 
  .button-row {
    align-items: center;
  }

  .password-display > input {
    border: none;
    cursor: default;
    padding: var(--spacing-base);
    background: var(--base-color);
  }

  .password-display > input:focus {
    outline: none;
  }

  .button-row {
    display: flex;
    gap: var(--spacing-sm);
  }

  .generate-button {
    background: hsl(from var(--accent-color) h s l);
    transition: all 0.2s ease;
  }

  .copy-button {
    background: hsl(from var(--base-color-darker) h s l);
  }

  .generate-button:hover {
    background: hsl(from var(--accent-color) h s calc(l - 10));
  }

  .generate-button:active {
    background: hsl(from var(--accent-color) h s calc(l - 20));
    transform: scale(0.95);
  }

  .copy-button:hover {
    background: hsl(from var(--base-color-darker) h s calc(l - 5));
  }

  .copy-button:active {
    background: hsl(from var(base-color-darker) h s calc(l- 20));
    transform: scale(0.95);
  }

  input {
    border: none;
    padding: var(--spacing-base);
    background: var(--base-color);
    width: 500px;
  }

  input:focus {
    outline: none;
  }
</style>