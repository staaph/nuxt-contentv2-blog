<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/articles').find()
);
useHead({
  title: 'Home',
});
</script>

<template>
  <main class="content flex flex-col justify-center">
    <h1 class="title">Discover fascinating stories</h1>
    <section class="flex flex-col gap-5" v-if="articles">
      <div v-for="(article, key) in articles" :key="article.id">
        <NuxtLink :to="article._path">
          <div class="flex flex-row gap-x-3">
            <div
              v-text="'0' + (key + 1)"
              class="font-bold text-3xl text-gray-400"
            />
            <div class="flex flex-col dark:text-white">
              <span v-text="article.title" class="font-semibold" />
              <div class="flex flex-row gap-x-2 font-light"></div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
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
