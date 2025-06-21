<script setup>
  import { ref, computed } from 'vue';
  const price = ref(100)
  const tax = ref(18)

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
  </div>
</template>