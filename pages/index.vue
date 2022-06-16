<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/articles').find()
);
</script>

<template>
  <main class="test">
    <h1 class="title">Discover fascinating stories</h1>
    <div v-for="article in articles" :key="article._id" class="grid">
      <NuxtLink :to="article._path"
        ><Card>{{ article.title }}</Card>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.title {
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 50px;
}

.test {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
