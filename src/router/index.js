import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Stasiun from "../views/Stasiun.vue";
import Produk from "../views/Produk.vue";
import SingleProduk from "../views/SingleProduk.vue"
import Kategori from "../views/Kategori.vue";

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
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/produk/:id",
    name: "SingleProduk",
    component: SingleProduk,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;