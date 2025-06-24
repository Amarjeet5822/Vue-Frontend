<script setup>
import { ref, computed, reactive } from 'vue';
const price = ref(100)
const tax = ref(18)
const user = reactive({
  firstName: 'Amar',
  lastName: 'Gupta'
})
const todos = ref([
  { id: 1, text: "Learn Vue", done: true },
  { id: 2, text: "Do Homework", done: true }
])
const completedTodos = computed(() => todos.value.filter(todo => todo.done))

const firstName = ref("Amar")
const lastName = ref("Gupta")
const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (val) => {
    const names = val.split(" ")
    firstName.value = names[0]
    lastName.value = names[1] || ''
  }
})
const totalPrice = computed(() => {
  return price.value + (price.value * tax.value / 100)
})
const message = ref("");
const remainingChars = computed(() => 50 - message.value.length)
</script>
<template>
  <div>
    <ul>
      <li v-for="todo in completedTodos" :key="todo.id">{{ todo.text }}</li>
    </ul>

    <hr>
    <input v-model="message" maxlength="50" placeholder="Type here..." />
    <p>Remaining: {{ remainingChars }}</p>
    <p>{{ message }}</p>
    <p class="text-3xl font-bold"> Computed Example</p>
    <p>Price: Rs.{{ price }}</p>
    <p>Tax: {{ tax }}%</p>
    <p>Total Price: Rs. {{ totalPrice }}</p>
    <p>fisrtName : {{ firstName }} and lastName : {{ lastName }}</p>
    <input v-model="fullName">
  </div>
</template>