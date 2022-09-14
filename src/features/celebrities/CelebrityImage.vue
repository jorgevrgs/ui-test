<template>
  <img
    v-if="imageUrl"
    :src="imageUrl"
    :alt="name"
    class="absolute inset-0 object-cover w-full h-full"
    layout="fill"
    objectFit="cover"
  />
</template>

<script lang="ts">
import { storage } from '@/plugins/firebase';
import { getDownloadURL, ref } from '@firebase/storage';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      imageUrl: '',
    };
  },
  props: {
    picture: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    this.imageUrl = await getDownloadURL(ref(storage, this.picture));
  },
});
</script>

<style></style>
