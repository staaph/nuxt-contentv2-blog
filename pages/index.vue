<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/articles').find()
)
useHead({
  title: 'Home'
})
</script>

<template>
  <main class="content flex flex-col justify-center items-center">
    <h1 class="title">
      Discover fascinating stories
    </h1>
    <section v-if="articles" class="flex flex-col gap-5 w-full md:w-2/3">
      <div v-for="(article, key) in articles" :key="article.id">
        <NuxtLink :to="article._path">
          <div class="card">
            <div
              class="font-bold text-3xl text-gray-400 dark:text-gray-400"
              v-text="'0' + (key + 1)"
            />
            <div class="flex flex-col">
              <p class="font-semibold" v-text="article.title" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.card {
  @apply dark:text-black dark:hover:text-white flex flex-row gap-x-3 bg-gray-100 p-2 rounded hover:scale-[103%] hover:bg-gray-900/25 transition-all duration-500 items-center dark:hover:bg-gray-600/50;
}
</style>
