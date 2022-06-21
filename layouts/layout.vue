<script setup lang="ts">
useHead({
  title: 'Content Blog',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'Nuxt content v2 template' }]
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
  @apply dark:bg-black transition-all duration-1000 min-h-screen;
}
</style>
