<template>
  <base-icon
    src="hamburger.svg"
    alt="Hamburger"
    width="25"
    height="20"
    class="text-gray-900 hover:decoration-solid"
  />
</template>

<script lang="ts">
import BaseIcon from '@/components/BaseIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    BaseIcon,
  },
});
</script>
