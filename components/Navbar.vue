<script setup lang="ts">
const { toggleTheme, userTheme } = useDark();
</script>

<template>
  <nav class="p-4 justify-between flex flex-row">
    <section>
      <NuxtLink to="/"><IconsHome class="icon" /></NuxtLink>
    </section>
    <section class="icon">
      <button v-if="userTheme == 'light'" @click="toggleTheme()">
        <IconsMoon />
      </button>
      <button v-if="userTheme == 'dark'" @click="toggleTheme()">
        <IconsSun />
      </button>
    </section>
  </nav>
</template>

<style scoped>
.icon {
  @apply text-black dark:text-white;
}
</style>
