<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { TheHeader } from '@/widgets/header/';
</script>
