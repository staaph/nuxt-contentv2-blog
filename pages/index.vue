<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/articles').find()
);
useHead({
  title: 'Home',
});
</script>

<template>
  <main class="content">
    <h1 class="title">Discover fascinating stories</h1>
    <div v-for="article in articles" :key="article._id" class="">
      <NuxtLink :to="article._path" class="link"
        ><Card>{{ article.title }}</Card>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.link {
  display: flex;
  margin: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
