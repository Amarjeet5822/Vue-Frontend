<!-- src/views/Settings.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold">⚙️ Settings</h1>
    <nav class="flex gap-4 mb-4">
      <router-link to="settings/settings">Settings</router-link>
      <router-link to="settings/reactive-vue">Reactive Vue</router-link>
      <router-link to="settings/watch-concept">Watch Concept</router-link>
    </nav>
    <router-view />
  </div>
</template>
