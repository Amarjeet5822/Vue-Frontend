    <!-- App.vue -->
    <script setup>
    import ComputedVue from './components/ComputedVue.vue';
    import MyRefConcept from './components/MyRefConcept.vue';
    import OnMountVue from './components/onMountVue.vue';
    import ReactiveVue from './components/ReactiveVue.vue'
    import WatchConcept from './components/WatchConcept.vue';
</script>

    <template>
      <p class="text-center text-gray-600 text-3xl">This is some content in the root component.</p>
      <ComputedVue />
      <ReactiveVue />
      <MyRefConcept />
      <WatchConcept />
      <OnMountVue />
    </template>