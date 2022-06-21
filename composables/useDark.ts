import { ref, type Ref, onMounted } from 'vue'

export const useDark = () => {
  const userTheme: Ref<string> = ref('dark')
  const setTheme = (theme: string) => {
    localStorage.setItem('theme', theme)
    userTheme.value = theme
    document.documentElement.className = theme
  }

  const getTheme = () => {
    return localStorage.getItem('theme')
  }

  const getMediaPreference = () => {
    const hasDarkPreference = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    if (hasDarkPreference) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem('theme')
    if (activeTheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  onMounted(() => {
    const initUserTheme = getTheme() || getMediaPreference()
    setTheme(initUserTheme)
  })

  return { toggleTheme, userTheme }
}
