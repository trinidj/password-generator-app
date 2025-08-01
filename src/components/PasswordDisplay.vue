<script setup>
  import Button from '@/components/ui/Button.vue';
  import { Copy, RefreshCw, ShieldCheck, ShieldAlert, ShieldOff } from 'lucide-vue-next';
  import { ref } from 'vue';

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
              :stroke-width="2.5"
              :class="{ 'text-strong': true }"
              :size="20"
            />
          </div>

          <div v-else class="moderate-password">
            <ShieldAlert
              stroke-width="2.5"
              :class="{ 'text-moderate': true }" 
              :size="20"
            />
          </div>

          <p :class="props.passwordLength >= 12 ? 'text-strong' : 'text-moderate'">
            {{ props.passwordLength >= 12 ? 'Strong' : 'Moderate' }}
          </p>
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

  .text-strong {
    color: #38a169; 
  }

  .text-moderate {
    color: #d69e2e; 
  }

  .text-strong, 
  .text-moderate {
    font-weight: 500;
  }

  .password-utilities,
  .password-status {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
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
    font-size: var(--text-2xl);
    color: var(--text-color);
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