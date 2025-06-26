<!-- src/components/Sidebar.vue -->
<template>
  <aside class="bg-gray-100 h-screen sticky top-0 p-4">
    <h2 class="text-xl font-bold mb-6">📌 Sidebar</h2>
    <ul class="space-y-4">
      <li>
        <router-link
          to="/"
          class="hover:underline"
          :class="{ 'text-blue-600 font-semibold': $route.path === '/' }"
        >🏠 Home</router-link>
      </li>
      <li>
        <router-link
          to="/dashboard"
          class="hover:underline"
          :class="{ 'text-blue-600 font-semibold': $route.path === '/dashboard' }"
        >📊 Dashboard</router-link>
      </li>
      <li>
        <router-link
          to="/settings"
          class="hover:underline"
          :class="{ 'text-blue-600 font-semibold': $route.path === '/settings' }"
        >⚙️ Settings</router-link>
      </li>
    </ul>
  </aside>
</template>
