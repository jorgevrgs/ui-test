<template>
  <BannerTop class="w-full" />

  <main role="main">
    <!-- Start: Implementation -->
    <RouterView />
    <!-- End: Implementation -->
  </main>

  <BannerBottom class="w-full" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BannerBottom from './BannerBottom.vue';
import BannerTop from './BannerTop.vue';

export default defineComponent({ components: { BannerBottom, BannerTop } });
</script>

<style scoped>
.banner {
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-block: 1rem;
  background-color: var(--color-light-gray);
}
</style>
