<template>
  <article
    class="flex flex-col items-center px-4 text-white relative aspect-square w-96"
  >
    <CelebrityImage :name="celebrity.name" :picture="celebrity.picture" />

    <div class="z-10 p-12">
      <h3 class="text-2xl font-bold text-white line-clamp-1 mb-4">
        {{ celebrity.name }}
      </h3>
      <p class="text-lg line-clamp-3">{{ celebrity.description }}</p>

      <p class="text-right text-sm mt-4 w-full">
        {{ `${getTimeAgo(celebrity.lastUpdated)} in ${celebrity.category}` }}
      </p>

      <VoteSection
        :celebrity-id="celebrity.id"
        :negative-percentage="negativePercentage"
        :positive-percentage="positivePercentage"
      />
    </div>
  </article>
</template>

<script lang="ts">
import type { Celebrity } from '@/types';
import { getTimeAgo } from '@/utils/dates';
import { defineComponent, PropType } from 'vue';
import VeredictView from '../votes/VoteBar.vue';
import VoteSection from '../votes/VoteSection.vue';
import CelebrityImage from './CelebrityImage.vue';

export default defineComponent({
  props: {
    celebrity: {
      type: Object as PropType<Celebrity>,
      required: true,
    },
  },
  computed: {
    totalVotes() {
      return this.celebrity.votes.positive + this.celebrity.votes.negative;
    },
    positivePercentage() {
      return (this.celebrity.votes.positive / this.totalVotes) * 100;
    },
    negativePercentage() {
      return (this.celebrity.votes.negative / this.totalVotes) * 100;
    },
  },
  components: { VeredictView, CelebrityImage, VoteSection },
  methods: {
    getTimeAgo(date: Date) {
      return getTimeAgo(date);
    },
  },
});
</script>
