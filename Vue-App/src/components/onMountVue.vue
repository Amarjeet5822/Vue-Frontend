<template>
  <div>
    <h2 class="text-3xl font-bold"> onMounted Example</h2>
    <p>Please check the console log when component loads!</p>
    <input ref="inputRef" placeholder="Enter your name">
    <p class="ml-5">{{ inputRef.value }}</p>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  const inputRef = ref("");
  onMounted(() => {
    console.log("Component is mounted and you can set anything which is getting by parent")
    inputRef.value.focus()
  })

  
</script>
