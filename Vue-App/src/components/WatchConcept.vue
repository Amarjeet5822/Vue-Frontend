<script setup>
  import { ref, watch } from 'vue'
  const keyword = ref("")
  watch(keyword, (newValue) => {
    console.log("User Typed: ", newValue,)
  })
</script>
<template>
  <div>
    <h2 class="text-3xl font-bold">Watch Example</h2>
    <input v-model="keyword" class="border p-2 rounded" placeholder="write something" />
  </div>
</template>