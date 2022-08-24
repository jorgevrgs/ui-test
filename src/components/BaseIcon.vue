<template>
  <img :src="assetFile" :alt="alt" :width="width" :height="height" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
  },
  computed: {
    srcset() {
      return `${this.src} 1x, ${this.src} 2x`;
    },
    assetFile() {
      return new URL(`/icons/${this.src}`, import.meta.url).href;
    },
  },
});
</script>

<style></style>
