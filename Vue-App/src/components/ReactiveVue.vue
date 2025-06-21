<script setup>
  import { reactive } from 'vue';
  const user = reactive({
    name: "Amarjeet",
    age: 24
  })
</script>
<template>
  <div>
    <p class="text-3xl font-bold">Reactive Example</p>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
  </div>
</template>