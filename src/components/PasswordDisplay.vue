<script setup>
  import Button from '@/components/ui/Button.vue';
  import { Copy, RefreshCw, ShieldCheck, ShieldAlert } from 'lucide-vue-next';

  const props = defineProps({
    password: {
      type: String,
      default: ''
    },
    passwordLength: {
      type: Number,
    },
  });

  const emit = defineEmits(['generate-password']);
  
  const generatePassword = () => {
    emit('generate-password');
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(props.password);
  };
</script>

<template>
  <section id="password-section">
    <div class="password-container">
      <div class="password-display">
        <p>{{ props.password || 'Click Generate to Create a Password' }}</p>
      </div>

      <div class="password-utilities">
        <div class="password-status">
          <div v-if="props.passwordLength >= 12" class="strong-password">
            <ShieldCheck 
              :size="20"
            />
            <p>Strong Password</p>
          </div>

          <div v-else class="moderate-password">
            <ShieldAlert 
              :size="20"
            />
            <p>Moderate Password</p>
          </div>
        </div>

        <div class="password-actions">
          <Button @click="copyToClipboard" class="copy-button">
            <Copy 
              :size="16"
            />
          </Button>

          <Button @click="generatePassword" class="generate-button">
            <RefreshCw 
              :size="16"
            />
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .password-container {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-lg);
    gap: var(--spacing-3xl);
    justify-content: space-between;
  }

  .strong-password,
  .moderate-password {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-weight: 500;
  }

  .strong-password p,
  .moderate-password p {
    color: var(--text-color);
    font-size: var(--text-sm);
  }

  .password-utilities,
  .password-status {
    display: flex;
    align-items: center;
  }

  .password-utilities {
    display: flex;
    justify-content: space-between;
  }

  .password-display input {
    border: none;
    cursor: default;
    padding: var(--spacing-base);
    background: var(--base-color);
  }

  .password-display input:focus {
    outline: none;
  }

  .password-display p {
    font-size: var(--text-xl);
  }

  .password-actions {
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