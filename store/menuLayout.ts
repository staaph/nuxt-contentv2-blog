import { ref, computed } from 'vue'

const layout = ref('list')

export const setLayout = (value: string) => {
  layout.value = value
}

export const layoutIs = computed(() => layout.value)
