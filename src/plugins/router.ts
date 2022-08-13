import { createRouter, createWebHistory, RouterOptions } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

const routes: RouterOptions["routes"] = [
  {
    path: "/",
    name: "IndexPage",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "IndexPage",
        component: () => import("@/pages/Index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
