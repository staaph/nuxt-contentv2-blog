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
  @apply bg-gray-300 rounded p-2 text-lg font-semibold;
}
</style>
