<script setup>
import { ref } from "vue";
const count = ref(0);
const nameInp = ref("Ram");
const increment = () => count.value++;

</script>
<template>
  <div class="p-4 text-center bg-gray-100">
    <p class="text-3xl font-bold">Ref Example</p>
    <p>Count : {{ count }}</p>
    <button @click="increment" class="bg-blue-200 text-white px-4 py-2 rounded">Increment</button>
  </div>
  <div>
    <h2>Name : {{ nameInp }}</h2>
  </div>
</template>