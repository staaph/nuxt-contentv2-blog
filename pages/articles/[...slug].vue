<script setup lang="ts">
const {
  params: { slug },
} = useRoute();
const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryContent(`/articles/${slug}`).findOne()
);
</script>

<template>
  <div>
    <h1 class="title" v-text="article.title" />
    <ContentRenderer :value="article" class="main" />
  </div>
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100vw;
  margin: 0 10%;
}
</style>
