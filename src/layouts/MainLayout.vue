<template>
  <TheHeader />

  <div class="max-centered">
    <TheBody />

    <TheFooter />
  </div>
</template>

<script lang="ts">
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import { defineComponent } from "vue";
import TheBody from "../components/TheBody.vue";

export default defineComponent({
  components: { TheFooter, TheHeader, TheBody },
});
</script>

<style lang="scss" scoped></style>
