<script setup>
  import Layout from './components/layout/Layout.vue';
  import Display from './components/Display.vue';
  import Settings from './components/Settings.vue';
  import { ref } from 'vue';

  const passwordLength = ref(8);
  const password = ref('');

  const handleLengthChange = (newLength) => {
    passwordLength.value = newLength;
  };

  const handlePasswordGenerated = (newPassword) => {
    password.value = newPassword;
  };
</script>

<template>
  <Layout>
    <!-- Password Display Section -->
    <Display :password="password"/>
    <!-- Password Settings Section -->
    <Settings 
      :password-length="passwordLength"
      @length-changed="handleLengthChange"
      @password-generate="handlePasswordGenerated"
    />
  </Layout>
</template>

<style>
  
</style>
