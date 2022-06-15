<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/articles').find()
);
</script>

<template>
  <div>
    <div v-for="article in articles" :key="article._id">
      <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
    </div>
  </div>
</template>
