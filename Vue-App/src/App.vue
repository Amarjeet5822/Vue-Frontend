    <!-- App.vue
    <script setup>
    import ComputedVue from './components/ComputedVue.vue';
    import MyRefConcept from './components/MyRefConcept.vue';
    import OnMountVue from './components/onMountVue.vue';
    import ReactiveVue from './components/ReactiveVue.vue'
import SideBarLayout from './components/SideBarLayout.vue';
    import WatchConcept from './components/WatchConcept.vue';
</script>

    <template>
      <p class="text-center text-gray-600 text-3xl">This is some content in the root component.</p>
      <OnMountVue />
      <ComputedVue />
      <ReactiveVue />
      <MyRefConcept />
      <WatchConcept />
      <SideBarLayout />
    </template> -->

    <!-- src/App.vue -->
<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar class="w-[30%]" />

    <!-- Router View (Main Content) -->
    <main class="w-[70%] h-screen overflow-y-auto p-4 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>
