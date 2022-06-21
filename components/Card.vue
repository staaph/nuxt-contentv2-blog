<template>
  <main class="card">
    <slot />
  </main>
</template>

<style scoped>
.card {
  @apply p-2 text-xl leading-7 font-semibold rounded;
}
</style>
