<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/articles').find()
);
</script>

<template>
  <div class="">
    <div
      class="flex flex-col items-center"
      v-for="(article, idx) in articles"
      :key="idx"
    >
      <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
    </div>
  </div>
</template>
