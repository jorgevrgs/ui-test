<template>
  <h2 class="text-3xl font-bold">Hello world!</h2>
  <p class="text-xl">This is a simple Vue app.</p>
  <CelebritiesList :celebrities="celebrities" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CelebritiesList from '../components/CelebritiesList.vue';
import { useCelebritiesStore } from '../stores/celebrities.store';

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
