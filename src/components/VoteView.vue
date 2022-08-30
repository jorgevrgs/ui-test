<template>
  <div className="flex justify-center my-8">
    <button :class="positiveVoteClasses" @click="setPositiveVote">
      <BaseIcon name="thumbs-up" width="16" height="16" />
    </button>

    <button :class="negativeVoteClasses" @click="setNegativeVote">
      <BaseIcon name="thumbs-down" width="16" height="16" />
    </button>

    <button class="border-white border-2 h-8 px-8" :disabled="isButtonDisabled">
      Vote Now
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VoteState } from '../constants';
import BaseIcon from './BaseIcon.vue';

export default defineComponent({
  data() {
    return {
      vote: VoteState.neutral,
      baseClasses: ['flex', 'items-center', 'justify-center', 'w-8', 'mr-4'],
    };
  },
  components: { BaseIcon },
  computed: {
    positiveVoteClasses(): string[] {
      const classes = [...this.baseClasses, 'bg-green-positive'];
      if (this.vote === VoteState.positive) {
        classes.push('border-white', 'border-2');
      } else {
        classes.push('border-transparent');
      }

      return classes;
    },
    negativeVoteClasses(): string[] {
      const classes = [...this.baseClasses, 'bg-yellow-negative'];
      if (this.vote === VoteState.negative) {
        classes.push('border-white', 'border-2');
      } else {
        classes.push('border-transparent');
      }

      return classes;
    },
    isButtonDisabled(): boolean {
      return this.vote === VoteState.neutral;
    },
  },
  methods: {
    setPositiveVote() {
      if (this.vote !== VoteState.positive) {
        this.vote = VoteState.positive;
      } else {
        this.vote = VoteState.neutral;
      }

      this.$emit('set-positive');
    },
    setNegativeVote() {
      if (this.vote !== VoteState.negative) {
        this.vote = VoteState.negative;
      } else {
        this.vote = VoteState.neutral;
      }

      this.$emit('set-negative');
    },
  },
});
</script>

<style></style>
