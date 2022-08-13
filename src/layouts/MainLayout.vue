<template>
  <main>
    <header>Header</header>
    <RouterView />
    <TheFooter />
  </main>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import TheFooter from "../components/TheFooter.vue";

  export default defineComponent({ components: { TheFooter } });
</script>

<style lang="scss" scoped></style>
