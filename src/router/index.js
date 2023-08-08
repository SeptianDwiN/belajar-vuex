import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Stasiun from "../views/Stasiun.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "User",
    component: User,
  },
  {
    path: "/stasiun",
    name: "Stasiun",
    component: Stasiun,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;