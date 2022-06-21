<script setup lang="ts">
const {
  params: { slug }
} = useRoute()

const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryContent(`/articles/${slug}`).findOne()
)

useHead({
  title: article.value.title
})
</script>

<template>
  <div class="content text-black dark:text-white leading-[3rem]">
    <h1 class="title" v-text="article.title" />
    <ContentRenderer :value="article" class="main" />
  </div>
</template>

<style scoped>
.main {
  @apply dark:text-white;
}
</style>
