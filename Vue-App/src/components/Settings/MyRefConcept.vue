<template>
  <div class="p-4  bg-gray-100">
    <p class="text-3xl font-bold">Ref Example</p>
    <p>Count : {{ count }}</p>
    <p>isLoggedIn: {{ isLoggedIn }}</p>
    <h2>Name : {{ nameInp }}</h2>
    <p>User.name : {{ user.name }}</p>
    <p>User.age : {{ user.age }}</p>
    <ol class="list-decimal">
      <li v-for="(fruit, index) in fruits" :key="index">
        {{ fruit }}
      </li>
    </ol>
    <button @click="increment" class="bg-blue-500 text-white px-4 py-2 rounded 
         hover:bg-blue-600 active:scale-95 
         transition duration-200 ease-in-out">Increment</button>
    <input placeholder="Enter you name here"
      class="p-2 ml-2 w-96 border-2 border-gray-300 hover:border-gray-500 outline-none rounded-lg" v-model="nameInp">

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const count = ref(0);
const nameInp = ref(null);
const isLoggedIn = ref(false);
const user = ref({
  name: "Amarjeet G",
  age: 25
});
const fruits = ref(["mango", "orange", "banana"]);
const increment = () => count.value++;
onMounted(() => {
  nameInp.value?.focus()
})
</script>
