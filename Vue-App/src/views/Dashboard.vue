<template>
  <div>
    <h1 class="text-2xl font-bold">📊 Dashboard</h1>
    <nav class="flex gap-4 mb-4">
      <router-link to="/dashboard/home">home</router-link>
      <router-link to="/dashboard/settings">settings</router-link>
      <router-link to="/dashboard/user">user</router-link>
    </nav>
    <router-view />
  </div>
</template>
