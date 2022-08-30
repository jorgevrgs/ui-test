<template>
  <BaseIcon
    name="twitter"
    alt="Follow us in Twitter"
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
