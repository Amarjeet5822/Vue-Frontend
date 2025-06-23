<script setup>
  import { ref, computed, reactive } from 'vue';
  const price = ref(100)
  const tax = ref(18)
  const user = reactive({
  firstName: 'Amar',
  lastName: 'Gupta'
  })
  const firstName = ref("Amar")
  const lastName = ref("Gupta")
  const fullName = computed(() => `${user.firstName} ${user.lastName}`)
  const totalPrice = computed(() => {
    return  price.value + (price.value * tax.value /100)
  })
</script>
<template>
  <div>
    <p class="text-3xl font-bold"> Computed Example</p>
    <p>Price: Rs.{{ price }}</p>
    <p>Tax: {{ tax }}%</p>
    <p>Total Price: Rs. {{ totalPrice }}</p>
    <p>fisrtName : {{ firstName }} and lastName : {{ lastName }}</p>
    <input v-model="fullName">
  </div>
</template>