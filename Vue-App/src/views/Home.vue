<!-- src/views/Home.vue -->
<template>
  <div class="bg-gray-300 p-4">
    <h1 class="text-2xl font-bold mb-4">🏠 Home Page</h1>
    <p class=" mb-4" v-for="n in 20" :key="n"> {{ n }} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quidem minus perspiciatis deserunt minima ad earum consequatur consequuntur officiis autem.</p>
  </div>
</template>
