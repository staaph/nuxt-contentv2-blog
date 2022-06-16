<script setup lang="ts">
const {
  params: { slug },
} = useRoute();
const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryContent(`/articles/${slug}`).findOne()
);
</script>

<template>
  <div class="content">
    <h1 class="title" v-text="article.title" />
    <ContentRenderer :value="article" class="content" />
  </div>
</template>
