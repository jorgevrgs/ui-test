<template>
  <section className="flex flex-col">
    <h2 className="text-4xl my-8 w-full">Previous Rulings</h2>

    <div className="grid grid-flow-col gap-4 overflow-x-auto">
      <CelebrityCard
        v-for="celebrity in celebrities"
        :celebrity="celebrity"
        :key="celebrity.id"
      />
    </div>
  </section>
</template>

<script lang="ts">
import type { Celebrity } from '@/types';
import { defineComponent, PropType } from 'vue';
import CelebrityCard from './CelebrityCard.vue';

export default defineComponent({
  props: {
    celebrities: {
      type: Array as PropType<Celebrity[]>,
      required: true,
      default: () => [],
    },
  },
  components: {
    CelebrityCard,
  },
});
</script>

<style></style>
