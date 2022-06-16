<template>
  <main class="main">
    <Navbar />
    <slot />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Content Blog',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'Nuxt content v2 template' }],
});
</script>

<style scoped>
.main {
  @apply dark:bg-black min-h-screen w-screen pb-10 md:pb-0;
}
</style>
