<template>
  <VoteNow />

  <VoteBar
    :positive-percentage="positivePercentage.toFixed(0)"
    :negative-percentage="negativePercentage.toFixed(0)"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import VoteBar from './VoteBar.vue';
import VoteNow from './VoteNow.vue';

export default defineComponent({
  props: {
    celebrityId: {
      type: String as PropType<string>,
      required: true,
    },
    positivePercentage: {
      type: Number as PropType<number>,
      required: true,
      default: 0,
    },
    negativePercentage: {
      type: Number as PropType<number>,
      required: true,
      default: 0,
    },
  },
  components: { VoteBar, VoteNow },
});
</script>

<style></style>
