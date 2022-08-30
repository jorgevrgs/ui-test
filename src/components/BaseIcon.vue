<template>
  <img
    :src="assetFile"
    :alt="label"
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
    name: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
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
      return new URL(`/icons/${this.name}.svg`, import.meta.url).href;
    },
    label() {
      return `${this.alt || this.name} icon`;
    },
  },
});
</script>

<style></style>
