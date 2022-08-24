<template>
  <BaseIcon
    src="facebook.svg"
    alt="Follow us in Facebook"
    width="24"
    height="24"
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
