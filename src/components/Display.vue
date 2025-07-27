<script setup>
  import Button from './ui/Button.vue';
  import { Copy, RefreshCw } from 'lucide-vue-next';
</script>

<template>
  <section id="password-display">
    <div class="display-header">
      <h3>Generated Password</h3>
      <p>Copy your generated password</p>
    </div>

    <div class="password-container">
      <form>
        <input type="text" placeholder="Click to generate password"/>
      </form>

      <div class="button-row">
        <Button>
          <Copy 
            :size="20"
          />
        </Button>

        <Button>
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
  }
</style>