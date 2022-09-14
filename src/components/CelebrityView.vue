<template>
  <article
    class="flex flex-col items-center px-4 text-white relative aspect-square"
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

      <VoteView :celebrity-id="celebrity.id" />
    </div>

    <div class="absolute inset-x-0 bottom-0">
      <VeredictView
        :positive-percentage="positivePercentage.toFixed(0)"
        :negative-percentage="negativePercentage.toFixed(0)"
      />
    </div>
  </article>
</template>

<script lang="ts">
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { defineComponent, PropType } from 'vue';
import type { Celebrity } from '../types';
import CelebrityImage from './CelebrityImage.vue';
import VeredictView from './VeredictView.vue';
import VoteView from './VoteView.vue';

dayjs.extend(relativeTime);

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
  components: { VeredictView, CelebrityImage, VoteView },
  methods: {
    getTimeAgo(date: Date) {
      return dayjs(date).fromNow();
    },
  },
});
</script>

<style></style>
