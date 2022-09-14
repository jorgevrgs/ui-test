<template>
  <NavBar />
  <header class="hero">
    <img
      class="hero__background"
      srcset="
        /assets/img/pope-francis.png      750w,
        /assets/img/pope-francis.@2x.png 1440w
      "
      sizes="(min-width: 750px) 1440px, 100vw"
      src="/assets/img/pope-francis.png"
      alt="Pope Francis"
    />
    <div class="max-centered">
      <div class="hero__featured-card">
        <FeaturedCard />
      </div>
    </div>
    <div class="hero__closing-gauge">
      <div class="closing-gauge__left">
        <span class="closing-gauge__title">closing in</span>
      </div>
      <div class="closing-gauge__right">
        <span class="closing-gauge__number">22</span>
        <span class="closing-gauge__desc">days</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import { defineComponent } from 'vue';
import FeaturedCard from './FeaturedCard.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: { NavBar, FeaturedCard },
});
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  height: 80vw;
  min-height: 35rem;
  max-height: 38rem;
  margin-bottom: 2rem;
}

.hero__background {
  position: absolute;
  left: -35vw;
  width: 160vw;
  height: 100%;
  object-fit: cover;
}

.hero__featured-card {
  position: relative;
  top: 5.5rem;
  left: 1rem;
  overflow: hidden;
  width: 55vw;
  max-height: 25rem;
}

.hero__closing-gauge {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3rem;
  background-color: var(--color-light-background);
}

.closing-gauge__left {
  position: relative;
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.25rem 0 0;
  background-color: var(--color-dark-background);
  color: var(--color-white);
  font-weight: 300;
  text-transform: uppercase;
}

.closing-gauge__left:after {
  position: absolute;
  right: -0.5rem;
  display: block;
  width: 0;
  height: 0;
  border-top: 0.25rem solid transparent;
  border-bottom: 0.25rem solid transparent;
  border-left: 0.5rem solid var(--color-dark-background);
  content: ' ';
}

.closing-gauge__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 0 0.75rem;
}

.closing-gauge__number {
  color: var(--color-dark-gray);
  font-size: 1.5rem;
  font-weight: 400;
}

.closing-gauge__desc {
  color: var(--color-dark-gray);
  font-size: 1.5rem;
  font-weight: 300;
}

@media all and (min-width: 768px) {
  .hero {
    max-height: 42rem;
  }

  .hero__background {
    top: -6.5rem;
    left: 0;
    width: 110vw;
    height: auto;
  }
}

@media all and (min-width: 1100px) {
  .hero {
    min-height: 700px;
  }

  .hero__background {
    top: -2.5rem;
    left: 0;
    width: 100vw;
    height: auto;
  }

  .hero__featured-card {
    left: 0;
    width: 50%;
    min-width: 600px;
    max-height: unset;
    margin-top: 2.5rem;
  }

  .closing-gauge__left {
    padding-right: 1rem;
  }

  .closing-gauge__right {
    padding-left: 1rem;
  }

  .closing-gauge__title {
    font-size: 1.25rem;
  }

  .closing-gauge__number,
  .closing-gauge__desc {
    font-size: 2rem;
  }

  .closing-gauge__left:after {
    border-top-width: 0.33rem;
    border-bottom-width: 0.33rem;
  }
}
</style>
