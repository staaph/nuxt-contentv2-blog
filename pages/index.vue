<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/articles').find()
);
</script>

<template>
  <main class="main">
    <h1 class="title">Discover fascinating stories</h1>
    <div v-for="article in articles" :key="article._id" class="grid">
      <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  padding: 10px;
  margin: 0;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
