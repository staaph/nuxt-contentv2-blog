<template>
  <nav class="p-4 justify-between flex flex-row">
    <section>
      <NuxtLink to="/"><IconsHome class="icon" /></NuxtLink>
    </section>
    <section class="icon">
      <button
        v-if="$colorMode.preference == 'light'"
        @click="$colorMode.preference = 'dark'"
      >
        <IconsMoon />
      </button>
      <button
        v-if="$colorMode.preference == 'dark'"
        @click="$colorMode.preference = 'light'"
      >
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
