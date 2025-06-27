<template>
  <aside
  :class="[
    'bg-gray-100 dark:bg-gray-800 p-4 transition-all duration-300',
    isCollapsed ? 'w-20' : 'md:w-1/3',
    'h-[30vh] md:h-screen sticky top-0'
  ]"
>
    <button class="mb-6 text-sm text-blue-500 hover:underline" @click="toggleSidebar">
      {{ isCollapsed ? '➡️' : '⬅️ Collapse' }}
    </button>
    <ul class="space-y-4">
      <li>
        <router-link to="/" class="flex items-center gap-2"
          :class="{ 'text-blue-600 font-semibold': route.path === '/' }">
          <span>🏠</span>
          <HomeIcon class="h-5 w-5" />
          <span v-if="!isCollapsed">Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard" class="flex items-center gap-2"
          :class="{ 'text-blue-600 font-semibold': route.path === '/dashboard' }">
          <ChartBarIcon class="h-5 w-5" />
          <span>📊</span>
          <span v-if="!isCollapsed">Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/settings" class="flex items-center gap-2"
          :class="{ 'text-blue-600 font-semibold': route.path === '/settings' }">
          <span>⚙️</span>
          <Cog6ToothIcon class="h-5 w-5" />
          <span v-if="!isCollapsed">Settings</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { HomeIcon, Cog6ToothIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
const isCollapsed = ref(false)
const route = useRoute()

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>