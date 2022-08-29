import { defineStore } from 'pinia';
import { getCelebrities } from '../services';
import type { BaseState, Celebrity } from '../types';

export const useCelebritiesStore = defineStore('celebrities', {
  state: (): BaseState<Celebrity[]> => ({
    data: [],
    isLoading: true,
    errorMessages: [],
  }),

  getters: {
    featuredCelebrity: (state) => {
      return state.data[0];
    },

    otherCelebrities: (state) => {
      return state.data.slice(1);
    },
  },

  actions: {
    async fetchCelebrities() {
      try {
        const celebrities = await getCelebrities();

        this.data = celebrities;
      } catch (error) {
        if (error instanceof Error) {
          this.errorMessages.push(error.message);
        }
      } finally {
        this.isLoading = false;
      }
    },
  },
});
