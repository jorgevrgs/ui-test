<template>
  <CelebritiesList :celebrities="celebrities" />
</template>

<script lang="ts">
import CelebritiesList from '@/components/CelebritiesList.vue';
import { useCelebritiesStore } from '@/stores/celebrities.store';
import { defineComponent } from 'vue';

const celebritiesStore = useCelebritiesStore();

export default defineComponent({
  mounted() {
    celebritiesStore.fetchCelebrities();
  },
  computed: {
    celebrities() {
      return celebritiesStore.data;
    },
    isLoading() {
      return celebritiesStore.isLoading;
    },
    errors() {
      return celebritiesStore.errorMessages;
    },
  },
  components: { CelebritiesList },
});
</script>

<style lang="scss" scoped></style>
