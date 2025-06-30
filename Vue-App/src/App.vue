<template>
  <div class="flex flex-col md:flex-row h-screen">
    <div class="flex h-screen">
      <!-- Sidebar -->
      <SideBar class="h-full" />

      <!-- Main content -->
      <main class="w-full overflow-y-auto p-6 bg-white dark:bg-gray-900 text-black dark:text-white">
        <div class="flex justify-end">
          <button
            @click="isDark = !isDark"
            class="mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {{ isDark ? '☀️ Light Mode' : '🌙 Dark Mode' }}
          </button>
        </div>

        <!-- Router View -->
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import SideBar from './components/SideBar.vue'

// Dark mode state
const isDark = ref(false)

// React to theme changes and persist to localStorage
watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('isDark', JSON.stringify(true))
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('isDark', JSON.stringify(false))
  }
})

// On mount, load saved theme from localStorage
onMounted(() => {
  const stored = localStorage.getItem('isDark')
  isDark.value = stored ? JSON.parse(stored) : false
})
</script>
