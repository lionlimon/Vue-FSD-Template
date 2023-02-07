<template>
  <TheHeader />

  <main><slot /></main>
</template>
<script setup lang="ts">
import { TheHeader } from '@/widgets/header';
</script>
