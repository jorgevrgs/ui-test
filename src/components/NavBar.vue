<template>
  <button
    aria-label="Open Navigation Menu"
    role="button"
    @click="toggleNavBar"
    class="z-20"
  >
    <HamburgerIcon />
  </button>

  <nav
    class="flex justify-center items-start content-center absolute top-0 left-0 right-0 bottom-0 z-10 w-screen h-screen bg-black pt-16 opacity-90"
    :class="{ hidden: !isMenuOpen }"
  >
    <ul class="flex flex-col gap-12">
      <li v-for="(navLink, i) in navLinks" :key="i">
        <a :href="navLink.href" class="text-3xl">
          {{ navLink.text }}
        </a>
      </li>

      <li>
        <form>
          <input aria-label="search" type="text" autocomplete="off" />
          <button alt="Search" type="submit">
            <SearchIcon />
          </button>
        </form>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import HamburgerIcon from '@/components/icons/HamburgerIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    isMenuOpen: false,
    navLinks: [
      {
        text: 'Past Trials',
        href: '#',
      },
      {
        text: 'How It Works',
        href: '#',
      },
      {
        text: 'Login / Sign Up',
        href: '#',
      },
    ],
  }),
  components: { HamburgerIcon, SearchIcon },
  methods: {
    toggleNavBar() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
</script>

<style scoped></style>
