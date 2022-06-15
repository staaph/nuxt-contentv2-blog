<script setup lang="ts">
const { data: article } = await useAsyncData('article', () =>
  queryContent(`/articles`).findOne()
);
</script>

<template>
  <div class="">
    <ContentRenderer :value="article" />
  </div>
</template>
