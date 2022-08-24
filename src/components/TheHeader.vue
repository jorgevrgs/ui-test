<template>
  <header class="bg-black text-white flex justify-between px-4 relative">
    <h1 class="text-xl font-normal leading-10">Rule of thumb</h1>

    <NavBar />
  </header>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: { NavBar },
});
</script>

<style scoped></style>
