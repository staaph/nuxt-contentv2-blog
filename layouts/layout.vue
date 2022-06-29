<script setup lang="ts">
useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8'
})
</script>

<template>
  <main class="main">
    <Navbar />
    <slot />
  </main>
</template>

<style scoped>
.main {
  @apply min-h-screen;
}
</style>
