<script setup>
  import Button from './ui/Button.vue';
  import PasswordDisplay from './ui/PasswordDisplay.vue';
  import { Copy, RefreshCw, Key } from 'lucide-vue-next';
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
      <form class="password-display">
        <PasswordDisplay />
      </form>

      <div class="button-row">
        <Button class="copy-button">
          <Copy 
            :size="20"
          />
        </Button>

        <Button class="generate-button">
          <RefreshCw
            color="#fff" 
            :size="20"
          />
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #password-section {
    border-radius: 10px;
    background-color: var(--base-color);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  }

  .password-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: var(--spacing-base);
    border-radius: 25px;
    gap: var(--spacing-sm);
    justify-content: space-between;
    
  }

  .display-header {
    padding: var(--spacing-lg);
    padding-bottom: 0;
  }

  .display-header > h3 {
    color: var(--text-color);
    font-size: var(--text-lg);
    display: flex;
    align-items:center;
    gap: var(--spacing-sm);
  }

  .display-header > p {
    color: hsl(from var(--text-color) h s calc(l - 10) / 0.5);
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
    background: var(--accent-color);
    transition: all 0.2s ease;
  }

  .generate-button:hover {
    background: hsl(from var(--accent-color) h s calc(l - 10));
  }

  .copy-button {
    background: hsl(from var(--base-color-darker) h s l);
  }

  .copy-button:hover {
    background: hsl(from var(--base-color-darker) h s calc(l - 5));
  }
</style>