<script setup lang="ts">
const {
  params: { slug },
} = useRoute();
const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryContent(`/articles/${slug}`).findOne()
);
</script>

<template>
  <div class="">
    <Card :article="article" />
  </div>
</template>
