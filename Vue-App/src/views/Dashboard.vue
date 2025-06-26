<!-- src/views/Dashboard.vue -->
<template>
  <div class="bg-gray-200 p-4">
    <h1 class="text-2xl font-bold mb-4">📊 Dashboard</h1>
    <p class="text-gray-700 mb-4" v-for="n in 30" :key="n"> {{ n }}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et unde magnam quaerat nostrum quas perferendis, incidunt earum fugit! Asperiores.</p>
  </div>
</template>
