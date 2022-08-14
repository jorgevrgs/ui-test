<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import TheFooter from "@/components/TheFooter.vue";
  import TheHeader from "@/components/TheHeader.vue";

  export default defineComponent({ components: { TheFooter, TheHeader } });
</script>

<style lang="scss" scoped></style>
