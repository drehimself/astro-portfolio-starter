const moonIcon = document.querySelector('#moonIcon') as Element
const sunIcon = document.querySelector('#sunIcon') as Element
const logoForLight = document.querySelector('#logoForLight') as Element
const logoForDark = document.querySelector('#logoForDark') as Element

const theme = getTheme()
setInitialTheme(theme)

function getTheme() {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') || ''
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

function setInitialTheme(theme: string) {
  if (theme === 'light') {
    document.documentElement.classList.remove('dark')
    logoForLight.classList.remove('hidden')
    moonIcon.classList.remove('hidden')
  } else {
    document.documentElement.classList.add('dark')
    logoForDark.classList.remove('hidden')
    sunIcon.classList.remove('hidden')
  }

  window.localStorage.setItem('theme', theme)
}
