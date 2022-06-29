<script setup lang="ts">
const {
  params: { slug }
} = useRoute()

const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryContent(`/articles/${slug}`).findOne()
)

const { data: allArticles } = await useAsyncData('article', () =>
  queryContent('/articles/').find()
)

useHead({
  title: article.value.title,
  meta: [{ name: 'description', content: `${article.value.description}` }]
})

const articles = () => {
  const arr = []
  const number = allArticles.value.map(article => article._path)
  for (let i = 0; i < allArticles.value.length; i++) {
    const articlePath = number[i].split('/')[2]
    arr.push({ index: i, articlePath })
  }
  return arr
}

const getCurrentIndex = () => {
  const article = articles()
  for (let i = 0; i < article.length; i++) {
    if (article[i].articlePath === slug[0]) {
      return article[i]
    }
  }
}

const currentItem = getCurrentIndex().index
const lastItem = articles()[articles().length - 1].index
</script>

<template>
  <main>
    <div class="content text-black dark:text-white leading-[2rem]">
      <section class="flex flex-row justify-between">
        <NuxtLink
          v-if="currentItem != 0"
          :to="`/articles/${articles()[currentItem - 1].articlePath}`"
        >
          <p class="arrow">
            <IconsArrowLeft /> {{ articles()[currentItem - 1].articlePath }}
          </p>
        </NuxtLink>
        <h1 class="title" v-text="article.title" />
        <NuxtLink
          v-if="currentItem != lastItem"
          :to="`/articles/${articles()[currentItem + 1].articlePath}`"
        >
          <p class="arrow">
            {{ articles()[currentItem + 1].articlePath }} <IconsArrowRight />
          </p>
        </NuxtLink>
      </section>
      <ContentRenderer :value="article" class="main" />
    </div>
  </main>
</template>

<style scoped>
.main {
  @apply dark:text-white;
}
.arrow{
  @apply flex flex-row gap-2 hover:opacity-75
}
</style>
