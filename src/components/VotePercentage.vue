<template>
  <div
    :class="[
      'flex',
      'items-center',
      'justify-center',
      'text-lg',
      'font-bold',
      'h-12',
      'py-2',
      'px-4',
      'text-white',
      `${bgColor}/80`,
    ]"
    :aria-label="ariaLabel"
    :style="{ width: `${roundedValue}%`, minWidth: '30%' }"
  >
    <BaseIcon :name="iconName" :alt="ariaLabel" width="16" height="16" />
    <span className="ml-2 text-base font-xs">{{ absValue }} %</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BaseIcon from './BaseIcon.vue';

export default defineComponent({
  props: {
    positive: {
      type: String as PropType<string>,
      default: '0',
    },
    negative: {
      type: String as PropType<string>,
      default: '0',
    },
  },
  computed: {
    value() {
      return Number(this.positive) - Number(this.negative);
    },
    isPositive() {
      return this.value > 0;
    },
    ariaLabel() {
      return this.isPositive ? 'thumbs up' : 'thumbs down';
    },
    bgColor() {
      return this.isPositive ? 'bg-green-positive' : 'bg-yellow-negative';
    },
    iconName() {
      return this.isPositive ? 'thumbs-up' : 'thumbs-down';
    },
    absValue() {
      return this.roundValue(Math.abs(this.value), 2);
    },
    roundedValue() {
      return this.roundValue(this.value, 0);
    },
  },
  methods: {
    roundValue(value: number, precision: number = 0) {
      const factor = Math.pow(10, precision);
      return Math.round(value * factor) / factor;
    },
  },
  components: { BaseIcon },
});
</script>

<style></style>
