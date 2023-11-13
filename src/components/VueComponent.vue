<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function resetCounter() {
  count.value = 0
}
</script>

<template>
  <div>
    <div>Count: {{ count }}</div>
    <div class="flex text-base gap-4 mt-2">
      <button
        @click="increment"
        class="bg-green-500 text-white rounded px-2 py-2"
      >
        Increment
      </button>

      <button
        @click="resetCounter"
        class="bg-green-500 text-white rounded px-2 py-2"
      >
        Reset
      </button>
    </div>
  </div>
</template>
