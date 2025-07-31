<script setup>
  import Layout from '@/components/layout/Layout.vue';
  import PasswordDisplay from '@/components/PasswordDisplay.vue';
  import PasswordSettings from '@/components/PasswordSettings.vue';
  import { passwordGenerator } from '@/components/utils/helpers/passwordGenerator';
  import { ref } from 'vue';

  const passwordLength = ref(8);
  const generatedPassword = ref('');

  const handlePasswordGenerated = () => {
    generatedPassword.value = passwordGenerator(passwordLength.value);
  };

  const handleLengthChange = (newLength) => {
   passwordLength.value = newLength;
  };
</script>

<template>
  <Layout>
    <!-- Password Display Section -->
    <PasswordDisplay 
      :password="generatedPassword"
      @generate-password="handlePasswordGenerated"  
    />
    <!-- Password Settings Section -->
    <PasswordSettings 
      :password-length="passwordLength"
      @generate-password="handlePasswordGenerated"
      @length-changed="handleLengthChange"
    />
  </Layout>
</template>

<style>
  
</style>
