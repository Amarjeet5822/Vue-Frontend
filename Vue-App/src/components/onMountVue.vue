<script setup>
  import { onMounted } from 'vue';
  onMounted(() => {
    console.log("Component is mounted and you can set anything which is getting by parent")
  })
</script>
<template>
  <div>
    <h2 class="text-3xl font-bold"> onMounted Example</h2>
    <p>Please check the console log when component loads!</p>
  </div>
</template>