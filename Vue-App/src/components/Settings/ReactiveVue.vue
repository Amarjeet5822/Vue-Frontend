<script setup>
import { reactive, watch } from 'vue';
const user = reactive({
  name: "",
  email: "",
});

const fruits = reactive({
  list: ["banana", "orange", "mango"],
  name: ""
});
const addFruits = (value) => {
  fruits.list.push(value);
  fruits.name = "";
}
const state = reactive({
  count : 0
});
watch(() => state.count, (newVal, oldVal) => {
  console.log(`Count changed ${oldVal} to ${newVal}`)
})
</script>
<template>
  <div>
    <p class="text-3xl font-bold">Reactive Example</p>
    <div class="flex flex-col gap-2 pl-4">
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <div>
        <p>Count: {{ state.count }}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded 
         hover:bg-blue-600 active:scale-95 
         transition duration-200 ease-in-out" @click="state.count++">Increment</button>
      </div>
      <input class="p-2 ml-2 w-96 border-2 border-gray-100 hover:border-gray-300 outline-none rounded-lg"
      placeholder="Enter Your Name here" v-model="user.name">
      <input class="p-2 ml-2 w-96 border-2 border-gray-100 hover:border-gray-300 outline-none rounded-lg"
        placeholder="Enter Your Email here" v-model="user.email">
    </div>
    <div>
      <ol class="list-decimal" v-for="(item, index) in fruits?.list" :key="index"> 
        <li>{{ item }}</li>
      </ol>
      <input class="p-2 ml-2 w-96 border-2 border-gray-100 hover:border-gray-300 outline-none rounded-lg"
        placeholder="Enter Your Email here" v-model="fruits.name">
      <button class="bg-blue-500 text-white px-4 py-2 rounded 
         hover:bg-blue-600 active:scale-95 
         transition duration-200 ease-in-out" @click="() => addFruits(fruits.name)">Add Your Fruit</button>
    </div>
  </div>
</template>