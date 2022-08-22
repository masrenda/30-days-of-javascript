import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../views/ListView.vue"),
    },
    {
      path: "/introduction",
      name: "introduction",
      component: () => import("../views/Contents/Introduction/Index.vue"),
    },
    {
      path: "/datatypes",
      name: "datatypes",
      component: () => import("../views/Contents/Data Types/Index.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
