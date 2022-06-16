<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/articles').find()
);
</script>

<template>
  <Navbar />
  <main class="content">
    <h1 class="title">Discover fascinating stories</h1>
    <div v-for="article in articles" :key="article._id" class="mx-[5%]">
      <NuxtLink
        :to="article._path"
        class="m-2 w-full flex justify-center items-center"
        ><Card>{{ article.title }}</Card>
      </NuxtLink>
    </div>
  </main>
</template>
