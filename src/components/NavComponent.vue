<script setup>
import { ref } from 'vue'
import logoForLightMode from '@/images/astro-logo-for-light-mode.svg'
import logoForDarkMode from '@/images/astro-logo-for-dark-mode.svg'
import { vOnClickOutside } from '@vueuse/components'

const navOpen = ref(false)
const ignoreElRef = ref()
const theme = ref(localStorage.getItem('theme') || 'light')

function toggleNav() {
  navOpen.value = !navOpen.value
}

function toggleTheme() {
  if (theme.value === 'light') {
    localStorage.theme = 'dark'
    theme.value = 'dark'
    return document.documentElement.classList.add('dark')
  }

  if (theme.value === 'dark') {
    localStorage.theme = 'light'
    theme.value = 'light'
    return document.documentElement.classList.remove('dark')
  }
}

const hideNav = [() => (navOpen.value = false), { ignore: [ignoreElRef] }]
</script>

<template>
  <header
    class="fixed bg-white dark:bg-slate-800 dark:text-white top-0 left-0 w-full z-40 border-t-[14px] border-green-700"
  >
    <nav
      class="container mx-auto flex flex-wrap items-center justify-between py-6 px-4 xl:px-0"
    >
      <div>
        <a href="/">
          <img
            v-if="theme === 'dark'"
            :src="logoForDarkMode.src"
            alt="logo"
            class="w-auto h-12"
          />
          <img
            v-if="theme === 'light'"
            :src="logoForLightMode.src"
            alt="logo"
            class="w-auto h-12"
          />
        </a>
      </div>

      <div class="block lg:hidden">
        <button
          ref="ignoreElRef"
          @click="toggleNav"
          @keydown.esc="navOpen = false"
        >
          <svg
            v-if="navOpen === false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul
        class="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
        :class="[navOpen ? 'block' : 'hidden']"
        v-on-click-outside="hideNav"
        @keydown.esc="navOpen = false"
      >
        <li>
          <a
            href="#"
            @click.prevent="toggleTheme"
            class="dark:hover:text-gray-300"
          >
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="/#projects" class="dark:hover:text-gray-300">Projects</a>
        </li>
        <li>
          <a href="/#about" class="dark:hover:text-gray-300">About</a>
        </li>
        <li>
          <a href="/#contact" class="dark:hover:text-gray-300">Contact</a>
        </li>
        <li>
          <a href="/blog" class="dark:hover:text-gray-300">Blog</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
