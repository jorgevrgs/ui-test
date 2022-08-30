<template>
  <BaseIcon
    name="search"
    alt="Search"
    width="36"
    height="36"
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
