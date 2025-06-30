<template>
  <aside
    :class="[
      'bg-gray-100 dark:bg-gray-800 p-4 transition-all duration-300 text-black dark:text-white',
      isCollapsed ? 'w-20' : 'md:w-1/4',
      'h-[30vh] md:h-screen sticky top-0'
    ]"
  >
    <!-- Collapse Button -->
    <button
      class="mb-6 text-sm text-blue-700 hover:underline"
      @click="toggleSidebar"
    >
      {{ isCollapsed ? '➡️' : '⬅️ Collapse' }}
    </button>

    <!-- Navigation Links -->
    <ul class="space-y-4">
      <!-- Home Group -->
      <li>
        <router-link
          to="/product"
          class="flex items-center gap-2 hover:text-blue-500 transition-colors"
          :class="{ 'text-blue-700 font-semibold': route.path.startsWith('/product') }"
        >
          <HomeIcon class="h-5 w-5" />
          <span>🏠</span>
          <span v-if="!isCollapsed">Product</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/single-product"
          class="flex items-center gap-2 hover:text-blue-500 transition-colors"
          :class="{ 'text-blue-700 font-semibold': route.path.startsWith('/single-product') }"
        >
          <HomeIcon class="h-5 w-5" />
          <span>📦</span>
          <span v-if="!isCollapsed">Single Product</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/user"
          class="flex items-center gap-2 hover:text-blue-500 transition-colors"
          :class="{ 'text-blue-700 font-semibold': route.path === '/user' }"
        >
          <HomeIcon class="h-5 w-5" />
          <span>👤</span>
          <span v-if="!isCollapsed">User</span>
        </router-link>
      </li>

      <!-- Dashboard Group -->
      <li>
        <router-link
          to="/dashboard/home"
          class="flex items-center gap-2 hover:text-blue-500 transition-colors"
          :class="{ 'text-blue-700 font-semibold': route.path.startsWith('/dashboard/home') }"
        >
          <ChartBarIcon class="h-5 w-5" />
          <span>📊</span>
          <span v-if="!isCollapsed">Dashboard Home</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/dashboard/user"
          class="flex items-center gap-2 hover:text-blue-500 transition-colors"
          :class="{ 'text-blue-700 font-semibold': route.path.startsWith('/dashboard/user') }"
        >
          <ChartBarIcon class="h-5 w-5" />
          <span>👥</span>
          <span v-if="!isCollapsed">Dashboard Users</span>
        </router-link>
      </li>

      <!-- Settings Group -->
      <li>
        <router-link
          to="/settings/settings"
          class="flex items-center gap-2 hover:text-blue-500 transition-colors"
          :class="{ 'text-blue-700 font-semibold': route.path.startsWith('/settings/settings') }"
        >
          <Cog6ToothIcon class="h-5 w-5" />
          <span>⚙️</span>
          <span v-if="!isCollapsed">MyRef Concept</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/settings/reactive-vue"
          class="flex items-center gap-2 hover:text-blue-500 transition-colors"
          :class="{ 'text-blue-700 font-semibold': route.path.startsWith('/settings/reactive-vue') }"
        >
          <Cog6ToothIcon class="h-5 w-5" />
          <span>⚛️</span>
          <span v-if="!isCollapsed">Reactive Vue</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/settings/watch-concept"
          class="flex items-center gap-2 hover:text-blue-500 transition-colors"
          :class="{ 'text-blue-700 font-semibold': route.path.startsWith('/settings/watch-concept') }"
        >
          <Cog6ToothIcon class="h-5 w-5" />
          <span>👁️</span>
          <span v-if="!isCollapsed">Watch Concept</span>
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
