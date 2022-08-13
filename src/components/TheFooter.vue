<template>
  <footer
    class="flex items-end justify-between pt-0 px-4 pb-12 border-t-2 border-dotted border-gray-1200 md:py-12"
  >
    <div>
      <ul class="md:flex">
        <li
          v-for="footerLink in footerLinks"
          :href="footerLink.href"
          class="text-xl py-2 px-0 md:mr-8 md:text-base md:p-0"
        >
          <a href="footerLink.href" class="text-gray-900">{{
            footerLink.text
          }}</a>
        </li>
      </ul>
    </div>
    <div class="md:flex md:items-center">
      <span class="md:mr-4 md:text-sm">Follow us</span>
      <ul class="flex mt-4">
        <li
          v-for="socialLink in socialLinks"
          :key="socialLink.text"
          class="mr-4 md:mr-8 md:text-base md:p-0"
        >
          <a
            :href="socialLink.href"
            class="text-gray-900 hover:decoration-solid"
          >
            <component :is="socialLink.component" aria-hidden="true" />
            <span class="hidden">{{ socialLink.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Facebook from "@/components/Facebook.vue";
  import Twitter from "@/components/Twitter.vue";

  export default defineComponent({
    data: () => ({
      footerLinks: [
        {
          text: "Terms and Conditions",
          href: "#",
        },
        {
          text: "Privacy Policy",
          href: "#",
        },
        {
          text: "Contact Us",
          href: "#",
        },
      ],
    }),
    computed: {
      socialLinks() {
        return [
          {
            text: "Facebook",
            href: "#",
            component: Facebook,
          },
          {
            text: "Twitter",
            href: "#",
            component: Twitter,
          },
        ];
      },
    },
  });
</script>

<style scoped></style>
