<template>
  <h2 class="text-3xl font-bold">Hello world!</h2>
  <p class="text-xl">This is a simple Vue app.</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCelebritiesStore } from '../stores/celebrities.store';

const celebritiesStore = useCelebritiesStore();

export default defineComponent({
  mounted() {
    celebritiesStore.fetchCelebrities();
  },
});
</script>

<style lang="scss" scoped></style>
