<template>
  <img
    :src="assetFile"
    :alt="alt"
    :width="width"
    :height="height"
    role="img"
    :aria-label="label"
    v-bind="$attrs"
  />
  <span class="hidden">{{ label }}</span>
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
      type: String,
      default: '24',
    },
    height: {
      type: String,
      default: '24',
    },
  },
  computed: {
    assetFile() {
      return new URL(`/icons/${this.src}`, import.meta.url).href;
    },
    label() {
      return `${this.alt} icon`;
    },
  },
});
</script>

<style></style>
