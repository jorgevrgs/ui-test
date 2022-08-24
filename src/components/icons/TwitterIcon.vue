<template>
  <base-icon
    src="twitter.svg"
    alt="Twitter"
    width="26"
    height="23"
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
