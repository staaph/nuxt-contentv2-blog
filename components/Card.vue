<script setup lang="ts">
const props = defineProps({
  article: Object,
});
</script>

<template>
  <main class="card">
    <slot />
  </main>
</template>

<style scoled>
.card {
  padding: 0.5rem;
  background-color: #d1d5db;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  border-radius: 0.25rem;
}
</style>
