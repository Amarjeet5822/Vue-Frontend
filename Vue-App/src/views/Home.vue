<template>
  <div>
    <h1 class="text-2xl font-bold">📊 Home</h1>
    <nav class="flex gap-4 mb-4">
      <router-link to="/product">Product</router-link>
      <router-link to="/single-product">Single Product</router-link>
      <router-link to="/user">User</router-link>
    </nav>
    <router-view />
  </div>
</template>
