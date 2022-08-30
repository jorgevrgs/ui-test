<template>
  <div className="flex w-full">
    <VotePercentage :positive="positivePercentage" />
    <VotePercentage :negative="negativePercentage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import VotePercentage from './VotePercentage.vue';

export default defineComponent({
  props: {
    positivePercentage: {
      type: String as PropType<string>,
      required: true,
      default: 0,
    },
    negativePercentage: {
      type: String as PropType<string>,
      required: true,
      default: 0,
    },
  },
  components: { VotePercentage },
});
</script>
