<script setup>
import { ref } from 'vue'
import logoForLightMode from '@/images/astro-logo-for-light-mode.svg'

const navOpen = ref(false)

function toggle() {
  navOpen.value = !navOpen.value
}
</script>

<template>
  <header
    class="fixed bg-white top-0 left-0 w-full z-40 border-t-[14px] border-green-700"
  >
    <nav
      class="container mx-auto flex flex-wrap items-center justify-between py-6"
    >
      <div>
        <a href="/">
          <img :src="logoForLightMode.src" alt="logo" class="w-auto h-12" />
        </a>
      </div>

      <div class="block lg:hidden">
        <button @click="toggle">
          <svg
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
        </button>
      </div>
      <ul
        class="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
        :class="[navOpen ? 'block' : 'hidden']"
      >
        <li>ThmSwtch</li>
        <li>
          <a href="/#projects" class="hover:text-gray-600">Projects</a>
        </li>
        <li>
          <a href="/#projects" class="hover:text-gray-600">About</a>
        </li>
        <li>
          <a href="/#projects" class="hover:text-gray-600">Contact</a>
        </li>
        <li>
          <a href="/#projects" class="hover:text-gray-600">Blog</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
