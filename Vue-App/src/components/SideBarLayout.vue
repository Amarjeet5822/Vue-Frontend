<!-- SidebarLayout.vue -->
<template>
  <div class="flex h-screen">
    <!-- Sidebar (Sticky Left 30%) -->
    <aside class="w-[30%] bg-gray-50 p-4 sticky top-0 h-screen">
      <h2 class="text-xl font-bold mb-4">📌 Sidebar</h2>
      <ul class="space-y-2">
        <li class="hover:underline cursor-pointer">Home</li>
        <li class="hover:underline cursor-pointer">Dashboard</li>
        <li class="hover:underline cursor-pointer">Settings</li>
      </ul>
    </aside>

    <!-- Main Content (Scrollable Right 70%) -->
    <main class="w-[70%] overflow-y-auto h-screen p-4 bg-white">
      <h1 class="text-2xl font-bold mb-4">Main Content Area</h1>
      <div class="space-y-6">
        <p v-for="n in 50" :key="n">
          {{ n }}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique.
        </p>
      </div>
    </main>
  </div>
</template>
