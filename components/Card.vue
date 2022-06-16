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
  background-color: rgba(196, 186, 186, 0.515);
  margin: 5px;
  border-radius: 10px;
  padding: 10px 20px;
}
</style>
