<script setup lang="ts">
import { layoutIs, setLayout } from '@/store/menuLayout'

const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/articles').find()
)

useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Common interview questions regarding Vue' }
  ]
})
</script>

<template>
  <main class="flex flex-col items-center justify-center content">
    <h1 class="title">
      Discover fascinating stories
    </h1>
    <section
      class="flex flex-row justify-end w-full gap-2 mb-2 md:w-2/3 dark:text-white"
    >
      <button @click="setLayout('list')">
        <IconsList />
      </button>
      <button @click="setLayout('grid')">
        <IconsGrid />
      </button>
    </section>
    <!-- ARTICLES -->
    <section
      v-if="articles"
      class="w-full gap-8 md:w-2/3"
      :class="{
        'flex flex-col': layoutIs == 'list',
        'grid grid-cols-2 lg:grid-cols-3': layoutIs == 'grid'
      }"
    >
      <div v-for="(article, key) in articles" :key="article.id">
        <NuxtLink :to="article._path">
          <div class="card">
            <div
              class="text-3xl font-bold text-gray-400 dark:text-gray-400"
              v-text="'00' + (key + 1)"
            />
            <div class="flex flex-col">
              <p class="font-semibold break-words">
                {{ article.title.split(':').pop() }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.card {
  @apply text-black dark:hover:text-white flex flex-row gap-x-3 bg-gray-100 p-2 rounded hover:scale-[103%] hover:bg-gray-900/25 transition-all duration-500 items-center dark:hover:bg-gray-600/50 h-full;
}
</style>
