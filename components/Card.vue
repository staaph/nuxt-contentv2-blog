<script setup lang="ts">
const props = defineProps({
    article: Object
})
</script>

<template>
  <main>
    <ContentRenderer :value="article" />
  </main>
</template>
