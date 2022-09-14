<template>
  <aside class="banner banner-top" role="doc-tip" aria-label="Speak Out">
    <div class="banner__left">
      <span class="banner__hairline">Speak out. Be heard.</span>
      <span class="banner__title">Be counted</span>
    </div>
    <div class="banner__right">
      <p class="banner__text">
        Rule of Thumb is a crowd sourced court of public opinion where anyone
        and everyone can speak out and speak freely. It’s easy: You share your
        opinion, we analyze and put the data in a public report.
      </p>
    </div>
    <button class="icon-button" aria-label="close">
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd">
          <path d="M1 19L19 1M1 1l18 18" />
        </g>
      </svg>
    </button>
  </aside>
  <main role="main">
    <!-- Start: Implementation -->
    <RouterView />
    <!-- End: Implementation -->
  </main>

  <BannerBottom />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BannerBottom from "./BannerBottom.vue";

export default defineComponent({ components: { BannerBottom } });
</script>

<style>
.banner {
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  background-color: var(--color-light-gray);
}

.banner__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  opacity: 0.2;
  pointer-events: none;
}

.banner-top .banner__left {
  flex-basis: 40%;
  padding-right: 1rem;
}

.banner-top .banner__left > .banner__hairline {
  color: var(--color-dark-gray);
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: -0.07rem;
}

.banner-top .banner__left > .banner__title {
  display: block;
  color: var(--color-dark-gray);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.05rem;
}

.banner-top .banner__right {
  flex-basis: 60%;
}

.banner-top .banner__text {
  margin: 0;
  color: var(--color-dark-gray);
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: -0.05rem;
}

.banner-bottom {
  flex-direction: column;
  padding: 1rem 3rem;
  margin-top: 2rem;
}

.banner-bottom .banner__heading {
  position: relative;
  margin: 0 0 1rem;
  color: var(--color-dark-gray);
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
}

.banner-bottom .banner__right {
  width: 100%;
}

.banner-bottom .banner__cta {
  position: relative;
  display: block;
  width: 100%;
  padding: 1rem 0;
  border: 2px solid var(--color-darker-background);
  background: transparent;
  color: var(--color-darker-gray);
  font-size: 1.5rem;
}

.banner-top .icon-button {
  display: none;
}

@media all and (min-width: 500px) {
  .banner-top .banner__left {
    flex-basis: 30%;
  }

  .banner-top .banner__right {
    flex-basis: 70%;
  }
}

@media all and (min-width: 768px) {
  .banner-top .banner__left {
    flex-basis: 20%;
  }

  .banner-top .banner__right {
    flex-basis: 80%;
  }

  .banner-bottom {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .banner-bottom .banner__background {
    top: -230%;
  }

  .banner-bottom .banner__right {
    width: auto;
  }

  .banner-bottom .banner__heading {
    margin-bottom: 0;
    font-size: 1.5rem;
  }

  .banner-bottom .banner__cta {
    width: 16rem;
  }
}

@media all and (min-width: 1100px) {
  .banner-top .banner__text,
  .banner-top .banner__left > .banner__hairline {
    font-size: 1rem;
  }

  .banner-top .banner__left > .banner__title {
    font-size: 1.5rem;
    letter-spacing: 0;
  }

  .banner-top .icon-button {
    display: block;
    margin-left: 2rem;
  }

  .banner-bottom .banner__cta {
    width: 20rem;
  }
}
</style>
