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
