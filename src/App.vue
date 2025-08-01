<script setup>
  import Layout from '@/components/layout/Layout.vue';
  import PasswordDisplay from '@/components/PasswordDisplay.vue';
  import PasswordSettings from '@/components/PasswordSettings.vue';
  import { passwordGenerator } from '@/components/utils/helpers/passwordGenerator';
  import { ref } from 'vue';

  const passwordLength = ref(8);
  const generatedPassword = ref('');
  const passwordOptions = ref({
    hasAlpha: true,
    casing: 'mixed',
    hasDigits: true,
    hasSymbols: true
  });

  const handlePasswordGenerated = () => {
    generatedPassword.value = passwordGenerator(
      passwordLength.value,
      passwordOptions.value.hasAlpha,
      passwordOptions.value.casing,
      passwordOptions.value.hasSymbols
    );
  };

  const handleLengthChange = (newLength) => {
    passwordLength.value = newLength;
  };

  const handleOptionChange = (newOptions) => {
    passwordOptions.value = {
      ...passwordOptions.value, 
      ...newOptions,
    };
  };

</script>

<template>
  <Layout>
    <!-- Password Display Section -->
    <PasswordDisplay 
      :password="generatedPassword"
      :passwordLength="passwordLength"
      @generate-password="handlePasswordGenerated"  
    />
    <!-- Password Settings Section -->
    <PasswordSettings 
      :password-length="passwordLength"
      @generate-password="handlePasswordGenerated"
      @length-changed="handleLengthChange"
      @options-changed="handleOptionChange"
    />
  </Layout>
</template>

<style>
  
</style>
